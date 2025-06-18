# CI/CD Integration

This folder contains sample pipeline configurations for running K6 performance tests as part of your CI/CD flow.

- `Jenkinsfile`: Declarative pipeline that checks out the repo and runs K6
- `gitlab-ci.yml`: GitLab CI script using the official Grafana K6 Docker image

Next steps: Add test thresholds, stage results to external storage, or fail the build on performance regression.
