"use strict";

// JSX - JavaScript XML

var object = {
    title: "Indecision",
    subtitle: "App",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        object.options.push(option);
        e.target.elements.option.value = '';
        render();
    };
};

var removeAll = function removeAll() {
    object.options = [];
    render();
};
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * object.options.length);
    var option = object.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            object.title
        ),
        object.subtitle && React.createElement(
            "h3",
            null,
            object.subtitle
        ),
        React.createElement(
            "p",
            null,
            object.options.length > 0 ? "Here are your options" : "No options",
            " "
        ),
        React.createElement(
            "button",
            { disabled: object.options.length === 0, onClick: onMakeDecision },
            "Roll The Dice"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Clear All"
        ),
        React.createElement(
            "ol",
            null,
            object.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
