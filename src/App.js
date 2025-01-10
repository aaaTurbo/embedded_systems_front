import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [{
      index: true,
      element: <MainPage/>
    }]
  }])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
