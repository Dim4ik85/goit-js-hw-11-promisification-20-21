const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
    console.log(allUsers);
    console.log(userName);
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    console.log(updatedUsers);
    return Promise.resolve(updatedUsers);
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  console.log(logger);
  /*
   * Сейчас работает так
   */
  // toggleUserState(users, 'Mango', logger);
  // toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);