exports.getDate = function() {
    let today = new Date(); let currentDay = today.getDay(); 

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
    let today = new Date(); let currentDay = today.getDay(); 
    const DAY_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return DAY_OF_WEEK[currentDay];

};