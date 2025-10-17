import React from "react";

function HolidayNotice() {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  // Example: simple mock holidays
  const holidays = [
    { month: 0, date: 1, name: "New Year’s Day" },
    { month: 11, date: 25, name: "Christmas Day" },
  ];

  const todayHoliday = holidays.find(
    (h) => h.month === month && h.date === date
  );

  return (
    <div className="w-full max-w-md bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 p-3 rounded-lg shadow">
      {todayHoliday ? (
        <p>Today is {todayHoliday.name}! Take a well-deserved break.</p>
      ) : (
        <p> No holidays today stay consistent with your study plan!</p>
      )}
    </div>
  );
}

export default HolidayNotice;
