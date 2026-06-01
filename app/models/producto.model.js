module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define('Producto', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    precio: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'productos',
    timestamps: false,
    freezeTableName: true
  });

  return Producto;
};