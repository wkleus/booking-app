import { useEffect, useState } from "react";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import {
  getReservations,
  createReservation,
  deleteReservation,
} from "./api/reservations";
import type { Reservation } from "./types/reservation";
import "./App.css";

function App() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load reservations from API on first render
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getReservations();
        setReservations(data);
      } catch {
        setError("Could not load reservations. Is the API running?");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const handleAdd = async (newReservation: Reservation) => {
    try {
      // Omit local id – backend creates _id
      const { id: _id, ...payload } = newReservation;
      const created = await createReservation(payload);
      setReservations((prev) => [created, ...prev]);
    } catch {
      setError("Could not create reservation.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteReservation(id);
      setReservations((prev) => prev.filter((item) => item.id !== id));
    } catch {
      setError("Could not delete reservation.");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Booking App</h1>
        <p>Simple reservation demo</p>
      </header>

      <main className="app-main">
        {error && <p className="error-message">{error}</p>}

        <ReservationForm onAdd={handleAdd} />

        {loading ? (
          <p className="empty-state">Loading reservations...</p>
        ) : (
          <ReservationList
            reservations={reservations}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
