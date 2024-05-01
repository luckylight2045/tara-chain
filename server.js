const ExpressLoader = require("./loaders/expressLoader");
const db = require("./db");

async function connectionCheck() {
  await db.$connect();
}

connectionCheck()
  .then(() => {
    console.log("connected to db...");
    const app = new ExpressLoader();
    app.run();
  })
  .catch((err) => {
    console.log(err.message);
    db.$disconnect();
    process.exit(1);
  });
