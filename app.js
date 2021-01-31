const api_key = config.API_KEY;
const output = document.querySelector(".output");
// const searchTerm = document.querySelector("input");
const btn = document.querySelector("button");
// searchTerm.setAttribute("value", "test");
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
  document.querySelector(".output").textContent = url;
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      show(data.items);
    });
}

function show(data) {
  console.log(data);
  console.log(data.length);
  data.forEach(function (video) {
    console.log(video);
    let div = document.createElement("div");
    div.classList.add("box");
    let temp = document.createTextNode(video.snippet.description);
    div.appendChild(temp);
    let span = document.createElement("span");
    span.innerHTML =
      '<a href="http://www.youtube.com/watch?v=' +
      video.id.videoId +
      '"target="_blank">' +
      video.snippet.title +
      "</a>";
    console.log(span.innerHTML);
    div.appendChild(span);
    output.appendChild(div);
  });
}
