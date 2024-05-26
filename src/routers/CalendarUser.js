import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import './stylesheet/Calendar.css';

function CalendarUser({ events = {} }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-admin-container">
      <div className="navigation-icons">
        <Link to="/mainuser">
          <ReplyIcon className="icon" 
          sx={{
              fontSize: 40,
              color: "#beb4f5",
              "&:hover": {
                color: "black",
              },
            }}/>
        </Link>
        <Link to="/mainuser">
          <HomeIcon className="icon" 
          sx={{
            fontSize: 40,
            color: "#beb4f5",
            "&:hover": {
              color: "black",
            },
          }}/>
        </Link>
      </div>
      <h1>Event Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="events-container">
        <h2>Selected Date: {selectedDate.toDateString()}</h2>
        <h3>Events:</h3>
        <ul className="event-list">
          {events[selectedDate.toDateString()]?.map((event, index) => (
            <li key={index}>
              {event}
            </li>
          )) || <li>No events</li>}
        </ul>
      </div>
    </div>
  );
}

export default CalendarUser;
