import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'normal' | 'large' | 'xlarge';
type FontMode = 'serif' | 'sans';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  fontMode: FontMode;
  setFontMode: (mode: FontMode) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  readingRuler: boolean;
  setReadingRuler: (enabled: boolean) => void;
  rulerY: number;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [fontMode, setFontMode] = useState<FontMode>('serif');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [readingRuler, setReadingRuler] = useState<boolean>(false);
  const [rulerY, setRulerY] = useState<number>(0);

  useEffect(() => {
    if (!readingRuler) return;
    const handleMouseMove = (e: MouseEvent) => {
      setRulerY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [readingRuler]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        fontMode,
        setFontMode,
        highContrast,
        setHighContrast,
        readingRuler,
        setReadingRuler,
        rulerY,
      }}
    >
      {children}
      {readingRuler && (
        <div
          className="fixed left-0 right-0 h-10 pointer-events-none z-50 bg-[#446132]/10 border-y border-[#446132]/30 shadow-xs transition-transform duration-75"
          style={{
            top: `${rulerY - 20}px`,
          }}
          aria-hidden="true"
        />
      )}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
