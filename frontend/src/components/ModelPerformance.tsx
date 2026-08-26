import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { TrendingUp, Activity } from 'lucide-react';
import trainingData from '../assets/training_hist.json';

export function ModelPerformance() {
  // Format the data for Recharts
  const chartData = useMemo(() => {
    return trainingData.loss.map((_, index) => ({
      epoch: `Epoch ${index + 1}`,
      accuracy: (trainingData.accuracy[index] * 100).toFixed(2),
      val_accuracy: (trainingData.val_accuracy[index] * 100).toFixed(2),
      loss: trainingData.loss[index].toFixed(4),
      val_loss: trainingData.val_loss[index].toFixed(4)
    }));
  }, []);

  const finalAccuracy = (trainingData.accuracy[trainingData.accuracy.length - 1] * 100).toFixed(1);
  const finalValAccuracy = (trainingData.val_accuracy[trainingData.val_accuracy.length - 1] * 100).toFixed(1);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-card border-y border-[var(--border)] my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Model Performance</h2>
        <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
          Training history of our CNN model showing accuracy and loss metrics over time.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Metric Cards */}
        <div className="lg:col-span-1 space-y-4">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Training Accuracy</h3>
            </div>
            <div className="text-4xl font-bold">{finalAccuracy}%</div>
            <p className="text-sm text-[var(--foreground)]/60 mt-2">Final epoch performance</p>
          </div>

          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Activity className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-semibold">Validation Accuracy</h3>
            </div>
            <div className="text-4xl font-bold">{finalValAccuracy}%</div>
            <p className="text-sm text-[var(--foreground)]/60 mt-2">Generalization performance</p>
          </div>
        </div>

        {/* Charts */}
        <div className="lg:col-span-2 space-y-8">
          <div className="h-[300px] w-full bg-[var(--background)] p-4 rounded-xl border border-[var(--border)]">
            <h4 className="text-center font-medium mb-4">Accuracy History</h4>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="epoch" stroke="var(--foreground)" opacity={0.5} fontSize={12} />
                <YAxis stroke="var(--foreground)" opacity={0.5} fontSize={12} domain={['auto', 'auto']} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                  itemStyle={{ color: 'var(--foreground)' }}
                />
                <Legend />
                <Line type="monotone" dataKey="accuracy" name="Train Accuracy (%)" stroke="var(--primary)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="val_accuracy" name="Val Accuracy (%)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
