# Aviation Intelligence Dashboard

An aviation-focused intelligence platform for monitoring security, geopolitical and operational events affecting civil aviation.

## Features

- Live FAA Temporary Flight Restrictions (TFR)
- NOAA Space Weather Alerts
- UKMTO Maritime Security (in progress)
- CZIB Security Advisories
- Intelligence normalization
- Event scoring and filtering
- Interactive map
- Aviation-focused dashboard

## Project Structure

```
collectors/
    official/
        faa.py
        noaa.py
        ukmto.py

    telegram/
        client.py

    trusted/

processors/
models/
scripts/
config/
data/
js/
css/
```

## Installation

```bash
git clone https://github.com/bilirisaggelos-sketch/-viation-intelligence-dashboard.git

cd -viation-intelligence-dashboard

pip install -r requirements.txt
```

## Run Intelligence Collection

```bash
python scripts/fetch_intel.py
```

## Dashboard

Serve the project locally:

```bash
python -m http.server 8000
```

Open:

```
http://localhost:8000
```

## Current Official Sources

- FAA TFR
- NOAA Space Weather

## Planned Sources

- Telegram OSINT
- UKMTO
- Reuters
- EASA
- ICAO
- EUROCONTROL

## License

Internal project – Aviation Security Research