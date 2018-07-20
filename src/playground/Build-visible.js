
const app = {
    title: "Visibility Toggle",
    subtitle: "overachieving",
    details: []
};

let visibility = false;

const toggleVisibility = () => {
   visibility = !visibility;
   render();
}

const render = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h4>{app.subtitle}</h4>}
        <button onClick={toggleVisibility}> {visibility ? "Hide details" : "Show details"}</button>
        {visibility && (
            <div>
                <p> Why couldn't I figure this out on my own? </p>
                </div>
        )}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'));
}

render();