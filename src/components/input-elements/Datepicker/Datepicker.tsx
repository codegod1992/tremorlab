import React, { useEffect, useRef, useState } from 'react';

import {
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    parse,
    startOfMonth,
    startOfToday,
    startOfYear,
    sub,
} from 'date-fns';

import { ArrowDownHeadIcon, ArrowLeftHeadIcon, ArrowRightHeadIcon, CalendarIcon } from 'assets';
import { BaseColors, classNames, getColorVariantsFromColorThemeValue } from 'lib';
import { Color, MarginTop, MaxWidth } from '../../../lib/inputTypes';
import {
    colStartClasses,
    displaySelected,
    getDayBgColorClassName,
    getDayHoverBgColorClassName,
    getDayRoundedClassName,
    getDayTextClassNames,
    nextMonth,
    previousMonth,
    relativeFilterOptions
} from 'components/input-elements/Datepicker/utils';
import { defaultColors, fontSize, fontWeight, sizing, spacing } from 'lib';
import Modal from 'components/layout-elements/Modal';

export interface DatepickerProps {
    handleSelect?: { (selectedStartDay: Date | null, selectedEndDay: Date|null): void },
    enableRelativeDates?: boolean,
    defaultStartDate?: Date | null,
    defaultEndDate?: Date | null,
    placeholder?: string,
    color?: Color,
    marginTop?: MarginTop,
    maxWidth?: MaxWidth
}

