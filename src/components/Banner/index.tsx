import { Button } from "components";
// import yoink from "../../../public/images/"

export const Banner = () => {
    return (
        <div className="text-center font-light text-primari bg-gray-700 relative maxWidth: '100%'" >

            <div className="z-0">
                <img
                    style={{
                        filter: 'brightness(0.2)', width: '100%', marginLeft: 'auto',
                        marginRight: 'auto'}}
                    src="/images/yoink-min.jpg">
                </img>
            </div>

            <div className="z-10 absolute text-whites top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
                <p className="text-2xl text-white-100 mb-3 font-medium">
                    VIHARA VIDYALOKA
                </p>
                <p className="text-4xl text-white-100 mb-3 font-semibold">Vidyasena</p>
                <p className="font-normal">Organisasi sosial pemuda Buddha yang bermarkas di Vihara Vidyaloka Yogyakarta.
                    Didirikan pada tanggal 1 Februari 1987,
                    telah menjadi salah satu organisasi pemuda Buddhis utama
                    di bawah bimbingan Sangha Theravada Indonesia (STI).</p>
                <Button type="button" className="mt-3">
                    <a href="https://pankod.github.io/superplate/" rel="norefferer noopener" target="_blank" >
                        Hubungi Kami
                    </a>
                </Button>

            </div>
    </div>
    );
};
