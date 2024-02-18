import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SignOut,
  User,
  Pen,
  ListNumbers,
  House,
  CookingPot,
  Receipt,
  Hamburger,
  CaretDown,
  ForkKnife,
} from "phosphor-react";

const Sidebar = () => {
  const [logoutShow, setLogoutShow] = useState(false);

  const sidebars = [
    {
      block: "",
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
      block: "",
      // block: "Orders",
      icon: "",
      menus: [
        {
          name: "Orders",
          inActiveIcon: ListNumbers,
          ActiveIcon: ListNumbers,
          link: "/orders",
          // subMenus: [
          //   {
          //     title: "Create Orders",
          //     icon: Receipt,
          //     link: "/orders/create",
          //   },
          // ],
        },
      ],
    },
    {
      block: "",
      // block: "Manage Menus",
      icon: "",
      menus: [
        {
          name: "Cuisine",
          inActiveIcon: CookingPot,
          ActiveIcon: CookingPot,
          link: "/cuisine",
        },
        {
          name: "Foods",
          inActiveIcon: Hamburger,
          ActiveIcon: Hamburger,
          link: "/food",
        },
        {
          name: "Varieties",
          inActiveIcon: ForkKnife,
          ActiveIcon: ForkKnife,
          link: "/varieties",
        },
      ],
    },
    // {
    //   block: "Account",
    //   icon: "",
    //   menus: [
    //     {
    //       name: "Hotel Account Settings",
    //       inActiveIcon: User,
    //       ActiveIcon: User,
    //       link: "/booking/checkins",
    //       subMenus: [
    //         {
    //           title: "General",
    //           icon: User,
    //           link: "/account/general",
    //         },
    //         {
    //           title: "Email",
    //           icon: Envelope,
    //           link: "/account/termsandcondition",
    //         },
    //         {
    //           title: "Security",
    //           icon: Key,
    //           link: "/account/security",
    //         },
    //         {
    //           title: "Account Activity",
    //           icon: UserFocus,
    //           link: "/account/privacypolicy",
    //         },
    //       ]
    //     },
    //   ],
    // },
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
          {/* <img src={cycLogo} className="scale-75 drop-shadow-xl" alt="" /> */}
          <p className="px-6 py-4 font-black text-[17px] -tracking-[0px] capitalize">
          Dundzo
          </p>
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
                          ? "bg-black/90 text-white"
                          : "hover:bg-white text-gray-900 "
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
                   ? "bg-black/90 text-white"
                   : "hover:bg-black/90 hover:text-white text-gray-800"
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
