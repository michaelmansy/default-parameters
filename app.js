// with DEFAULT PARAMETERS we can assign some values to not called arguments


// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    //assigning default parameters
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;

    nationality === undefined ? nationality = 'Amercian' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1994);
var emily = new SmithPerson('Emily', 2001, 'Diaz', 'Spanish');