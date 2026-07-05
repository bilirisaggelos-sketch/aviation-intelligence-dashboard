class Event:

    def __init__(self, data):

        self.id = data.get("id")

        self.title = data.get("title", "")

        self.text = data.get("text", "")

        self.source = data.get("source", "")

        self.timestamp = data.get("timestamp", "")

        self.location = data.get("location", "")

        self.severity = data.get("severity", "info")

        self.icon = data.get("icon", "ℹ️")

        self.lat = data.get("lat")

        self.lon = data.get("lon")