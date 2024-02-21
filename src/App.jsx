// import NotFound from "./components/NotFound.jsx"; // Make sure NotFound component is imported
import { RouterProvider } from "react-router-dom";
import "./index.css";
import {routes} from './routes/routes'

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
