import './App.css';
import { EventsList } from './Events-List';
import { events } from './events';
import { Header } from './Header';
//import {useContext, createContext} from 'react';
//import { Context } from './context';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {EventProvider} from "./contexts/events.context";
import {SelectedList} from "./Selected-List";
import {Provider} from "react-redux";
import {store} from "./store/store";

export function Event(props) {
  const params = useParams();
  const event = events.find((el) => el.id === +params.id);
  return (
    <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">Category: {event.category}</p>
                    <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
    </div>
  )
}
function App() {
  return (
      //<EventProvider>
      <Provider store={store}>
      <div className="App">
    <BrowserRouter>
        <Header>

        </Header>
      <Routes>
        <Route path="/event/:id" element={<Event/>}/>
        <Route path="/" element={<EventsList events={events}/>}/>
        <Route path="/selected" element={<SelectedList />}/>
      </Routes>
    </BrowserRouter>
    </div>
      </Provider>
      //</EventProvider>
  );
}

export default App;
