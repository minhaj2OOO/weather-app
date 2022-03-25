import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./CalendarPage/calendar_info";
import Header from "./CalendarPage/Header";
import Month from "./CalendarPage/Month";
import GlobalContext from "../context/GlobalContext";
import Event from "./CalendarPage/Event";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      {showEventModal && <Event />}
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
