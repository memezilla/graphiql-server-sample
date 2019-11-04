import connector from "./connector";
import { run } from "./server";

run(process.env, { handle: connector });
