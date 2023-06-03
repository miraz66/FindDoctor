import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import ContactUs from "./pages/ContactUs/ContactUs";
import FindDoctor from "./pages/Find Doctor/FindDoctor";
import HowItWork from "./pages/HowItWork/HowItWork";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/service" element={<Service />} />

            <Route path="/findDoctor" element={<FindDoctor />} />

            <Route path="/howItWork" element={<HowItWork />} />

            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
