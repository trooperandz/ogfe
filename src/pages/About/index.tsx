import * as React from 'react';
import { Link } from 'react-router';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-900">
      <h1>About</h1>
      <Link to="/" className="py-2">{`Home >`}</Link>
    </div>
  );
}
