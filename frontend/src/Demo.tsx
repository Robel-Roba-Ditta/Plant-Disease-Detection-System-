import { useState, useRef } from "react";
import { Upload, X, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";

type DiseaseClass = 'Apple___Apple_scab' | 'Apple___Black_rot' | 'Apple___Cedar_apple_rust' | 'Apple___healthy' | 'Blueberry___healthy' | 'Cherry_(including_sour)___Powdery_mildew' | 'Cherry_(including_sour)___healthy' | 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot' | 'Corn_(maize)___Common_rust_' | 'Corn_(maize)___Northern_Leaf_Blight' | 'Corn_(maize)___healthy' | 'Grape___Black_rot' | 'Grape___Esca_(Black_Measles)' | 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)' | 'Grape___healthy' | 'Orange___Haunglongbing_(Citrus_greening)' | 'Peach___Bacterial_spot' | 'Peach___healthy' | 'Pepper,_bell___Bacterial_spot' | 'Pepper,_bell___healthy' | 'Potato___Early_blight' | 'Potato___Late_blight' | 'Potato___healthy' | 'Raspberry___healthy' | 'Soybean___healthy' | 'Squash___Powdery_mildew' | 'Strawberry___Leaf_scorch' | 'Strawberry___healthy' | 'Tomato___Bacterial_spot' | 'Tomato___Early_blight' | 'Tomato___Late_blight' | 'Tomato___Leaf_Mold' | 'Tomato___Septoria_leaf_spot' | 'Tomato___Spider_mites Two-spotted_spider_mite' | 'Tomato___Target_Spot' | 'Tomato___Tomato_Yellow_Leaf_Curl_Virus' | 'Tomato___Tomato_mosaic_virus' | 'Tomato___healthy';

const MOCK_DISEASES: DiseaseClass[] = [
  'Apple___Apple_scab',
  'Corn_(maize)___Northern_Leaf_Blight',
  'Potato___Early_blight',
  'Tomato___Target_Spot'
];

export function Demo() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<DiseaseClass | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setPrediction(null);
      setConfidence(null);
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setPrediction(null);
    setConfidence(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePredict = () => {
    if (!imageFile) return;

    setIsPredicting(true);

    // Simulate network request/model inference
    setTimeout(() => {
      const randomPrediction = MOCK_DISEASES[Math.floor(Math.random() * MOCK_DISEASES.length)];
      setPrediction(randomPrediction);
      setConfidence(85 + Math.random() * 14); // 85-99% confidence
      setIsPredicting(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="text-green-500" />
            Interactive Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Upload an image of a plant leaf to see the model in action. (Note: This is a frontend simulation of the Streamlit app).
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Upload */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">1. Upload Image</h3>

              {!imagePreview ? (
                <div
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer flex flex-col items-center justify-center h-64"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-10 w-10 text-gray-400 mb-4" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Click to upload leaf image</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">JPG, PNG, WEBP (Max 5MB)</p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/jpeg, image/png, image/webp, image/jpg"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden bg-black/5 h-64 flex items-center justify-center group">
                  <img src={imagePreview} alt="Leaf preview" className="max-h-full max-w-full object-contain" />
                  <button
                    onClick={clearImage}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Prediction */}
            <div className="p-8 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">2. Analysis</h3>

              <div className="flex-grow flex flex-col justify-center">
                {!imagePreview ? (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <AlertCircle className="h-10 w-10 mx-auto mb-4 opacity-20" />
                    <p>Upload an image to start analysis</p>
                  </div>
                ) : !prediction && !isPredicting ? (
                  <div className="text-center">
                    <button
                      onClick={handlePredict}
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm transition-colors"
                    >
                      Run Prediction Model
                    </button>
                    <p className="mt-4 text-sm text-gray-500">This will simulate the TensorFlow CNN inference.</p>
                  </div>
                ) : isPredicting ? (
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Analyzing leaf patterns...</p>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800/30 text-center">
                      <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-3" />
                      <p className="text-sm text-green-800 dark:text-green-400 font-medium mb-1">Prediction Complete</p>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                        {prediction?.replace(/___/g, ' - ').replace(/_/g, ' ')}
                      </h4>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Confidence Score</span>
                        <span className="font-bold text-green-600 dark:text-green-400">{confidence?.toFixed(2)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${confidence}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      onClick={clearImage}
                      className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-4"
                    >
                      Test Another Image
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
