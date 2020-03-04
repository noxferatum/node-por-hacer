const descripcion = {
    alias: 'd',
    demand: true
};
const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('descripcion', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', descripcion, completado)
    .command('borrar', 'Borrado', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}