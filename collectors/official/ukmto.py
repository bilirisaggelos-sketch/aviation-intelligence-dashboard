import requests
from bs4 import BeautifulSoup


URL = "https://www.ukmto.org/recent-incidents"


def collect():

    print("Downloading UKMTO incidents...")

    response = requests.get(URL, timeout=20)

    soup = BeautifulSoup(response.text, "html.parser")

    print(soup.title)

    print(soup.prettify()[:4000])

    for script in soup.find_all("script"):
        src = script.get("src")
        if src:
            print(src)

    print(response.status_code)

    return []


if __name__ == "__main__":

    collect()