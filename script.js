// fetch("https://randomuser.me/api/?results=100")
//   .then((response) => response.json())
//   .then((userInfo) => {
//     console.log(userInfo);
//     let guy;
//     let info;
//     userInfo.results.forEach((person) => {
//       console.log(person.name.first);
//       if (personzs.name.first == "Peter") {
//         guy = "Peter";
//         info = `${person.name.first} ${person.name.last}`;
//       }
//     });

//     if (guy == "Peter") {
//       document.getElementById("output").innerHTML = info;
//     } else {
//       alert("We couldn't find a Peter");
//     }
//   });

fetch("https://randomuser.me/api/?results=100%27")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);

    if (data.results.find((user) => user.name.first == "Peter") === undefined)
      throw new Error("Peter is still in Neverland");
    else {
      console.log(data.results.find(() => user.name.first == "Peter"));
    }
  })
  .catch((err) => {
    alert(err.message);
    // document.write("resolve", err);
  });

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Yeah Yeah");
//   } else {
//     reject("Oh noooooooo");
//   }
//   console.log(a);
// });
