import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage, SingleComicPage} from '../pages';


const  App = () => {
    

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage/>} />
                        <Route path='/comics' element={<ComicsPage/>} />
                        <Route path='/comic/:comicId' element={<SingleComicPage/>} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;