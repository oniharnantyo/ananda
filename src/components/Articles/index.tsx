import React from "react";

import { Button } from "components";

export const Articles = () => {

  const dataArticle = [
    {
      title: 'Acara 1',
      date: '04 Juni 2022',
      author: 'Nama panjang disini okelah',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Acara 2',
      date: '04 Juni 2022',
      author: 'Nama panjang disini okelah',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Acara 3',
      date: '04 Juni 2022',
      author: 'Nama panjang disini okelah',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]

  return (
    <div className="text-center font-light py-5 bg-primary-blue-three">
      <div className="container mx-auto">
        <h1 className="text-whites font-medium text-xl mb-2 py-6">Artikel terbaru</h1>
        <div className="container mx-16 justify-center">
          {dataArticle.map(data => (
            <div className="max-w-sm float-left py-6 px-6 bg-reddish my-5  text-left mx-2">
              <div className="flex justify-center md:justify-start">
                <img
                  className="w-80 h-60 object-cover"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
              </div>
              <div>
                <h2 className=" text-2xl font-semibold py-4 text-primari">{data.title}</h2>
                <h3 className=" text-xl font-normal text-primari">{data.date}</h3>
                <h3 className=" text-xl font-normal text-primari">{data.author}</h3>
                <p className=" mt-4 text-gray-600 font-normal text-primary-second line-clamp-3">{data.desc}</p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-l font-medium text-indigo-500">Baca selengkapnya...</a>
              </div>
            </div>
          ))}
        </div>
        <h1 className=" text-right text-whites text-xl mb-2 py-6">{`Lihat artikel lainnya >>`}</h1>
      </div>
    </div>
  );
};
