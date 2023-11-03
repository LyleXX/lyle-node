import request from 'supertest';
import app from '@/app'

describe('API Testing', () => {
  test('GET /api/endpoint', async () => {
    const response = await request(app.callback()).post('/user/register');
    expect(response.status).toBe(500);
  });

});
