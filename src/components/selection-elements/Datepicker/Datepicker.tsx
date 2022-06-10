import React, { useRef, useState } from 'react';

import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    parse,
    startOfToday,
} from 'date-fns';

import {
    colStartClasses,
    displaySelected,
    getDayBgColorClassName,
    getDayHoverBgColorClassName,
    getDayRoundedClassName,
    getDayTextColorClassName,
    nextMonth,
    previousMonth
} from 'components/selection-elements/Datepicker/date-picker-utils';
import { classNames } from '@utils/classname-utils';
import { useOnClickOutside } from '@utils/utils';

const Datepicker = () => {
    const [showDatePickerModal, setShowDatePickerModal] = useState(false);
    const datePickerRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(datePickerRef, () => setShowDatePickerModal(false));

    const today = startOfToday();
    const [hoveredDay, setHoveredDay] = useState<Date|null>(null);
    const [selectedStartDay, setSelectedStartDay] = useState<Date|null>(null);
    const [selectedEndDay, setSelectedEndDay] = useState<Date|null>(null);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    const handleDayClick = (day: Date) => {
        if (!selectedStartDay) {
            setSelectedStartDay(day);
        } else if (selectedStartDay && !selectedEndDay) {
            if (day < selectedStartDay) {
                setSelectedStartDay(day);
            } else if (day > selectedStartDay) {
                setSelectedEndDay(day);
                setShowDatePickerModal(false);
            }
        } else if (selectedStartDay && selectedEndDay) {
            setSelectedStartDay(day);
            setSelectedEndDay(null);
        }
    };

    return (
        <>
            <div className="flex space-x-2">
                <div className="flex items-center justify-between text-sm font-medium text-gray-700 border-gray-300 
                    bg-white">
                    <button
                        onClick={ () => setShowDatePickerModal(true)}
                        className="flex whitespace-nowrap items-center pl-2 pr-4 py-2 space-x-4 rounded-l-md border 
                            border-r-0 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-opacity-100
                            focus:outline-none focus:ring-blue-300"
                    >
                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>{ displaySelected(selectedStartDay, selectedEndDay) }</span>
                    </button>
                    <button className="inline-flex justify-center w-full rounded-r-md border px-4 py-2 hover:bg-gray-50 
                        focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300">
                        Last month
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                </div>
            </div>
            { showDatePickerModal ? (
                <div
                    ref={ datePickerRef }
                    className="absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-fit py-2 px-3"
                >
                    <div className="flex justify-between items-center py-2 px-1">
                        <button
                            type="button"
                            onClick={() => previousMonth(firstDayCurrentMonth, setCurrentMonth)}
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
                            onClick={() => nextMonth(firstDayCurrentMonth, setCurrentMonth)}
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
                                    onClick={() => handleDayClick(day)}
                                    onMouseEnter={ () => setHoveredDay(day) }
                                    onMouseLeave={ () => setHoveredDay(null) }
                                    className={classNames(
                                        getDayBgColorClassName(day, selectedStartDay, selectedEndDay, hoveredDay),
                                        getDayTextColorClassName(day, selectedStartDay, selectedEndDay, hoveredDay),
                                        getDayHoverBgColorClassName(day, selectedStartDay, selectedEndDay),
                                        getDayRoundedClassName(day, selectedStartDay, selectedEndDay, hoveredDay),
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

            ) : null }
        </>
    );
};

export default Datepicker;
