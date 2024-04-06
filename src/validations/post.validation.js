const Joi = require('joi');
const { password, objectId, email, role } = require('./custom.validation');

const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    desc: Joi.string().required(),
    photo: Joi.string(),
    categories: Joi.array(),
    userId: Joi.string().custom(objectId),
  }),
};

const getPosts = {
  query: Joi.object().keys({
    keyword: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    lang: Joi.string(),
    title: Joi.string().required(),
    desc: Joi.string().required(),
    photo: Joi.string().allow(null, ''),
    categories: Joi.array().allow(null, ''),
    userId: Joi.string().optional().custom(objectId),
  }),
};

const getPost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

const updatePost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      desc: Joi.string(),
      photo: Joi.string().allow(null, ''),
      categories: Joi.array().allow(null, ''),
      userId: Joi.string().optional().custom(objectId),
    })
    .min(1),
};

const deletePost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};


module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
