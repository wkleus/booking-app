import { useState, type FormEvent, type ChangeEvent } from "react";
import type { Reservation, Occasion } from "../types/reservation";

interface ReservationFormProps {
  onAdd: (reservation: Omit<Reservation, "id">) => void;
}

interface FormState {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: Occasion;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: 2,
  occasion: "Other",
};

function ReservationForm({ onAdd }: ReservationFormProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }

    onAdd({
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      occasion: formData.occasion,
    });

    setFormData(initialFormState);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>New Reservation</h2>

      <label>
        Name *
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date *
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Time *
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Guests *
        <input
          type="number"
          name="guests"
          min={1}
          max={10}
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Occasion
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <button type="submit">Add Reservation</button>
    </form>
  );
}

export default ReservationForm;
