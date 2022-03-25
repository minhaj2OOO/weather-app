/*--------- This is the dynamic header for the calendar page that displays month and year --------------*/


/*We have used the following resource to help us build this code:
*    Title: google-calendar-clone
*    Author: Esteban Codes
*    Date: 17 Sep 2021
*    Availability: https://github.com/3stbn/google-calendar-clone
*/

import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function Header() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-12 py-2 flex items-center">     
      <button onClick={handleReset} className="border rounded bg-red-400 text-white py-2 px-3">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined text-black mx-2 mt-2">
          chevron_left
        </span>
      </button>
      <h2 className="text-xl text-black-600">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined text-black mx-2 mt-2">
          chevron_right
        </span>
      </button>
    </header>
  );
}
