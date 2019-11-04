import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
  name: String,
  hotelName: String,
  arrivalDate: Date,
  departureDate: Date
});

export default mongoose.model("Reservation", ReservationSchema);
