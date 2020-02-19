import history from '../History';
export const isAuth = () => {
  var keyName = [];
  if (localStorage.length === 0) return history.push("/login");
  for (var i = 0; i <= localStorage.length; i++) {
    keyName.push(localStorage.key(i));
  }
  var check = keyName.filter(val => val === "uid_user");
  if (check.length === 0) return history.push("/login");
};