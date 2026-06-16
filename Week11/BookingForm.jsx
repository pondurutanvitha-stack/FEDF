import { useState } from "react";

function BookingForm({ bookings, setBookings }) {
  const [passenger, setPassenger] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const price = Math.floor(Math.random() * 5000) + 1000;

    const newBooking = {
      passenger,
      source,
      destination,
      travelDate,
      price,
      status: "Confirmed",
    };

    setBookings([...bookings, newBooking]);
    setMessage("Booking Successful!");

    setPassenger("");
    setSource("");
    setDestination("");
    setTravelDate("");
  };

  const handleReset = () => {
    setPassenger("");
    setSource("");
    setDestination("");
    setTravelDate("");
    setMessage("");
  };

  return (
    <div className="container">
      <h2>✈ Flight Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Passenger Name"
          value={passenger}
          onChange={(e) => setPassenger(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Source City"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Destination City"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
        />

        <div className="btn-group">
          <button className="book-btn" type="submit">
            Book Ticket
          </button>

          <button
            className="reset-btn"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      {source && destination && (
        <div className="preview">
          Route Preview: {source} ➜ {destination}
        </div>
      )}

      {bookings.length > 0 && (
        <div className="confirmation">
          <h3>Booking Confirmation</h3>

          <p>
            <strong>Passenger:</strong>{" "}
            {bookings[bookings.length - 1].passenger}
          </p>

          <p>
            <strong>Route:</strong>{" "}
            {bookings[bookings.length - 1].source} ➜{" "}
            {bookings[bookings.length - 1].destination}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {bookings[bookings.length - 1].travelDate}
          </p>

          <p>
            <strong>Ticket Price:</strong> ₹
            {bookings[bookings.length - 1].price}
          </p>

          <p>
            <strong>Status:</strong> Confirmed ✅
          </p>
        </div>
      )}

      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default BookingForm;
