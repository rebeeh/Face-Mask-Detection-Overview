import { motion } from 'framer-motion';
import type { ProgressBarProps } from '../../types';

/**
 * Thin progress bar at the very top of the screen.
 * Communicates the user's position through the slideshow.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => (
    <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-50">
        <motion.div
            className="h-full bg-emerald-500"
            initial={false}
            animate={{ width: `${((current + 1) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
    </div>
);

export default ProgressBar;
