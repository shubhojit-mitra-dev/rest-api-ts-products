import type { Request, Response } from 'express';

export const getUser = (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Get user endpoint' });
};

export const createUser = (req: Request, res: Response): void => {
    res.status(201).json({ message: 'User created successfully' });
};

export const updateUser = (req: Request, res: Response): void => {
    res.status(200).json({ message: 'User updated successfully' });
};

export const deleteUser = (req: Request, res: Response): void => {
    res.status(200).json({ message: 'User deleted successfully' });
};