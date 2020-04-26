# Imports
import pandas as pd
import pickle
from sklearn.naive_bayes import GaussianNB
import joblib
import pickle

# Import standardized/encoded data
train = pickle.load(open(r'Pycharm Stuff\standardized_train_data.pkl', 'rb'))
test = pickle.load(open(r'Pycharm Stuff\standardized_test_data.pkl', 'rb'))
train_target = pickle.load(open(r'Pycharm Stuff\target_train.pkl', 'rb'))
test_target = pickle.load(open(r'Pycharm Stuff\target_test.pkl', 'rb'))

# Convert data to DataFrames
train = pd.DataFrame(train.toarray())
test = pd.DataFrame(test.toarray())
train_target = pd.DataFrame(train_target)
test_target = pd.DataFrame(test_target)

# # Train model
# gnb = GaussianNB(var_smoothing=10)
# gnb.fit(train, train_target)
#
# gnb.predict(test.iloc[0:10])
# # Export model
# joblib.dump(gnb, 'gnb_model.joblib')

