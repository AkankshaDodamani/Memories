import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/',getPosts);
router.get('/createPosts',createPosts);


export default router;