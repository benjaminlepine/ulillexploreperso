
import formInfos from './assets/i18n/formInfos.json'

export const utils = {
  getNextMonths: function(){
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
  },
  getArrayIndexesFrom: function(array, func) {
    const ret = [], hasFuc = typeof func === "function";
    array.forEach((value, index) => {
      if ((hasFuc  && func(value)) || (!hasFuc && value)){
        ret.push(index);
      }
    });
    return ret;
  },
  pad(s) { return (s < 10) ? '0' + s : s; }
};