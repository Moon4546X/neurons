"use client";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";

const Calendar = () => {
    const [currentDate] = useState(new Date());
    const days = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate),
    });

    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2">{format(currentDate, "MMMM yyyy")}</h2>
            <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-bold">{day}</div>
                ))}
                {Array(getDay(startOfMonth(currentDate)))
                    .fill(null)
                    .map((_, index) => (
                        <div key={`empty-${index}`} />
                    ))}
                {days.map((day) => (
                    <div key={day.toString()} className="text-center p-2 border">{format(day, "d")}</div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
