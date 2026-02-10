import React from 'react';
import { motion } from 'framer-motion';

const SectionSeparator = () => {
    return (
        <div className="w-full flex justify-center py-8 opacity-50">
            <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-accent-500/50 to-transparent shadow-[0_0_10px_rgba(14,165,233,0.3)]"
            />
        </div>
    );
};

export default SectionSeparator;
