from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash
app = Flask(__name__)

from jinja2 import Template

@app.route("/")
def index():
    return render_template("combo.html")

if __name__ == "__main__":
    app.debug = True
    app.run()