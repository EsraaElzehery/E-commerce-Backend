import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Route to get all users
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;