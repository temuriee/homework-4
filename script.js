const email = document.querySelector(".email-container");
const test = document.querySelector(".test");
const test1 = document.querySelector(".test1");
async function movidamgeli() {
  try {
    const response = await fetch("https://api.github.com/users/");
    const user = await response.json();
    test.textContent = user.value;
  } catch (error) {
    test.textContent = "ar gamovida kodi";
  }
}

test1.addEventListener("click", movidamgeli);
