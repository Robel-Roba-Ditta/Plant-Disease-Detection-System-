import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity, Target, ShieldCheck } from 'lucide-react';
import trainingData from '../training_hist.json';

// Transform the JSON data into the format Recharts expects
const formattedData = trainingData.loss.map((_, index) => ({
  epoch: index + 1,
  accuracy: (trainingData.accuracy[index] * 100).toFixed(2),
  val_accuracy: (trainingData.val_accuracy[index] * 100).toFixed(2),
  loss: trainingData.loss[index].toFixed(4),
  val_loss: trainingData.val_loss[index].toFixed(4),
}));

export default function Metrics() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Model Performance</h2>
          <p className="text-muted-foreground">Real training metrics extracted from the TensorFlow model history</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-primary/10 text-primary rounded-lg">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Final Accuracy</p>
              <p className="text-2xl font-bold">98.3%</p>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Final Loss</p>
              <p className="text-2xl font-bold">0.145</p>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-green-500/10 text-green-500 rounded-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Supported Classes</p>
              <p className="text-2xl font-bold">38</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Accuracy Curve</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formattedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" fontSize={12} tickMargin={10} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(val) => `${val}%`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" name="Training Acc" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="val_accuracy" name="Validation Acc" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Loss Curve</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formattedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" fontSize={12} tickMargin={10} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
