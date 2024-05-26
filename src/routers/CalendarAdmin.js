import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import './stylesheet/CalendarAdmin.css';

function CalendarAdmin() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [eventText, setEventText] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEventTextChange = (event) => {
    setEventText(event.target.value);
  };

  const addEvent = () => {
    const dateKey = selectedDate.toDateString();
    if (eventText.trim() === "") return;
  
    setEvents((prevEvents) => {
      const newEvents = { ...prevEvents };
      if (!newEvents[dateKey]) {
        newEvents[dateKey] = [];
      }
      newEvents[dateKey].push(eventText);
      return newEvents;
    });
  
    setEventText("");
  };

  const deleteEvent = (dateKey, index) => {
    setEvents((prevEvents) => {
      const newEvents = { ...prevEvents };
      newEvents[dateKey].splice(index, 1);
      if (newEvents[dateKey].length === 0) {
        delete newEvents[dateKey];
      }
      return newEvents;
    });
  };

  return (
    <div className="calendar-admin-container">
      <div className="navigation-icons">
        <Link to="/mainadmin">
          <ReplyIcon className="icon" 
          sx={{
              fontSize: 40,
              color: "#beb4f5",
              "&:hover": {
                color: "black",
              },
            }}/>
        </Link>
        <Link to="/mainadmin">
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
      <div className="event-input">
        <h2>Selected Date: {selectedDate.toDateString()}</h2>
        <input
          type="text"
          value={eventText}
          onChange={handleEventTextChange}
          placeholder="Add Event"
        />
        <button onClick={addEvent} className="add-event-button">Add Event</button>
      </div>
      <div className="events-container">
        <h3>Events:</h3>
        <ul className="event-list">
          {events[selectedDate.toDateString()]?.map((event, index) => (
            <li key={index}>
              {event} <button onClick={() => deleteEvent(selectedDate.toDateString(), index)}>Delete</button>
            </li>
          )) || <li>No events</li>}
        </ul>
      </div>
    </div>
  );
}

export default CalendarAdmin;
