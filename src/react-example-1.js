// ✅: REact dom RENDER AND CREATE ELEMENT
// document.getElementById("mountNode").innerHTML = `
//     <div>
//     Hello HTML
//     </div>
// `;

// ReactDOM.render(
//   React.createElement("div", null, "Hello React"),
//   document.getElementById("mountNode2")
// );

// ✅: Nesting React Elements
// document.getElementById("mountNode").innerHTML = `
//   <div>
//     Hello HTML
//     <input />
//     <pre>${new Date().toLocaleTimeString()}</p>
//   </div>
// `;

// ReactDOM.render(
//   React.createElement(
//     "div",
//     null,
//     "Hello React ",
//     React.createElement("input"),
//     React.createElement("pre", null, new Date().toLocaleTimeString())
//   ),
//   document.getElementById("mountNode2")
// );

// ✅: Rendering in React
const render = () => {
  document.getElementById("mountNode").innerHTML = `
      <div>
        Hello HTML
        <input />
        <pre>${new Date().toLocaleTimeString()}</pre>
      </div>
    `;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    document.getElementById("mountNode2")
  );
};

setInterval(render, 1000);
