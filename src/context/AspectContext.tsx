import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ASPECTS } from '@/lib/constants';

// Define the shape of the context
type AspectContextType = {
  currentAspectIndex: number;
  setCurrentAspectIndex: (index: number) => void;
  aspect: typeof ASPECTS[0];
};

const AspectContext = createContext<AspectContextType | undefined>(undefined);

export const AspectProvider = ({ children }: { children: ReactNode }) => {
  const [currentAspectIndex, setCurrentAspectIndex] = useState(0);

  const aspect = ASPECTS[currentAspectIndex];

  useEffect(() => {
    // Update CSS custom property for current primary color
    document.documentElement.style.setProperty('--current-primary', aspect.theme.primaryColor);
  }, [aspect]);

  return (
    <AspectContext.Provider value={{
      currentAspectIndex,
      setCurrentAspectIndex,
      aspect
    }}>
      {children}
    </AspectContext.Provider>
  );
};

export const useAspect = () => {
  const context = useContext(AspectContext);
  if (context === undefined) {
    throw new Error('useAspect must be used within an AspectProvider');
  }
  return context;
};
