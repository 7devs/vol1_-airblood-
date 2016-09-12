function printDate(){
    var d = new Date();
    console.log(d.toString());
};

function printLine(){
    console.log('----------------------')
};

module.exports.printDate = printDate
module.exports.printLine = printLine
