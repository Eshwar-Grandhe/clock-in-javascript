// Clock code
function showTime()
{
    var date = new Date();
    var hours,min,seconds;
    hours = date.getHours();
    min = date.getMinutes();
    seconds = date.getSeconds();
    
    if(hours === 0)
    hours = 12;
    hours > 12 ? hours = hours-12 : hours;
    hours > 12 ? document.querySelector('#am-pm').textContent = 'AM': document.querySelector('#am-pm').textContent = 'PM';
    hours < 10 ? hours = '0' + hours : hours;   
    min < 10 ? min = '0' + min : min;
    seconds<10? seconds = '0' + seconds : seconds;

    document.querySelector('#hours').textContent = hours;
    document.querySelector('#min').textContent = min;
    document.querySelector('#seconds').textContent = seconds;
      

    setTimeout(showTime , 1000);
}
    showTime();

