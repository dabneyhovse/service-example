const { Example } = require("../db/models");

const router = require("express").Router();
module.exports = router;

/**
 * This will be mounted at the following route:
 *
 * dabney.caltech.edu/api/{service.config.route}/examples/
 * // TODO change out for your own routes
 */
router.get("/", async (req, res, next) => {
  try {
    const examples = Example.findAll();
    res.status(200).json(examples);
  } catch (error) {
    next(error);
  }
});
