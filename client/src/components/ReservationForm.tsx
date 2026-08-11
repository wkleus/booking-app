function ReservationForm() {
  //
  return (
    <form className="reservation-form">
      <h2>New Reservation</h2>

      <label>
        Name *
        <input type="text" name="name" required />
      </label>

      <label>
        Email *
        <input type="email" name="email" required />
      </label>

      <label>
        Date *
        <input type="date" name="date" required />
      </label>

      <label>
        Time *
        <input type="time" name="time" required />
      </label>

      <label>
        Guests *
        <input type="number" name="guests" min={1} max={10} required />
      </label>

      <label>
        Occasion
        <select name="occasion">
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
