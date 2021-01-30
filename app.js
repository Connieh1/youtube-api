const api_key = config.API_KEY;

function ySearch(e) {
  const url =
    "https://www.googleapis.com/youtube/v3/search/?part=snippet&key=" +
    api_key +
    "&q=test&maxResults=20";
  document.querySelector(".output").textContent = url;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}
