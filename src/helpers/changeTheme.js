export const changeTheme = (event) => {
  const dMode = document.querySelector("#dmode");
  const body = document.querySelector("body");
  body.classList.toggle("darkmode");
};
