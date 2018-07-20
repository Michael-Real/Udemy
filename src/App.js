// JSX - JavaScript XML

const object = {
    title: "Indecision",
    subtitle: "App",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        object.options.push(option);
        e.target.elements.option.value = '';  
        render();              
    };
};

const removeAll = () => {
    object.options = [];
    render();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * object.options.length);
    const option = object.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    let template = (
        <div>
          <h1>{object.title}</h1>
          {object.subtitle && <h3>{object.subtitle}</h3>}
           <p>{object.options.length > 0 ? `Here are your options` : "No options"} </p>
           <button disabled={object.options.length === 0} onClick={onMakeDecision}>Roll The Dice</button>
           <button onClick={removeAll}>Clear All</button>
           <ol>    
           {
               object.options.map((option) => <li key={option}>{option}</li>)
           }
             </ol>
                <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
             </form>
            </div>
        );
    ReactDOM.render(template, appRoot);
};

render();