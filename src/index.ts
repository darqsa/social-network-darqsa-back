import "./loadEnv";
import connectDatabase from "./database/connectDatabase";
import startServer from "./server/startServer";

const port = process.env.PORT ?? 4000;
const mongoDB = process.env.DDBB;

(async () => {
  try {
    await connectDatabase(mongoDB as string);
    await startServer(port as number);
  } catch {
    process.exit(1);
  }
})();
