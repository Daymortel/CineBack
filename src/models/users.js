const db = require('../database');

const login = async (username, password) => {
    const res = await db('users').where({
        username: username,
        password: password
    }).select('*');

    return res;
}

const createUser = async infos => {
    return await db('users').insert(infos);
}

module.exports = {
    login,
    createUser
};
