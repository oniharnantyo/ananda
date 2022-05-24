import { Button } from "components";

export const CoreValue = () => {

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
        }
    ]

  return (
    <div className="text-center font-light py-5 bg-primary-second">
        <h1 className="text-whites text-center font-medium text-xl mb-2 py-6">Nilai Utama Kita</h1>
        <div className="container  justify-center">
                {dataProker.map(data => (
                    <div className="max-w-xs float-left py-6 px-4 bg-reddish my-5 mx-1 text-left">
                        <div className="flex justify-center md:justify-start">
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
