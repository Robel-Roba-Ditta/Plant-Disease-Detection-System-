import pytest
from unittest.mock import patch, MagicMock
import numpy as np

import sys
from unittest.mock import MagicMock

# Mock streamlit before importing main so it doesn't execute UI code
sys.modules['streamlit'] = MagicMock()

# Import the module to be tested
import main

@patch('main.tf.keras.models.load_model')
@patch('main.tf.keras.utils.load_img')
@patch('main.tf.keras.utils.img_to_array')
def test_model_prediction(mock_img_to_array, mock_load_img, mock_load_model):
    # Setup mock returns
    mock_model = MagicMock()
    # Predict returns a 2D array: (batch_size, num_classes)
    mock_model.predict.return_value = np.array([[0.1, 0.2, 0.6, 0.1]])
    mock_load_model.return_value = mock_model

    mock_load_img.return_value = "dummy_image_object"

    # img_to_array returns a 3D array (height, width, channels)
    dummy_array = np.zeros((128, 128, 3))
    mock_img_to_array.return_value = dummy_array

    # Call the function
    result = main.model_prediction("dummy_path.jpg")

    # Assertions
    # The max value 0.6 is at index 2
    assert result == 2

    # Verify the mocks were called correctly
    mock_load_model.assert_called_once_with("trained_plant_disease_model.keras")
    mock_load_img.assert_called_once_with("dummy_path.jpg", target_size=(128, 128))
    mock_img_to_array.assert_called_once_with("dummy_image_object")

    # Verify predict was called with the batched array
    # We can use np.testing.assert_array_equal for robust array comparison
    args, kwargs = mock_model.predict.call_args
    np.testing.assert_array_equal(args[0], np.array([dummy_array]))
