import "./App.css";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <>
      <h1>Booking App</h1>
      <ReservationForm onAdd={() => {}}></ReservationForm>
    </>
  );
}

export default App;
