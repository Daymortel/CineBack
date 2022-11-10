const express = require('express');
const router = express.Router();
const token = require('../middlewares/token');
const favorite = require('../models/favorites');

router.get('/:userId', [token], async (req, res) => {
    const userId = req.params.userId;
    const favorites = await favorite.showFavorites(userId);
    res.send(favorites);
})

router.post('/', [token], async (req, res) => {
    try {
        await favorite.createFavorites({
            "showId": req.body.showId,
            "userId": req.user.id
        });
    } catch(err) {
        console.log(err.message);
    }
});

router.delete('/:id', [token], async (req, res) => {
    try {
        await favorite.deleteFavorites(req.params.id);
    } catch(err) {
        console.log(err.message);
    }
})

module.exports = router;