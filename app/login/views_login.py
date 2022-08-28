from flask import Blueprint, flash, url_for, redirect, render_template, request
from flask_login import login_user

from app.login.forms import RegistrationForm, LoginForm
from app.models import User
from app import db

user_blueprint = Blueprint('user',
                           __name__,
                            template_folder="templates",
                            static_folder="templates/static"
                           )

@user_blueprint.route('/registration', methods=['GET', 'POST'])
def registration():
    req_pas = request.path
    templs = ["registration.html", "base.html"]
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email=form.email.data,
                    username=form.username.data,
                    password=form.password.data )

        db.session.add(user)
        db.session.commit()

        flash("რეგისტრაცია წარმატებით დასრულდა")
        return redirect(url_for('user.login'))



    return render_template(templs, req_pas = req_pas , form=form)


@user_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    req_pas = request.path
    print(req_pas)
    templs = ["login.html", "base.html"]

    form = LoginForm()
    if form.validate_on_submit():
        user = User.find_by_email(form.email.data)

        if user is not None and user.check_password(form.password.data):
            login_user(user)
            flash("მომხმარებელმა წარმატებით გაიარა ავტორიზაცია")

            next = request.args.get('next')

            if next is None:
                next = url_for('calculator.welcome')

            return redirect(next)
        current = request.path
        print(current)
    return render_template(templs, req_pas=req_pas, form=form)

