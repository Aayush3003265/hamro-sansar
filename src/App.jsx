import React, { useContext } from "react";
import { CitiesProvider } from "./contexts/CitiesContext"; // Import the context provider
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import Login from "./pages/Login";

function App() {
  return (
    // <FakeAuthProvider>
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="country" element={<CountryList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
    // </FakeAuthProvider>
  );
}

export default App;
