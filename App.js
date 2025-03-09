const heading = React.createElement("h1", {id: "Heading"}, "Holla React"); //it takes 3 inputs tag ,{} where we give attributes to our tag , value we want to put inside tag
const root = ReactDOM.createRoot(document.getElementById("root"));

    
// for nested elements like div inside div

const p = React.createElement(
    "div",
     {id:"parent"}, 
     React.createElement(
        "div",
         {id:"child"}, 
         React.createElement(
            "h1",
            {},
            "tag in nested div"
        )
    )
);
const cont = React.createElement(
    "div",
    {id:"container"},
    heading,
    p
);//as we can pass multiple children in 3rd or an array of childrens 
root.render(cont);