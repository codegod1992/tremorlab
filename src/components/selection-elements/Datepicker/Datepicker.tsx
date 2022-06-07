import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns';
import { classNames } from '@utils/classname-utils';


const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
];  

const Datepicker = () => {
    const today = startOfToday();
    const [selectedDay, setSelectedDay] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    function previousMonth() {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    function nextMonth() {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }
  
    return (
        <>
            <button className="rounded-md bg-gray-100 p-3">
                { String(selectedDay) }
            </button>
            <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-fit py-2 px-3">
                <div className="flex justify-between items-center py-2 px-1">
                    <button
                        type="button"
                        onClick={previousMonth}
                        className="inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500"
                    >
                        <span className="sr-only">Previous month</span>
                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </button>

                    <h2 className="font-semibold text-sm text-gray-900">
                        {format(firstDayCurrentMonth, 'MMMM yyyy')}
                    </h2>

                    <button
                        onClick={nextMonth}
                        type="button"
                        className="inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500"
                    >
                        <span className="sr-only">Next month</span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </button>

                </div>
                <div className="grid grid-cols-7 text-xs leading-6 text-center font-medium text-gray-400">
                    <div className="flex items-center justify-center w-10 h-10">Su</div>
                    <div className="flex items-center justify-center w-10 h-10">Mo</div>
                    <div className="flex items-center justify-center w-10 h-10">Tu</div>
                    <div className="flex items-center justify-center w-10 h-10">We</div>
                    <div className="flex items-center justify-center w-10 h-10">Th</div>
                    <div className="flex items-center justify-center w-10 h-10">Fr</div>
                    <div className="flex items-center justify-center w-10 h-10">Sa</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                    {days.map((day, dayIdx) => (
                        <div
                            key={day.toString()}
                            className={classNames(
                                dayIdx === 0 && colStartClasses[getDay(day)],
                                'py-1'
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedDay(day)}
                                className={classNames(
                                    isEqual(day, selectedDay) && 'text-white',
                                    !isEqual(day, selectedDay) && isToday(day) && 'text-blue-500',
                                    !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth)
                                    && 'text-gray-900',
                                    !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth)
                                    && 'text-gray-400',
                                    isEqual(day, selectedDay) && isToday(day) && 'bg-blue-500',
                                    isEqual(day, selectedDay) && !isToday(day) && 'bg-blue-500',
                                    !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                    (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                )}
                            >
                                <time dateTime={format(day, 'yyyy-MM-dd')}>
                                    {format(day, 'd')}
                                </time>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Datepicker;
