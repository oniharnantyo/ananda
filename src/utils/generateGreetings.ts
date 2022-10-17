const generateGreetings = () => {
  const hours = new Date().getHours();
  const isMorning = hours >= 5 && hours < 10;
  const isDay = hours >= 10 && hours < 15;
  const isEvening = hours >= 15 && hours < 18;
  const isNight = hours >= 18 && hours < 23;
  if (isMorning) {
    return 'Good Morning';
  } else if (isDay) {
    return 'Good Afternoon';
  } else if (isEvening) {
    return 'Good Evening';
  } else if (isNight) {
    return 'Good Night';
  } else {
    return 'Go to Sleep';
  }
};

export default generateGreetings;
