import { Hono } from 'hono';
import { createPost, DeletePost, getPostById, getPosts, updatePost } from '../controllers/PostController';

const router = new Hono();

// Routes Posts Index
router.get('/', (c) => getPosts(c));

//routes Posts Create
router.post('/', (c) => createPost(c));

//router get by id
router.get('/:id', (c) => getPostById(c));

//router update posts
router.patch('/:id', (c) => updatePost(c));

//router delete posts
router.delete('/:id', (c) => DeletePost(c))

export const Routes = router;