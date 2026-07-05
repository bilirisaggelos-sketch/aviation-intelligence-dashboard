def is_same_incident(event1, event2):

    title1 = event1.title.lower().strip()
    title2 = event2.title.lower().strip()

    if title1 == title2:
        return True

    if event1.location and event2.location:
        if (
            event1.location.lower() ==
            event2.location.lower()
        ):
            return True

    return False