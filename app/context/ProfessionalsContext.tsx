'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type ProfessionalsContextType = {
  professionals: any[];
  setProfessionals: (data: any[]) => void;
};

const ProfessionalsContext = createContext<ProfessionalsContextType | undefined>(undefined);

export function ProfessionalsProvider({ children }: { children: ReactNode }) {
  const [professionals, setProfessionals] = useState<any[]>([]);
  return (
    <ProfessionalsContext.Provider value={{ professionals, setProfessionals }}>
      {children}
    </ProfessionalsContext.Provider>
  );
}

export function useProfessionals() {
  const context = useContext(ProfessionalsContext);
  if (!context) throw new Error('useProfessionals must be used within ProfessionalsProvider');
  return context;
}
