import { motion } from 'framer-motion';
import type { GlassCardProps } from '../../types';

/**
 * Reusable frosted-glass card used across all slides.
 * Animates in on scroll with an optional stagger delay.
 */
const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = '',
    delay = 0,
    icon: Icon,
    title,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`backdrop-blur-2xl bg-slate-900/60 border border-white/10 rounded-[2rem] p-5 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all flex flex-col ${className}`}
    >
        {title && (
            <div className="flex items-center gap-3 mb-4 relative z-10 shrink-0">
                <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400">
                    {Icon && <Icon size={16} />}
                </div>
                <h3 className="text-slate-100 font-bold text-[10px] uppercase tracking-[0.2em]">
                    {title}
                </h3>
            </div>
        )}
        <div className="relative z-10 flex-grow h-full">{children}</div>
    </motion.div>
);

export default GlassCard;
