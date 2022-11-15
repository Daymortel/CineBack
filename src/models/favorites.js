const db = require('../database');

const showFavorites = async (userId) => {
    return await db('favorites').select().where({ userId });
}

const createFavorites = async (content) => {
    await db('favorites').insert(content);
}

const deleteFavorites = async (showId, userId) => {
    await db('favorites').delete().where({ showId, userId });
}

module.exports = {
    showFavorites,
    createFavorites,
    deleteFavorites
}