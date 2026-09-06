import { useState, useRef } from "react"
import { UploadCloud, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react"

export function Demo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{ disease: string; confidence: number } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    if (!selectedImage) return

    setIsAnalyzing(true)
    setResult(null)

    // Mock API call to ML model
    setTimeout(() => {
      setIsAnalyzing(false)
      // Mocking a successful prediction
      setResult({
        disease: "Apple___Apple_scab",
        confidence: 97.8,
      })
    }, 2000)
  }

  return (
    <section id="demo" className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interactive Demo</h2>
        <p className="mt-4 text-lg text-muted-foreground">Upload a leaf image to test the model's inference capabilities.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto bg-card rounded-xl border shadow-sm overflow-hidden">

        {/* Upload Section */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-center bg-muted/30">
          {!selectedImage ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-64 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm font-medium text-foreground">Click to upload image</p>
              <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WEBP</p>
            </div>
          ) : (
            <div className="relative w-full rounded-lg overflow-hidden border">
              <img src={selectedImage} alt="Uploaded leaf" className="w-full h-auto object-cover max-h-[300px]" />
              <button
                onClick={() => { setSelectedImage(null); setResult(null); }}
                className="absolute top-2 right-2 bg-background/80 backdrop-blur text-foreground rounded-md px-2 py-1 text-xs font-medium hover:bg-background"
              >
                Clear
              </button>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/jpeg, image/png, image/webp"
            className="hidden"
          />

          <button
            onClick={handleAnalyze}
            disabled={!selectedImage || isAnalyzing}
            className="mt-6 w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Image...
              </>
            ) : (
              "Analyze Image"
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Inference Results</h3>

            {!selectedImage && !isAnalyzing && !result && (
              <div className="text-center py-10 text-muted-foreground">
                <AlertTriangle className="h-10 w-10 mx-auto mb-3 opacity-50" />
                <p>Awaiting image upload...</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
              </div>
            )}

            {result && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary">Prediction Completed</p>
                    <p className="text-2xl font-bold text-foreground mt-1 break-words">{result.disease.replace(/___/g, ' - ').replace(/_/g, ' ')}</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Confidence Score</span>
                    <span className="text-sm font-bold">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${result.confidence}%` }}></div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mt-4 p-4 bg-muted/50 rounded-lg">
                  <strong>Note:</strong> This is a frontend demonstration. In the full application, this would interface with the TensorFlow backend API.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}