from scraper import scraper
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
import flask
import json

scheduler = BackgroundScheduler()
# Run scraper every 24 hours


def job_function():
    udacity = scraper("https://www.udacity.com/courses/all", tag="ul",
                      sub_tag="li", identifier={"data-testid": "catalog-card-list"})
    with open("udacity.json", "w") as f:
        f.write(json.dumps(udacity))
    # coursera = scraper("https://www.coursera.org/courses", tag="ul",
    #                    sub_tag="li", identifier={"class": "cds-9 ais-InfiniteHits-list css-0 cds-10"})
    # with open("coursera.json", "w") as f:
    #     f.write(json.dumps(coursera))
    udemy = scraper("https://www.udemy.com/courses/development/?p=1",
                    tag="div", sub_tag="div", identifier={"class": "course-list--container--3zXPS"}, multiple=True)
    with open("udemy.json", "w") as f:
        f.write(json.dumps(udemy))
    skillshare = scraper("https://www.skillshare.com/en/browse?sort=popular&page=1",
                         tag="div", sub_tag="div", identifier={"class": "MuiGrid-root MuiGrid-container"})
    with open("skillshare.json", "w") as f:
        f.write(json.dumps(skillshare))


scheduler.add_job(func=job_function, trigger="interval", hours=24)


app = flask.Flask(__name__)


@app.route('/')
def courses():
    plat = flask.request.args.get('platform')
    match plat:
        case "udacity":
            res = json.loads(open("server/udacity.json", "r").read())
        case "udemy":
            res = json.loads(open("server/udemy.json", "r").read())
        case "skillshare":
            res = json.loads(open("server/skillshare.json", "r").read())
        case default:
            return "invalid input"
    return flask.jsonify(res)


if __name__ == '__main__':
    app.run(debug=True)
