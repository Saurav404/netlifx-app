import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Perfume from "perfume.js";
import Analytics from "analytics";
import perfumePlugin from "@analytics/perfumejs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

console.log("Perfume", Perfume);

const analytics = Analytics({
  app: "my-app",
  plugins: [
    {
      name: "test-plugin",
      track: ({ payload }) => {
        console.log("payload", payload);
      },
    },
    perfumePlugin({
      perfume: Perfume,
    }),
  ],
});

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="homepage" element={<Home />}></Route>
        <Route
          exact
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
