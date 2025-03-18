import * as React from 'react';
import { Link } from 'react-router';

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-900">
      <h1>Dashboard</h1>
      <Link to="/about" className="py-2">{`About >`}</Link>
    </div>
  );
}
