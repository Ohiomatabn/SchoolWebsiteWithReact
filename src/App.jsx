import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Profile } from "./pages/profile/Profile";
import { Result } from "./pages/Result/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
