// app/budget/page.tsx

"use client";

import { useState, useMemo } from 'react';

interface Expense {
  id: number;
  name: string;
  amount: number;
}

export default function BudgetPage() {
  const [income, setIncome] = useState<number>(2500);
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: 'Loyer', amount: 950 },
    { id: 2, name: 'Épicerie', amount: 400 },
    { id: 3, name: 'Transport', amount: 150 },
  ]);

  const addExpense = () => setExpenses([...expenses, { id: Date.now(), name: '', amount: 0 }]);
  const removeExpense = (id: number) => setExpenses(expenses.filter(exp => exp.id !== id));
  const updateExpense = (id: number, field: 'name' | 'amount', value: string | number) => {
    setExpenses(
      expenses.map(exp => 
        exp.id === id ? { ...exp, [field]: field === 'amount' ? parseFloat(value as string) || 0 : value } : exp
      )
    );
  };

  const totalExpenses = useMemo(() => expenses.reduce((total, expense) => total + expense.amount, 0), [expenses]);
  const balance = useMemo(() => income - totalExpenses, [income, totalExpenses]);

  return (
    <div className="text-gray-800">
      <header className="text-left mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Mon Budget</h1>
        <p className="text-gray-600 mt-2">Une vue d'ensemble de vos finances mensuelles.</p>
      </header>

      {/* Le reste du code du planificateur de budget est ici */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-500">Revenu Mensuel (€)</h2>
            <input type="number" value={income} onChange={(e) => setIncome(parseFloat(e.target.value) || 0)} className="bg-gray-50 text-3xl font-bold text-green-600 w-full text-center mt-2 rounded p-2 border border-gray-200"/>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-500">Dépenses Totales (€)</h2>
            <p className="text-3xl font-bold text-red-600 mt-2">{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-500">Solde Restant (€)</h2>
            <p className={`text-3xl font-bold mt-2 ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>{balance.toFixed(2)}</p>
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-500">Dépenses</h2>
            <button onClick={addExpense} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">+ Ajouter</button>
          </div>
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex items-center gap-4 flex-wrap">
                <input type="text" placeholder="Nom de la dépense" value={expense.name} onChange={(e) => updateExpense(expense.id, 'name', e.target.value)} className="flex-grow bg-gray-50 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="number" placeholder="Montant" value={expense.amount} onChange={(e) => updateExpense(expense.id, 'amount', e.target.value)} className="w-32 bg-gray-50 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button onClick={() => removeExpense(expense.id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">X</button>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}