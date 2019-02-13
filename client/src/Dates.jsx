import React from 'react';
import './Dates.css';

const Dates = () => {
  const date = new Date();
  const dayNumber = date.getDate();
  const weekday = date.getDay();
  const month = date.getMonth();
  const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun',
    8: 'Mon',
    9: 'Tues',
    10: 'Wed',
    11: 'Thurs',
    12: 'Fri',
    13: 'Sat',

  };
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };
  const actualMonth = months[month];
  const actualWeekday = daysOfWeek[weekday];
  const fourDaysLater = daysOfWeek[weekday + 4];
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return (
    <div className="expectedDates">
      <div className="free">
        <span className="bold">
          Get it
          {' '}
          {actualWeekday}
          ,
          {' '}
          {actualMonth}
          {' '}
          {dayNumber}
          {' '}
           -
          {' '}
          {fourDaysLater}
          ,
          {' '}
          {actualMonth}
          {' '}
          {dayNumber + 4}
        </span>
        {' '}
        if you choose
        {' '}
        <span className="bold"> FREE Shipping</span>
        {' '}
            at checkout, or
      </div>

      <div className="oneDay">
        <span className="bold">
        Get it Tomorrow,
          {' '}
          {actualMonth}
          {' '}
          {dayNumber + 1}
          {' '}
        </span>
        {' '}
        <span className="sameDay">
          {' '}
          if you order within
          {' '}
          {24 - hour}
          {' '}
          hrs
          {' '}
          {60 - minutes}
          {' '}
          mins and choose paid
        </span>
        <span className="oneDayShipping"> One-Day Shipping</span>
        <span className="sameDay"> at checkout </span>
      </div>
      <div className="stock">In Stock.</div>
    </div>
  );
};

export default Dates;