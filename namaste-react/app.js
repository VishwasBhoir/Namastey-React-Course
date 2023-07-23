const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, `I'm Heading!`),
    React.createElement("h2", {}, `I'm Heading2!`),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, `I'm Heading!`),
    React.createElement("h2", {}, `I'm Heading2!`),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
ß;
