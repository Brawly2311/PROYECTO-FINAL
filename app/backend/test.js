// TEST MINIMO 
const request = require('supertest'); 
const app = require('./server'); 
 
describe('API Tests', () =
  test('GET /health should return 200', async () =
    const response = await request(app).get('/health'); 
    expect(response.statusCode).toBe(200); 
    expect(response.body.status).toBe('ok'); 
  }); 
 
  test('GET / should return welcome message', async () =
    const response = await request(app).get('/'); 
    expect(response.statusCode).toBe(200); 
    expect(response.body.message).toBeDefined(); 
  }); 
}); 
