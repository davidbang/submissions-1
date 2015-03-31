from flask import Flask, render_template
from pymongo import Connection

conn = Connection()
db = conn['conn']


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("app.html")



if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=5000)
