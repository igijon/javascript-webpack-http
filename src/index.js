import * as CRUD from './js/crud-provider';
//Estoy indicando que importe todo lo que exporte crud-provider en un objeto llamado CRUD

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'Inma',
    job: 'Software Engineer'
}).then(console.log);