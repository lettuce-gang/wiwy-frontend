import Book from "./components/Book.tsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Survey from "./pages/Survey.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Book />} /> */}
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
