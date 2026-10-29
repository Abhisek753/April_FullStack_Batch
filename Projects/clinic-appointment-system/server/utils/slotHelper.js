
const getDayName=(dateString)=> {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return dayNames[date.getDay()];
  };

  const timeToMinutes=(time)=> {
   const parts = time.split(':');
   const hours = parseInt(parts[0], 10);
   const minutes = parseInt(parts[1], 10);
   return hours * 60 + minutes;
  };
  const minutesToTime=(totalminutes)=> {
    const houurs = Math.floor(totalminutes / 60);
    const minutes = totalminutes % 60;
    const h=houurs <10?`0${houurs}`:houurs;
    const m=minutes <10?`0${minutes}`:minutes;
    return `${h}:${m}`;
  }

  const buildSlotsFromSchedule=(startTime, endTime, slotDuration) => {
    const slots = [];
    const start=timeToMinutes(startTime);
    const end=timeToMinutes(endTime);
    let current=start;
    while(current + slotDuration <= end){

      const slotStart=minutesToTime(current);
      const slotEnd=minutesToTime(current + slotDuration);
      slots.push({start:slotStart, end:slotEnd});
      current += slotDuration;
    }
    return slots;
  }

  export {getDayName, buildSlotsFromSchedule, timeToMinutes, minutesToTime};
