import React, { useEffect, useState } from "react";

export default function CalendarView({ tasks }) {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const year = new Date().getFullYear();

  // Fetch holidays from Nager.Date API
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/NG`);
        const data = await res.json();
        setHolidays(data);
      } catch (err) {
        console.error("Error fetching holidays:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHolidays();
  }, [year]);

  const filteredHolidays = holidays.filter(
    (h) => new Date(h.date).getMonth() === selectedMonth
  );

  // Filter tasks for selected month
  const tasksForMonth = tasks.filter(
    (t) => new Date(t.date).getMonth() === selectedMonth
  );

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-3xl mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">📅 Calendar View</h2>

      <div className="flex justify-center mb-4">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="border px-3 py-2 rounded-lg dark:bg-gray-700"
        >
          {monthNames.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading holidays...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Study Tasks</h3>
            {tasksForMonth.length > 0 ? (
              <ul className="list-disc ml-6">
                {tasksForMonth.map((task) => (
                  <li key={task.id}>
                    <span className="font-medium">{task.title}</span> — {task.date}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No tasks scheduled this month.</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Public Holidays (Nigeria)</h3>
            {filteredHolidays.length > 0 ? (
              <ul className="list-disc ml-6">
                {filteredHolidays.map((h) => (
                  <li key={h.date}>
                    <span className="font-medium">{h.localName}</span> — {h.date}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No holidays this month.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
