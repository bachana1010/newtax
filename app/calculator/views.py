from flask import Blueprint, render_template, redirect, url_for, flash,request, jsonify
from flask_login import LoginManager, logout_user, login_required
from flask_cors import CORS, cross_origin




calculator_blueprint = Blueprint('calculator',
                                 __name__,
                                 template_folder="templates",
                                 static_folder="templates/static")


@calculator_blueprint.route('/home', methods=['GET'])
def home():
    return render_template('home.html')


@calculator_blueprint.route('/calculator', methods=['GET'] )
def calculator():
    req_pas = request.path
    templs = ["calculator.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/welcome', methods=['GET', 'POST'])
@login_required
@cross_origin()

def welcome():



    return render_template("welcome.html")


@calculator_blueprint.route('/logout', methods=[ 'GET'])
def logout():
    logout_user()
    flash("მომხმარებელი გამოვიდა სისტემიდან")
    req_pas = request.path
    templs = ["home.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


