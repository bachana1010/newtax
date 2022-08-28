from flask import Flask
from app.config import *
from app.extentions import db
from app.log_in import login_manager


def create_app(config_file = 'config.py'):
    app = Flask(__name__)
    app.config.from_pyfile(config_file)
    register_extension(app)
    register_blouprint(app)
    login_manager.init_app(app)

    return app

login_manager.login_view = "user.login"


def register_extension(app):
    db.init_app(app)

def register_blouprint(app):
    from app.calculator.views import calculator_blueprint
    app.register_blueprint(calculator_blueprint)

    from app.login.views_login import user_blueprint
    app.register_blueprint(user_blueprint)