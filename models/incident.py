from processors.verifier import verify
from processors.scorer import calculate


class Incident:

    def __init__(self):

        self.events = []

        self.status = "UNVERIFIED"

        self.confidence = 0

    def add_event(self, event):

        self.events.append(event)

        self.confidence = calculate(self.events)

        verify(self)