// =====================
// INTELLIGENCE FILTERS
// =====================

const aviationKeywords = [

    "missile",
    "rocket",
    "drone",
    "uav",
    "gps",
    "gnss",
    "jam",
    "jamming",
    "airspace",
    "notam",
    "airport",
    "runway",
    "military",
    "fighter",
    "surface-to-air",
    "sam",
    "closure"

];
function isAviationRelevant(text){

    if(!text) return false;

    const message = text.toLowerCase();

    return aviationKeywords.some(keyword =>
        message.includes(keyword)
    );

}
