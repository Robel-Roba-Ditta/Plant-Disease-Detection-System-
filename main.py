import streamlit as st
import tensorflow as tf
import numpy as np
import json
import os
from PIL import Image
from streamlit.runtime.uploaded_file_manager import UploadedFile

# Set page config
st.set_page_config(
    page_title="Plant Disease Recognition",
    page_icon="🌿",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Cache the model loading to prevent reloading on every interaction
@st.cache_resource
def load_model():
    return tf.keras.models.load_model("trained_plant_disease_model.keras")

def model_prediction(test_image: UploadedFile) -> int:
    model = load_model()
    # Process image using PIL to ensure RGB format and correct resize
    image = Image.open(test_image).convert('RGB').resize((128, 128))
    input_arr = tf.keras.utils.img_to_array(image)
    input_arr = np.array([input_arr]) # convert single image to batch
    predictions = model.predict(input_arr)
    return int(np.argmax(predictions)) # return index of max element

# Sidebar Navigation
st.sidebar.title("🌿 Dashboard")
st.sidebar.markdown("Navigate through the application sections below:")
app_mode = st.sidebar.radio("Select Page", ["Home", "Disease Recognition", "Model Performance", "About"])

# Main Page / Home Section
if app_mode == "Home":
    st.markdown("<h1 style='text-align: center;'>Plant Disease Recognition System</h1>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center; font-size: 18px; color: gray;'>Intelligent plant disease detection using deep learning & computer vision.</p>", unsafe_allow_html=True)
    
    # Hero Image
    image_path = os.path.join(os.path.dirname(__file__), "home_page.jpeg")
    try:
        st.image(image_path, use_container_width=True)
    except FileNotFoundError:
        st.warning("Hero image not found.")

    st.markdown("""
    ### 🌱 Welcome to the Plant Disease Recognition System!

    Our mission is to help in identifying plant diseases efficiently. Upload an image of a plant leaf, and our system will analyze it to detect any signs of diseases. Together, let's protect our crops and ensure a healthier harvest!

    ### 🚀 How It Works
    1. **Upload Image:** Go to the **Disease Recognition** page and upload an image of a plant leaf.
    2. **Analysis:** Our model processes the image using a robust CNN algorithm to identify potential diseases.
    3. **Results:** View the predicted disease and take action to save your crops.

    ### 🌟 Why Choose Us?
    - **Accuracy:** Utilizes state-of-the-art deep learning techniques.
    - **User-Friendly:** Simple, intuitive, and responsive interface.
    - **Fast & Efficient:** Receive results in seconds.
    """)

    st.markdown("---")

    col1, col2 = st.columns(2)
    with col1:
        st.link_button("View Code", "https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection", use_container_width=True)
    with col2:
        st.page_link("main.py", label="Live Demo (Disease Recognition)", icon="🔥", use_container_width=True)

# Disease Recognition Page
elif app_mode == "Disease Recognition":
    st.header("🔍 Disease Recognition Playground")
    st.markdown("Upload a leaf image to test the model's inference capabilities.")

    test_image = st.file_uploader("Choose an Image:", type=['jpg', 'jpeg', 'png', 'webp'])

    col1, col2 = st.columns(2)
    with col1:
        if st.button("Show Image", disabled=(test_image is None)):
            st.image(test_image, use_container_width=True)

    with col2:
        if st.button("Predict", type="primary", disabled=(test_image is None)):
            with st.spinner("Analyzing image... Please wait."):
                try:
                    result_index = model_prediction(test_image)
                    # Reading Labels
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
                    st.success(f"Model Predicts: **{class_name[result_index].replace('___', ' - ').replace('_', ' ')}**")
                    st.snow()
                except Exception as e:
                    st.error("An error occurred during prediction. Please ensure the uploaded file is a valid image.")

# Model Performance Page
elif app_mode == "Model Performance":
    st.header("📊 Model Performance & Metrics")
    st.markdown("Explore the training history, accuracy, and loss curves of our CNN model.")

    hist_path = os.path.join(os.path.dirname(__file__), 'training_hist.json')
    try:
        with open(hist_path, 'r') as f:
            history = json.load(f)

        col1, col2 = st.columns(2)
        with col1:
            st.subheader("Training vs Validation Accuracy")
            acc_data = {
                "Train Accuracy": history["accuracy"],
                "Validation Accuracy": history["val_accuracy"]
            }
            st.line_chart(acc_data)

        with col2:
            st.subheader("Training vs Validation Loss")
            loss_data = {
                "Train Loss": history["loss"],
                "Validation Loss": history["val_loss"]
            }
            st.line_chart(loss_data)

        st.markdown("### 📈 Key Metrics")
        epochs = len(history["accuracy"])
        final_acc = history["val_accuracy"][-1] * 100
        final_loss = history["val_loss"][-1]

        m1, m2, m3 = st.columns(3)
        m1.metric("Total Epochs", epochs)
        m2.metric("Final Validation Accuracy", f"{final_acc:.2f}%")
        m3.metric("Final Validation Loss", f"{final_loss:.4f}")

    except FileNotFoundError:
        st.error(f"Training history file not found at {hist_path}.")
    except Exception as e:
        st.error("Failed to load or parse the training history.")

# About Project
elif app_mode == "About":
    st.header("ℹ️ About")
    st.markdown("""
    #### 📁 About Dataset
    This dataset is recreated using offline augmentation from the original dataset. The original dataset can be found on this GitHub repo.
    This dataset consists of about 87K RGB images of healthy and diseased crop leaves, categorized into 38 different classes. The total dataset is divided into an 80/20 ratio of training and validation sets, preserving the directory structure.
    A new directory containing 33 test images was created later for prediction purposes.

    #### 📂 Content
    1. **Train** (70,295 images)
    2. **Test** (33 images)
    3. **Validation** (17,572 images)

    #### ⚙️ Technology Stack
    - **Frontend:** Streamlit
    - **Machine Learning:** TensorFlow / Keras, Scikit-Learn
    - **Data Processing:** NumPy, Pandas, PIL

    #### 💻 Installation & Running Locally
    Follow these steps to install and run the model on your local machine:

    1. **Clone the repository:**
       ```bash
       git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git
       cd Plant-Disease-Detection
       ```
    2. **Install dependencies:**
       ```bash
       pip install -r requirements.txt
       ```
    3. **Run the Streamlit application:**
       ```bash
       streamlit run main.py
       ```
    """)
