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
            timespent: 0
        }
    }

    componentDidMount(){
        setInterval(()=>{this.updateTimer(this.state.timespent + 1)}, 1000);
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

    changeAnswer(item) {
        const updatedList = updateAnswer(this.state.list, item);
        this.setState({list: updatedList});
    }

    changeRemainder(item) {
        const updatedList = updateRemainder(this.state.list, item);
        this.setState({list: updatedList});
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
