import { useHttp } from "../components/hooks/http.hook";



const  useMarvelServices = () => {

    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=78ff23503ab44ff9b9ab6eb05da5146e';
    const _baseOffset = 210;




    const getAllCharacters =  async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCaracter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        // console.log(res);
        return _transformCharacter(res.data.results[0]);
    }
    const getCaracterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        // console.log(res);
        if (res.data.results[0]) return res.data.results.map(_transformCharacter);
    }


    const getAllComics =  async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComic);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        // console.log(res);
        return _transformComic(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        const {name, description, thumbnail, urls, id, comics} = char;
        return {
            name: name,
            description: description ? `${description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: thumbnail.path + "." + thumbnail.extension,
            homepage: urls[0].url,
            wiki: urls[1].url,
            id: id,
            comics: comics.items,
        }
    }

    const _transformComic = (comic) => {
        const {title, id, thumbnail, prices, description, pageCount, textObjects} = comic;

        return {
            title: title,
            description: description,
            thumbnail: thumbnail.path + "." + thumbnail.extension,
            pages: pageCount,
            language: textObjects[0]?.language || "en-us",
            id: id,
            prices: prices[0].price,
        }
    }

    return {getAllCharacters, loading, error, getCaracter, clearError, getAllComics, getComic, getCaracterByName};
 
}

export default useMarvelServices;