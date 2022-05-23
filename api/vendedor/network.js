const express = require("express");


const response = require("../../network/response")
const Controller = require("./index");

const router = express.Router();

router.get("/", async (req, res, next) => {

  try {
    const lista = await Controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const vendedor = await Controller.get(req.params.id);
    response.success(req, res, vendedor, 200);
  } catch (error) {
    next();
  }
});

router.post("/", async (req, res, next) => {

  try {
    const vendedor = await Controller.insert(req.body);

    response.success(req, res, vendedor, 200);
  } catch (error) {
    next();
  }
});

router.put("/", async (req, res, next) => {
  try {
    const vendedor = await Controller.update(req.body);

    response.success(req, res, vendedor, 200);
  } catch (error) {
    next();
  }
});


router.delete('/', async(req, res,next)=>{
  try {
    const vendedor = await Controller.delete(req.body);

    response.success(req, res, vendedor, 200);
  } catch (error) {
    next();
  }
})

module.exports = router;
