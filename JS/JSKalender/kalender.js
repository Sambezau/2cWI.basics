function printmonth(amountOfdays) {
    console.log("Mo|Di|Mi|Do|Fr|Sa|So|");
    var output = "";
    for (let days = 1; days <= amountOfdays; days++) {
        if (days < 10) {
            output = output + " " + days + "|";
        } else {
            output = output + days + "|";
        }
        if (days % 7 == 0) {
            console.log(output);
            output = "";
        }
    }
    console.log(output);

}

printmonth(31);

printmonth(28);

printmonth(31);

printmonth(30);

printmonth(31)