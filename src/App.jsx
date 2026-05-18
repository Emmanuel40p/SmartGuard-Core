import Dashboard from "@/pages/Citizen/dashboard";
import HomePage from "./pages/Home";
import { Route, createBrowserRouter } from "react-router-dom"
import react from "react"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },

    {
      path:"/citizen/dashboard",
      element : <Dashboard/>
    }
  ])


  return (
    <>
      <HomePage />
       
    </>
  );
}

export default App;