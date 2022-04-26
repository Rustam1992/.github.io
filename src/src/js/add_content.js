var today = new Date();
var hour_current = today.getHours();
var greeting;
if (hour_current>18){
    greeting='good evening';
} else if(hour_current>12){
    greeting='good afternoon'
}else if(hour_current>0) {
    greeting='good morning'
}else {
    greeting='hello'
}
document.write('<h3>'+ greeting+'</h3>');