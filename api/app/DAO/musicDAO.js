import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const musicSchema = new mongoose.Schema({
    userId: {type: String},
    title: {type: String},
    image: {type: String},
    author: {type: String},
    genre: {type: String},
    year: {type: Number},
    length: {type: Number},
    album: {type: String},
    text: {type: String},
}, {
    collection: 'music',
});
musicSchema.plugin(uniqueValidator);

const MusicModel = mongoose.model('music', musicSchema);

async function query(id) {
    return MusicModel.find({userId: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function queryAll() {
    const result = await MusicModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }

}


async function get(id) {
    return MusicModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new MusicModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return MusicModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

async function remove(id) {
    return MusicModel.deleteOne({_id: id});
}

export default {
    query: query,
    queryAll: queryAll,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    remove: remove,

    model: MusicModel
};
