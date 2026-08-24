import { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2 } from 'lucide-react';

const classNames = [
  'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
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
  'Tomato___healthy'
];

const Playground = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setPrediction(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = () => {
    if (!image) return;

    setIsPredicting(true);
    setPrediction(null);

    // Simulate API call / model inference delay
    setTimeout(() => {
      const randomClass = classNames[Math.floor(Math.random() * classNames.length)];
      const formattedClass = randomClass.replace(/___/g, ' - ').replace(/_/g, ' ');
      setPrediction(formattedClass);
      setIsPredicting(false);
    }, 1500);
  };

  return (
    <section id="playground" className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Disease Recognition</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Upload an image of a plant leaf to detect potential diseases.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-10">
          <div className="space-y-6">

            {/* Upload Area */}
            <div
              className="relative flex justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 px-6 py-12 hover:border-green-500 dark:hover:border-green-500 transition-colors cursor-pointer bg-white dark:bg-gray-900"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="text-center">
                {image ? (
                  <img src={image} alt="Uploaded leaf" className="mx-auto h-64 object-contain rounded-lg" />
                ) : (
                  <>
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                      <span className="relative cursor-pointer rounded-md font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                  </>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg, image/png, image/jpg, image/webp"
                onChange={handleImageUpload}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setImage(null)}
                disabled={!image || isPredicting}
                className="flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handlePredict}
                disabled={!image || isPredicting}
                className="flex-1 inline-flex justify-center items-center rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPredicting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Predicting...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Predict Disease
                  </>
                )}
              </button>
            </div>

            {/* Results */}
            {prediction && (
              <div className="mt-6 rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800/30">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Our Prediction</h3>
                    <div className="mt-2 text-sm text-green-700 dark:text-green-400">
                      <p>Model is Predicting it's a: <strong className="font-bold">{prediction}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
