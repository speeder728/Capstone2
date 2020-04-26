from flask import Flask
import joblib
import pickle
import pandas as pd


def create_app():
    app = Flask(__name__)


    from .views import main
    app.register_blueprint(main)

    return app