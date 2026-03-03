import { Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import type { NavControlsProps } from '../../types';

/**
 * Bottom navigation bar containing the status badge and prev/next buttons.
 */
const NavControls: React.FC<NavControlsProps> = ({
    current,
    total,
    onNext,
    onPrev,
}) => {
    const isFirst = current === 0;
    const isLast = current === total - 1;

    return (
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-50 pointer-events-none">
            {/* Status badge */}
            <div className="hidden sm:flex pointer-events-auto items-center gap-3 px-6 py-3 rounded-full bg-slate-900/80 backdrop-blur-2xl border border-white/5 shadow-2xl">
                <Activity size={14} className="text-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none">
                    Inference: [STABLE]
                </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4 pointer-events-auto ml-auto">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    aria-label="Previous slide"
                    className="p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/5 text-white hover:bg-white/10 transition-all disabled:opacity-20 active:scale-90 shadow-2xl"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={onNext}
                    disabled={isLast}
                    aria-label="Next slide"
                    className="group relative flex items-center gap-3 px-10 rounded-3xl overflow-hidden bg-emerald-500 text-slate-950 font-black tracking-tighter hover:bg-emerald-400 transition-all disabled:opacity-20 active:scale-95 shadow-xl shadow-emerald-500/40"
                >
                    <span className="relative z-10 uppercase text-xs tracking-widest font-black">
                        {isLast ? 'End' : 'Next'}
                    </span>
                    <ChevronRight
                        size={20}
                        className="relative z-10 group-hover:translate-x-1 transition-transform"
                    />
                </button>
            </div>
        </div>
    );
};

export default NavControls;
