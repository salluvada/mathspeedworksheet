export const FILTER_ALL = 'all';
export const FILTER_CORRECT = 'correct';
export const FILTER_WRONG = 'wrong';
export const FILTER_UNATTEMPTED = 'unattempted';

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_CORRECT:
            return list.filter(item => (item.completed === true) && (item.correct === true));

        case FILTER_WRONG:
            return list.filter(item => (item.completed === true) && (item.correct !== true));
        
        case FILTER_UNATTEMPTED:
            return list.filter(item => (item.completed !== true));

        default:
            return list;
    }
}

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_CORRECT]: 'Correct',
        [FILTER_WRONG]: 'Wrong',
        [FILTER_UNATTEMPTED]: 'Unattempted',
    };
}

export function getCounts(items) {
    return {
        [FILTER_ALL]: getItemCount(items, FILTER_ALL),
        [FILTER_CORRECT]: getItemCount(items, FILTER_CORRECT),
        [FILTER_WRONG]: getItemCount(items, FILTER_WRONG),
        [FILTER_UNATTEMPTED]: getItemCount(items, FILTER_UNATTEMPTED),
    };
}

function getItemCount(items, filterKey) {
    var count = 0;
    switch (filterKey) {
        case "Correct":
            count = items.filter(item => { return item.correct === true });
            break;

        case "Wrong":
            count = items.filter(item => { return item.correct === false });
            break;

        case "Unattempted":
            count = items.filter(item => {
                    if (item.problemType === "division") {
                        return ((item.completed === true) && (item.remaindercompleted === true)); 
                    } else {
                        return (item.completed === true);
                    }
                 
                });
            break;
    
        default:
            count = items.filter(item => {return true});
    }
    return count;
}