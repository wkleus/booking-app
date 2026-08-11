import type { Reservation } from "../types/reservation";

interface ReservationListProps {
  reservations: Reservation[];
  onDelete: (id: string) => void;
}

function ReservationList({ reservations, onDelete }: ReservationListProps) {
  if (reservations.length === 0) {
    return <p className="empty-state">No reservations yet.</p>;
  }

  return (
    <section className="reservation-list">
      <h2>Reservations</h2>

      <ul>
        {reservations.map((item) => (
          <li key={item.id} className="reservation-card">
            <div>
              <strong>{item.name}</strong>
              <span>{item.email}</span>
            </div>

            <div>
              {item.date} at {item.time}
            </div>

            <div>
              {item.guests} guests · {item.occasion}
            </div>

            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReservationList;
