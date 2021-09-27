setInterval(setClock ,1)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const millisecondHand = document.querySelector('[data-millisecond-hand]')
const newDate = document.querySelector('.date')
const todaysDay = document.querySelector('.day')
const currentTime = document.querySelector('.time') 

function setClock(){
    const currentDate = new Date()

    const millisecondsRatio = currentDate.getMilliseconds() / 1000
    const secondsRatio = (millisecondsRatio + currentDate.getSeconds()) / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    if(hours < 10){
        hours = "0"+ hours;
    }

    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    if(seconds < 10){
        seconds = "0"+ seconds;
    }
    currentTime.textContent = hours + ':' + minutes + ':' + seconds


    
    setRotation(millisecondHand, millisecondsRatio)
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}

setClock()

function dayDate(){
    const dD = new Date()

    let days = dD.getDay()
    let dates = dD.getDate()
    let months = dD.getMonth()
    let years = dD.getFullYear()

   
    if(days === 1){
        todaysDay.textContent ="MON" ;
    }else if(days === 2){
        todaysDay.textContent ="TUE" ;
    }else if(days === 3){
        todaysDay.textContent ="WED" ;
    }else if(days === 4){
        todaysDay.textContent ="THR" ;
    }else if(days === 5){
        todaysDay.textContent ="FFI" ;
    }else if(days === 6){
        todaysDay.textContent ="SAT" ;
    }else {
        todaysDay.textContent ="SUN" ;
    }

   
    if(dates < 10){
        dates = "0"+ dates;
    }
    if(months < 10){
        months = "0"+ (months + 1);
    }


    
    newDate.textContent = dates + ':' + (months) + ':' + years;

}

dayDate()



