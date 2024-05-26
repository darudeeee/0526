import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
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
    <div style={{ textAlign: "center" }}>
      <h1>Event Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div>
        <h2>Selected Date: {selectedDate.toDateString()}</h2>
        <input
          type="text"
          value={eventText}
          onChange={handleEventTextChange}
          placeholder="Add Event"
        />
        <button onClick={addEvent}>Add Event</button>
      </div>
      <div>
        <h3>Events:</h3>
        <ul>
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
