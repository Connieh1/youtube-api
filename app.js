const api_key = config.API_KEY;
const output = document.querySelector(".output");
const btn = document.querySelector("button");
const btnPrev = document.createElement("button");
btnPrev.setAttribute("disabled", true);
btnPrev.textContent = "Back";
output.appendChild(btnPrev);
const btnNext = document.createElement("button");
btnNext.setAttribute("disabled", true);
btnNext.textContent = "Next";
output.appendChild(btnNext);
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
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      return data.items.map(function (x) {
        return {
          title: x.snippet.title,
          des: x.snippet.description,
          img: x.snippet.thumbnails.default.url,
          id: x.id.videoId,
          x: x,
        };
      });
    })
    .then((arr) => show(arr))
    .catch((error) => console.log(error));
}

function show(data) {
  console.log(data);
  console.log(data.length);
  data.forEach(function (video) {
    console.log(video);
    let div = document.createElement("div");
    div.classList.add("box");
    let temp = document.createTextNode(video.des);
    let span = document.createElement("span");
    span.innerHTML =
      '<a href="http://www.youtube.com/watch?v=' +
      video.id +
      '"target="_blank">' +
      video.title +
      "</a>";
    console.log(span.innerHTML);
    div.appendChild(span);
    div.appendChild(temp);
    output.appendChild(div);
  });
}
