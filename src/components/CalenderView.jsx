// src/components/CalendarView.jsx
import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

export default function CalendarView({ tasks }) {
  const [dates, setDates] = useState([]);
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const start = startOfMonth(today);
    const end = endOfMonth(today);
    setDates(eachDayOfInterval({ start, end }));
  }, []);

  useEffect(() => {
    
    fetch("https://date.nager.at/api/v3/PublicHolidays/2025/US")
      .then(res => res.json())
      .then(data => setHolidays(data))
      .catch(err => console.error("Error fetching holidays", err));
  }, []);

  const isHoliday = (date) =>
    holidays.some(h => h.date === format(date, "yyyy-MM-dd"));

  return (
    <div className="p-4 grid grid-cols-7 gap-2">
      {dates.map(date => (
        <div
          key={date}
          className={`border p-2 rounded-lg min-h-[100px] ${
            isHoliday(date) ? "bg-red-100" : "bg-gray-50 dark:bg-gray-800"
          }`}
        >
          <div className="text-sm font-semibold">
            {format(date, "d")}
          </div>
          <ul className="text-xs mt-2">
            {tasks
              .filter(task => task.date === format(date, "yyyy-MM-dd"))
              .map(task => (
                <li key={task.id} className="truncate">
                  • {task.title}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
