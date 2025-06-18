# K6 Performance Framework MVP

This is a minimal performance testing framework using [k6](https://k6.io/) to simulate load against a backend API.

## Structure
- `scripts/`: Contains K6 test scripts
- `results/`: Directory to store test results
- `config/`: Configuration files and environment setups

## Running a Test
```bash
k6 run scripts/test-orders.js
```

## Example Scenario
- Simulates user placing orders via an eCommerce API
- Captures response times and failure rates
- Configurable load stages

## Dependencies
- Install [k6](https://k6.io/docs/getting-started/installation/) on your machine

## Next Steps
- Integrate with CI (GitHub Actions / GitLab CI)
- Add thresholds and summary output to external files
