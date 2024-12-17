import { useState } from 'react';
import { useFormik } from 'formik';

import useMarvelServices from '../../services/MarvelServices';

import './charSearchForm.scss';

const CharSearchForm = () => {

    const [char, setChar] = useState(null);

    const {loading, getCaracterByName } = useMarvelServices();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const formik = useFormik({
        initialValues: {
            charName: '',
        },
        onSubmit: values => {
            console.log(values.charName)
            // clearError();
            getCaracterByName(values.charName).then(onCharLoaded);

            // console.log(char);


        //   alert(JSON.stringify(values, null, 2));
        },
      });
    
    return (
        <div className="char__search-form">
            <form onSubmit={formik.handleSubmit}>
                <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                <div className="char__search-wrapper">
                    <input 
                        id="charName" 
                        name='charName' 
                        type='text' 
                        placeholder="Enter name"
                        onChange={formik.handleChange}
                        value={formik.values.charName}
                    />
                    <button 
                        type='submit' 
                        className="button button__main"
                        disabled={loading}
                    >
                        <div className="inner">find</div>
                    </button>
                </div>
                {/* <FormikErrorMessage component="div" className="char__search-error" name="charName" /> */}
            </form>
            <div className="char__search-wrapper">
                {char ? <div className="char__search-success">There is! Visit {char.name} page?</div> : null}
                <a href='/' className="button button__secondary">
                    <div className="inner">To page</div>
                </a>
            </div>
        </div>

    )
}

export default CharSearchForm;