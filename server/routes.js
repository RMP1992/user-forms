const express = require('express');
const mongodb = require('mongodb');
const Post = require('./models/post')

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    try {
        const posts = await loadPostCollection();
        res.send(await posts.find({}).toArray());
    } catch (error) {
        console.log(error)
    }
    
})

//Add Post
router.post('/',async (req, res) => {
    const post = await loadPostCollection();
    await post.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Delete Post
router.delete('/:id', async (req, res) => {
    const post = await loadPostCollection();
    await post.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

//Update Post
router.put('/:id', async (req, res) => {
    try {
        let id = new mongodb.ObjectID(req.params.id)
        const post = await loadPostCollection();
        await post.updateOne({
            _id: id
        }, {$set: 
                {
                    text: req.body.text
                }
        });

        res.status(200).send('/:id');
    } catch (error) {
        console.log(error)
    }
    
})





module.exports = router