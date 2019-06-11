class User {
  constructor(first_name, last_name, user_age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.user_age = user_age;
  }

  get name() {
    return this.first_name;
  }

  set name(name) {
    this.first_name = name;
  }

  get lastName() {
    return this.last_name;
  }

  set lastName(lastName) {
    this.last_name = last_name;
  }

  get age() {
    return this.user_age;
  }

  set age(age) {
    this.user_age = age;
  }
}

module.exports = User;
