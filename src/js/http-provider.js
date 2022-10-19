const jokeUrl = "https://api.chucknorris.io/jokes/random#123453453"

const obtenerChiste = async () => {
    try {
        const respuesta = await fetch( jokeUrl );
        if(!respuesta.ok) throw ('No se pudo realizar la petición');
        const {icon_url, id, value} = await respuesta.json();
        return {icon_url, id, value}; //como el valor de la variable es el mismo nombre que la propiedad se puede usar así
        
    }catch(err) {
        // return {
        //     id: 'No se encontró'
        // }
        throw err;
    }
}

export {
    obtenerChiste
}