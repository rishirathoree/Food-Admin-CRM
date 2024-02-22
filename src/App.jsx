import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import { Breadcrumbs, CategoryPage, FoodPage, HomePage, LoginPage, MenusPage, Navbar, SidebarMain } from "./Layout";
import { useSelector } from "react-redux";
const App = () => {

  const isLogin = useSelector(state=>state.Auth.Auth.data)
  const navigate = useNavigate()

  useEffect(()=>{if(!isLogin){navigate('/login')}},[isLogin,navigate])

  const routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    {
      path: '/*', element: (
        <div className="parent-container flex bg-white h-screen">
          <SidebarMain />
          <div className="right-container-page h-full w-[calc(100%-280px)] rounded-l-md bg-white max-h-full min-h-screen overflow-hidden overflow-y-auto custom-scroll">
            <Navbar />
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories/allcategories" element={<CategoryPage />} />
              <Route path="/foods/allfoods" element={<FoodPage />} />
              <Route path="/menus/allmenus" element={<MenusPage />} />
            </Routes>
          </div>
        </div>
      )
    }
  ]);

  return routes;
};

export default App;
