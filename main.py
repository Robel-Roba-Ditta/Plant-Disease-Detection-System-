import logging
import streamlit as st
import tensorflow as tf
import numpy as np
import json
from streamlit.runtime.uploaded_file_manager import UploadedFile

st.set_page_config(page_title="Plant Disease Detection", page_icon="🌿", layout="wide")

# Add custom CSS for modern UI
st.markdown("""
<style>
    .hero-title { text-align: center; font-size: 3.5rem; font-weight: 800; margin-bottom: 0; color: #2e7d32; }
    .hero-tagline { text-align: center; font-size: 1.2rem; color: #555; margin-top: 0.5rem; margin-bottom: 2rem; }
</style>
""", unsafe_allow_html=True)

# Hero Section
st.markdown('<div class="hero-title">🌿 Plant Disease Recognition</div>', unsafe_allow_html=True)
st.markdown('<div class="hero-tagline">Identify plant diseases instantly using Deep Learning & Computer Vision</div>', unsafe_allow_html=True)

col1, col2, col3, col4 = st.columns([1,1,1,1])
with col2:
    st.markdown('<a href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git" target="_blank" style="text-decoration:none;"><button style="width:100%; padding:0.5rem; border-radius:8px; background-color:#333; color:white; border:none; cursor:pointer;">View Code</button></a>', unsafe_allow_html=True)
with col3:
    st.markdown('<a href="https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset" target="_blank" style="text-decoration:none;"><button style="width:100%; padding:0.5rem; border-radius:8px; background-color:#2e7d32; color:white; border:none; cursor:pointer;">Dataset</button></a>', unsafe_allow_html=True)

st.markdown("---")

@st.cache_resource
def load_model():
    return tf.keras.models.load_model("trained_plant_disease_model.keras")

def model_prediction(test_image: UploadedFile) -> int:
    model = load_model()
    image = tf.keras.utils.load_img(test_image, target_size=(128,128))
    input_arr = tf.keras.utils.img_to_array(image)
    input_arr = np.array([input_arr])
    predictions = model.predict(input_arr)
    return int(np.argmax(predictions))

tab1, tab2, tab3 = st.tabs(["🎮 Interactive Demo", "📊 Model Performance", "📖 Documentation"])

with tab1:
    st.subheader("Upload an image for inference")
    col1, col2 = st.columns(2)
    with col1:
        test_image = st.file_uploader("Choose an Image:", type=['jpg', 'jpeg', 'png', 'webp'])
        if test_image is not None:
            if test_image.size > 5 * 1024 * 1024:
                st.error("File size exceeds 5MB limit. Please upload a smaller image.")
                st.stop()
            st.image(test_image, use_container_width=True)

    with col2:
        st.write("### Prediction Results")
        if test_image is None:
            st.info("Please upload an image to see the prediction.")
        else:
            if st.button("Run Prediction"):
                with st.spinner("Analyzing image..."):
                    try:
                        result_index = model_prediction(test_image)
                        class_name = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
                                    'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew',
                                    'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
                                    'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy',
                                    'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
                                    'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot',
                                    'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy',
                                    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy',
                                    'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew',
                                    'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot',
                                    'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
                                    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite',
                                    'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
                                      'Tomato___healthy']
                        st.success(f"**Prediction:** {class_name[result_index]}")
                        st.balloons()
                    except Exception as e:
                        logging.error(f"Error during model prediction: {e}")
                        st.error("An error occurred during prediction. Please try again.")

with tab2:
    st.subheader("Model Training Performance")
    try:
        with open('training_hist.json', 'r') as f:
            history = json.load(f)
        final_acc = history['accuracy'][-1]
        final_val_acc = history['val_accuracy'][-1]
        final_loss = history['loss'][-1]
        final_val_loss = history['val_loss'][-1]
        c1, c2, c3, c4 = st.columns(4)
        c1.metric("Final Training Accuracy", f"{final_acc:.2%}")
        c2.metric("Final Validation Accuracy", f"{final_val_acc:.2%}")
        c3.metric("Final Training Loss", f"{final_loss:.4f}")
        c4.metric("Final Validation Loss", f"{final_val_loss:.4f}")
        st.write("### Accuracy Curve")
        st.line_chart({"Training Accuracy": history['accuracy'], "Validation Accuracy": history['val_accuracy']})
        st.write("### Loss Curve")
        st.line_chart({"Training Loss": history['loss'], "Validation Loss": history['val_loss']})
    except Exception as e:
        st.warning("Could not load training history data.")

with tab3:
    st.subheader("Installation & Setup")
    st.markdown('''
    ### Run the Model Locally
    1. **Clone Repository**
    ```bash
    git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git
    cd Plant-Disease-Detection
    ```
    2. **Install Dependencies**
    ```bash
    pip install -r requirement.txt
    ```
    3. **Run Application**
    ```bash
    streamlit run main.py
    ```

    ### About the Dataset
    The project uses the widely adopted Plant Disease Dataset from Kaggle, containing 87,000+ RGB images of healthy and diseased crop leaves spanning 38 classes and 14 crop types.
    ''')