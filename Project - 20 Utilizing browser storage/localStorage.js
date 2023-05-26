const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

const userId = 123;
const user = {
  name: "Kanishka",
  age: 24,
  hobbies: ["Sports", "Cooking"],
};

storeButton.addEventListener("click", () => {
  localStorage.setItem("uuid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrieveButton.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uuid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedId) {
    console.log("Got the id");
  } else {
    console.log("Error in getting the id");
  }
});
