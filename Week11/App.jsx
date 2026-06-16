import { useState } from "react";
import BookingForm from "./components/BookingForm";

function App() {
  const [bookings, setBookings] = useState([]);

  return (
    <>
      <h1 className="title">SkyJet Airlines</h1>

      <BookingForm
        bookings={bookings}
        setBookings={setBookings}
      />
    </>
  );
}

export default App;
