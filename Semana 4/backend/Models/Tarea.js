
const { DataTypes } = require('sequelize')
const sequelize = require('../db/Connection')

const Tarea = sequelize.define('tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'tarea',
        timestamps: false
    }

)

module.exports=Tarea;