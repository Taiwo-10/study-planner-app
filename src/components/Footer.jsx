import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-3 text-sm mt-auto">
      <p>© {new Date().getFullYear()} Study Planner. All rights reserved.</p>
    </footer>
  );
}
