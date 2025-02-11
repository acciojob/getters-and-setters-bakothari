class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }



  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

const person = new Person("John", 30);
console.log(person.name);

person.age = 35;
console.log(person.age);

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
