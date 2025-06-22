import request from 'supertest';
import app from '@/server/server';

describe('User Routes', () => {
  test('GET /:id returns 200 and correct message', async () => {
    const response = await request(app)
      .get('/api/123')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toEqual({ message: 'Get user endpoint' });
  });

  test('POST / returns 201 and correct message', async () => {
    const userData = { name: 'Test User', email: 'test@example.com' };
    
    const response = await request(app)
      .post('/api')
      .send(userData)
      .expect('Content-Type', /json/)
      .expect(201);
    
    expect(response.body).toEqual({ message: 'User created successfully' });
  });

  test('PUT /:id returns 200 and correct message', async () => {
    const userData = { name: 'Updated User', email: 'updated@example.com' };
    
    const response = await request(app)
      .put('/api/123')
      .send(userData)
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toEqual({ message: 'User updated successfully' });
  });

  test('DELETE /:id returns 200 and correct message', async () => {
    const response = await request(app)
      .delete('/api/123')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toEqual({ message: 'User deleted successfully' });
  });
});