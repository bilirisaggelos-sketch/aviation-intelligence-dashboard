// =====================
// INTELLIGENCE NORMALIZER
// =====================

function normalizeIntelEvent(raw) {

    return {

        // Stable ID (θα χρησιμοποιηθεί αργότερα για deduplication)
        id: raw.id || null,

        // Main event text
        text: raw.text,

        // Source
        source: raw.source,

        // Severity
        severity: raw.severity,

        // Icon
        icon: raw.icon,

        // Time
        timestamp: raw.time,

        // Location
        location: raw.country || "",

        // Coordinates
        lat: raw.lat,
        lon: raw.lon,

        // Keep original event
        raw: raw

    };

}
