import http from 'k6/http'
import { check } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '10s', target: 200 }, // spike
    { duration: '30s', target: 10 }
  ]
}

export default function () {
  const res = http.get(`${BASE_URL}/public/crocodiles/`)
  check(res, {
    'status is 200': (r) => r.status === 200
  })
}

export function handleSummary(data) {
  return {
    'results/result.json': JSON.stringify(data)
  }
}
