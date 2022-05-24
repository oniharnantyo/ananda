// import {useHistory} from "react-router-dom"
import {useHistory} from "react-router-dom"

interface navbarProps {
    currPage: string;
  }

export const Navbar = ({currPage} : navbarProps) => {

    const menus = [
        {
            name: 'Beranda',
            link: '/home',
            value: 'homePage'
        },
        {
            name: 'Tentang kami',
            link: '/about',
            value: 'aboutPage',
        },
        {
            name: 'Acara',
            link: '/events',
            value: 'eventPage'
        },
        {
            name: 'Artikel',
            link: '/blog',
            value: 'blogPage'
        },
        {
            name: 'Insight',
            link: '/insight',
            value: 'insightPage'
        },
        {
            name: 'Kontak',
            link: '/contact',
            value: 'contactPage'
        },
    ]

    // const a = "{\n\t\"data\": [{\n\t\t\t\"id\": \"d559898d-7768-499a-a319-f5082cf4b0a8\",\n\t\t\t\"title\": \"Vidyasena Vihara Vidyaloka Yogyakarta Rayakan Ulang Tahun ke-29\",\n\t\t\t\"author\": \"Author\",\n\t\t\t\"description\": \"Paragraf awal tulisan boleh lah masukin disini.. 3 baris aja kalo lebih nanti dibikin kayak wikipedia bagus tuh\",\n\t\t\t\"slug\": \"test\",\n\t\t\t\"imageUrl\": \"https://i0.wp.com/buddhazine.com/wp-content/uploads/2016/06/20160614-Vidyasena-Vihara-Vidyaloka-Yogyakarta-Rayakan-Ulang-Tahun-ke-29-3.jpg\",\n\t\t\t\"imageAlt\": \"\",\n\t\t\t\"content\": \"\",\n\t\t\t\"createdAt\": \"2022-05-02T03:14:54+0700\"\n\t\t},\n\t\t{\n\t\t\t\"id\": \"2bb2a816-0a6b-4b9b-811a-86a2c4ed841a\",\n\t\t\t\"title\": \"Vidyasena Vihara Vidyaloka Yogyakarta Rayakan Ulang Tahun ke-29\",\n\t\t\t\"author\": \"Author\",\n\t\t\t\"description\": \"Paragraf awal tulisan boleh lah masukin disini.. 3 baris aja kalo lebih nanti dibikin kayak wikipedia bagus tuh\",\n\t\t\t\"slug\": \"test\",\n\t\t\t\"imageUrl\": \"https://i0.wp.com/buddhazine.com/wp-content/uploads/2016/06/20160614-Vidyasena-Vihara-Vidyaloka-Yogyakarta-Rayakan-Ulang-Tahun-ke-29-3.jpg\",\n\t\t\t\"imageAlt\": \"\",\n\t\t\t\"content\": \"\",\n\t\t\t\"createdAt\": \"2022-05-02T03:14:54+0700\"\n\t\t},\n\t\t{\n\t\t\t\"id\": \"4896f48f-240a-43fe-a8c7-a3747ef227a3\",\n\t\t\t\"title\": \"Vidyasena Vihara Vidyaloka Yogyakarta Rayakan Ulang Tahun ke-29\",\n\t\t\t\"author\": \"Author\",\n\t\t\t\"description\": \"Paragraf awal tulisan boleh lah masukin disini.. 3 baris aja kalo lebih nanti dibikin kayak wikipedia bagus tuh\",\n\t\t\t\"slug\": \"test\",\n\t\t\t\"imageUrl\": \"https://i0.wp.com/buddhazine.com/wp-content/uploads/2016/06/20160614-Vidyasena-Vihara-Vidyaloka-Yogyakarta-Rayakan-Ulang-Tahun-ke-29-3.jpg\",\n\t\t\t\"imageAlt\": \"\",\n\t\t\t\"content\": \"\",\n\t\t\t\"createdAt\": \"2022-05-02T03:14:54+0700\"\n\t\t}\n\t]\n}"
    // console.log(JSON.parse(a))

    return (
        <nav className="flex items-center bg-white p-1 flex-wrap px-20" >
            <a href="#" className="p-2 mr-4 inline-flex items-center">
                <img
                    src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp"
                    alt="logo vidyasena"
                    className="h-12"
                    height='12px'
                    max-width={'10%'}
                />
                <div>
                    <span className=" text-xl text-primari font-medium uppercase tracking-wide px-3">
                        Vidyāsenā
                    </span>
                    <br />
                    <span className="text-xl text-primari uppercase tracking-wide px-3">
                        Vihāra Vidyāloka
                    </span>
                </div>
            </a>
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
                    {
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
                    }
                </div>
            </div>
        </nav>
    );
};
