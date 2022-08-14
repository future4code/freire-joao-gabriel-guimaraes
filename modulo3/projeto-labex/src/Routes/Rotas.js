import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminPage/AdminHomePage";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripPage/ListTripPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import React from "react";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="trips/list" element={<ListTripPage />} />
        <Route path="trips/application" element={<ApplicationFormPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin/trips/list" element={<AdminHomePage />} />
        <Route path="admin/trips/create" element={<CreateTripPage />} />
        <Route path="admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
