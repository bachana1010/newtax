from app.extentions import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app.log_in import login_manager


class User(db.Model, UserMixin):

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(64), nullable=False, unique=True, index=True)
    username = db.Column(db.String(64), nullable=False, unique=True, index=True)
    password_hash = db.Column(db.String(225))

    def __init__(self, email, username, password):
        self.email = email
        self.username = username
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @classmethod
    def find_by_email(cls, temp_email):
        email = cls.query.filter_by(email=temp_email).first()
        if email:
            return email


# DB Model
class BaseModel():
        id= db.Column(db.Integer, primary_key=True)

def create(self, **kwargs):
     for key, value in kwargs.items():
        setattr(self, key, value)
        self.save()



@classmethod
def read_all(cls):
        return cls.query.all()


@classmethod
def read(cls, name):
        return cls.query.filter_by(name=name).first()

def update(self,  **kwargs):
     for key, value in kwargs.items():
        setattr(self, key, value)
        self.save()

def delete(self):
        db.session.delete(self)
        db.session.commit()

def save(self):
        db.session.add(self)
        db.session.commit()

def __repr__(self):
        return f"players name {self.name}"



class Tax_type(BaseModel, db.Model):
    __tablename__ = "Tax_type"

    name = db.Column(db.String)

class Tax_payer(BaseModel, db.Model):
    __tablename__ = "Tax_payer"

    name = db.Column(db.String)
    tax_amount = db.Column(db.Integer, default = "araferi")
    tax_type = db.Column(db.Text,default="araferi")


class SmallBussines(BaseModel, db.Model):

    payer_id = db.Column(db.Integer)
    amount = db.Column(db.String)
    month = db.Column(db.String)
    tax_amount = db.Column(db.Integer)

class Property(BaseModel, db.Model):

    payer_id = db.Column(db.Integer)
    land_hectare = db.Column(db.String)
    Year = db.Column(db.String)
    City = db.Column(db.String)
    tax_amount = db.Column(db.Integer)

class property_property_base(BaseModel, db.Model):

    payer_id = db.Column(db.Integer)
    income_money = db.Column(db.String)
    property_cost = db.Column(db.String)
    year = db.Column(db.String)
    tax_amount = db.Column(db.Integer)

class vat_tax_base (BaseModel, db.Model):
    payer_id = db.Column(db.Integer)
    taxable_amount = db.Column(db.String)
    last_tax = db.Column(db.String)
    month = db.Column(db.String)
    tax_amount = db.Column(db.Integer)

class income (BaseModel, db.Model):
    payer_id = db.Column(db.Integer)
    gross_income = db.Column(db.String)
    deductions = db.Column(db.String)
    month = db.Column(db.String)
    tax_amount = db.Column(db.Integer)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


