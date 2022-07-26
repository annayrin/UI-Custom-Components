import React from "react";

const useDateMakers = () => {

    const createRows = (row, array, onclick) => {
        let col = Math.round(array.length / row)
        let table = []
        for (let i = 0; i < row; i++) {
            const rowLines = []
            for (let j = col * i; j < col * (i + 1); j++) {
                rowLines.push(
                    <td key={`item-picker-${array[j]}`}
                        onClick={onclick ? () => onclick(array[j]) : null}>
                        {array[j]}
                    </td>
                )
            }
            table.push(
                <tr key={`item-row-${i}`}>
                    {rowLines}
                </tr>
            )
        }
        return table
    }


    const currentMonthDays = (last, firstDayofWeek, prevLastDay, firstSunday, thisLastDayofWeek, tableRow) => {
        let weeks;
        firstDayofWeek > 4 && last === 31 ? weeks = 6 :
            firstDayofWeek === 0 && last === 28 ? weeks = 4 :
                weeks = 5

        let monthArray = new Array(weeks).fill([...tableRow]);


        monthArray = monthArray.map((item, index) => {
            if (index === 0) {
                return item.map((day, i) => {
                    return day = i === firstDayofWeek ? 1
                        :
                        i > firstDayofWeek ?
                            1 + (i - firstDayofWeek)
                            : prevLastDay - (firstDayofWeek - (i + 1))
                })
            } else {
                return item.map((day, i) => {
                    return day = 7 * (index - 1) + firstSunday + i + 1 <= last ?
                        7 * (index - 1) + firstSunday + i + 1
                        : 1 + i - 1 - thisLastDayofWeek
                })
            }


        })
        return monthArray


    }

    return {
        createRows,
        currentMonthDays
    }
}

export default useDateMakers