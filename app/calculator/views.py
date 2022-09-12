from flask import Blueprint, render_template, flash, request, jsonify, session
from flask_login import logout_user, login_required, current_user
from app.services.currency import currency_course
from app.models import SmallBussines, Property, \
    property_property_base, vat_tax_base, income
from app import db


calculator_blueprint = Blueprint('calculator', __name__,
                                 template_folder="templates",
                                 static_folder="templates/static")


@calculator_blueprint.route('/home', methods=['GET'])
def home():
    return render_template('home.html')


@calculator_blueprint.route('/calculator', methods=['GET'])
def calculator():
    req_pas = request.path
    templs = ["calculator.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/importTax', methods=['GET'])
def import_tax():
    req_pas = request.path

    templs = ["taximport.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/currency', methods=['POST', 'GET'])
def currency():
    currency_api = currency_course()

    return jsonify({
            'currencies': currency_api.get_specific_currencies()
        })


@calculator_blueprint.route('/welcome', methods=['GET', 'POST'])
@login_required
def welcome():
    req_pas = request.path
    templs = ["welcome.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/small_api', methods=['POST'])
def small_api():
    if request.method == "POST":
        params = request.get_json()
        print(params)
        print(current_user.id)
        user = SmallBussines(payer_id=current_user.id,
                             amount=params['tax_first_input'],
                             month=params['list_month'],
                             tax_amount=params['tax_amount_small'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            print(e)
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/property_api', methods=['POST'])
def property():
    if request.method == "POST":
        params = request.get_json()
        print(params)
        print(current_user.id)
        user = Property(payer_id=current_user.id,
                        land_hectare=params['land_input'],
                        Year=params['list_year'],
                        City=params['list_city'],
                        tax_amount=params['land_label'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            print(e)
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/Property_property_api', methods=['POST'])
def property_property():
    if request.method == "POST":
        params = request.get_json()
        print(params)
        print(current_user.id)
        user = property_property_base(payer_id=current_user.id,
                                      income_money=params['property_income_input'],
                                      property_cost=params['property_value_input'],
                                      year=params['list_year'],
                                      tax_amount=params['land_label1'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            print(e)
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/vat_tax_api', methods=['POST'])
def vat_tax():

    if request.method == "POST":
        params = request.get_json()
        print(params)
        print(current_user.id)
        user = vat_tax_base(payer_id=current_user.id,
                            taxable_amount=params['vat_tax_amount'],
                            last_tax=params['last_vat_tax'],
                            month=params['vat_month'],
                            tax_amount=params['vat_label'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            print(e)
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/income_tax_api', methods=['POST'])
def income_tax():

    if request.method == "POST":
        params = request.get_json()
        print(params)
        print(current_user.id)
        user = income(payer_id=current_user.id,
                      gross_income=params['income_gross'],
                      deductions=params['income_deductions'],
                      month=params['income_month'],
                      tax_amount=params['income_label'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            print(e)
            db.session.rollback()

    return jsonify()

@calculator_blueprint.route('/sb_list', methods=['GET', 'POST'])
def sb_list_items():
    sb_list = SmallBussines.query.all()
    return render_template('sb_list.html', sb_list=sb_list)


@calculator_blueprint.route('/property_land_list', methods=['GET', 'POST'])
def property_land_list():
    land_list = Property.query.all()
    return render_template('land_list.html', land_list=land_list)

@calculator_blueprint.route('/property_property_list', methods=['GET', 'POST'])
def property_property_list():
    property_list = property_property_base.query.all()
    return render_template('property_property_list.html', property_list=property_list)

@calculator_blueprint.route('/vat_list', methods=['GET', 'POST'])
def vat_list():
    vat_list = vat_tax_base.query.all()
    return render_template('vat_list.html', vat_list=vat_list)



@calculator_blueprint.route('/income_list', methods=['GET', 'POST'])
def income_list():
    income_list = income.query.all()
    return render_template('income_list.html', income_list=income_list)


@calculator_blueprint.route('/logout', methods=['GET'])
def logout():
    logout_user()
    flash("მომხმარებელი გამოვიდა სისტემიდან")
    req_pas = request.path
    templs = ["home.html", "base.html"]
    session["logged_in"] = False

    return render_template(templs, req_pas=req_pas)
