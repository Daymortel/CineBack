const db = require('../database');

const showFavorites = async (userId) => {
    return await db('favorites').select().where({ userId });
}

const createFavorites = async (content) => {
    await db('favorites').insert(content);
}

const deleteFavorites = async (id) => {
    await db('favorites').delete().where({ id });
}

module.exports = {
    showFavorites,
    createFavorites,
    deleteFavorites
}