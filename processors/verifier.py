OFFICIAL_SOURCES = {
    "EASA",
    "UKMTO",
    "FAA",
    "ICAO",
    "Eurocontrol"
}


def verify(incident):

    sources = {
        event.source
        for event in incident.events
    }

    if sources & OFFICIAL_SOURCES:
        incident.status = "OFFICIAL"
        incident.confidence = 100

    elif len(sources) >= 3:
        incident.status = "VERIFIED"
        incident.confidence = 90

    elif len(sources) == 2:
        incident.status = "PARTIALLY VERIFIED"
        incident.confidence = 65

    else:
        incident.status = "UNVERIFIED"
        incident.confidence = 30

    return incident