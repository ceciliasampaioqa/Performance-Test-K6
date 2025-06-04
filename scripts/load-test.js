import http from 'k6/http'
import { check } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  vus: 50,
  duration: '1m'
}

export default function () {
  const res = http.get(`${BASE_URL}/public/crocodiles/`)

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500
  })
}

export function handleSummary(data) {
  return {
    'results/result.json': JSON.stringify(data)
  }
}
