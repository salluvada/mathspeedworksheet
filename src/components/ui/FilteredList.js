import React from 'react';
import ProblemItem from './ProblemItem';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

export default function FilteredList(props) {
    const {items, changeAnswer, changeRemainder} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <ProblemItem key={item.id} data={item} changeAnswer={changeAnswer} changeRemainder={changeRemainder}/>
            ))}
        </ul>
    );
}
