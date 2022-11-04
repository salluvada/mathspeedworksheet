import React from 'react';
import {displayTimeSpent} from '../../util/common.js'


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
