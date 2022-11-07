from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import undetected_chromedriver.v2 as uc
import fake_useragent
import time
import json


def scraper(url: str, tag: str, sub_tag: str, identifier: dict, multiple: bool = False):
    # user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59'
    user_agent = fake_useragent.UserAgent().random
    options = webdriver.ChromeOptions()
    options.headless = True
    options.add_argument(argument=f'user-agent={user_agent}')
    # driver = webdriver.Chrome(ChromeDriverManager().install())
    # options.add_argument("start-maximised")

    driver = uc.Chrome(options=options)

    data = []

    def process(url):
        driver.get(url)
        time.sleep(10)

        soup = BeautifulSoup(driver.page_source, features="html.parser")
        driver.implicitly_wait(20)
        course_catalog = soup.find(tag, attrs=identifier)
        cards = course_catalog.find_all(sub_tag)

        for card in cards:
            try:
                title = card.find("h2").text if card.find(
                    "h2") else card.find("h3").text
                description = card.find("p").text
                link = card.find("a")["href"]
                image = card.find("img")["src"]

                data.append({
                    "title": str(title),
                    "description": str(description),
                    "image": str(image),
                    "link": "udemy.com"+str(link) if "udemy" in url else str(link)
                })
            except Exception as e:
                print(data)
                pass
    if multiple:
        for i in range(1, 5):
            url = url.replace(f"={i-1}", f"={i}")
            print(f"Processing url: {url}")
            process(url)
    else:
        process(url)

    driver.close()
    return data


### TEST ###
if __name__ == '__main__':

    inpt = input("enter platform:")

    match inpt:
        case "udacity":
            res = scraper("https://www.udacity.com/courses/all", tag="ul",
                          sub_tag="li", identifier={"data-testid": "catalog-card-list"})
            with open("./udacity.json", "w") as f:
                f.write(json.dumps(res))
        case "coursera":  # not working
            res = scraper("https://www.coursera.org/courses", tag="ul",
                          sub_tag="li", identifier={"class": "cds-9 ais-InfiniteHits-list css-0 cds-10"})
        case "udemy":
            res = scraper("https://www.udemy.com/courses/development/?p=1",
                          tag="div", sub_tag="div", identifier={"class": "course-list--container--3zXPS"}, multiple=True)
            with open("./udemy.json", "w") as f:
                f.write(json.dumps(res))
        case "skillshare":
            res = scraper("https://www.skillshare.com/en/browse?sort=popular&page=1",
                          tag="div", sub_tag="div", identifier={"class": "MuiGrid-root MuiGrid-container"})
        case default:
            print("invalid input")

    # print(res)
