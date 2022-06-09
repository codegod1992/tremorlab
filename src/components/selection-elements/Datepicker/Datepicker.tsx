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
    const [hoveredDay, setHoveredDay] = useState(null);
    const [selectedStartDay, setSelectedStartDay] = useState(null);
    const [selectedEndDay, setSelectedEndDay] = useState(null);
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

    const getDayBgColorClassName = (day) => {
        if (selectedStartDay && isEqual(day, selectedStartDay)) {
            return 'bg-blue-500';
        }
        if (selectedStartDay && !selectedEndDay && hoveredDay && (day > selectedStartDay && day < hoveredDay)) {
            return 'bg-gray-200';
        }
        if (selectedEndDay && isEqual(day, selectedEndDay)) {
            return 'bg-blue-500';
        }
        if (selectedStartDay && selectedEndDay && (day > selectedStartDay && day < selectedEndDay)) {
            return 'bg-gray-200';
        }
        return 'bg-transparent';
        
    };
    const getDayTextColorClassName = (day) => {
        if (isEqual(day, today)) {
            if ((selectedStartDay && isEqual(day, selectedStartDay))
                || (selectedEndDay && isEqual(day, selectedEndDay))) {
                return 'text-white';
            }
            // if (selectedStartDay && selectedEndDay && (day > selectedStartDay && day < selectedEndDay)) {
            //     return 'text-white';
            // }
            return 'text-blue-500';
        }
        if (selectedStartDay && isEqual(day, selectedStartDay)) {
            return 'text-white';
        }
        if (selectedStartDay && !selectedEndDay && hoveredDay && (day > selectedStartDay && day < hoveredDay)) {
            return 'text-gray-900';
        }
        if (selectedEndDay && isEqual(day, selectedEndDay)) {
            return 'text-white';
        }
        if (selectedStartDay && selectedEndDay && (day > selectedStartDay && day < selectedEndDay)) {
            return 'text-blue-500';
        }
        return 'text-gray-900';
    };

    const getDayHoverBgColorClassName = (day) => {
        if (selectedStartDay && isEqual(day, selectedStartDay)) {
            return '';
        }
        if (selectedEndDay && isEqual(day, selectedEndDay)) {
            return '';
        }
        return 'hover:bg-gray-200';
    };

    const getDayRoundedClassName = (day) => {
        if (!selectedStartDay && !selectedEndDay) {
            return 'rounded-md';
        }
        if (selectedStartDay && selectedEndDay && isEqual(day, selectedStartDay)) {
            return 'rounded-l-md';
        }
        if (selectedStartDay && !selectedEndDay && !hoveredDay && isEqual(day, selectedStartDay)) {
            return 'rounded-md';
        }
        if (selectedStartDay && !selectedEndDay && hoveredDay && (day < selectedStartDay)) {
            return 'rounded-md';
        }
        if (selectedStartDay && !selectedEndDay && hoveredDay && (isEqual(day, selectedStartDay))
            && (hoveredDay > selectedStartDay)) {
            return 'rounded-l-md';
        }
        if (selectedStartDay && !selectedEndDay && hoveredDay && (day > selectedStartDay && day < hoveredDay)) {
            return 'rounded-none';
        }
        if (selectedStartDay && selectedEndDay && (day > selectedStartDay && day < selectedEndDay)) {
            return 'rounded-none';
        }
        if (selectedStartDay && !selectedEndDay && hoveredDay && isEqual(day, hoveredDay)
            && !isEqual(day, selectedStartDay)) {
            return 'rounded-r-md';
        }
        if (selectedStartDay && selectedEndDay && isEqual(day, selectedEndDay)) {
            return 'rounded-r-md';
        }
        if (selectedStartDay && selectedEndDay && (day < selectedStartDay || day > selectedEndDay)) {
            return 'rounded-md';
        }
        return 'rounded-md';
    };

    const handleClick = (day) => {
        if (!selectedStartDay) {
            setSelectedStartDay(day);
        } else if (selectedStartDay && !selectedEndDay) {
            if (day < selectedStartDay) {
                setSelectedStartDay(day);
            } else if (day > selectedStartDay) {
                setSelectedEndDay(day);
            }
        } else if (selectedStartDay && selectedEndDay) {
            setSelectedStartDay(day);
            setSelectedEndDay(null);
        }
    };

    const displaySelected = (selectedStartDay, selectedEndDay) => {
        if (!selectedStartDay && !selectedEndDay) {
            return 'dd/mm/yyyy - dd/mm/yyyy';
        } else if (selectedStartDay && !selectedEndDay) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return selectedStartDay.toLocaleDateString('en-US', options);
        } else if (selectedStartDay && selectedEndDay) {
            if ((selectedStartDay.getMonth() === selectedEndDay.getMonth())
                && (selectedStartDay.getFullYear() === selectedEndDay.getFullYear())) {
                const optionsStartDate = { month: 'long', day: 'numeric' };
                return `${selectedStartDay.toLocaleDateString('en-US', optionsStartDate)} - 
                        ${selectedEndDay.getDate()}, ${selectedEndDay.getFullYear()}`;
            } else {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return `${selectedStartDay.toLocaleDateString('en-US', options)} - 
                        ${selectedEndDay.toLocaleDateString('en-US', options)}`;
            }
        }
    };

    return (
        <>
            <button className="flex items-center justify-between rounded-md border border-gray-300 px-4 h-10
                    bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-opacity-100
                    focus:outline-none focus:ring-blue-300">
                { displaySelected(selectedStartDay, selectedEndDay) }
            </button>
            <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-fit py-2 px-3">
                <div className="flex justify-between items-center py-2 px-1">
                    <button
                        type="button"
                        onClick={previousMonth}
                        className="inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300
                            rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0
                            focus:ring-blue-500"
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
                        className="inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300
                            rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0
                            focus:ring-blue-500"
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
                    {days.map((day) => (
                        <div
                            key={day.toString()}
                            className={classNames(
                                colStartClasses[getDay(day)],
                                'w-full'
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => handleClick(day)}
                                onMouseEnter={ () => setHoveredDay(day) }
                                onMouseLeave={ () => setHoveredDay(null) }
                                className={classNames(
                                    getDayBgColorClassName(day),
                                    getDayTextColorClassName(day),
                                    getDayHoverBgColorClassName(day),
                                    getDayRoundedClassName(day),
                                    'h-10 w-10 flex items-center justify-center'
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
