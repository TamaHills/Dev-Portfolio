import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { SideBar } from './components/Sidebar';
import { About } from './components/About';
import { Projects } from './components/Projects'
import './app.scss'

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" component={SideBar} />
                <Route path="/" component={About} exact/>
                <Route path="/projects" component={Projects}/>
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
