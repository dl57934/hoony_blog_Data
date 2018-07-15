import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import PolynomialFeatures

X = 2*np.random.rand(100, 1)
Y = 4 + 3*X + np.random.randn(100, 1)#가우시안 노이즈

def plot_learning_curves(model, X, Y):
    X_train, X_label, Y_train, y_label = train_test_split(X, Y, test_size=0.2)
    train_errors, val_errors = [], []
    for m in range(1, len(X_train)):
        model.fit(X_train[:m], Y_train[:m])
        y_train_predict = model.predict(X_train[:m])
        y_val_predict = model.predict(X_label)
        train_errors.append(mean_squared_error(Y_train[:m], y_train_predict))
        val_errors.append(mean_squared_error(y_label, y_val_predict))
    plt.plot(np.sqrt(train_errors), "r-+", linewidth=2, label="practice")
    plt.plot(np.sqrt(val_errors), "b-", linewidth=3, label="check")
    plt.show()

line_reg = LinearRegression()
plot_learning_curves(line_reg, X, Y)

# polynomial_regression = Pipeline([
#     ("poly_features", PolynomialFeatures(degree=10, include_bias=False)),
#     ("lin_reg", LinearRegression())
# ])
#
# plot_learning_curves(polynomial_regression, X, Y)