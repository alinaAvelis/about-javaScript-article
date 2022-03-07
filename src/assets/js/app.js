import btnToUp from "./modules/buttonToUp";

window.addEventListener('DOMContentLoaded', () => {

  try {
    btnToUp(".btn_to_upp", "body");
  
  } catch(e) {
    console.log(e)
  } 

  try {
    function getDayInfo(dataString) {
      const string = dataString.split(".");
      const data = new Date(+string[2], +string[1]-1, +string[0]);
      const day = data.toLocaleString("ru", {day: 'numeric' });
      const weekDay = data.toLocaleString("ru", { weekday: 'long' });
      const month = data.toLocaleString("ru", { month: 'long' });
      const year = data.toLocaleString("ru", { year: 'numeric' });

      function toUpperCase(str) {
        let wordArr = Array.from(str);
        let letter = wordArr[0];
        let upperLeter = letter.toUpperCase();
        wordArr[0] = upperLeter;
        const newString = wordArr.join();

        return newString.replace(/,/g, "");
      }

      function getMonth(monthStr) {
        let month = monthStr;
        let newMonth = '';

        if(monthStr[month.length - 1] === 'ь') {
          newMonth = `${month.slice(0, month.length - 1)}я`;
          
        } else if (monthStr[month.length - 1] === 'й') {
          newMonth = `${month}я`;
        } else {
          newMonth = `${month}а`;
        }

        

        return toUpperCase(newMonth);
      }

      function getWeekNumber(dayStr) {
        let day = +dayStr;
        let weekNumber;

        if(day <= 7) {
          weekNumber = 1;
        } else if (7 < day && day <= 14) {
          weekNumber = 2;
        } else if (14 < day && day <= 21) {
          weekNumber = 3;
        } else {
          weekNumber = 4;
        }

        return weekNumber;
      }


      return `${toUpperCase(weekDay)}, ${getWeekNumber(day)} неделя ${getMonth(month)} ${year} года`;
    }

    const newData = getDayInfo('18.08.2018');
    console.log(newData);
  
  } catch(e) {
    console.log(e)
  } 

});



