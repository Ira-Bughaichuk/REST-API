const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contact");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");
const { authenticate, isValidId } = require("../../middlewares");

console.log(ctrl.add);

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.delateById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
module.exports = router;
