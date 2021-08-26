
import formInfos from './assets/i18n/formInfos.json'

export default function GetNextMonths(){
    var months = [], date = new Date(), year = date.getFullYear(), currentMonth = date.getMonth();
    for (var i = 0 ; i < 12 ; i++) {
      date.setMonth(currentMonth + i);
      date.setFullYear(year);
      months.push({monthName: formInfos.months[currentMonth], year: year , mmyyyy: ((currentMonth+1)*10000+year)});
      if (currentMonth === 11){
        currentMonth = 0;
        year++;
      }else {
        currentMonth++;
      }
    }
    return months;
}