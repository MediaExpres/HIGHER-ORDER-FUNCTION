// newDate('190-01-01').lastYear()
//'1989'

// solution by Bing Chat works like a charm:
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

let date = new Date('1900-01-01');
console.log(date.lastYear()); // 1899

// by Bing Chat answer on wrong request by me :))))) This code adds a new method lastYear to the Date prototype, 
// which returns the year of the date minus one. Then, 
// we create a new Date object with the desired date and call the lastYear method
//  on it to get the result. Note that the correct format for creating a new 
//  Date object is 'YYYY-MM-DD', not 'YYY-MM-DD'. 

// solution by teacher Andrei
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

new Date('1900-01-01').lastYear();

// not finalized