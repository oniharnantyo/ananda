// import {useHistory} from "react-router-dom"
import { Button } from "components/button";
import { useState } from "react";
import {useHistory} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu'
import MenuIconOpen from '@material-ui/icons/MenuOpen'
import { MenuOpen } from "@material-ui/icons";
interface navbarProps {
    currPage: string;
  }

export const Navbar = ({currPage} : navbarProps) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const history = useHistory()
    const menus = [
        {
            name: 'Beranda',
            link: '/home',
            value: 'homePage'
        },
    ]

    // const a = "{\n\t\"data\": [{\n\t\t\t\"id\": \"d559898d-7768-499a-a319-f5082cf4b0a8\",\n\t\t\t\"title\": \"Vidyasena Vihara Vidyaloka Yogyakarta Rayakan Ulang Tahun ke-29\",\n\t\t\t\"author\": \"Author\",\n\t\t\t\"description\": \"Paragraf awal tulisan boleh lah masukin disini.. 3 baris aja kalo lebih nanti dibikin kayak wikipedia bagus tuh\",\n\t\t\t\"slug\": \"test\",\n\t\t\t\"imageUrl\": \"https://i0.wp.com/buddhazine.com/wp-content/uploads/2016/06/20160614-Vidyasena-Vihara-Vidyaloka-Yogyakarta-Rayakan-Ulang-Tahun-ke-29-3.jpg\",\n\t\t\t\"imageAlt\": \"\",\n\t\t\t\"content\": \"\",\n\t\t\t\"createdAt\": \"2022-05-02T03:14:54+0700\"\n\t\t},\n\t\t{\n\t\t\t\"id\": \"2bb2a816-0a6b-4b9b-811a-86a2c4ed841a\",\n\t\t\t\"title\": \"Vidyasena Vihara Vidyaloka Yogyakarta Rayakan Ulang Tahun ke-29\",\n\t\t\t\"author\": \"Author\",\n\t\t\t\"description\": \"Paragraf awal tulisan boleh lah masukin disini.. 3 baris aja kalo lebih nanti dibikin kayak wikipedia bagus tuh\",\n\t\t\t\"slug\": \"test\",\n\t\t\t\"imageUrl\": \"https://i0.wp.com/buddhazine.com/wp-content/uploads/2016/06/20160614-Vidyasena-Vihara-Vidyaloka-Yogyakarta-Rayakan-Ulang-Tahun-ke-29-3.jpg\",\n\t\t\t\"imageAlt\": \"\",\n\t\t\t\"content\": \"\",\n\t\t\t\"createdAt\": \"2022-05-02T03:14:54+0700\"\n\t\t},\n\t\t{\n\t\t\t\"id\": \"4896f48f-240a-43fe-a8c7-a3747ef227a3\",\n\t\t\t\"title\": \"Vidyasena Vihara Vidyaloka Yogyakarta Rayakan Ulang Tahun ke-29\",\n\t\t\t\"author\": \"Author\",\n\t\t\t\"description\": \"Paragraf awal tulisan boleh lah masukin disini.. 3 baris aja kalo lebih nanti dibikin kayak wikipedia bagus tuh\",\n\t\t\t\"slug\": \"test\",\n\t\t\t\"imageUrl\": \"https://i0.wp.com/buddhazine.com/wp-content/uploads/2016/06/20160614-Vidyasena-Vihara-Vidyaloka-Yogyakarta-Rayakan-Ulang-Tahun-ke-29-3.jpg\",\n\t\t\t\"imageAlt\": \"\",\n\t\t\t\"content\": \"\",\n\t\t\t\"createdAt\": \"2022-05-02T03:14:54+0700\"\n\t\t}\n\t]\n}"
    // console.log(JSON.parse(a))

    return (
        <nav className="flex items-center bg-white p-1 flex-wrap px-20" >
            <Button
                onClick={()=>setOpenSideBar(!openSideBar)}
            >
            {
              openSideBar===false ? 
              <MenuIcon /> : <MenuOpen />
            }
            </Button>
            <a href="#" className="p-2 mr-4 inline-flex items-center">
                <img
                    src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp"
                    alt="logo vidyasena"
                    className="h-8"
                    height='10px'
                    max-width={'8%'}
                />
                <div>
                    <span className=" text-xl text-primari font-medium uppercase tracking-wide px-3">
                        Vidyāsenā - CMS
                    </span>
                </div>
            </a>
        {
            openSideBar && (
                <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-primary-blue-three-200 text-gray-800 z-10">
                <div className="fixed flex flex-col top-0 left-0 w-64 bg-primary-blue-three-200 h-full">
                  <div className="">
                    <ul className="flex flex-col py-4 space-y-1">
                      <li className="px-5">
                          <div className="text-xl font-medium tracking-wide text-gray-500 float-left">Menu</div>
                        <Button className="justify-end justify-items-end float-right" onClick={()=>setOpenSideBar(!openSideBar)}>X</Button> 
                      </li>
                      <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="/blog" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">Blog</span>
                          <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">Messages</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                          <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                        </a>
                      </li>
                      <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                          <div className="text-sm font-light tracking-wide text-gray-500">Tasks</div>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">Available Tasks</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
        }
            <button
                className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                data-target="#navigation"
            >
                <i className="material-icons">menu</i>
            </button>
            <div
                className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                id="navigation"
            >
                <div
                    className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                >
                    {/* {
                        menus.map(menu => (
                            <a
                                href={menu.link}
                                className={`lg:inline-flex font-medium lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-300 hover:text-white
                                 ${
                                     currPage===menu.value? 'underline text-primary-active' : 'text-primari'
                                 }`}>
                                <span>{menu.name.toUpperCase()}</span>
                            </a>
                        ))
                    } */}
                    {
                        <a> <a/>
                        <span>{'Good Morning, '}</span>
                        <span>Admin</span>
                    </a>
                    }
                    <Button onClick={()=>{history.push('/login')}}>Logout</Button>
                </div>
            </div>
        </nav>
    );
};
