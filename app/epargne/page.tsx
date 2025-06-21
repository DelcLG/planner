// app/epargne/page.tsx

"use client";

import { useState, useMemo } from 'react';

export default function SavingsPage() {
  const [goal, setGoal] = useState(10000);
  const [current, setCurrent] = useState(1250);

  const percentage = useMemo(() => (current / goal) * 100, [current, goal]);

  return (
    <div>
      <header className="text-left mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Mes Objectifs d'Épargne</h1>
        <p className="text-gray-600 mt-2">Suivez la progression de vos objectifs financiers.</p>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700">Objectif : Voyage au Japon 🇯🇵</h2>
        
        <div className="mt-6 space-y-4">
            <div>
                <label className="block font-semibold mb-1">Montant Actuel (€)</label>
                <input type="number" value={current} onChange={e => setCurrent(parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 p-2 rounded border border-gray-300"/>
            </div>
            <div>
                <label className="block font-semibold mb-1">Montant de l'Objectif (€)</label>
                <input type="number" value={goal} onChange={e => setGoal(parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 p-2 rounded border border-gray-300"/>
            </div>
        </div>

        <div className="mt-8">
            <div className="flex justify-between items-center mb-2 font-semibold">
                <span>Progression</span>
                <span>{percentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                    className="bg-green-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
             <div className="text-center mt-4 text-gray-600">
                <p><span className="font-bold">{current.toFixed(2)}€</span> sur <span className="font-bold">{goal.toFixed(2)}€</span></p>
             </div>
        </div>
      </div>
    </div>
  );
}