document.querySelector("button").addEventListener("click", me);

function me() {
  let Name = document.querySelector("input").value;

  document.querySelector("span").innerText = Name;
}
