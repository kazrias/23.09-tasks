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



