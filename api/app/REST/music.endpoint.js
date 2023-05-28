import business from '../business/business.container';
import applicationException from "../service/applicationException";
const musicEndpoint = (router) => {
    router.get('/api/music', async (request, response, next) => {
        try {
            let result = await business.getMusicManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/music/:id', async (request, response, next) => {
        try {
            let result = await business.getMusicManager().query();
            response.status(200).send(result.find(obj => obj.id === request.params.id));
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/music', async (request, response, next) => {
        try {
            const result = await business.getMusicManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.put('/api/music', async (request, response, next) => {
        try {
            const result = await business.getMusicManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.delete('/api/music', async (request, response, next) => {
        try {
            let result = await business.getMusicManager().remove(request.body.id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

};

export default musicEndpoint;
