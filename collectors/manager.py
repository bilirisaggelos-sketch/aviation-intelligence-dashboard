import json

from collectors.demo import collect as noaa_collect
from collectors.official.faa import collect as faa_collect


def load_sources():

    with open("config/sources.json", "r", encoding="utf-8") as f:
        return json.load(f)


def collect_all():

    config = load_sources()

    events = []

    for source in config["official"]:

        if source["name"] == "FAA" and source["enabled"]:
            events.extend(faa_collect())

    for source in config["trusted"]:
        pass

    for source in config["osint"]:
        pass

    events.extend(noaa_collect())

    return events