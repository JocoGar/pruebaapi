const db = require('../config/db.config.js');
const Producto = db.Producto;

// GET /api/productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      order: [['id', 'ASC']]
    });

    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener productos',
      error: error.message
    });
  }
};

// GET /api/productos/:id
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      });
    }

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener producto',
      error: error.message
    });
  }
};

// POST /api/productos
exports.crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;

    if (!nombre || precio === undefined || stock === undefined) {
      return res.status(400).json({
        mensaje: 'nombre, precio y stock son requeridos'
      });
    }

    if (precio < 0) {
      return res.status(400).json({
        mensaje: 'El precio no puede ser negativo'
      });
    }

    if (stock < 0) {
      return res.status(400).json({
        mensaje: 'El stock no puede ser negativo'
      });
    }

    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      stock
    });

    res.status(201).json({
      mensaje: 'Producto creado correctamente',
      producto: nuevoProducto
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al crear producto',
      error: error.message
    });
  }
};

// PUT /api/productos/:id
exports.actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock } = req.body;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      });
    }

    if (precio !== undefined && precio < 0) {
      return res.status(400).json({
        mensaje: 'El precio no puede ser negativo'
      });
    }

    if (stock !== undefined && stock < 0) {
      return res.status(400).json({
        mensaje: 'El stock no puede ser negativo'
      });
    }

    await producto.update({
      nombre,
      descripcion,
      precio,
      stock
    });

    res.status(200).json({
      mensaje: 'Producto actualizado correctamente',
      producto
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar producto',
      error: error.message
    });
  }
};

// DELETE /api/productos/:id
exports.eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      });
    }

    await producto.destroy();

    res.status(200).json({
      mensaje: 'Producto eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar producto',
      error: error.message
    });
  }
};