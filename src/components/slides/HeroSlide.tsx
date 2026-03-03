import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import SlideContainer from '../ui/SlideContainer';
import type { StatItem } from '../../types';

const stats: StatItem[] = [
    { l: 'Precision', v: '98.2%', c: 'text-emerald-400' },
    { l: 'Recall', v: '97.5%', c: 'text-cyan-400' },
    { l: 'Latency', v: '22ms', c: 'text-amber-400' },
    { l: 'Architecture', v: 'SOTA', c: 'text-rose-400' },
];

const HeroSlide: React.FC = () => (
    <SlideContainer>
        <div className="text-center max-w-5xl">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12"
            >
                <Database size={14} /> Neural Inference Engine v4.0
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none">
                Safety <br />
                <span className="text-emerald-500">Vision</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                Industrial real-time face mask detection using{' '}
                <span className="text-white">YuNet</span> face tracking and{' '}
                <span className="text-white">MobileNetV2</span> classification.
            </p>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white/5 border border-white/5 rounded-3xl p-6 text-center shadow-xl"
                    >
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                            {s.l}
                        </p>
                        <p className={`text-3xl font-black ${s.c}`}>{s.v}</p>
                    </div>
                ))}
            </div>
        </div>
    </SlideContainer>
);

export default HeroSlide;
