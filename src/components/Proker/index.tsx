export const Proker = () => {
    // limit to 6 only
    const dataProker = [
        {
            name: 'Proker1'
        },
        {
            name: 'Proker2'
        },
        {
            name: 'Proker3'
        },
        {
            name: 'Proker4'
        },
        {
            name: 'Proker5'
        },
        {
            name: 'Proker6'
        },
    ]

    return (
        <div className="text-center font-light py-5 bg-gray-700 justify-between">
            <h1 className="text-primari font-medium text-xl mb-2">Program Kerja Unggulan</h1>
            <div className="container mx-16 justify-center">
                {dataProker.map(data => (
                    <div className="max-w-sm float-left py-6 px-6 bg-white my-5  text-left mx-2">
                        <div className="flex justify-center md:justify-start">
                            <img
                                className="w-12 h-12 object-cover rounded-full border-2 border-indigo-500"
                                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                        </div>
                        <div>
                            <h2 className="text-gray-800 text-2xl font-semibold py-2 text-primari">{data.name}</h2>
                            <p className="text-gray-600 font-normal text-primary-second line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-l font-medium text-indigo-500">See More..</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
