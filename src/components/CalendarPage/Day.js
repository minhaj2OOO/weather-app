/*-----------------Displays the calendar grid --------------------*/


/*We have used the following resource to help us build this code:
*    Title: google-calendar-clone
*    Author: Esteban Codes
*    Date: 17 Sep 2021
*    Availability: https://github.com/3stbn/google-calendar-clone
*/

import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-red-400 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center cursor-pointer  ${getCurrentDayClass()}`}
          onClick={() => {
            setDaySelected(day);
            setShowEventModal(true);
          }}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-red-400 p-1 mr-3 text-black text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
