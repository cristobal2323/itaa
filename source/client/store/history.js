import { createBrowserHistory } from "history";
import createMemoryHistory from "history/createMemoryHistory";

export default (process.env.BROWSER
  ? createBrowserHistory()
  : createMemoryHistory());
