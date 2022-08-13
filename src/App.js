import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import { ContactsList } from './components/ContactsList';
import { CreateContact } from "./components/CreateContact";


function App() {
    return (
        <div className="App">
            <Router>
                <nav></nav>
                <header></header>
                <main className="container">
                    <hr />
                    <div id="main-box">
                        <Routes>
                            <Route path="/" element={ <ContactsList /> } />
                            <Route path="/add" element={ <CreateContact /> } />
                        </Routes>
                    </div>
                </main>
            </Router>
        </div>
    );
}

export default App;