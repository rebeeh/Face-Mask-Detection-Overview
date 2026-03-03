import { Layers, Maximize, Monitor } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SlideContainer from '../ui/SlideContainer';

const StackSlide: React.FC = () => (
    <SlideContainer>
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
                Architecture Deep-Dive
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Decoupled detection and classification pipeline for high-throughput edge inference.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            <GlassCard title="Face Detector" icon={Maximize}>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    YuNet ONNX implementation. Detects faces at varying poses with extremely low overhead.
                </p>
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg w-fit">
                    YuNet v2023
                </div>
            </GlassCard>

            <GlassCard title="Classifier" icon={Layers}>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    MobileNetV2 Transfer Learning. Fine-tuned for binary classification in complex environments.
                </p>
                <div className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded-lg w-fit">
                    MobileNetV2
                </div>
            </GlassCard>

            <GlassCard title="UI Engine" icon={Monitor}>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Clean Glass Rendering. Dynamic font-scaling for resolution-independent dashboards.
                </p>
                <div className="px-3 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded-lg w-fit">
                    OpenCV Graphics
                </div>
            </GlassCard>
        </div>
    </SlideContainer>
);

export default StackSlide;
