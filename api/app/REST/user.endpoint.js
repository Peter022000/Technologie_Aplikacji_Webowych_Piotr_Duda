import business from '../business/business.container';
import applicationException from '../service/applicationException';
import admin from '../middleware/admin';
import auth from '../middleware/auth';
import url from "url";

const userEndpoint = (router) => {
    router.post('/api/user/auth', async (request, response, next) => {
        try {
            let result = await business.getUserManager().authenticate(request.body.login, request.body.password);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/user/getNameById', async (request, response, next) => {
        try {
            const queryObject = url.parse(request.url, true).query;
            const userId = queryObject.userId;
            const result = await business.getUserManager().getNameById(userId);

            response.status(200).send(JSON.stringify(result.name));
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/create', async (request, response, next) => {
        try {
            const result = await business.getUserManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.delete('/api/user/logout/:userId', auth, async (request, response, next) => {
        try {
            let result = await business.getUserManager().removeHashSession(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });


};

export default userEndpoint;
