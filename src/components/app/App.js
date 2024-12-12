import { BrowserRouter } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import MainPage from '../pages/MainPage';


const  App = () => {
    

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <MainPage/>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;