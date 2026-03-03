import { Terminal } from 'lucide-react';
import type { CodeBlockProps } from '../../types';

/**
 * Color palette for syntax-highlighted code blocks.
 * We use a lookup map instead of Tailwind string-interpolation so that
 * the JIT compiler can statically detect all colour classes at build time.
 */
const colorMap: Record<NonNullable<CodeBlockProps['color']>, { header: string; text: string }> = {
    emerald: { header: 'text-emerald-400', text: 'text-emerald-300/80' },
    cyan: { header: 'text-cyan-400', text: 'text-cyan-300/80' },
    amber: { header: 'text-amber-400', text: 'text-amber-300/80' },
    rose: { header: 'text-rose-400', text: 'text-rose-300/80' },
};

/**
 * Styled code block with a macOS-style title bar.
 * Fixes the Tailwind JIT purge bug: colour classes are never built via
 * string interpolation — they are always resolved through the static map.
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ code, color = 'emerald', title }) => {
    const { header, text } = colorMap[color];

    return (
        <div className="w-full flex flex-col shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-x border-t border-white/5 rounded-t-3xl">
                <div className="flex items-center gap-3">
                    <Terminal size={14} className={header} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {title}
                    </span>
                </div>
                {/* Decorative window dots */}
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
            </div>

            {/* Code body */}
            <div className="bg-slate-950 p-6 rounded-b-3xl border border-white/5 overflow-x-auto font-mono text-xs md:text-sm leading-relaxed">
                <pre className={text}>{code}</pre>
            </div>
        </div>
    );
};

export default CodeBlock;
