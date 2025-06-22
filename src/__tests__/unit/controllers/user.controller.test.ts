import { getUser, createUser, updateUser, deleteUser } from '@/controllers/user.controller';
import type { Request, Response } from 'express';

describe('User Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let jsonSpy: jest.Mock;
  let statusSpy: jest.Mock;

  beforeEach(() => {
    jsonSpy = jest.fn().mockReturnThis();
    statusSpy = jest.fn().mockReturnValue({ json: jsonSpy });
    
    mockRequest = {
      params: { id: '123' },
      body: { name: 'Test User', email: 'test@example.com' }
    };
    
    mockResponse = {
      status: statusSpy,
      json: jsonSpy
    };
  });

  test('getUser returns 200 status with correct message', () => {
    getUser(mockRequest as Request, mockResponse as Response);
    
    expect(statusSpy).toHaveBeenCalledWith(200);
    expect(jsonSpy).toHaveBeenCalledWith({ message: 'Get user endpoint' });
  });

  test('createUser returns 201 status with correct message', () => {
    createUser(mockRequest as Request, mockResponse as Response);
    
    expect(statusSpy).toHaveBeenCalledWith(201);
    expect(jsonSpy).toHaveBeenCalledWith({ message: 'User created successfully' });
  });

  test('updateUser returns 200 status with correct message', () => {
    updateUser(mockRequest as Request, mockResponse as Response);
    
    expect(statusSpy).toHaveBeenCalledWith(200);
    expect(jsonSpy).toHaveBeenCalledWith({ message: 'User updated successfully' });
  });

  test('deleteUser returns 200 status with correct message', () => {
    deleteUser(mockRequest as Request, mockResponse as Response);
    
    expect(statusSpy).toHaveBeenCalledWith(200);
    expect(jsonSpy).toHaveBeenCalledWith({ message: 'User deleted successfully' });
  });
});