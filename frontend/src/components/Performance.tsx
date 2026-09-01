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
import { Activity, Target, Zap } from 'lucide-react';
import trainingData from '../training_hist.json';

export default function Performance() {
  // Format data for Recharts
  const chartData = trainingData.accuracy.map((acc, index) => ({
    epoch: index + 1,
    accuracy: Number((acc * 100).toFixed(2)),
    val_accuracy: Number((trainingData.val_accuracy[index] * 100).toFixed(2)),
    loss: Number(trainingData.loss[index].toFixed(4)),
    val_loss: Number(trainingData.val_loss[index].toFixed(4)),
  }));

  const metrics = [
    {
      title: "Model Accuracy",
      value: "97.8%",
      description: "CNN Base Model",
      icon: <Target className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Ensemble Accuracy",
      value: "98.3%",
      description: "CNN + Random Forest",
      icon: <Zap className="h-6 w-6 text-green-500" />
    },
    {
      title: "Training Epochs",
      value: chartData.length.toString(),
      description: "Early stopping applied",
      icon: <Activity className="h-6 w-6 text-purple-500" />
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Model Performance</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our hybrid architecture delivers exceptional results on the New Plant Diseases Dataset, classifying 38 distinct conditions with high reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              {metric.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.title}</p>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</h4>
              <p className="text-xs text-gray-400 mt-1">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Accuracy Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6">Training vs Validation Accuracy</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:opacity-20" />
                <XAxis dataKey="epoch" tick={{ fill: '#6b7280' }} />
                <YAxis tick={{ fill: '#6b7280' }} domain={['auto', 'auto']} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Legend />
                <Line type="monotone" dataKey="accuracy" name="Training Acc (%)" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="val_accuracy" name="Validation Acc (%)" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Loss Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6">Training vs Validation Loss</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:opacity-20" />
                <XAxis dataKey="epoch" tick={{ fill: '#6b7280' }} />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Legend />
                <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#f97316" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}