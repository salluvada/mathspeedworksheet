import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, FILTER_UNATTEMPTED, FILTER_CORRECT, FILTER_WRONG, FILTER_ALL } from '../../services/filter';

export default function ProblemList(props) {
    const {list, filter, mode, query, timespent} = props.data;
    const {addNew, changeFilter, changeAnswer, changeRemainder, changeMode, setSearchQuery, updateTimer} = props.actions;
    const activeItemCount = applyFilter(list, FILTER_UNATTEMPTED).length;
    const correctItemCount = applyFilter(list, FILTER_CORRECT).length;
    const wrongItemCount = applyFilter(list, FILTER_WRONG).length;
    const allItemCount = applyFilter(list, FILTER_ALL).length;
    const items = applyFilter(list, filter);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{addNew, mode, query, setSearchQuery, timespent, updateTimer}}/>
                    <div className="parentbox">
                        <div className="scrollbox">
                            <FilteredList {...{items, changeAnswer, changeRemainder}}/>
                        </div>
                    </div>
                    <Footer {...{activeItemCount, filter, changeFilter, mode, changeMode, correctItemCount, wrongItemCount, allItemCount}}/>
                </div>
            </div>
        </div>
    );
}
