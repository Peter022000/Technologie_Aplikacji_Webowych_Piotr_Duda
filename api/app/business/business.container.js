import userManager from './user.manager';
import musicManager from './music.manager';

function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getMusicManager: getter(musicManager)
};
