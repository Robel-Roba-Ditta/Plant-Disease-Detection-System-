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

const data = [
  { epoch: 1, loss: 0.914, accuracy: 0.686, val_loss: 0.337, val_accuracy: 0.886 },
  { epoch: 2, loss: 0.311, accuracy: 0.892, val_loss: 0.266, val_accuracy: 0.912 },
  { epoch: 3, loss: 0.177, accuracy: 0.940, val_loss: 0.145, val_accuracy: 0.953 }
];

const Metrics = () => {
  return (
    <section id="metrics" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Model Performance</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Training history showing accuracy and loss across epochs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Accuracy Chart */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <h3 className="text-lg font-semibold mb-6">Model Accuracy</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="epoch" />
                  <YAxis domain={[0, 1]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgb(31 41 55)', borderColor: 'rgb(55 65 81)', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" name="Training Accuracy" stroke="#16a34a" strokeWidth={2} />
                  <Line type="monotone" dataKey="val_accuracy" name="Validation Accuracy" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Loss Chart */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <h3 className="text-lg font-semibold mb-6">Model Loss</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="epoch" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgb(31 41 55)', borderColor: 'rgb(55 65 81)', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#dc2626" strokeWidth={2} />
                  <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#d97706" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Final Training Accuracy</div>
            <div className="mt-2 text-3xl font-bold text-green-600 dark:text-green-500">94.0%</div>
          </div>
          <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Final Validation Accuracy</div>
            <div className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-500">95.3%</div>
          </div>
          <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Classes Detected</div>
            <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-500">38</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
