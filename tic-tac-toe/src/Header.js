import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { EventContext } from  "./contexts/events.context";
import { useContext } from "react";
import {store} from "./store/store";
import {selectLength} from "./store/user/action.selectors";
import {useSelector} from "react-redux";
export function Header() {
    //const {length} = useContext(EventContext);
    const items = useSelector(selectLength);
    //const length = store.getState().action.length;
    return (
        <div className="header">
            <h2>{items}</h2>
            <Link to="/selected" className="btn btn-primary"><h2>Selected</h2></Link>
            <Link to="/" className="btn btn-primary"><h2>Events</h2></Link>
        </div>
    )
    store.subscribe(Header);
}