import userEndpoint from './user.endpoint';
import musicEndpoint from "./music.endpoint";

const routes = function (router) {
    userEndpoint(router);
    musicEndpoint (router);
};

export default routes;
