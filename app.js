const api_key = config.API_KEY;
const btn = document.querySelector("button");
btn.addEventListener("click", ySearch);

function ySearch(e) {
  const searchTerm = document.querySelector("input");
  searchTerm.setAttribute("value", "test");
  let search = searchTerm.value;
  search = encodeURIComponent(search);
  const url =
    "https://www.googleapis.com/youtube/v3/search/?part=snippet&key=" +
    api_key +
    "&q=" +
    search +
    "&maxResults=20";
  const output = document.querySelector(".output");
  document.querySelector(".output").textContent = url;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}
