import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1 id="heading">React Components</h1>;
}

const ContentOfBody = () =>
{
    return (
            <>
            <Title />
            <div>
                <div>Container div</div>
                <p> This is learning how JSX can placed in different ways in JSX container</p>
            </div>
            </>     
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContentOfBody />);