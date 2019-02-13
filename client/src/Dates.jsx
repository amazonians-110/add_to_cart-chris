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
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return (
    <div className="expectedDates">
      <div className="free">
        <span className="bold">Get it {actualWeekday}, {actualMonth} {dayNumber} - {fourDaysLater}, {actualMonth} {dayNumber + 4}</span>
            if you choose 
            {' '}
            <span className = "bold"> FREE Shipping</span>
            {' '}
            at checkout, or
      </div>
      
      <div className="oneDay">
      <span className="bold">Get it Tomorrow, {actualMonth} {dayNumber + 1} </span> <span className="sameDay">if you order within {24 - hour} hrs {60 - minutes} mins and choose paid</span> 
      <span className="oneDayShipping"> One-Day Shipping</span><span className="sameDay"> at checkout </span> 
      </div>        
      
      <div className="stock">In Stock.</div>
    </div>
    );
  }
}

export default Dates;
