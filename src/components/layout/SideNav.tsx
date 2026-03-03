import type { SideNavProps } from '../../types';

/**
 * Vertical dot-navigation on the left side of the screen.
 * Visible only on large screens (hidden on mobile).
 */
const SideNav: React.FC<SideNavProps> = ({ count, current, onSelect }) => (
    <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-50">
        {Array.from({ length: count }, (_, i) => (
            <button
                key={i}
                onClick={() => onSelect(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group flex items-center gap-4 outline-none"
            >
                <div
                    className={`w-1 transition-all duration-500 rounded-full ${current === i
                            ? 'h-10 bg-emerald-500 shadow-lg shadow-emerald-500/50'
                            : 'h-2 bg-slate-800 group-hover:bg-slate-600'
                        }`}
                />
                <span
                    className={`text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${current === i
                            ? 'text-white opacity-100'
                            : 'text-slate-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                >
                    PAGE 0{i + 1}
                </span>
            </button>
        ))}
    </div>
);

export default SideNav;
