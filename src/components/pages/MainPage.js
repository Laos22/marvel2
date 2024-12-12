import { useState } from 'react';
// import {} from 'react-router-dom';

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';


const MainPage = () => {
    const [currentChar, setCurrentChar] = useState(null);
    const onCurrentChar = (id) => setCurrentChar(id);

    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCurrentChar}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={currentChar}/>
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;