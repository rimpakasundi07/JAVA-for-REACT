const handleAddToStrorage = () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  // const email = document.getElementById("email").value;
  // localStorage.setItem(email, name);
  const data = { id, name };
  console.log(data);
};
