import { events } from './events';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
//import { EventContext } from  "./contexts/events.context";
//import {useContext} from "react";
import {useDispatch} from 'react-redux';
import {addSelected} from "./store/user/action.actions";
import {store} from "./store/store";
export function EventsList(props) {
    const dispatch = useDispatch();
    //const {addSelected} = useContext(EventContext);
    const select = (event) => {
        dispatch(addSelected(event));
    }
    return (
        <div className="container">
            {
                props.events.map((el) => (    
                    <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <p className="card-text">Category: {el.category}</p>
                    <Link to={`/event/${el.id}`} className="btn btn-primary">Info</Link>
                    <button className="btn btn-primary" onClick={() => select(el)}>Select</button>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}