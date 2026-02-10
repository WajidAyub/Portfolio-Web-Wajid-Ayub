import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DecryptedText = ({ texts, speed = 3000, className = "" }) => {
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState(texts[0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, speed);
        return () => clearInterval(timer);
    }, [texts.length, speed]);

    // Scramble effect logic could go here, but a clean slide/fade 
    // with a "glitch" feel might be better for readability.
    // Let's do a vertical slide with a "tech" reveal.

    return (
        <div className={`relative overflow-hidden h-12 flex items-center ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 truncate"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default DecryptedText;
