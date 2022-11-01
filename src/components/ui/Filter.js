import React from 'react';
import {getOptions} from '../../services/filter';

export default function Filter(props) {
    const options = getOptions();
    const {filter, allItemCount, correctItemCount, wrongItemCount, activeItemCount} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');
    const counts = {
        all: allItemCount,
        wrong: wrongItemCount,
        correct: correctItemCount,
        unattempted: activeItemCount
    }
    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a className={getClass(key)}>
                        {options[key]} - {counts[key]}
                    </a>
                </li>
            ))}
        </ul>
    );
}
