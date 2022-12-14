import app from './app';
import {sequelize} from './db/connection'

import './models/cantidad'
import './models/cliente'
import './models/dir_cliente'
import './models/direccion'
import './models/fotografia'
import './models/local'
import './models/pedido'
import './models/productos'
import './models/repartidor'
import './models/usuario'

async function main(){
    try {
        await sequelize.authenticate()
        console.log('DB on')
        // await sequelize.sync({force:true}) Borrar y crear la tabla al ejecutar
        // await sequelize.sync({ alter: true }) Modificar los cambios a la tabla sin borrarla
        // await sequelize.sync() Crea tablas si no existen
        
        // await sequelize.sync({ alter: true })
        await sequelize.sync({force:true})
        app.listen(4000)
        console.log('Server on -> port',4000);
        
    } catch (error) {
        console.error('DB error -> ',error);
    }
}

main();


