import React from 'react';

function evaluateAnswer(item){
    switch (item.problemType) {
        case "addition":
        case "subtraction":
        case "multiplication":
            if (item.completed){
                if (Number(item.providedAnswer) === Number(item.answer)){
                    item.correct = true;
                } else {
                    item.correct = false;
                }
            } else {
                item.correct = false;
            }
            break;
        case "division":
            if (item.completed || item.remaindercompleted){
                if ((Number(item.providedAnswer) === Number(item.answer)) && (Number(item.providedRemainder) === Number(item.remainder))){
                    item.correct = true;
                } else {
                    item.correct = false;
                }
            } else {
                item.correct = false;
            }
            break;
        default:
            break;
    }
    return item;
}
function setAnswer(value, item, changeAnswer) {
    if (value === ""){
        item.completed = false;
    } else {
        item.completed = true;
    }

    item.providedAnswer = value;
    item = evaluateAnswer(item);
    
    changeAnswer(item)
}

function setRemainder(value, item, changeAnswer){
    if (value === ""){
        item.remaindercompleted = false;
    } else {
        item.remaindercompleted = true;
    }

    item.providedRemainder = value;
    item = evaluateAnswer(item);
    changeAnswer(item);
}

function validateAnswer(data){
    switch (data.problemType) {
        case "addition":
        case "subtraction":
        case "multiplication":
            if (data.completed){
                if (Number(data.providedAnswer) === Number(data.answer)){
                    return "correct"
                } else {
                    return "wrong"
                }
            } else {
                return ""
            }
        case "division":
            if (data.completed || data.remaindercompleted){
                if ((Number(data.providedAnswer) === Number(data.answer)) && (Number(data.providedRemainder) === Number(data.remainder))){
                    return "correct"
                } else {
                    return "wrong"
                }
            } else {
                return ""
            }
        default:
            break;
    }
}

function getAnswer(data){
    if (data.completed){
        return data.providedAnswer
    } else {
        return ""
    }
}

function getRemainder(data){
    if (data.remaindercompleted){
        return data.providedRemainder
    } else {
        return ""
    }
}

export default function AnswerBox(props) {
    const {data, changeAnswer} = props;
    switch (data.problemType) {
        case "addition":
        case "subtraction":
        case "multiplication": 
            return (
                <div className="answerbox">
                    <input
                        type="number"
                        className="form-control"
                        value={getAnswer(data)}
                        onChange={e => setAnswer(e.target.value, data, changeAnswer)}
                        placeholder="Answer"
                    />
                    <div className="buttons">
                        <a className={"button " + validateAnswer(data)}></a>
                    </div>
                </div>
            );  
        case "division":
            return (
                <div className="answerbox">
                    <input
                        type="number"
                        className="form-control"
                        value={getAnswer(data)}
                        onChange={e => setAnswer(e.target.value, data, changeAnswer)}
                        placeholder="Quotient"
                    />
                    <input
                        type="number"
                        className="form-control"
                        value={getRemainder(data)}
                        onChange={e => setRemainder(e.target.value, data, changeAnswer)}
                        placeholder="Remainder"
                    />
                    <div className="buttons">
                        <a className={"button " + validateAnswer(data)}></a>
                    </div>
                </div>
            );
        default:
            break;
    }

}
