// =====================
// INTELLIGENCE LOADER
// =====================

async function loadIntelFeed(){

    const response =
        await fetch("data/security-feed.json");

    return await response.json();

}
