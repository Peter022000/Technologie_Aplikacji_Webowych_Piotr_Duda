import business from '../business/business.container';
import applicationException from "../service/applicationException";
import * as url from "url";
const musicEndpoint = (router) => {

    // function requireLogin(request, response, next) {
    //     if (request.session.loggedIn) {
    //         next(); // allow the next route to run
    //     } else {
    //         // require the user to log in
    //         request.redirect("/login"); // or render a form, etc.
    //     }
    // }
    //
    // router.all("/api/*", requireLogin, function(req, res, next) {
    //     next();
    // });

    router.get('/api/music/getByUser', async (request, response, next) => {
        try {
            const queryObject = url.parse(request.url, true).query;
            const userId = queryObject.userId;
            let result = await business.getMusicManager().query(userId);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/music/:id', async (request, response, next) => {
        try {
            let result = await business.getMusicManager().queryAll();
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
            const queryObject = url.parse(request.url, true).query;
            const id = queryObject.id;
            let result = await business.getMusicManager().remove(id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
};

export default musicEndpoint;
