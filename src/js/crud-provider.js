//https://reqres.in/
//Single user 
///api/users/2
const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    //Obtengo el id del usuario
    const resp = await fetch(`${ urlCRUD }/${id}`);
    const {data} = await resp.json();
    return data;
}

export {
    getUsuario
}