function isLeapYear (year){
    const remainder = year % 4;
    if (remainder === 0) {
        console.log('Your Year is a leap Year');
    }
    else{
        console.log('Your Year is a not leap Year');
    }
}
isLeapYear (1933);