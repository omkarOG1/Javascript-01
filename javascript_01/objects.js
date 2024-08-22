  
let mySymb = Symbol ("key1")

  const userInfo = {

    name: "Omkar ",
    "full name":"Omkar Gharat",
    age :18,
    email:"omkar@gmail.com",
    [mySymb]:"key1"

  }

  console.log(typeof userInfo[mySymb])
  console.log( userInfo["full name"])
  console.log( userInfo)

