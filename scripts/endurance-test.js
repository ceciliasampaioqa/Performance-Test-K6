import http from 'k6/http'
import { check } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  vus: 10,
  duration: '1h'
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
