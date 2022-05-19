import {useContext} from "react";
import {EventContext} from "./contexts/events.context";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectSelected} from "./store/user/action.selectors";
import {store} from "./store/store";

export function SelectedList() {
    //const {addSelected, length, selected} = useContext(EventContext);
    const selected = useSelector(selectSelected);

    return (
        <div className="container">
            {
                   selected.map((el) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">Category: {el.category}</p>
                            <Link to={`/event/${el.id}`} className="btn btn-primary">Info</Link>
                            <button className="btn btn-primary">Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}