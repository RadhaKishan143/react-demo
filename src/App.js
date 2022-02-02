import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from "./AppRoute";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
