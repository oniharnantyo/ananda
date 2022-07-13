import { format, intervalToDuration } from "date-fns";
import { id } from 'date-fns/locale';
import { useState, useEffect } from "react";
export const NearbyEvents = () => {
    const [dateNow, setDateNow] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDateNow(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const data = {
        name: 'Sanghadana Kathina Puja',
        year: ' 2650BE / 2019',
        date: new Date(2068, 3, 4, 19, 5, 0)
    };
    const generateTimeRemaining = (datetime) => {
        const timeDiff = intervalToDuration({
            start: datetime,
            end: dateNow
        });
        return timeDiff;
    };
    return (<div className="text-center font-light py-5 bg-asphalt justify-between flex-1">
      <h1 className="text-whites font-medium text-xl mb-2">Acara Terdekat</h1>
      <div className="w-1/2 float-left">
        <p className="text-3xl text-whites mb-3 text-left pl-28 font-medium">
          {data.name}<br />
          {data.year}
        </p>
        <p className="text-l font-medium text-whites mb-3 text-left pl-28">
          {/* {formatRelative(subDays(new Date(), 3), new Date(), { locale: id })} */}
          X {format((data.date), "eeee, dd MMMM yyyy", { locale: id })} <br />
          X {format((data.date), "HH.mm' WIB'", { locale: id })}
          <br />
        </p>
      </div>
      <div className="w-1/2 float-right mx-auto">
        <p className="text-lg text-whites mb-3 font-medium">
          Akan dimulai dalam
        </p>
      </div>
    </div>);
};
