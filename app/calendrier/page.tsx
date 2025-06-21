// app/calendrier/page.tsx

export default function CalendarPage() {
    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    const dummyDays = Array.from({ length: 35 }, (_, i) => i + 1); // Crée 35 jours pour l'exemple
  
    return (
      <div>
        <header className="text-left mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Calendrier</h1>
          <p className="text-gray-600 mt-2">Visualisez vos échéances et événements financiers.</p>
        </header>
  
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">Juin 2025</h2>
          <div className="grid grid-cols-7 gap-2 text-center font-semibold">
            {days.map(day => <div key={day} className="p-2 text-gray-500">{day}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2 mt-2">
            {dummyDays.map(day => (
              <div key={day} className="border border-gray-200 rounded-lg p-2 h-24 flex flex-col">
                <span className="font-bold">{day > 30 ? day-30 : day}</span>
                {/* Exemple d'événement */}
                {day === 1 && <div className="text-xs bg-red-200 text-red-800 rounded px-1 mt-1">Loyer</div>}
                {day === 15 && <div className="text-xs bg-green-200 text-green-800 rounded px-1 mt-1">Paie</div>}
                {day === 25 && <div className="text-xs bg-yellow-200 text-yellow-800 rounded px-1 mt-1">Facture</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }