import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { Breadcrumbs, CategoriesPage, FoodPage, HomePage, LoginPage, Navbar, SidebarMain } from "./Layout";
const App = () => {
  const routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    // {path:"*", element: <UnavailablePage/>},
    {path:'/*',element:(
      <div className="parent-container flex bg-white h-screen">
        <SidebarMain />
      <div className="right-container-page h-full w-[calc(100%-280px)] rounded-l-md bg-white max-h-full min-h-screen overflow-hidden overflow-y-auto custom-scroll">
        <Navbar />
        <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Cuisine" element={<CategoriesPage/>} />
        <Route path="/food" element={<FoodPage/>} />
      </Routes>
      </div>
      </div>
    )}
  ]);
  
  return routes;
};

export default App;
