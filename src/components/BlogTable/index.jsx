export const BlogTable = () => {

    const dataSource = [
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
            imgUrl: 'bbb'
        }
    ];
    return (
      
    <div className="overflow-x-auto">
          dis blog page
        <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-red shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Book Code</th>
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">Author</th>
                    <th className="py-3 px-6 text-left">Desc</th>
                    <th className="py-3 px-6 text-left">Created</th>
                    <th className="py-3 px-6 text-left">Last Updated</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {
        //   !loading && 
        dataSource.length !== 0 ? (dataSource.map((tutorial, index) => (<tr className="border-b border-gray-200 hover:bg-blue-100" key={index}>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span className="font-medium">{tutorial.title}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span className="font-medium">{tutorial.author}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span className="font-medium">{'desc'}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span className="font-medium">{tutorial.link}</span>
                          </div>
                        </td>
                        {/* <td className="py-3 px-6 text-left">
              <div className="flex items-center">
                <span className="font-medium">{tutorial.val().createdDate}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left">
              <div className="flex items-center">
                <span className="font-medium">{tutorial.val().updatedDate}</span>
              </div>
            </td> */}
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <button className="w-5 mr-2 transform hover:text-green-500 hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                              </svg>
                            </button>
                            <button className="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>))) :
            <tr className="border-b border-gray-200">
                      <p className="py-3 px-6 text-start ">No Data Recorded 😥</p>
                    </tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>);
};
