// import {}



import './charSearchForm.scss';

const CharSearchForm = () => {
    
    return (
        <div className="char__search-form">
            <form>
                <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                <div className="char__search-wrapper">
                    <input 
                        id="charName" 
                        name='charName' 
                        type='text' 
                        placeholder="Enter name"/>
                    <button 
                        type='submit' 
                        className="button button__main"
                        // disabled={loading}
                    >
                        <div className="inner">find</div>
                    </button>
                </div>
                {/* <FormikErrorMessage component="div" className="char__search-error" name="charName" /> */}
            </form>
            <div className="char__search-wrapper">
                <div className="char__search-success">There is! Visit XXX page?</div>
                <a href='/' className="button button__secondary">
                    <div className="inner">To page</div>
                </a>
            </div>
        </div>
    )
}

export default CharSearchForm;