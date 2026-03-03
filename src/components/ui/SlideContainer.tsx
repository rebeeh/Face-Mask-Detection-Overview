import { motion } from 'framer-motion';
import type { SlideContainerProps } from '../../types';

/**
 * Animated wrapper applied to every slide's root element.
 * Handles the fade-in / fade-out transition orchestrated by AnimatePresence.
 */
const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full flex flex-col items-center justify-center p-4 md:p-12 lg:p-20 overflow-y-auto"
    >
        {children}
    </motion.div>
);

export default SlideContainer;
