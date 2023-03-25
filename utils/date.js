// 时间精确到时分毫秒
function format(date) {
    if (!date) return;
    var date2 = new Date(date);
    var y = date2.getUTCFullYear();
    var m = date2.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date2.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date2.getHours();
    h = h < 10 ? '0' + h : h;
    var minute = date2.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    var seconds = date2.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var milliseconds = date2.getMilliseconds(); //获取当前毫秒数（0 - 999）
    milliseconds = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
    // return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + seconds
    return `image-${y}${m}${d}${h}${minute}${seconds}${milliseconds}`;
}
let t = new Date().getTime(); // 当前时间戳
let time = format(t);
console.log(time); //2021-12-30 18:52:640

// new Date()常用的方法
var myDate = new Date();
myDate.getYear(); //获取当前年份(2位)
myDate.getFullYear(); //获取完整的年份(4位,1970-????)
myDate.getMonth(); //获取当前月份(0-11,0代表1月)
myDate.getDate(); //获取当前日(1-31)
myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours(); //获取当前小时数(0-23)
myDate.getMinutes(); //获取当前分钟数(0-59)
myDate.getSeconds(); //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString(); //获取当前日期
var mytime = myDate.toLocaleTimeString(); //获取当前时间
myDate.toLocaleString(); //获取日期与时间
