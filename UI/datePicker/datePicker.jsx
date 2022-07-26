import React, {useEffect, useState} from "react";
import classes from "./datePicker.module.css";
import DefaultButton from "../buttons/default-button/default-button";
import DateData from "./dateData";
import useDateMakers from "./use-dateMakers";
import Backdrop from "../backdrop/backdrop";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DatePicker = ({setDates}) => {  // f from upper component.. in this case will do it for redux

    const {
        createRows,
        currentMonthDays
    } = useDateMakers()

    const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const years = range(2011, 2031, 1)
    const day1 = 1;
    const tableRow = [
        "sun",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat"
    ]


    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const [month, setMonth] = useState(new Date().getMonth())

    const [year, setYear] = useState(new Date().getFullYear())

    const [firstDay, setFirstDay] = useState(new Date(year, month, 1).getDay()) //  first day of week

    const [prevLastDay, setPrevLastDay] = useState(getDays(year, month)) // prev. month's last day of week

    const [thisLastDay, setThisLastDay] = useState(getDays(year, month + 1)) // this month\s last day (whether it's 30,31,29,28)

    const [thisLastDayofWeek, setThisLastDayofWeek] = useState(new Date(year, month, thisLastDay).getDay()) // this month's last day of week

    const firstSunday = firstDay === 6 ? day1 : day1 + 6 - firstDay; // this month first sunday,a s we start the calendar from sunday..

    const [thisMonthArray, setThisMonthArray] = useState([]) // creates an array with all the days of the week per week including the prev and following month's days

    const [openCalendar, setOpenCalendar] = useState(false) // open/close the calendar

    const [monthPicker, setMonthPicker] = useState(false) // open the month chooser

    const [yearPicker, setYearPicker] = useState(false) // open the year picker

    const [chosenDates, setChooseDates] = useState([null, null]) // chosen dates

    const [over, setOver] = useState(null)  // if the mouse is ver the cell (for css)

    const [animation, setAnimation] = useState(false)


    const changeCalendar = () => {
        setOpenCalendar(!openCalendar)
    //    setAnimation(true)
    }


    const actionReset = () => {
        setOver(null)
        setChooseDates([null, null])
        setMonth(new Date().getMonth())
        setYear(new Date().getFullYear())
        // setAnimation(true)
        setDates([null, null])
    }


    const actionSubmit = () => {
        setOpenCalendar(!openCalendar)
        setDates(chosenDates)
        //setChooseDates([null, null])


    }

    const chooseDate = (label, month, year) => {
      //  setAnimation(false)

        const range = [...chosenDates]

        if (range[0] === null) {
            range[0] = new Date(year, month, label)
        } else if (range[0] !== null && range[1] === null) {
            if (range[0] < new Date(year, month, label)) {
                range[1] = new Date(year, month, label)
            } else if (range[0] > new Date(year, month, label)) {
                range[1] = range[0]
                range[0] = new Date(year, month, label)
            }
        } else {
            range[0] = new Date(year, month, label)
            range[1] = null

        }
        setChooseDates(range)

    }

    const mouseOver = (label, month, year) => {
        setOver(new Date(year, month, label).getTime())
    }

    const changeMonth = change => {
       // setAnimation(false)
        if (change) {
            if (month !== 11) {
                setMonth(month + 1)
            } else {
                setMonth(0);
                setYear(year + 1)
            }
        } else {
            if (month !== 0) {
                setMonth(month - 1)
            } else {
                setMonth(11);
                setYear(year - 1)
            }
        }

    }

    const chooseMonth = (month) => {
        setMonth(months.indexOf(month))
        setMonthPicker(!monthPicker)
    }

    const openMonthPicker = () => {
        setMonthPicker(!monthPicker)
    }

    const chooseYear = (year) => {
        setYear(year)
        setYearPicker(!yearPicker)
    }

    const openYearPicker = () => {
        setYearPicker(!yearPicker)
    }

    const cls = !chosenDates[0] ? classes.calendarDatesClose : classes.hasDates


    useEffect(() => {
        setThisMonthArray(currentMonthDays(thisLastDay, firstDay, prevLastDay, firstSunday, thisLastDayofWeek, tableRow))
    }, [thisLastDay, firstDay, prevLastDay, firstSunday, thisLastDayofWeek])

    useEffect(() => {
        setFirstDay(new Date(year, month, 1).getDay())
    }, [year, month])

    useEffect(() => {
        setPrevLastDay(getDays(year, month))
    }, [year, month])

    useEffect(() => {
        setThisLastDay(getDays(year, month + 1))
    }, [year, month])

    useEffect(() => {
        setThisLastDayofWeek(new Date(year, month, thisLastDay).getDay())
    }, [year, month, thisLastDay])


    return (
        <div className={classes.calendarContainer}>
            <div className={classes.dateInput}>
                {chosenDates[0] ?
                    chosenDates.map((item,i) =>
                            item && <div className={classes.dateItem}
                            key={`date-${i}`}>
                                {`${months[new Date(item).getMonth()]}
                                ${new Date(item).getDate()}`}
                            </div>
                    )
                    : <div> Choose the dates </div>}
                <div className={classes.buttonsHolder}>
                    <DefaultButton
                        width={22}
                        height={22}
                        className={cls}
                        label={<span className="material-icons">close</span>}
                        color={"danger-outlined"}
                        onClick={actionReset}
                    />
                    <DefaultButton
                        width={22}
                        height={22}
                        className={classes.calendarButton}
                        label={<span className="material-icons">calendar_month</span>}
                        color={"danger-outlined"}
                        onClick={changeCalendar}
                    />
                </div>


            </div>

            {openCalendar &&
                <div>
                    <Backdrop open={openCalendar} handleOpen={changeCalendar} blur zIndex={2}/>
                    <div className={classes.dateContainer}>
                        <div className={classes.dateHeader}>
                            <DefaultButton
                                label={<span className="material-icons"> keyboard_arrow_left</span>}
                                width={40}
                                height={40}
                                color={"danger-outlined"}
                                onClick={() => {
                                    changeMonth(false)
                                }}
                            />
                            <div className={classes.headerContent}>
                                <div
                                    onClick={openMonthPicker}
                                    className={classes.picker}>
                                    {months[month]}
                                </div>
                                <div
                                    onClick={openYearPicker}
                                    className={classes.picker}>
                                    {year}
                                </div>
                            </div>

                            <DefaultButton
                                label={<span className="material-icons"> keyboard_arrow_right</span>}
                                width={40}
                                height={40}
                                color={"danger-outlined"}
                                onClick={() => {
                                    changeMonth(true)
                                }}
                            />
                        </div>
                        <div className={classes.relative}>
                            {monthPicker && <div className={classes.pickerContainer}>
                                <table className={classes.monthTable}>
                                    <tbody>
                                    {createRows(4, months, chooseMonth)}
                                    </tbody>
                                </table>
                            </div>}
                            {yearPicker && <div className={classes.pickerContainer}>
                                <table className={classes.monthTable}>
                                    <tbody>
                                    {createRows(4, years, chooseYear)}
                                    </tbody>
                                </table>
                            </div>}

                            <table className={classes.dateTable}>
                                <thead>
                                <tr>
                                    <th key={"Sunday"}>Sun</th>
                                    <th key={"Monday"}>Mon</th>
                                    <th key={"Tuesday"}>Tue</th>
                                    <th key={"Wednesday"}>Wed</th>
                                    <th key={"Thursday"}>Thu</th>
                                    <th key={"Friday"}>Fri</th>
                                    <th key={"Saturday"}>Sat</th>
                                </tr>
                                </thead>
                                <tbody>
                                {thisMonthArray.map((item, index) =>
                                    <tr key={`row-${index}-${year}-${month}-${item[0]}`}>
                                        {item.map((day, i) => {
                                                if (index === 0 && i < firstDay) {
                                                    return <DateData
                                                        classname={animation}
                                                        styles={{
                                                            animationDelay: `${(index + i) * 100}ms`
                                                        }}
                                                        key={`data-${year}-${month}-${index}-${i}-${day}`}
                                                        label={day}
                                                        month={month === 0 ? 11 : month - 1}
                                                        year={month - 1 > month ?
                                                            year - 1 :
                                                            year}
                                                        selected={chosenDates}
                                                        onselect={chooseDate}
                                                        over={over}
                                                        mouseOver={mouseOver}/>
                                                } else if (index === thisMonthArray.length - 1 && i > thisLastDayofWeek) {
                                                    return <DateData
                                                        classname={animation}
                                                        styles={{
                                                            animationDelay: `${(index + i) * 100}ms`
                                                        }}
                                                        key={`data-${year}-${month}-${index}-${i}-${day}`}
                                                        label={day}
                                                        month={month === 11 ? 0 : month + 1}
                                                        year={month + 1 < month ?
                                                            year + 1 :
                                                            year}
                                                        selected={chosenDates}
                                                        onselect={chooseDate}
                                                        over={over}
                                                        mouseOver={mouseOver}/>
                                                } else {
                                                    return <DateData
                                                        classname={animation}
                                                        styles={{
                                                            animationDelay: `${(index + i) * 100}ms`
                                                        }}
                                                        key={`data-${year}-${month}-${index}-${i}-${day}`}
                                                        label={day}
                                                        month={month}
                                                        year={year}
                                                        selected={chosenDates}
                                                        onselect={chooseDate}
                                                        over={over}
                                                        mouseOver={mouseOver}
                                                    />
                                                }
                                            }
                                        )}
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className={classes.calendarActionButtons}>
                            <DefaultButton
                                label={"Submit"}
                                width={100}
                                height={30}
                                color={"danger"}
                                onClick={actionSubmit}
                            />
                            <DefaultButton
                                label={"Reset"}
                                width={100}
                                height={30}
                                color={"danger-outlined"}
                                onClick={actionReset}

                            />
                        </div>

                    </div>
                </div>
            }


        </div>

    )
}

export default DatePicker

