import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const ClockDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update every second for smooth seconds display
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // 12-hour format with AM/PM
    const hour12 = date.getHours() % 12 || 12;
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    
    return `${hour12.toString().padStart(2, '0')}:${minutes}:${seconds}`;
  };

  const formatAMPM = (date: Date) => {
    return date.getHours() >= 12 ? 'PM' : 'AM';
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg">
      <Clock size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
      <div className="text-right">
        <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {formatDate(currentTime)}
        </div>
        <div className="flex items-baseline gap-1">
          <div className="text-[12px] font-black text-slate-700 dark:text-slate-300 tabular-nums">
            {formatTime(currentTime)}
          </div>
          <div className="text-[8px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {formatAMPM(currentTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockDisplay;