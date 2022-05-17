export function StoreUser(user) {
  localStorage.setItem('user', JSON.stringify({user}));
  localStorage.setItem("id", user.id);
  localStorage.setItem("full_name", user.full_name);
  console.log(user.id)
  console.log('full name:', user.full_name);
}

export function GetUser() {
  const user = localStorage.getItem('user');

  if (user) {
    return JSON.stringify(user)
  } else {
    return [];
  }
}

export function RemoveUser() {
  localStorage.removeItem("user");
  localStorage.clear();
}
