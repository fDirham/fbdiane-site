import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AriadnesGamePage from "./AriadnesGamePage";

const REDIRECT_URL = "https://fbdiane.substack.com/subscribe";

function RootRedirect() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="*" element={<AriadnesGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
