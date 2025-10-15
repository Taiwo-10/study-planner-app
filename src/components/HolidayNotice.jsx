
export default function HolidayNotice({ holidays }) {
  return (
    <div className="p-4 bg-yellow-100 dark:bg-yellow-800 rounded-xl">
      <h3 className="font-bold mb-2">Upcoming Holidays</h3>
      <ul>
        {holidays.slice(0, 5).map(h => (
          <li key={h.date}>
            {h.localName} - {h.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
