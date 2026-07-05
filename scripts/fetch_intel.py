import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

import json

from collectors.manager import collect_all


events = collect_all()


with open("data/live-intel.json", "w", encoding="utf-8") as f:
    json.dump(events, f, indent=2)


print(f"{len(events)} event(s) written.")