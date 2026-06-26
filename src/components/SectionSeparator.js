import React from 'react';

const SectionSeparator = () => {
    // In this ultra-minimalist design, sections are mostly separated by border-t border-white/10
    // So this component can just return null or a simple spacer.
    return (
        <div className="w-full h-px bg-transparent"></div>
    );
};

export default SectionSeparator;
