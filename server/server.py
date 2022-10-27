import flask
from scraper import scraper

app = flask.Flask(__name__)


@app.route('/')
def courses():
    plat = flask.request.args.get('platform')
    match plat:
        case "udacity":
            res = scraper("https://www.udacity.com/courses/all",
                          {"data-testid": "catalog-card-list"})
        case "coursera":
            res = scraper("https://www.coursera.org/courses",
                          {"class": "cds-9 ais-InfiniteHits-list css-0 cds-10"})
        case default:
            return "invalid input"
    return flask.jsonify(res)


if __name__ == '__main__':
    app.run(debug=True)
