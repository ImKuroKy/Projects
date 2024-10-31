import { body } from "express-validator";

const userRegistrationValidation = [
  body("name")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long")
    .trim()
    .escape(),
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .trim()
    .escape(),
  body("address.street")
    .optional()
    .isLength({ min: 1 })
    .withMessage("Street is required")
    .trim()
    .escape(),
  body("address.city")
    .optional()
    .isLength({ min: 1 })
    .withMessage("City is required")
    .trim()
    .escape(),
  body("address.state")
    .optional()
    .isLength({ min: 1 })
    .withMessage("State is required")
    .trim()
    .escape(),
  body("address.postal_code")
    .optional()
    .isLength({ min: 1 })
    .withMessage("Postal code is required")
    .trim()
    .escape(),
  body("address.country")
    .optional()
    .isLength({ min: 1 })
    .withMessage("Country is required")
    .trim()
    .escape(),
  body("phone")
    .optional()
    .isLength({ min: 10 })
    .withMessage("Phone number must be at least 10 digits long")
    .trim()
    .escape(),
];

const userLoginValidation = [
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),
  body("password")
    .isLength({ min: 1 })
    .withMessage("Password is required")
    .trim()
    .escape(),
];

export { userRegistrationValidation, userLoginValidation };
