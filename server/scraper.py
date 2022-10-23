from turtle import title
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time


def scraper(url: str, identifier: dict):
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    driver.get(url)

    soup = BeautifulSoup(driver.page_source, features="html.parser")

    time.sleep(5)
    course_catalog = soup.find("ul", attrs=identifier)
    cards = course_catalog.find_all("li")

    data = []

    for card in cards:
        try:
            title = card.find("h2").text
            description = card.find("p").text
            link = card.find("a")["href"]
            image = card.find("img")["src"]
            data.append({
                "title": title,
                "description": description,
                "image": image,
                "link": link
            })
        except Exception as e:
            # print(e)
            pass

    driver.close()
    return data


inpt = input("enter platform:")

match inpt:
    case "udacity":
        res = scraper("https://www.udacity.com/courses/all",
                      {"data-testid": "catalog-card-list"})
    case "coursera":
        res = scraper("https://www.coursera.org/courses",
                      {"class": "cds-9 ais-InfiniteHits-list css-0 cds-10"})
    case default:
        print("invalid input")

print(res)
