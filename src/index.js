const jokeUrl = "https://api.chucknorris.io/jokes/random#"


//Si tenemos problemas de CORS, el back nos está bloqueando para que sólo dentro del mismo dominio nos están 
//bloqueando
fetch(jokeUrl).then(resp => {
    
    //códigos de error resumen:
    //200 lo hizo bien
    //201 el registro se creó satisfactoriamente
    //404 no encontró el recurso, el 400 normalmente es bad request
    //500 problemas propios del lado del servidor

    resp.json().then(data => {
        console.log(data);
        console.log(data.id);
        console.log(data.value);
    }); //Estamos diciendo a la respuesta que devuelva la respuesta en formato del json. Es una promesa

});