class University {
  constructor(name) {
    this.name = name;
    this.teachers = [];
    this.students = []
  }
  addMember(...newMembers) {
    for (const newMember of newMembers) {
      if (newMember.role === 'teacher')
        this.teachers.push(newMember)
      else if (newMember.role === 'student')
        this.students.push(newMember)
      else throw new Error(`${newMember.role} is wrong role!`)
    }
  }
  removeMember(...membersToRemove) {
    for (const { name: nameToRemove, age: ageToRemove } of membersToRemove) {
      const isTeacher = this.teachers.findIndex(({ name, age }) => name === nameToRemove && age === ageToRemove);
      const isStudent = this.students.findIndex(({ name, age }) => name === nameToRemove && age === ageToRemove);
      if (isTeacher !== -1) {
        this.teachers.splice(isTeacher, 1)
      }
      else if (isStudent !== -1)
        this.students.splice(isStudent, 1)
      else return 'No such teacher or student in University'
    }
  }

  startLesson() {
    this.teachers.forEach(teacher => teacher.energy -= 5)
    this.students.forEach(student => student.energy -= 2)
  }
}

class UniversityMember {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.energy = 24;
  }
  get info() {
    return {
      name: this.name,
      age: this.age,
      role: this.role,
      energy: this.energy,
    }
  }
}

class Teacher extends UniversityMember {
  constructor(name, age) {
    super(name, age)
    this.role = 'teacher'
  }
}

class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age)
    this.role = 'student'
  }
}

let teacher1 = new Teacher('firstT', 40);
let teacher2 = new Teacher('secondT', 41);
let teacher3 = new Teacher('thirdT', 42)

let student1 = new Student('firstS', 20);
let student2 = new Student('secondS', 21);
let student3 = new Student('thirdS', 22)


let eua = new University('EUA');
eua.addMember(teacher1, teacher2, teacher3, student1, student2, student3)
console.log(eua);

eua.removeMember(teacher1, teacher2, student3)
console.log(eua);

eua.startLesson()
// eua.startLesson()

console.log('after lesson');
console.log(teacher3.energy)
console.log(student2.energy)
console.log(eua);