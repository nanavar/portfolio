from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/skills")
def skill():
    return render_template("skill.html")

@app.route("/portfolio")
def iportfolio():
    return render_template("portfolio.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")
if __name__ == '__main__':
    app.run(use_reloader=True)