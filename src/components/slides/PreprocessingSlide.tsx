import CodeBlock from '../ui/CodeBlock';
import SlideContainer from '../ui/SlideContainer';
import { codeSnippets } from '../../data/constants';
import type { StepItem } from '../../types';

const steps: StepItem[] = [
    { t: 'Color Mapping', d: 'Conversion from OpenCV BGR to MobileNet RGB.' },
    { t: 'Geometric Square', d: 'Aspect-ratio preserving padding to avoid distortion.' },
    { t: 'Normalization', d: 'Zero-mean normalization to scale pixel range to [-1, 1].' },
];

const PreprocessingSlide: React.FC = () => (
    <SlideContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
            <CodeBlock
                title="detector.py :: Preprocessing"
                code={codeSnippets.preprocessing}
            />

            <div>
                <h2 className="text-4xl font-black text-white mb-6 tracking-tight">
                    Inference Preprocessing
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Consistency is key. Our pipeline ensures pixel-perfect inputs for the
                    neural network through 3 atomic steps.
                </p>

                <div className="space-y-4">
                    {steps.map((item, i) => (
                        <div
                            key={i}
                            className="flex gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                        >
                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black shrink-0">
                                0{i + 1}
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-bold">{item.t}</h4>
                                <p className="text-slate-500 text-xs">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </SlideContainer>
);

export default PreprocessingSlide;
