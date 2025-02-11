class Person {
  constructor(name, age) {
    this.n = name;
    this.a = age;
  }

  get name() {
    return this.n;
  }

  set age(value) {
    this.a = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.n} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.n} is teaching`);
  }
}

const person = new Person("John", 25);
console.log(person.name);

person.age = 30;
console.log(person.age);

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
