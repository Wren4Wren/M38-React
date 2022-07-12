export const signUp = async (username, email, password, setter) => {
  try {
    //res = response
    const res = await fetch("http://localhost:5001/user", {
      method: "POST", // HTTP verb - POST, GET, PUT, ect
      headers: { "Content-Type": "application/json" }, // Our content type for our app is JSON
      body: JSON.stringify({ username, email, password }), // Body has been turned into JSON with stringify
    });
    const data = await res.json();
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};
