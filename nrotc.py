from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash
app = Flask(__name__)

from jinja2 import Template

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/<pagename>")
def extension(pagename):
    return render_template("%s.html" % pagename)

if __name__ == "__main__":
    app.debug = True
    app.run()
