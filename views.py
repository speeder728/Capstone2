from flask import Blueprint, render_template
import pandas as pd
import joblib
import pickle
import json
import numpy as np

main = Blueprint('main', __name__)

model = joblib.load(r'C:\Users\Justin\PycharmProjects\Capstone2\gnb_model.joblib')

# Import standardized/encoded data
train = pickle.load(open(r'C:\Users\Justin\PycharmProjects\Capstone2\PyCharm Stuff\standardized_train_data.pkl', 'rb'))
test = pickle.load(open(r'C:\Users\Justin\PycharmProjects\Capstone2\PyCharm Stuff\standardized_test_data.pkl', 'rb'))
train_target = pickle.load(open(r'C:\Users\Justin\PycharmProjects\Capstone2\PyCharm Stuff\target_train.pkl', 'rb'))
test_target = pickle.load(open(r'C:\Users\Justin\PycharmProjects\Capstone2\PyCharm Stuff\target_test.pkl', 'rb'))

# Convert data to DataFrames
train = pd.DataFrame(train.toarray())
test = pd.DataFrame(test.toarray())
train_target = pd.DataFrame(train_target)
test_target = pd.DataFrame(test_target)

@main.route("/")
def index():
    return render_template('index.html')

@main.route("/logs")
def logs():
    output = json.dumps((np.array(model.predict(test.iloc[0:1])).tolist()))
    return render_template("logs.html", output = output)

@main.route("/help")
def help():
    return render_template("help.html")


