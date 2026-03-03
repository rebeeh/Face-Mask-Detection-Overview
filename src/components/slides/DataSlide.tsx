import {
    BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip,
    PieChart, Pie, ResponsiveContainer,
} from 'recharts';
import { CheckCircle, Share2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SlideContainer from '../ui/SlideContainer';
import { augmentationData, classDistribution } from '../../data/constants';

const DataSlide: React.FC = () => (
    <SlideContainer>
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Dataset Foundations
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Balanced dataset of 3,833 base images, expanded via geometric and
                photometric augmentation.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Augmentation bar chart */}
            <GlassCard title="Augmentation Impact" icon={Share2}>
                <div className="h-[250px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={augmentationData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                            <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                            <Bar dataKey="val" radius={[8, 8, 0, 0]}>
                                {augmentationData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#059669'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </GlassCard>

            {/* Class balance donut chart */}
            <GlassCard title="Class Balance" icon={CheckCircle}>
                <div className="h-[250px] w-full flex items-center justify-center relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={classDistribution}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {classDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#0f172a',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '10px',
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-black text-white">3,833</span>
                        <span className="text-[8px] text-slate-500 uppercase font-bold">Base Samples</span>
                    </div>
                </div>
            </GlassCard>
        </div>
    </SlideContainer>
);

export default DataSlide;
