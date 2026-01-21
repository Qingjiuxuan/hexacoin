import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Flame, TrendingUp } from 'lucide-react';

export const Tokenomics: React.FC = () => {
  const data = [
    { name: '回购销毁', value: 30, color: '#F0B90B' },
    { name: '技术研发与持续运营', value: 50, color: '#E5E7EB' }, // Light gray
    { name: 'HEX 战略发展基金', value: 20, color: '#6B7280' }, // Medium gray
  ];

  const tokenDetails = [
    { label: "代币全称", value: "HexaCoin (HEX)" },
    { label: "发行总量", value: "1,000,000,000" },
    { label: "交易税率 (买/卖)", value: "0% / 0%" },
    { label: "合约地址", value: "[待更新]" },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Chart Side */}
          <div className="bg-hex-card p-8 rounded-3xl border border-gray-800 shadow-xl relative">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">收入分配</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E2329', border: '1px solid #333' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 bg-hex-gold/10 border border-hex-gold/20 p-4 rounded-xl flex items-start space-x-4">
              <Flame className="w-6 h-6 text-hex-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-hex-gold">30% 回购销毁</h4>
                <p className="text-sm text-gray-400">
                  30% 的服务收入将全部用于从市场回购 HEX 代币并打入黑洞销毁。
                </p>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              代币经济
            </h2>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">HEX 代币 - 极致通缩模型</h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              HEX 不仅是生态代币，更是整个平台价值的载体。我们引入了强力的“业务回购销毁”机制，让每一笔建站订单都推动币价上涨。
            </p>

            <div className="space-y-4 mb-8">
              {tokenDetails.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-white font-mono font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-hex-gold font-semibold">
              <TrendingUp className="w-5 h-5" />
              <span>建站项目越多 = 回购力度越大 = 币价螺旋上升</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};