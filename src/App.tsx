import Book from "./components/Book.tsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Survey from "./pages/Survey.tsx";
import Result from "./pages/Result.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
