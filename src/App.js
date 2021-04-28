import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Dashboard from './components/Dashboard'
import Home from './components/Home';
import CryptoGraph from './components/CryptoGraph';
import Navbar from './components/Navbar';



const App = () => {



    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Navbar />
                <Dashboard />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/coin/:id' component={CryptoGraph} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App
