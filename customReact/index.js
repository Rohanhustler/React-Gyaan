const mainContainer = document.getElementById("root");

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children: "Click me to visit google"
}

function customReact(reactelement , container) {
    const element = document.createElement(reactelement.type);
    for(const prop in reactelement.props) {
        if(prop === "children") continue;
        element.setAttribute(prop , reactelement.props[prop]);
    }
    const addText = document.createTextNode(reactelement.children);
    element.appendChild(addText);
    container.appendChild(element);
}

customReact(reactElement , mainContainer);