const Datepicker = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (selectedStartDay: Date | null, selectedEndDay: Date | null) => null,
    enableRelativeDates = true,
    defaultStartDate = null,
    defaultEndDate = null,
    placeholder = 'Select...',
    color = BaseColors.Blue,
    marginTop = 'mt-0',
    maxWidth = 'max-w-none',
}: DatepickerProps) => {
    const [showDatePickerModal, setShowDatePickerModal] = useState(false);
    const [showDropdownModal, setShowDropdownModal] = useState(false);

    const [selectedRelativeFilterOption, setSelectedRelativeFilterOption] = useState<string | null>(null);

    const datePickerRef = useRef(null);
    const dropdownRef = useRef(null);

    const today = startOfToday();
    const hasDefaultDateRange = (defaultStartDate !== null) && (defaultEndDate !== null);

    const [hoveredDay, setHoveredDay] = useState<Date | null>(null);
    const [selectedStartDay, setSelectedStartDay] = useState<Date | null>(
        hasDefaultDateRange ? defaultStartDate : null);
    const [selectedEndDay, setSelectedEndDay] = useState<Date | null>(hasDefaultDateRange ? defaultEndDate : null);
    const [currentMonth, setCurrentMonth] = useState(
        hasDefaultDateRange ? format(selectedEndDay!, 'MMM-yyyy') : format(today, 'MMM-yyyy'));
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

    const handleRelativeFilterOptionClick = (selectedRelativeFilterOption: string) => {
        switch(selectedRelativeFilterOption) {
        case 'w':
            setSelectedStartDay(sub(today, { days: 7 }));
            setSelectedEndDay(today);
            break;
        case 't':
            setSelectedStartDay(sub(today, { days: 30 }));
            setSelectedEndDay(today);
            break;
        case 'm':
            setSelectedStartDay(startOfMonth(today));
            setSelectedEndDay(today);
            break;
        case 'y':
            setSelectedStartDay(startOfYear(today));
            setSelectedEndDay(today);
            break;
        }
    };

    useEffect(() => {
        if (selectedEndDay) handleSelect(selectedStartDay, selectedEndDay);
    }, [selectedEndDay]);

    return (
        <div className={ classNames(
            'relative w-full',
            marginTop,
            maxWidth,
        ) }>
            <div className={ classNames(
                'flex items-center justify-between rounded-md shadow-sm',
                getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
            ) }
            >
                <button
                    ref={ datePickerRef }
                    onClick={ () => setShowDatePickerModal(!showDatePickerModal) }
                    className={ classNames(
                        'flex items-center w-full truncate rounded-l-md border',
                        'focus:ring-2 focus:outline-none focus:z-10',
                        enableRelativeDates ? 'border-r-0' : 'rounded-r-md border-r',
                        getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                        getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                        getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                        spacing.twoXl.paddingLeft,
                        spacing.twoXl.paddingRight,
                        spacing.sm.paddingTop,
                        spacing.sm.paddingBottom,
                    ) }
                >
                    <CalendarIcon
                        className={ classNames(
                            'flex-none',
                            getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                            sizing.lg.height,
                            sizing.lg.width,
                            spacing.threeXs.negativeMarginLeft,
                            spacing.lg.marginRight,
                        ) }
                        aria-hidden="true"
                    />
                    <p className={ classNames(
                        'whitespace-nowrap truncate',
                        fontSize.sm,
                        fontWeight.md,
                        selectedStartDay
                            ? getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor
                            : getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                    ) }>
                        { selectedStartDay ? String(displaySelected(selectedStartDay, selectedEndDay)) : placeholder }
                    </p>
                </button>
                { enableRelativeDates ? (
                    <button
                        ref={ dropdownRef }
                        onClick={ () => setShowDropdownModal(!showDropdownModal) }
                        className={ classNames(
                            'inline-flex justify-between w-48 truncate rounded-r-md border',
                            'focus:ring-2 focus:outline-none',
                            getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                            getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                            getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                            spacing.twoXl.paddingLeft,
                            spacing.twoXl.paddingRight,
                            spacing.px.negativeMarginLeft,
                            spacing.sm.paddingTop,
                            spacing.sm.paddingBottom,
                        ) }
                    >
                        <p className={ classNames(
                            'whitespace-nowrap truncate',
                            fontSize.sm,
                            fontWeight.md,
                            selectedRelativeFilterOption
                                ? getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor
                                : getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                        ) }>
                            { selectedRelativeFilterOption
                                ? String(relativeFilterOptions.find((filterOption) => (
                                    filterOption.value === selectedRelativeFilterOption
                                ))?.name)
                                : 'Select' }
                        </p>
                        <ArrowDownHeadIcon
                            className={ classNames(
                                'flex-none',
                                sizing.lg.height,
                                sizing.lg.width,
                                spacing.twoXs.negativeMarginRight,
                                getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                            ) }
                            aria-hidden="true"
                        />
                    </button>
                ) : null }
            </div>
            <Modal
                showModal={ showDatePickerModal }
                setShowModal={ setShowDatePickerModal }
                triggerRef={ datePickerRef }
                width="w-72"
                maxHeight="max-h-fit"
            >
                <div
                    className={ classNames(
                        spacing.lg.paddingLeft,
                        spacing.lg.paddingRight,
                        spacing.twoXs.paddingTop,
                        spacing.twoXs.paddingBottom,
                    ) }
                >
                    <div className={ classNames(
                        'flex justify-between items-center',
                        spacing.twoXs.paddingLeft,
                        spacing.twoXs.paddingRight,
                        spacing.sm.paddingTop,
                        spacing.sm.paddingBottom,
                    )}
                    >
                        <button
                            type="button"
                            onClick={() => previousMonth(firstDayCurrentMonth, setCurrentMonth)}
                            className={ classNames(
                                'inline-flex border rounded shadow-sm focus:outline-none focus:ring-2',
                                getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                                getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                                getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                                spacing.twoXs.paddingLeft,
                                spacing.twoXs.paddingRight,
                                spacing.twoXs.paddingTop,
                                spacing.twoXs.paddingBottom,
                                fontSize.sm,
                                fontWeight.md,
                            ) }
                        >
                            <ArrowLeftHeadIcon
                                className={ classNames(
                                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                                    sizing.lg.height,
                                    sizing.lg.width,
                                ) }
                                aria-hidden="true"
                            />
                        </button>
                        <h2 className="font-semibold text-sm text-gray-900">
                            {format(firstDayCurrentMonth, 'MMMM yyyy')}
                        </h2>
                        <button
                            onClick={() => nextMonth(firstDayCurrentMonth, setCurrentMonth)}
                            type="button"
                            className={ classNames(
                                'inline-flex border rounded shadow-sm focus:outline-none focus:ring-2',
                                getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                                getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                                getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                                spacing.twoXs.paddingLeft,
                                spacing.twoXs.paddingRight,
                                spacing.twoXs.paddingTop,
                                spacing.twoXs.paddingBottom,
                                fontSize.sm,
                                fontWeight.md,
                            ) }
                        >
                            <ArrowRightHeadIcon
                                className={ classNames(
                                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                                    sizing.lg.height,
                                    sizing.lg.width,
                                ) }
                                aria-hidden="true"
                            />
                        </button>

                    </div>
                    <div className={ classNames(
                        'grid grid-cols-7 text-center',
                        getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                        fontSize.xs,
                        fontWeight.md,
                    ) }
                    >
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                Su
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                Mo
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                Tu
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                We
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                Th
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                Fr
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className={ classNames(
                                'flex items-center justify-center w-full',
                                sizing.threeXl.height
                            ) }
                            >
                                Sa
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
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
                                        'w-full flex items-center justify-center',
                                        getDayBgColorClassName(
                                            day,
                                            selectedStartDay,
                                            selectedEndDay,
                                            hoveredDay,
                                            color,
                                        ),
                                        getDayTextClassNames(
                                            day,
                                            selectedStartDay,
                                            selectedEndDay,
                                            hoveredDay,
                                            color,
                                        ),
                                        getDayHoverBgColorClassName(day, selectedStartDay, selectedEndDay),
                                        getDayRoundedClassName(day, selectedStartDay, selectedEndDay, hoveredDay),
                                        sizing.threeXl.height,
                                        fontSize.sm,
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
            </Modal>
            <Modal
                showModal={ showDropdownModal }
                setShowModal={ setShowDropdownModal }
                triggerRef={ dropdownRef }
            >
                { relativeFilterOptions.map((filterOption) => (
                    <button
                        key={ filterOption.value }
                        onClick={ () => {
                            setSelectedRelativeFilterOption(filterOption.value);
                            handleRelativeFilterOptionClick(filterOption.value);
                            setShowDropdownModal(false);
                        } }
                        className={ classNames(
                            'flex items-center justify-between w-full truncate',
                            spacing.twoXl.paddingLeft,
                            spacing.twoXl.paddingRight,
                            spacing.md.paddingTop,
                            spacing.md.paddingBottom,
                            fontSize.sm,
                            selectedRelativeFilterOption === filterOption.value
                                ? classNames(
                                    getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor,
                                    getColorVariantsFromColorThemeValue(defaultColors.darkestText).textColor,
                                )
                                : classNames(
                                    getColorVariantsFromColorThemeValue(defaultColors.lightBackground).hoverBgColor,
                                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                                )
                        ) }
                    >
                        <p className="whitespace-nowrap truncate">
                            { filterOption.name }
                        </p>
                    </button>
                ))}      
            </Modal>
        </div>
    );
};

export default Datepicker;
