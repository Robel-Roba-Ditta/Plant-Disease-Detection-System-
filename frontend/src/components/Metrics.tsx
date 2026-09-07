import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import trainingData from '../training_hist.json';

// Transform the JSON data for Recharts
const processData = () => {
  const epochs = trainingData.accuracy.length;
  const data = [];

  for (let i = 0; i < epochs; i++) {
    data.push({
      epoch: i + 1,
      accuracy: trainingData.accuracy[i] * 100, // Convert to percentage
      val_accuracy: trainingData.val_accuracy[i] * 100,
      loss: trainingData.loss[i],
      val_loss: trainingData.val_loss[i]
    });
  }

  return data;
};

export default function Metrics() {
  const data = processData();

  return (
    <section id="metrics" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Model Performance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The hybrid CNN and Random Forest models achieve high accuracy on the 87,000+ image dataset across 38 distinct classes.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-border p-6 rounded-xl text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-1">CNN Accuracy</p>
            <p className="text-3xl font-bold text-primary">97.8%</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-1">RF Accuracy</p>
            <p className="text-3xl font-bold text-primary">95.4%</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-1">Ensemble</p>
            <p className="text-3xl font-bold text-primary">98.3%</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-1">Classes</p>
            <p className="text-3xl font-bold text-primary">38</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Training vs Validation Accuracy</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#888888" opacity={0.2} />
                  <XAxis dataKey="epoch" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 'auto']} tickFormatter={(value) => `${value.toFixed(0)}%`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Legend iconType="circle" />
                  <Line type="monotone" name="Training Accuracy" dataKey="accuracy" stroke="#aa3bff" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="Validation Accuracy" dataKey="val_accuracy" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Training vs Validation Loss</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorValLoss" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#888888" opacity={0.2} />
                  <XAxis dataKey="epoch" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Legend iconType="circle" />
                  <Area type="monotone" name="Training Loss" dataKey="loss" stroke="#ef4444" fillOpacity={1} fill="url(#colorLoss)" />
                  <Area type="monotone" name="Validation Loss" dataKey="val_loss" stroke="#f59e0b" fillOpacity={1} fill="url(#colorValLoss)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
