const App = require('./src/app')

async function main() {
  const app = new App();
  await app.start();
}

main();

module.exports = main;