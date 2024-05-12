function createUser(fName, lName) {
  const newUser = {};
  newUser.fName = fName;
  newUser.lName = lName;
  return newUser;
}

const userOne = createUser('Bob', 'Bobby');
const userTwo = createUser('Lena', 'Muster');
