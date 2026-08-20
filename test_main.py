from streamlit.testing.v1 import AppTest

def test_app_loads():
    at = AppTest.from_file('main.py')
    at.run(timeout=30)
    assert not at.exception

    # Check default page (Home)
    assert at.header[0].value == "PLANT DISEASE RECOGNITION SYSTEM"
    assert "Welcome to the Plant Disease Recognition System!" in at.markdown[0].value

def test_about_page():
    at = AppTest.from_file('main.py')
    at.run(timeout=30)

    # Switch to "About" page
    at.sidebar.selectbox[0].select("About")
    at.run(timeout=30)

    assert not at.exception
    assert at.header[0].value == "About"
    assert "About Dataset" in at.markdown[0].value
    assert "This dataset is recreated using offline augmentation" in at.markdown[0].value

def test_disease_recognition_page():
    at = AppTest.from_file('main.py')
    at.run(timeout=30)

    # Switch to "Disease Recognition" page
    at.sidebar.selectbox[0].select("Disease Recognition")
    at.run(timeout=30)

    assert not at.exception
    assert at.header[0].value == "Disease Recognition"

    # Verify file uploader and buttons exist
    assert at.file_uploader[0].label == "Choose an Image:"
    assert at.button[0].label == "Show Image"
    assert at.button[1].label == "Predict"
