import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
    const [date, setDate] = useState( Date());
  return (
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 className="text-amber-400 my-8 text-xl font-bold">Calendar</h1>
          <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
