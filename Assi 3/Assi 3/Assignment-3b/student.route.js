const express = require('express');
const { insertData, getData, updateData, deleteData } = require('./student.controller.js');

const router = express.Router();

router.post('/insertData', insertData);
router.get('/getData', getData);
router.put('/updateData', updateData);
router.delete('/deleteData', deleteData);

module.exports = router;
