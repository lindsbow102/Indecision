console.log("App.js is running!");

//JSX -- Javascript XML

const app = {
  title: "Indecision App",
  subtitle: "So much to do, so little time",
  options: []
};

// function getSubtitle(subtitle) {
//     if (subtitle) {
//         return <h3>Subtitle: {subtitle}</h3>
//     }
// }

const onFormSubmit = e => {
  e.preventDefault(); //stops full-page refresh
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option); //add user input to app.options array
    e.target.elements.option.value = ""; //wipe away user input
    renderApp();
  }
};

const removeAll = () => {
    app.options = [];
    renderApp();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled = {app.options.length === 0} onClick = {makeDecision}>What Should I Do?</button>
      <button onClick = {removeAll}>Remove All</button>
      {
    //       numbers.map((number) => {
    //           return <p key={number}>Number: {number}</p>;
    //   })
      }
      <ol>{
        app.options.map((option) => {
            return <li key={option}>{option}</li>
        })
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
renderApp();