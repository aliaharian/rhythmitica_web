import React from "react";

const convertLaravelTime = (input) => {
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    var t = input.split(/[- :TZ]/);

    // Apply each element to the Date function
    var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5])),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        tMon = months[month-1];
    return { day, month:tMon, year };
}

export default {
    convertLaravelTime

};
