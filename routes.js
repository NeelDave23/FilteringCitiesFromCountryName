const { Router } = require("express");

const router = Router();
const controllers = require("./controller");
// router.get("/", controllers.homepage);
router.get("/:id", controllers.Adddata);
router.get("/", controllers.findCity);
// router.get("/:id", controllers.updateData);
module.exports = router;
