import React from 'react';

function displayTimeSpent(timeseconds) {
    var hours = Math.floor(timeseconds/3600);
    var minutes = Math.floor((timeseconds - hours * 3600)/60);
    var seconds = Math.floor((timeseconds - (hours * 3600) - (minutes * 60)));

    var displayhours = String(hours).padStart(2,'0');
    var displayminutes = String(minutes).padStart(2,'0');
    var displayseconds = String(seconds).padStart(2,'0');

    var timetoshow = displayhours + ':' + displayminutes + ':' + displayseconds

    return timetoshow;
}

export default function Header(props) {
    const {timespent} = props
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    
    return (
        <header>
            <div>
                <h1>Maths Speed Worksheet</h1>
                <div className="headerbox">
                    <h4>Date: {today}</h4>
                    <h4>Time Spent: {displayTimeSpent(timespent)} </h4>
                </div>
                <br/>
            </div>
        </header>
    );
}
