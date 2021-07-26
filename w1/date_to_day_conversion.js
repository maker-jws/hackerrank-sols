/**
*   Return string of a date's specified day.
*   @param {String} dateString - string date formatted 12/07/2016.
*   @return {String} The corresponding day of the week.
**/
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const test = new Date(dateString).getDay()
    // There should be automatic date provisioning 
    // console.log(new Intl.DateTimeFormat('en-US', options).format(dateObject))
        // const test = new Date(dateString)
        // return  new Intl.DateTimeFormat('en-US',{weekday: "long"}).format(test)
    switch(test){
        case(0):
            dayName = "Sunday";
            break;
        case(1):
            dayName = "Monday";
            break;
        case(2):
            dayName = "Tuesday";
            break;
        case(3):
            dayName = "Wednesday";
            break;
        case(4):
            dayName = "Thursday";
            break;
        case(5):
            dayName = "Friday";
            break;
        case(6):
            dayName = "Saturday";
            break;
    }   
    
    return dayName;
}