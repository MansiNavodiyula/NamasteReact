import React from "react";
import ReactDOM from "react-dom/client";

//Creating element using core React
// const txt=React.createElement("h1",{id:"h1tag"},"its raining");
//Creating element using JSX (html/xml -like syntax )- not html in js
// JSX (transpiled before it reaches it JS) - Parcel - Babel
// const jsxEle=<h1 id="h1JSX">Heading using jsx</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(txt);
// root.render(jsxEle);

//Ep-3
const elem=<span>Woahhh</span>
const Title=()=>(
    <h2>7777
        
        {elem}
    </h2>
);
const HeadingComp=()=>(
        <div id="container">
            <h1>React Comp</h1>
            <Title/>  //Component Composition
            <h3>{77+100}</h3>
        </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp/>);