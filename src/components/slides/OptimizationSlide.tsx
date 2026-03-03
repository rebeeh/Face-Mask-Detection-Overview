import { motion } from 'framer-motion';
import CodeBlock from '../ui/CodeBlock';
import SlideContainer from '../ui/SlideContainer';
import { codeSnippets } from '../../data/constants';

const OptimizationSlide: React.FC = () => (
    <SlideContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
            <div>
                <h2 className="text-4xl font-black text-white mb-6">TFLite Quantization</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Shrinking memory footprint from 3.4MB to 1.8MB for edge deployment.
                </p>

                <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-center mb-6 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                        <span>Storage Optimization</span>
                        <span>47% Savings</span>
                    </div>

                    <div className="h-6 w-full bg-slate-800 rounded-full overflow-hidden flex">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '53%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full bg-cyan-500"
                        />
                    </div>

                    <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-500 uppercase">
                        <span>Original (H5)</span>
                        <span>Quantized (TFLite)</span>
                    </div>
                </div>
            </div>

            <CodeBlock
                title="setup_env.py :: Quantize"
                code={codeSnippets.optimization}
                color="cyan"
            />
        </div>
    </SlideContainer>
);

export default OptimizationSlide;
