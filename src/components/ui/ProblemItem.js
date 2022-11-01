import React from 'react';
import AnswerBox from './AnswerBox';

function getProblemStatement(data){
    var problemStatment = "";
    switch (data.problemType) {
        case "addition":
            problemStatment = String(data.number1) + ' + ' + String(data.number2)
            break;
        case "subtraction":
            problemStatment = String(data.number1) + ' - ' + String(data.number2)
            break;
        case "multiplication":
            problemStatment = String(data.number1) + ' X ' + String(data.number2)
            break;
        case "division":
            problemStatment = String(data.number1) + ' ÷ ' + String(data.number2)
            break;
        default:
            break;
    }
    return problemStatment;
}

export default function ProblemItem(props) {
    const {data, changeAnswer, changeRemainder} = props;
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <div>
                    <h5>{getProblemStatement(data)} = </h5>
                </div>
                <div>
                    <AnswerBox {...{data, changeAnswer, changeRemainder}}/>
                </div>

            </div>
        </li>
    );
}
