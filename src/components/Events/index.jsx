export const Events = () => {
    const dataArticle = [
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        }, {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        }, {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
        {
            title: 'Sanghadana Kathina Puja 2650BE / 2109',
            date: '04 Juni 2022',
            time: '19.00 WIB',
            location: 'Vihara Vidyaloka, Yogyakarta',
        },
    ];
    return (<div className="text-center font-light py-5 bg-whites">
      <div className="container mx-auto">
        <h1 className="text-primari font-medium text-xl mb-2 py-6 text-left ml-20">Acara terdekat</h1>
        <div className="container mx-16 justify-center">
          {dataArticle.map(data => (<div className="max-w-sm float-left py-6 px-6 bg-reddish my-5  text-left mx-2">
              <div className="flex justify-center md:justify-start">
                <img className="w-80 h-60 object-cover" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
              </div>
              <div>
                <h2 className=" text-2xl font-semibold py-4 text-primari">{data.title}</h2>
                <h3 className=" text-xl font-normal text-primari">{data.date}</h3>
                <h3 className=" text-xl font-normal text-primari">{data.time}</h3>
                <p className=" mt-4 text-gray-600 font-normal text-primary-second line-clamp-3">{data.location}</p>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
};
