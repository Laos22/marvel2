import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage} from '../pages';


const  App = () => {
    

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <MainPage/>
                    <ComicsPage/>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;