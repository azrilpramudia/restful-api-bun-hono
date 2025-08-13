import { Hono } from 'hono';
import { createPost, getPosts } from '../controllers/PostController';

const router = new Hono();

// Routes Posts Index
router.get('/', (c) => getPosts(c));

//routes Posts Create
router.post('/', (c) => createPost(c));

export const Routes = router;