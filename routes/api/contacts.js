const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contact");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");
const { isValidId } = require("../../middlewares");
console.log(ctrl.add);

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.delateById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
module.exports = router;
