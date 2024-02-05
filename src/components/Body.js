import "../App.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import SignUp from "./SignUp";
import Browser from "./BrowsePage/Browser";
import MovieDataContainer from "./SingleMovieDataPage/MovieDataContainer";;
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
      path: "browser/movie/:id",
      element: <MovieDataContainer />,
    }
  ]);
  return (
    <RouterProvider router={appRouter}>
      </RouterProvider>
  );
};
export default Body;
