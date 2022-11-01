import React, {Component} from 'react';
import ProblemList from '../ui/ProblemList';
import StateProvider from './StateProvider';

class App extends Component {
    componentDidMount(){
        console.log("App mounted.");
    }

    render() {
        return (
            <StateProvider>
                <ProblemList/>
            </StateProvider>
        );
    }
}

export default App;
