class Person {

	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}

	card(elId) {
		var mydiv = document.getElementById(elId);
		mydiv.innerHTML += "<div>" + "Name: " + this.name + "</div>" + "</br>";
		mydiv.innerHTML += "<div>" + "Surname: " + this.surname + "</div>" + "</br>";
		mydiv.innerHTML += "<div>" + "Age: " + this.age + "</div>" + "</br>";
	}
}

var person1 = new Person ("<strong>John</strong>", "<strong>Doe</strong>", "<strong>25</strong>");
person1.card("person1");

var person2 = new Person ("<strong>Jerry</strong>", "<strong>Anything</strong>", "<strong>25</strong>");
person2.card("person2");

var person3 = new Person ("<strong>Emily</strong>", "<strong>Whatever</strong>", "<strong>25</strong>");
person3.card("person3");

var person4 = new Person ("<strong>Amy</strong>", "<strong>Everything</strong>", "<strong>25</strong>");
person4.card("person4");