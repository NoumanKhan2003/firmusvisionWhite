import Joi from "joi";

function contactAddValidation(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName:Joi.string(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    message: Joi.string().required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

export { contactAddValidation };
