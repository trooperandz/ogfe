import { useAppContext } from 'hooks';
import * as React from 'react';
import { Link } from 'react-router';

export default function DashboardPage() {
  const state = useAppContext();
  console.log({ state });

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-900">
      <h1>Dashboard</h1>
      <h3>Hello, {state.user}</h3>
      <Link to="/about" className="py-2">{`About >`}</Link>
    </div>
  );
}
