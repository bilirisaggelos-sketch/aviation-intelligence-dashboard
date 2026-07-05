SOURCE_WEIGHTS = {
    "EASA": 100,
    "UKMTO": 100,
    "FAA": 100,
    "ICAO": 100,
    "Eurocontrol": 100,
    "Reuters": 85,
    "AP": 85,
    "BBC": 80,
    "ISW": 75,
    "OSINT Defender": 70,
    "Middle East Spectator": 65
}


def calculate(events):

    if not events:
        return 0

    scores = []

    for event in events:
        scores.append(
            SOURCE_WEIGHTS.get(event.source, 50)
        )

    return min(max(scores), 100)