import pytest
from unittest.mock import patch, MagicMock
import numpy as np
import sys

# Mock Streamlit to avoid issues when importing main.py
sys.modules['streamlit'] = MagicMock()

from main import model_prediction

def test_model_prediction_model_not_found():
    """Test model_prediction when the model file is not found."""
    with patch('tensorflow.keras.models.load_model', side_effect=FileNotFoundError("Model not found")):
        with pytest.raises(FileNotFoundError, match="Model not found"):
            model_prediction("dummy_image.jpg")

def test_model_prediction_image_not_found():
    """Test model_prediction when the input image file is not found."""
    with patch('tensorflow.keras.models.load_model'):
        with patch('tensorflow.keras.preprocessing.image.load_img', side_effect=FileNotFoundError("Image not found"), create=True):
            with patch('tensorflow.keras.utils.load_img', side_effect=FileNotFoundError("Image not found")):
                with pytest.raises(FileNotFoundError, match="Image not found"):
                    model_prediction("nonexistent_image.jpg")

def test_model_prediction_success():
    """Test model_prediction on a successful path."""
    mock_model = MagicMock()
    dummy_prediction = np.zeros((1, 38))
    dummy_prediction[0, 4] = 1.0
    mock_model.predict.return_value = dummy_prediction

    with patch('tensorflow.keras.models.load_model', return_value=mock_model):
        with patch('tensorflow.keras.preprocessing.image.load_img', return_value=MagicMock(), create=True):
            with patch('tensorflow.keras.preprocessing.image.img_to_array', return_value=np.zeros((128, 128, 3)), create=True):
                with patch('tensorflow.keras.utils.load_img', return_value=MagicMock()):
                    with patch('tensorflow.keras.utils.img_to_array', return_value=np.zeros((128, 128, 3))):
                        result = model_prediction("dummy_image.jpg")
                        assert result == 4
                        mock_model.predict.assert_called_once()
