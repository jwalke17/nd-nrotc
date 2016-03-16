from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash
app = Flask(__name__)

from jinja2 import Template

@app.route("/")
def index():
    return render_template("combo.html")

'''
@app.route("/who-we-are")
def index():
    return render_template("home.html")

@app.route("/unit-staff")
def index():
    return render_template("home.html")

@app.route("/history")
def index():
    return render_template("home.html")

@app.route("/contact")
def index():
    return render_template("home.html")

@app.route("/nlw")
def index():
    return render_template("home.html")

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/")
def index():
    return render_template("home.html")
'''
    
    
if __name__ == "__main__":
    app.debug = True
    app.run()