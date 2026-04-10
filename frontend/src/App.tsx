import { useState } from "react";

import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CreateReview from "./pages/CreateReview";
import BrowseReviews from "./pages/BrowseReviews";
import NotFound from "./pages/NotFound404";

function App() {
  //https://www.w3schools.com/react/react_router.asp
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-review" element={<CreateReview />} />
          <Route path="/browse-reviews" element={<BrowseReviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
