/*----------------- Gets the month for the calendar --------------------*/


/*We have used the following resource to help us build this code:
*    Title: google-calendar-clone
*    Author: Esteban Codes
*    Date: 17 Sep 2021
*    Availability: https://github.com/3stbn/google-calendar-clone
*/

import React from "react";
import Day from "./Day";

export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
