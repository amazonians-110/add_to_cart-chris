import React from 'react';
import './Dates.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date();
    let dayNumber = date.getDate();
    let weekday = date.getDay();
    let month = date.getMonth();
    let daysOfWeek = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tues',
      3: 'Wed',
      4: 'Thurs',
      5: 'Fri',
      6: 'Sat',
    };
    let months = {
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
    let actualMonth = months[month];
    let actualWeekday = daysOfWeek[weekday];
    let fourDaysLater = daysOfWeek[weekday + 4];
    return (
      <div className="month">
        <span className="bold">Get it {actualWeekday}, {actualMonth} {dayNumber} - {fourDaysLater}, {actualMonth} {dayNumber + 4}</span>
            if you choose 
            {' '}
            <span className = "bold"> FREE Shipping</span>
            {' '}
            at checkout, or
      </div>
    );
  }
}

export default Dates;
