import { data } from "autoprefixer";
import { Button } from "components";

export const Freebook = () => {

    const bookData =[
        {
            title: 'Atthasila',
            author: 'aurelius mamamia',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
            link: '/brah',
            imgUrl: 'aaa'
        },
        {
            title: 'Pancasila',
            author: 'Mamamia figaro',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
            link: '/brah',
            imgUrl:'bbb'
        }
    ]


    return (
        <div className="text-center font-light py-5 bg-primari">
            <h1 className="text-whites font-medium text-xl mb-8">Freebook Terbaru</h1>
            <div className="container">
                <div className="w-1/2 float-left">
                    <p className="text-3xl text-whites mb-3 text-left pl-28 font-medium">
                        <div className="bg-reddish" style={{ height: '700px', width: '524px' }}></div>
                        <p className="text-2xl text-white mt-6">
                            {bookData[0].title}
                        </p>
                        <p className="text-xl text-white font-light mb-2">
                        {bookData[0].author}
                        </p>
                        <p className="text-sm text-white font-light mb-3">
                        {bookData[0].desc}
                        </p>
                        <Button type="button">
                            <a href={bookData[0].link} rel="norefferer noopener" target="_blank" >
                                Download PDF
                            </a>
                        </Button>
                    </p>
                </div>
                <div className="w-1/2 float-right">
                    <p className="text-3xl text-whites mb-3 text-left pl-28 font-medium">
                        <div className="bg-reddish" style={{ height: '700px', width: '524px' }}></div>
                        <p className="text-2xl text-white mt-6">
                            {bookData[1].title}
                        </p>
                        <p className="text-xl text-white font-light mb-2">
                        {bookData[1].author}
                        </p>
                        <p className="text-sm text-white font-light mb-3">
                        {bookData[1].desc}
                        </p>
                        <Button type="button">
                            <a href={bookData[1].link} rel="norefferer noopener" target="_blank" >
                                Download PDF
                            </a>
                        </Button>
                    </p>
                </div>
            </div>
            <h1 className="text-right text-whites text-xl mb-8 mr-20">{`Lihat Freebook Terbaru >>`}</h1>
        </div>
    );
};
