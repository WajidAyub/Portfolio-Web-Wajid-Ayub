import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    useEffect(() => {
        // Always apply dark theme class to document root
        const root = document.documentElement;
        root.classList.add('dark');
    }, []);

    const value = {
        theme: 'dark',
        isDark: true
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
