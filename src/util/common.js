import React from 'react';

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}

export function displayTimeSpent(timeseconds) {
    var hours = Math.floor(timeseconds/3600);
    var minutes = Math.floor((timeseconds - hours * 3600)/60);
    var seconds = Math.floor((timeseconds - (hours * 3600) - (minutes * 60)));

    var displayhours = String(hours).padStart(2,'0');
    var displayminutes = String(minutes).padStart(2,'0');
    var displayseconds = String(seconds).padStart(2,'0');

    var timetoshow = displayhours + ':' + displayminutes + ':' + displayseconds

    return timetoshow;
}