import React, {Component} from 'react';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, addToList, updateStatus, updateAnswer, updateRemainder} from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            list: getAll(),
            timespent: 0,
            worksheetCompleted: false,
            timerInterval: ''
        }
    }

    componentDidMount(){
        const intervalID = setInterval(()=>{this.updateTimer(this.state.timespent + 1)}, 1000);
        this.setState({timerInterval: intervalID});
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeAnswer', 'changeRemainder', 'changeMode', 'setSearchQuery', 'updateTimer'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = addToList(this.state.list, {text, completed: false});

        this.setState({list: updatedList});
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({list: updatedList});
    }

    evaluateCompleted(problemList){
        if (problemList.filter(item => {return (item.correct === false)}).length === 0){
            this.setState({worksheetCompleted: true,});
            clearInterval(this.state.timerInterval);
        }
    }

    changeAnswer(item) {
        const updatedList = updateAnswer(this.state.list, item);
        this.setState({list: updatedList});
        this.evaluateCompleted(updatedList);
    }

    changeRemainder(item) {
        const updatedList = updateRemainder(this.state.list, item);
        this.setState({list: updatedList});
        this.evaluateCompleted(updatedList);
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }

    updateTimer(timeseconds) {
        this.setState({timespent: timeseconds});
    }
}

export default StateProvider;
