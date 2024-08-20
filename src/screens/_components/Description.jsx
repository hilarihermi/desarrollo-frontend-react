
import { useSelector } from "react-redux";  //selecciona los reducer de default

const Description = () => {
    const defaultState = useSelector(state => state.default);
    return (
        <>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <h4>{defaultState.name}</h4>
        </>
    );
};
export default Description;