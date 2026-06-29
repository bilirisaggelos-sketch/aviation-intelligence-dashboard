// =====================
// SECURITY
// =====================

window.intelData = [];

function updateSecurityFeed() {

    const feed =
        document.getElementById("securityFeed");

    if (!feed || !window.czibData) return;

    const latest =
    window.czibData
    .filter(item => item.status === "Active")
    .sort(
        (a,b) =>
        new Date(b.issued) -
        new Date(a.issued)
    );

    feed.innerHTML =
    latest.slice(0,8).map(item => `

        <div class="card">
            <b>${item.country}</b><br>
            CZIB ${item.czib}<br>
            ${formatDate(item.issued)}
        </div>

    `).join("");

    loadIntelFeed()
.then(feedData => {

const filteredFeed =
    feedData.filter(item =>
        isAviationRelevant(item.text)
    );

window.intelData = filteredFeed;

document.getElementById("intelFeed").innerHTML =
filteredFeed.map((item,index) => `

        <div class="card feed-${item.severity}"
             onclick="showIntelEvent(${index})"
             style="cursor:pointer">

            ${item.icon} ${item.text}<br>

<small>${timeAgo(item.timestamp)} | ${item.source}</small>

        </div>

        `).join("");
updateIntelStatus();
    })
    .catch(err => {

        console.error(err);

        document.getElementById("intelFeed").innerHTML =
            "<div class='card'>Feed unavailable</div>";
        
    });

}

function showIntelEvent(index){

    const item = window.intelData[index];

    if(item.lat && item.lon){

        map.setView(
            [item.lat, item.lon],
            8
        );

        if(intelMarker){
            map.removeLayer(intelMarker);
        }

        intelMarker = L.marker(
            [item.lat, item.lon],
            { icon: alertIcon }
        ).addTo(map);

        intelMarker.bindPopup(
            item.text,
            {
                offset:[0,-35]
            }
        ).openPopup();

    }

   document.getElementById("info").innerHTML = `
    <b>${item.location}</b><br><br>

    <b>Event:</b><br>
    ${item.text}<br><br>

    <b>Source:</b><br>
    ${item.source}<br><br>

    <b>Time:</b><br>
  ${timeAgo(item.timestamp)}<br><br>

    <b>Severity:</b><br>
    ${item.severity}
`;

}

function updateIntelStatus() {

    const status =
        document.getElementById("intelStatus");

    if (!status || !window.intelData.length)
        return;

    const latest =
        window.intelData[0];

    const age =
        timeAgo(latest.timestamp);

    let color = "#22c55e";
    let label = "🟢 LIVE";

    if (age.includes("hour")) {

        color = "#f59e0b";
        label = "🟡 STALE";

    }

    if (age.includes("Yesterday") ||
        age.includes("days")) {

        color = "#ef4444";
        label = "🔴 OFFLINE";

    }

    status.style.color = color;

    status.innerHTML =
        `${label} | Last Intelligence Update: ${age}`;

}
