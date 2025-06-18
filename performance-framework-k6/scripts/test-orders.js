import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.post('https://test-api.example.com/orders', JSON.stringify({
    product_id: '12345',
    quantity: 1,
  }), { headers: { 'Content-Type': 'application/json' } });

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
