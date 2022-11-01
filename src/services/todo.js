import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    const problemCount = 16;
    const problemTypes = ["addition", "subtraction", "multiplication", "division" ];
    const problems = [];
    var problemIndex = 0;
    for (let problemTypeIndex = 0; problemTypeIndex < problemTypes.length; problemTypeIndex++) {
        for (let problemCounter = 0; problemCounter < problemCount; problemCounter++) {
            problems[problemIndex] = {};
            problems[problemIndex].id = problemIndex + 1;
            problems[problemIndex].problemType = problemTypes[problemTypeIndex];
            problems[problemIndex].number1 = Math.floor(Math.random() * 10000);
            problems[problemIndex].completed = false;
            problems[problemIndex].remaindercompleted = false;
            problems[problemIndex].correct = false;


            switch (problemTypes[problemTypeIndex]) {
                case "addition":
                    problems[problemIndex].number2 = Math.floor(Math.random() * 10000);
                    problems[problemIndex].answer = problems[problemIndex].number1 + problems[problemIndex].number2
                    problems[problemIndex].providedAnswer = 0
                    break;
                
                case "subtraction":
                    problems[problemIndex].number2 = Math.floor(Math.random() * 10000);
                    while (problems[problemIndex].number1 < problems[problemIndex].number2) {
                        problems[problemIndex].number2 = Math.floor(Math.random() * 10000);
                    }
                    problems[problemIndex].answer = problems[problemIndex].number1 - problems[problemIndex].number2
                    problems[problemIndex].providedAnswer = 0
                    break;
                
                case "multiplication":
                    problems[problemIndex].number2 = Math.floor(Math.random() * 100);
                    problems[problemIndex].answer = problems[problemIndex].number1 * problems[problemIndex].number2
                    problems[problemIndex].providedAnswer = 0
                    break;
                    
                case "division":
                        problems[problemIndex].number2 = Math.floor(Math.random() * 100);
                        while (problems[problemIndex].number2 === 0) {
                            problems[problemIndex].number2 = Math.floor(Math.random() * 100);
                        }
                        problems[problemIndex].answer = Math.floor(problems[problemIndex].number1 / problems[problemIndex].number2)
                        problems[problemIndex].remainder = problems[problemIndex].number1 - problems[problemIndex].answer * problems[problemIndex].number2
                        problems[problemIndex].providedAnswer = 0
                        problems[problemIndex].providedRemainder = 0
                        break;
                default:
                    break;
            }

            problemIndex++;
            
        }  
    }

    return problems;
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

export function updateAnswer(items, item) {
    let index = items.findIndex(itemobj => itemobj.id === item.id);

    return update(items, {
        [index]: {
            providedAnswer: {$set: item.providedAnswer},
            providedRemainder: {$set: item.providedRemainder},
            completed: {$set: item.completed},
            correct: {$set: item.correct}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
