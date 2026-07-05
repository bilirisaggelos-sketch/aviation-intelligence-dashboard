import requests
from datetime import datetime

PAGE_URL = "https://tfr.faa.gov/tfr3/export/json"
API_URL = "https://tfr.faa.gov/tfrapi/exportTfrList"


def collect():

    print("Downloading FAA TFR feed...")

    session = requests.Session()

    session.headers.update({
        "User-Agent": "Mozilla/5.0"
    })

    # Δημιουργία session
    session.get(PAGE_URL, timeout=30)

    response = session.get(API_URL, timeout=30)

    response.raise_for_status()

    data = response.json()

    events = []

    for item in data:

        # Κρατάμε ΜΟΝΟ SECURITY
        if item.get("type") != "SECURITY":
            continue

        facility = item.get("facility", "")
        state = item.get("state", "")
        description = item.get("description", "")
        date = item.get("creation_date", "")

        text = (
            f"FAA SECURITY TFR\n"
            f"{description}\n"
            f"Facility: {facility}"
        )

        events.append({

            "title": "FAA SECURITY",

            "text": text,

            "source": "FAA",

            "severity": "critical",

            "icon": "🚨",

            "timestamp": date,

            "location": f"{facility} {state}".strip(),

            "lat": None,

            "lon": None

        })

    print(f"FAA SECURITY events: {len(events)}")

    return events


if __name__ == "__main__":

    result = collect()

    print(result[:5])