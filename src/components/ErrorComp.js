import { useRouteError } from "react-router-dom";
const ErrorComp = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Wops </h1>
            <h2>Something gone wrong</h2>
            <h3>click on Home page to go back</h3>
            <h4>{err.status}: {err.statusText} </h4>
        </div>
    );
};
export default ErrorComp;