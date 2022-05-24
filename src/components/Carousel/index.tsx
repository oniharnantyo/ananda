export const Carousel = () => {

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
    }
  ]

  return (
    <div className="text-center font-light py-5 bg-primary-blue-three">
<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <div className="mx-auto bg-primary-blue-three">
        <h1 className="text-primari font-medium text-xl mt-40 mb-2 py-6 text-left ml-20 bg-primary-blue-three">Galeri Foto</h1>
        <div className="mx-16 justify-center bg-primary-blue-three">
            {dataArticle.map(data => (
              <div className="max-w-sm float-left py-6 px-6 text-left bg-primary-blue-three">
                <div className="flex justify-center md:justify-start bg-primary-blue-three">
                  <img
                    className="w-80 h-60 object-cover"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                </div>
              </div>
            ))}
            <div className="max-w-2xl mx-auto">

        {/* <div id="default-carousel" className="relative" data-carousel="static">
          {/* <!-- Carousel wrapper --> */}
          {/* <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
              <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
          </div>
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>
          <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div> */}
      </div>
    </div>
       </div>
     </div>
  );
};
