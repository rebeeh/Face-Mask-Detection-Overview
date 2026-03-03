import { Activity, Shield } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import CodeBlock from '../ui/CodeBlock';
import SlideContainer from '../ui/SlideContainer';
import { codeSnippets } from '../../data/constants';

const YuNetSlide: React.FC = () => (
    <SlideContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
            <div>
                <h2 className="text-4xl font-black text-white mb-6">YuNet Tracking</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    A high-performance face detector that balances precision and speed,
                    outperforming MTCNN.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <GlassCard title="Confidence" icon={Shield}>
                        <p className="text-2xl font-black text-white">0.60</p>
                        <p className="text-[9px] text-slate-500 uppercase font-bold">
                            Inference Floor
                        </p>
                    </GlassCard>

                    <GlassCard title="Latency" icon={Activity}>
                        <p className="text-2xl font-black text-white">~5ms</p>
                        <p className="text-[9px] text-slate-500 uppercase font-bold">
                            Face Detection
                        </p>
                    </GlassCard>
                </div>
            </div>

            <CodeBlock
                title="src/detector.py :: YuNet_Setup"
                code={codeSnippets.yunet}
                color="cyan"
            />
        </div>
    </SlideContainer>
);

export default YuNetSlide;
