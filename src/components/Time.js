function GetDate(){
    let Today = new Date();
    let[year, month, day] = [Today.getFullYear(), Today.getMonth()>=10?Today.getMonth():'0'+Today.getMonth().toString(), Today.getDate>=10?Today.getDate():'0'+Today.getDate().toString()]
    return `${year}-${month}-${day}`
}
export {GetDate}