const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exec('npm test -- --json --outputFile=test-report.json', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing tests: ${error}`);
    return;
  }

  const reportPath = path.join(__dirname, 'test-report.json');
  const outputPath = path.join(__dirname, 'test-report.txt');

  fs.readFile(reportPath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading test report: ${err}`);
      return;
    }

    const report = JSON.parse(data);
    const results = report.testResults.map(result => {
      return `
Test Suite: ${result.name}
  Tests: ${result.assertionResults.map(assertion => `
    ${assertion.status.toUpperCase()}: ${assertion.title}`).join('\n')}
  `;
    }).join('\n');

    fs.writeFile(outputPath, results, 'utf8', err => {
      if (err) {
        console.error(`Error writing test report: ${err}`);
        return;
      }

      console.log(`Test report generated at ${outputPath}`);
    });
  });
});