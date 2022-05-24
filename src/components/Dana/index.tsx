import React from "react";

import { Button } from "components";

export const Dana = () => {
    return (
        <div className="text-center font-light justify-between my-12">
            <div className="w-1/2 float-left">
                <p className="text-4xl  mb-3  text-left pl-60 font-semibold mt-8">
                    Dana Kebajikan
                </p>
                <p className="text-l font-medium  mb-3 text-left pl-28 text-left">
                </p>
            </div>
            <div className="w-1/2 float-right mx-auto">
                <p className="text-lg mb-3 pr-40 font-medium text-left">
                    Seluruh dana yang dikumpulkan akan digunakan untuk program kerja Vidyasena dan operasional Vihara Vidyaloka
                </p>
                <div className="text-left">
                    <Button><p className="font-medium  text-whites">Donasi</p></Button>
                </div>

            </div>
        </div>
    );
};
