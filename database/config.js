const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);

        console.log('Base de datos En línea');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos, contacte con el administrador');
    }
}

module.exports = {
    dbConnection
}