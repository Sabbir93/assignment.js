// https://github.com/Sabbir93/assignment.js


// Kilometer To Meter Convert 
function kiloMeterToMeter(kiloMeter) {
    var meter = 1000;
    var totalMeter = 0;
    if (kiloMeter < 0) {
        return "Error: Please Input Positive Value";
    } else {
        totalMeter = meter * kiloMeter;
    }
    return totalMeter;
}



// Bugdet Calculaton
function budgetCalculator(watch, phone, laptop) {
    var watchCost = 0;
    var phoneCost = 0;
    var laptopCost = 0;
    var totalCost = 0;

    if (watch >= 0, phone >= 0, laptop >= 0) {
        watchCost = watch * 50;
        phoneCost = phone * 100;
        laptopCost = laptop * 500;
        totalCost = watchCost + phoneCost + laptopCost;
    } else {
        return "Error: Please Input Positive Value";
    }
    return totalCost;
}



// Hotel Cost Calculation
ffunction hotelCost (day) {
    var totalCost = 0;
    var days = day;
    if (days <= 0) {
        return "Please Input Positive Value";
    } else {
        if (days <= 10) {           //Maximum 1-10 days satying Cost
            var firstTenDay = days * 100;
            totalCost = firstTenDay;
        } else if (days <= 20) {    //Maximum 11-20 days satying Cost
            var firstTenDay = 10 * 100;
            var secondTenDay = (days - 10) * 80;
            totalCost = secondTenDay + firstTenDay;
        } else {                    //Maximum 21-unlimited day satying Cost
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var unlimited = (days - 20) * 50;
            totalCost = firstTenDay + secondTenDay + unlimited;
        }
    }
    return totalCost;
}



// Mega Friend Calculation
function megaFriend("Rumman","Ali Zafar","Rahman Khan","Muhammad Rahman"){
    var maximumLength = friendsName[0];
    for(var i = 0; i< friendsName.length;i++){
    if (friendsName[i].length > maximumLength.length){
        maximumLength = friendsName[i];
    }  
}
    return maximumLength;
}