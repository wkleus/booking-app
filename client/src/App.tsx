import { useState } from "react";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import mockReservations from "./data/mockReservations";
import type { Reservation } from "./types/reservation";
import "./App.css";

function App() {
  // Local state for now – later this will be loaded from the API
  const [reservations, setReservations] =
    useState<Reservation[]>(mockReservations);

  const handleAdd = (newReservation: Reservation) => {
    setReservations((prev) => [newReservation, ...prev]);
  };

  const handleDelete = (id: string) => {
    setReservations((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Booking App</h1>
        <p>Basic reservation demo (frontend only for now)</p>
      </header>

      <main className="app-main">
        <ReservationForm onAdd={handleAdd} />
        <ReservationList reservations={reservations} onDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
