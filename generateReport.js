const reporter = require('k6-html-reporter')

const options = {
  jsonFile: 'results/result.json', // Caminho do arquivo de saída do k6
  output: 'results/' // Caminho do HTML gerado
}

reporter.generateSummaryReport(options)
