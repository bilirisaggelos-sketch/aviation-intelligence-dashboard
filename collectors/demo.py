import requests


URL = "https://services.swpc.noaa.gov/products/alerts.json"


def collect():

    print("Downloading NOAA alerts...")

    response = requests.get(URL, timeout=20)
    data = response.json()

    events = []

    for item in data[:5]:

        events.append({
            "title": item.get("message", "").split("\n")[0],
            "text": item.get("message", ""),
            "source": "NOAA Space Weather",
            "severity": "warning",
            "icon": "🛰️",
            "timestamp": item.get("issue_datetime", ""),
            "location": "Global",
            "lat": None,
            "lon": None
        })

    return events


if __name__ == "__main__":
    print(collect())