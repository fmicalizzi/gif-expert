export const getGifs = async(category) => {

        
    const apiKey ='lHmLxQmrth3lKTRSOb7Tog1lFfA4g8x3';
    const endPoint ='https://api.giphy.com/v1/gifs/search';
    const search = `?q=${encodeURI(category)}&limit=10&api_key=`;
    const url = endPoint+search+apiKey;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            image : img.images?.downsized_medium.url
        }
    })

    return gifs;

}