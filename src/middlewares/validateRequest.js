const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errores = error.details.map((detail) => detail.message);
      return res.status(400).json({
        mensaje: "Error de validación en la petición",
        errores
      });
    }
    next();
  };
};

module.exports = validateRequest;