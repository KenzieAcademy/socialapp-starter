import 'semantic-ui-css/semantic.min.css' 
import configureStore from "./configureStore";

export * from "./actionCreators";
export { history } from "./configureStore";
export const store = configureStore({});
