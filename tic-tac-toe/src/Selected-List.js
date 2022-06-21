import {useContext, useEffect} from "react";
import {EventContext} from "./contexts/events.context";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectSelected} from "./store/user/action.selectors";
import {store} from "./store/store";
import { ACTION_ACTION_TYPES } from "./store/user/action.types";
import { removeSelected } from "./store/user/action.actions";

export function SelectedList() {
    const dispatch = useDispatch();
    //const {addSelected, length, selected} = useContext(EventContext);
    const selected = useSelector(selectSelected);

    const remove = (id) =>{
        //console.log(id);
        //console.log('Before:');
        //console.log(selected);
        if(selected.length > 0){
            //console.log('After:');
            dispatch(removeSelected(id));
            //console.log(selected);
        }
        
    }
    return (
        <div className="container">
            {
                   selected.map((el) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <h5 className="card-title">{el.id}</h5>
                            <p className="card-text">Category: {el.category}</p>
                            <Link to={`/event/${el.id}`} className="btn btn-primary">Info</Link>
                            <button className="btn btn-primary" onClick={() => remove(el.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}