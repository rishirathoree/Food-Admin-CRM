import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/lofo.png'
import {
  SignOut,
  User,
  Pen,
  ListNumbers,
  House,
  CookingPot,
  Envelope,
  Receipt,
  Key,
  UserFocus,
  Hamburger,
  CaretDown,
  ForkKnife,
  Pizza,
  Popcorn,
  Martini,
  Cookie,
} from "phosphor-react";

const Sidebar = () => {
  const [logoutShow, setLogoutShow] = useState(false);

  const sidebars = [
    {
      block: "Home",
      icon: "",
      menus: [
        {
          name: "Home",
          link: "/",
          inActiveIcon: House,
          ActiveIcon: House,
        },
      ],
    },
    {
      block: "Managements",
      icon: "",
      menus: [
        
        {
          name: "Categories",
          inActiveIcon: ForkKnife,
          ActiveIcon: ForkKnife,
          // link: "/booking/checkins",
          subMenus: [
            {
              title: "All Categories",
              icon: 'null',
              link: "/categories/allcategories",
            },
          ]
        },
        {
          name: "Menus",
          inActiveIcon: Cookie,
          ActiveIcon: Cookie,
          link: "/booking/checkins",
          subMenus: [
            {
              title: "All Menus",
              icon: 'null',
              link: "/menus/allmenus",
            },
          ]
        },
        {
          name: "Foods",
          inActiveIcon: Pizza,
          ActiveIcon: Pizza,
          link: "/foods/allfoods",
          subMenus: [
            {
              title: "All Foods",
              icon: 'null',
              link: "/foods/allfoods",
            },
          ]
        },
        
      ],
    },
    {
      block: "Account",
      icon: "",
      menus: [
        {
          name: "Settings",
          inActiveIcon: User,
          ActiveIcon: User,
          link: "/booking/checkins",
          subMenus: [
            {
              title: "General",
              icon: User,
              link: "/account/general",
            },
            {
              title: "Email",
              icon: Envelope,
              link: "/account/email",
            },
          ]
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const [activeDropdown, setActiveDropDown] = useState(1);

  useEffect(() => {
    const foundMenu = sidebars.find((block, blockIdx) =>
      block.menus.some((menu, menuIdx) =>
        menu.subMenus
          ? menu.subMenus.some((subMenu) =>
              location.pathname.endsWith(subMenu.link)
            )
          : false
      )
    );
    if (foundMenu) {
      const blockIdx = sidebars.indexOf(foundMenu);
      const foundMenuIdx = foundMenu.menus.findIndex((menu) =>
        menu.subMenus
          ? menu.subMenus.some((subMenu) =>
              location.pathname.endsWith(subMenu.link)
            )
          : false
      );
      setActiveDropDown(`${blockIdx}-${foundMenuIdx}`);
    } else {
      setActiveDropDown(null);
    }
  }, [location.pathname]);

  return (
    <>
      <aside className="w-[280px] shadow-gray-400/20 z-50 shadow-xl h-screen overflow-hidden overflow-y-auto flex flex-col justify-between scroll custom-scroll">
        <div className="space-y-4">
          <button className="p-4 focus:animate-keep-bounce flex items-center gap-1">
            <img src={logo} className="w-12 h-12` drop-shadow-xl" alt="" />
            </button>
          <ul>
            {sidebars.map((blocks, blockIdx) => (
              <li key={blockIdx} className="">
                {blocks.block && (
                  <p className="text-gray-500 tracking-normal px-6 py-2 text-[10px] font-medium">
                    {blocks.block}
                  </p>
                )}
                {blocks.menus.map((menus, menuIdx) => (
                  <div key={menuIdx}>
                    <div
                      onClick={() => {
                        setActiveDropDown((prevValue) =>
                          prevValue === `${blockIdx}-${menuIdx}`
                            ? null
                            : `${blockIdx}-${menuIdx}`
                        );

                        if (!menus.subMenus) {
                          navigate(menus.link);
                        }
                      }}
                      className={`px-6 py-4 w-full cursor-pointer flex items-center justify-between gap-2
                      ${
                        !menus.subMenus && location.pathname.endsWith(menus.link)
                          ? "bg-orange-700/90 text-white"
                          : "hover:bg-orange-700/10 hover:text-black  "
                      }
                      `}
                    >
                      <span className="flex items-center gap-2">
                        <menus.ActiveIcon size={20} weight="light" />
                        <p
                          className={`first-letter:uppercase font-medium leading-none tracking-tighter  text-[12px] dark:text-white`}
                        >
                          {menus.name}
                        </p>
                      </span>
                      {menus.subMenus && (
                        <CaretDown
                          className={`bx bx-chevron-up duration-700 ${
                            activeDropdown === `${blockIdx}-${menuIdx}`
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </div>
                    <div
                      className={`overflow-hidden  ${
                        activeDropdown === `${blockIdx}-${menuIdx}`
                          ? "max-h-[400px] visible opacity-100 duration-1000 "
                          : "duration-200 max-h-0 invisible opacity-0"
                      }`}
                    >
                      {menus.subMenus &&
                        menus.subMenus.map((submenus, submenuIdx) => (
                          <Link to={submenus.link} key={submenuIdx}>
                            <span
                              className={`w-full flex items-center cursor-pointer gap-2 pl-12  py-4
               ${
                 location.pathname.endsWith(submenus.link)
                   ? "bg-orange-700/90 text-white"
                   : "hover:bg-orange-700/10 hover:text-black text-gray-800"
               }
               `}
                            >
                              <submenus.icon weight={"thin"} size={20} />
                              <p className=" tracking-normal text-[10px] font-medium">
                                {submenus.title}
                              </p>
                            </span>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
