import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/booking/all`).then((response) => {
      const bookingsList = response.data.data;
      // sort bookings by start_date
      const sortedBookings = bookingsList.sort((a, b) => {
        return parseInt(a.start_date) - parseInt(b.start_date);
      });
      setBookings(sortedBookings);
    });
  }, []);
  return (
    <div>
      {bookings.map((booking, index) => {
        // Get current time in epoch format from timeserver
        const currentTime = parseInt(new Date() / 1000);
        const startTime = parseInt(booking.start_date);
        const endTime = startTime + 3600;

        let status, color;
        if (currentTime < startTime) {
          status = "Session has not started yet";
          color = "bg-blue-200";
        } else if (currentTime > endTime) {
          status = "Session has ended";
          color = "bg-green-200";
        } else {
          status = "Session is active";
          color = "bg-red-200";
        }

        return (
          <div key={index} className={`${color} mb-2`}>
            <div>status: {status}</div>

            <div>
              start time: {startTime} {new Date(startTime * 1000).toString()}
            </div>
            <div>
              end time: {endTime} {new Date(endTime * 1000).toString()}
            </div>

            <br />
          </div>
        );
      })}
    </div>
  );
}
