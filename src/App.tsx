import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AriadnesGamePage from "./AriadnesGamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ariadnes_game" replace />} />
        <Route path="*" element={<AriadnesGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
