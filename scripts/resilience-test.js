import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  stages: [
    { duration: '1m', target: 50 }, // ramp up
    { duration: '2m', target: 100 }, // carga sustentada
    { duration: '1m', target: 0 } // ramp down
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'], // menos de 5% de falhas
    http_req_duration: ['p(95)<500'] // 95% das reqs abaixo de 500ms
  }
}

export default function () {
  const endpoints = [
    `${BASE_URL}/public/crocodiles/`,
    `${BASE_URL}/public/crocodiles/public/invalid-url/`,
    `${BASE_URL}/nonexistent-endpoint/`,
    `${BASE_URL}/public/crocodiles/1/`
  ]

  const res = http.get(endpoints[Math.floor(Math.random() * endpoints.length)])

  check(res, {
    'status is not 5xx': (r) => r.status < 500,
    'valid response': (r) =>
      r.url.includes('invalid-url') || r.url.includes('nonexistent') ? r.status === 404 : r.status === 200
  })

  sleep(Math.random() * 3) // Adiciona variação entre requests
}

export function handleSummary(data) {
  return {
    'results/result.json': JSON.stringify(data)
  }
}
