function GetDate(DayDiff){
    let Today = new Date();
    Today.setTime(Today.getTime()-DayDiff*24*60*60*1000);
    let[year, month, day] = [Today.getFullYear(), (Today.getMonth()+1>=10)?Today.getMonth()+1:'0'+(Today.getMonth()+1).toString(), Today.getDate()>=10?Today.getDate():'0'+Today.getDate().toString()]
    return `${year}-${month}-${day}`
}
export {GetDate}