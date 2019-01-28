const express = require('express');
const router = express.Router();

//Files Model
const File = require('../../model/Files');

// @route GET api/files
// @desc Get Al files
// @access Public
router.get('/', (req, res) => {
    File.find()
        .sort({
            date: -1
        })
        .then(files => res.json(files));
})

// @route POST api/files
// @desc Create a Post
// @access Private - User Only
router.post('/', (req, res) => {
    const newFile = new File({
        fileName: req.body.name,
        fileURI: req.body.uri
    });

    newFile.save().then((file) => res.json(file));
})

// @route DELETE api/files
// @desc Delete a file
// @access Private - User Only
router.delete('/:id', (req, res) => {
    File.findById(req.params.id)
    .then((file) => file.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});
module.exports = router;