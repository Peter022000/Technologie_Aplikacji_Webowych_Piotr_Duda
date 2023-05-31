import musicDAO from '../DAO/musicDAO';

function create(context) {
    async function query(id) {
        let result = musicDAO.query(id);
        if (result) {
            return result;
        }
    }

    async function queryAll() {
        let result = musicDAO.queryAll();
        if (result) {
            return result;
        }
    }


    async function get(id) {
        let result = await musicDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await musicDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function remove(id) {
        let result = await musicDAO.remove(id);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        queryAll: queryAll,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        remove: remove
    };
}

export default {
    create: create
};

