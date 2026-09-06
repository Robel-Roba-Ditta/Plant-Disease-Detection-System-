import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import trainingData from '../../training_hist.json'

export function Metrics() {
  // Process the raw JSON arrays into Recharts compatible format
  const chartData = trainingData.accuracy.map((_: number, index: number) => ({
    epoch: index + 1,
    accuracy: Number((trainingData.accuracy[index] * 100).toFixed(2)),
    val_accuracy: Number((trainingData.val_accuracy[index] * 100).toFixed(2)),
    loss: Number(trainingData.loss[index].toFixed(4)),
    val_loss: Number(trainingData.val_loss[index].toFixed(4)),
  }))

  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Model Performance</h2>
        <p className="mt-4 text-lg text-muted-foreground">Training history and validation metrics for the CNN model.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Accuracy Chart */}
        <div className="bg-card p-6 rounded-xl border shadow-sm flex flex-col h-[400px]">
          <h3 className="text-lg font-semibold mb-6">Model Accuracy (%)</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis
                  dataKey="epoch"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  domain={['auto', 'auto']}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="accuracy" name="Training Accuracy" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="val_accuracy" name="Validation Accuracy" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Loss Chart */}
        <div className="bg-card p-6 rounded-xl border shadow-sm flex flex-col h-[400px]">
          <h3 className="text-lg font-semibold mb-6">Model Loss</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis
                  dataKey="epoch"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  )
}