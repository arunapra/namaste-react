import React from "react";
import ReactDOM from "react-dom/client";
const image="/Screenshot 2024-02-18 095858.png"

const Title = () => (
        <h1 id="heading" className="root">Namaste React</h1>
);

const HeadingComponent = () => {
    return <div>
        <Title />
        <h1 className="Heading">Namaste React using Functional Component</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);