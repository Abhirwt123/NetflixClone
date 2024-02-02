import "../App.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import SignUp from "./SignUp";
import Browser from "./Browser";
import MovieDetails from "./MovieDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "browser/movieDetails/:id",
      element: <MovieDetails />,
    },
  ]);
  return (
    <RouterProvider router={appRouter}>
      </RouterProvider>
  );
};
export default Body;
