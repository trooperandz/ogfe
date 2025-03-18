import { useAppContext } from 'hooks';
import * as React from 'react';

import { Link } from 'components/Link';

export default function DashboardPage() {
  const appState = useAppContext();

  return (
    <div className="bg-slate-900 h-screen">
      <div className="absolute left-4 top-4">
        <Link url="/about" text="About >" />
      </div>

      <div className="flex flex-col items-center mb-30">
        <h1 className="pt-8 text-center">Fluid Interaction Layer</h1>
        <h3 className="text-amber-600">Hello, {appState.user}</h3>
      </div>

      <div className="flex flex-col items-center justify-center px-6 w-screen gap-10 md:gap-20 bg-slate-900">
        <div className="flex flex-col md:flex-row w-screen px-6 gap-10 h-96">
          <div className="flex flex-1 md:flex-1/6 items-center justify-center font-bold bg-amber-500 rounded-sm">
            <p className="px-4 text-center">Frequency Modulation</p>
          </div>

          <div className="flex flex-1 md:flex-4/6 items-center justify-center font-bold bg-blue-400 rounded-sm">
            <p className="px-4 text-center">Intelligence Waveform Panel</p>
          </div>

          <div className="flex flex-1 md:flex-1/6 items-center justify-center font-bold bg-purple-400 rounded-sm">
            <p className="px-4 text-center">Thought Interaction</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center font-bold h-24 md:h-48 md:w-9/12 bg-pink-400 rounded-sm">
          <p className="px-4 text-center">Audio Resonance</p>
        </div>
      </div>
    </div>
  );
}
