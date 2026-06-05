
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle2, IndianRupee } from 'lucide-react';

const data = [
  { name: 'Mon', value: 400, fraud: 12 },
  { name: 'Tue', value: 300, fraud: 8 },
  { name: 'Wed', value: 600, fraud: 18 },
  { name: 'Thu', value: 800, fraud: 45 },
  { name: 'Fri', value: 500, fraud: 22 },
  { name: 'Sat', value: 900, fraud: 15 },
  { name: 'Sun', value: 750, fraud: 9 },
];

const pieData = [
  { name: 'Legitimate', value: 8400, color: '#10b981' },
  { name: 'Fraudulent', value: 240, color: '#f43f5e' },
  { name: 'Flagged (Review)', value: 160, color: '#f59e0b' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-4xl font-bold">System <span className="text-sky-400">Insights</span></h2>
          <p className="text-slate-400">Monitoring real-time network traffic and anomaly metrics.</p>
        </div>
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button className="px-4 py-2 bg-sky-500 text-white rounded-md text-sm font-medium">Last 7 Days</button>
          <button className="px-4 py-2 text-slate-400 hover:text-white rounded-md text-sm font-medium">30 Days</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<IndianRupee className="text-emerald-400" />} label="Volume Protected" value="₹10.2 Cr" sub="+12% from last week" />
        <StatCard icon={<AlertCircle className="text-rose-400" />} label="Fraud Prevented" value="242" sub="Saved ~₹71 Lakhs" />
        <StatCard icon={<CheckCircle2 className="text-sky-400" />} label="Model Accuracy" value="99.2%" sub="Current: Production-v4" />
        <StatCard icon={<TrendingUp className="text-amber-400" />} label="Daily Traffic" value="4.8k" sub="Avg: 120 txn/hour" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-lg font-bold mb-6">Transaction Volume vs. Anomalies</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Area type="monotone" dataKey="value" stroke="#38bdf8" fillOpacity={1} fill="url(#colorValue)" />
                <Area type="monotone" dataKey="fraud" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.05} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-lg font-bold mb-6">Security Distribution</h3>
          <div className="h-80 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <h3 className="text-lg font-bold mb-6">Recent Suspicious Activities</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700 text-slate-500 text-sm">
                <th className="pb-4 font-medium">Transaction ID</th>
                <th className="pb-4 font-medium">Time</th>
                <th className="pb-4 font-medium">Merchant</th>
                <th className="pb-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Location</th>
                <th className="pb-4 font-medium">Action Taken</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <ActivityRow id="TX-94821" time="2 mins ago" merchant="Amazon.com" amount="₹2,49,900.00" location="Remote Access" action="Blocked" status="danger" />
              <ActivityRow id="TX-94819" time="15 mins ago" merchant="Starbucks" amount="₹1,050.00" location="Local" action="Approved" status="success" />
              <ActivityRow id="TX-94818" time="1 hour ago" merchant="CryptoEx Inc" amount="₹6,60,000.00" location="Reykjavik, IS" action="Flagged (2FA)" status="warning" />
              <ActivityRow id="TX-94815" time="3 hours ago" merchant="Netflix" amount="₹1,499.00" location="Auto-Billing" action="Approved" status="success" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; sub?: string }> = ({ icon, label, value, sub }) => (
  <div className="glass-card p-6 rounded-2xl">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-slate-400 text-sm font-medium">{label}</span>
    </div>
    <div className="text-3xl font-bold mb-1">{value}</div>
    {sub && <div className="text-xs text-slate-500">{sub}</div>}
  </div>
);

const ActivityRow: React.FC<{ id: string, time: string, merchant: string, amount: string, location: string, action: string, status: 'success' | 'danger' | 'warning' }> = ({ id, time, merchant, amount, location, action, status }) => {
  const statusColors = {
    success: 'text-emerald-400',
    danger: 'text-rose-400',
    warning: 'text-amber-400'
  };

  return (
    <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
      <td className="py-4 font-mono text-slate-300">{id}</td>
      <td className="py-4 text-slate-500">{time}</td>
      <td className="py-4 font-medium">{merchant}</td>
      <td className="py-4">{amount}</td>
      <td className="py-4 text-slate-500">{location}</td>
      <td className={`py-4 font-bold ${statusColors[status]}`}>{action}</td>
    </tr>
  );
};

export default Dashboard;
