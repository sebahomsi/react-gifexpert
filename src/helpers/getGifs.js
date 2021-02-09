export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3D86B8beNNIEr3qGCn9PLXk3OpUqAgTK`;
    const resp = await fetch(url); //respuesta de peticion http
    const {data} = await resp.json(); //datos de peticion http - desestructurando data

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;
}