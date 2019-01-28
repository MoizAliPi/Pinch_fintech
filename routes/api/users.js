const express = require('express');
const router = express.Router();

//Files Model
const User = require('../../model/Users');

// @route GET api/files
// @desc Get Al files
// @access Public
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users));
})

module.exports = router;