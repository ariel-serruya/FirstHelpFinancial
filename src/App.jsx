import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import EventsPage from "./pages/EventsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<EventsPage />} />
      </Routes>

      {/* </div> */}
    </Router>
  );
}

export default App;
