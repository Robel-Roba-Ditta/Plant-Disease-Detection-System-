import pytest
from unittest.mock import patch, MagicMock
import numpy as np
from streamlit.testing.v1 import AppTest
import main

# Test model_prediction function
@patch('main.tf.keras.models.load_model')
@patch('main.tf.keras.utils.load_img')
@patch('main.tf.keras.utils.img_to_array')
def test_model_prediction(mock_img_to_array, mock_load_img, mock_load_model):
    # Setup mocks
    mock_model = MagicMock()
    # Simulate a prediction where index 1 has the highest probability
    mock_model.predict.return_value = np.array([[0.1, 0.9, 0.0]])
    mock_load_model.return_value = mock_model

    mock_image = MagicMock()
    mock_load_img.return_value = mock_image

    # Simulate a 128x128x3 image array
    mock_img_to_array.return_value = np.zeros((128, 128, 3))

    # Call the function
    result = main.model_prediction("dummy_path.jpg")

    # Assertions
    assert result == 1
    mock_load_model.assert_called_once_with("trained_plant_disease_model.keras")
    mock_load_img.assert_called_once_with("dummy_path.jpg", target_size=(128, 128))
    mock_img_to_array.assert_called_once_with(mock_image)
    mock_model.predict.assert_called_once()

# Test Streamlit UI rendering using AppTest
def test_home_page():
    at = AppTest.from_file("main.py")
    at.run()

    # Check default page (Home)
    assert not at.exception
    assert at.sidebar.selectbox[0].value == "Home"
    assert at.header[0].value == "PLANT DISEASE RECOGNITION SYSTEM"
    assert "Welcome to the Plant Disease Recognition System!" in at.markdown[0].value

def test_about_page():
    at = AppTest.from_file("main.py")
    at.run() # First run to initialize the app
    # Change selection to "About"
    at.sidebar.selectbox[0].set_value("About").run()

    assert not at.exception
    assert at.header[0].value == "About"
    assert "About Dataset" in at.markdown[0].value

def test_disease_recognition_page():
    at = AppTest.from_file("main.py")
    at.run() # First run to initialize the app
    # Change selection to "Disease Recognition"
    at.sidebar.selectbox[0].set_value("Disease Recognition").run()

    assert not at.exception
    assert at.header[0].value == "Disease Recognition"
    # test_image is initially None, so buttons should be present but possibly disabled
    assert len(at.button) == 2
    assert at.button[0].label == "Show Image"
    assert at.button[1].label == "Predict"
