import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, Target, Zap } from 'lucide-react';

export function Metrics() {
  const [data, setData] = useState<{epoch: number, accuracy: number, val_accuracy: number, loss: number, val_loss: number}[]>([]);

  useEffect(() => {
    // Dynamic import of the JSON file
    import('../assets/training_hist.json')
      .then((module) => {
        const hist = module.default;
        const formattedData = hist.accuracy.map((acc: number, index: number) => ({
          epoch: index + 1,
          accuracy: Number((acc * 100).toFixed(2)),
          val_accuracy: Number((hist.val_accuracy[index] * 100).toFixed(2)),
          loss: Number(hist.loss[index].toFixed(4)),
          val_loss: Number(hist.val_loss[index].toFixed(4)),
        }));
        setData(formattedData);
      })
      .catch((err) => console.error("Could not load training history", err));
  }, []);

  return (
    <section id="metrics" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Model Performance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our hybrid CNN + Random Forest architecture achieved state-of-the-art results on the New Plant Diseases Dataset.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold mb-1">98.3%</h3>
            <p className="text-sm text-muted-foreground">Ensemble Accuracy</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold mb-1">38</h3>
            <p className="text-sm text-muted-foreground">Supported Classes</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold mb-1">87k+</h3>
            <p className="text-sm text-muted-foreground">Training Images</p>
          </div>
        </div>

        {data.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-6">Training vs Validation Accuracy</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" name="Training Acc" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="val_accuracy" name="Validation Acc" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-6">Training vs Validation Loss</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
