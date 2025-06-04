# 🧪 PERFORMANCE-TEST-K6

This project demonstrates how to run multiple types of performance tests using [K6](https://k6.io/), including automated visual report generation in HTML format using `k6-html-reporter`.

## ✅ Pre-requirements

- Node.js (used to manage scripts and run commands via npm)
- [K6 installed](https://k6.io/docs/getting-started/installation/)

## 📁 Project Structure

```
PERFORMANCE-TEST-K6/
├── results/
│   ├── result.json         # Raw K6 output in JSON format
│   └── report.html         # HTML report generated from result.json
│
├── scripts/
│   ├── config.js           # Centralized base URL configuration
│   ├── endurance-test.js   # Long-duration test to detect memory leaks
│   ├── load-test.js        # Test under expected traffic levels
│   ├── resilience-test.js  # Simulates failures and recovery
│   ├── scalability-test.js # Gradual ramp-up of virtual users
│   ├── spike-test.js       # Sudden burst in traffic
│   ├── stress-test.js      # Pushes system to breaking point
│   └── volume-test.js      # Tests large data volume handling
│
├── .gitignore
├── generateReport.js       # Generates HTML report from JSON using k6-html-reporter
├── package.json
├── package-lock.json
└── README.md


```

## 🚀 🧪 Available Test Scenarios

Each scenario can be run using the corresponding npm script:

```
npm run test:load
npm run test:stress
npm run test:spike
npm run test:volume
npm run test:endurance
npm run test:resilience
npm run test:scalability
```

Each test uses handleSummary() to save results to results/result.json.

## 📊 Generating Visual Reports

After running any test, generate the report with:

```
npm run report
```

This runs generateReport.js, which:

- Reads: results/result.json

- Outputs: results/report.html

Open the HTML file in your browser to explore:

- 💡 Requests per second

- 🕒 Response times

- 🚨 Error rates

- ✅ Passed/failed checks

- 🎯 Threshold evaluations

You can open this file in your browser to view charts and detailed metrics.

## 🔧 Centralized Configuration

All test scripts use the BASE_URL defined in scripts/config.js. Update the URL there to point all tests to a different environment:

```
export const BASE_URL = 'https://test-api.k6.io';
```

## 📌 Notes

This project was built for study and practice purposes to simulate real-world performance testing scenarios using K6.

## 👩‍💻 Author

Made with 💻 and ☕ by Cecília
as part of a QA performance testing study project.
Feel free to explore, adapt, and improve it for your own performance test scenarios!
