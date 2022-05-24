interface timerProps {
    timeRemaining: Object;
  }

export const Timer = ({timeRemaining} : timerProps) => {

  return (
    <div className="text-center text-whites font-normal bg-primary-blue-three-200 justify-between h-20 w-96 mx-auto">
        <div className="text-lg float-left w-1/4 mt-4 font-medium "> {timeRemaining['days']} </div>
        <div className="text-lg float-left w-1/4 mt-4 font-medium "> {timeRemaining['hours']} </div>
        <div className="text-lg float-left w-1/4 mt-4 font-medium "> {timeRemaining['minutes']} </div>
        <div className="text-lg float-left w-1/4 mt-4 font-medium "> {timeRemaining['seconds']} </div>
        <div className="float-left text-xs w-1/4">hari</div>
        <div className="float-left text-xs w-1/4">jam</div>
        <div className="float-left text-xs w-1/4">menit</div>
        <div className="float-left text-xs w-1/4">detik</div>
    </div>
  );
};
