const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10&inc=email,name,picture');
  const data = await response.json()
  return data;
}

export default getUsers;
