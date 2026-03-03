import { Activity, Gauge, Shield } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import CodeBlock from '../ui/CodeBlock';
import SlideContainer from '../ui/SlideContainer';
import { codeSnippets } from '../../data/constants';

const ThreadingSlide: React.FC = () => (
    <SlideContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
            <CodeBlock
                title="camera.py :: ThreadedEngine"
                code={codeSnippets.threading}
                color="rose"
            />

            <div>
                <h2 className="text-4xl font-black text-white mb-6">Camera Threading</h2>
                <p className="text-slate-400 mb-8">
                    Performance isn't just AI. Decoupling I/O from inference prevents the UI
                    from freezing.
                </p>

                <div className="grid grid-cols-1 gap-4">
                    <GlassCard title="Mutex Implementation" icon={Shield}>
                        <p className="text-slate-400 text-xs">
                            Atomic updates ensure the classifier always predicts on a stable buffer.
                        </p>
                    </GlassCard>

                    <div className="flex gap-4 text-center">
                        <div className="w-1/2 p-6 bg-white/5 rounded-3xl border border-white/5">
                            <Activity size={24} className="mx-auto mb-2 text-rose-500" />
                            <p className="text-2xl font-black text-white">0.0ms</p>
                            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">
                                Input Lag
                            </p>
                        </div>
                        <div className="w-1/2 p-6 bg-white/5 rounded-3xl border border-white/5">
                            <Gauge size={24} className="mx-auto mb-2 text-emerald-400" />
                            <p className="text-2xl font-black text-white">30+</p>
                            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">
                                Stable FPS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SlideContainer>
);

export default ThreadingSlide;
