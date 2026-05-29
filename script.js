var images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400"
];

var i = 0;

function next() {
  i++;
  if(i >= images.length) i = 0;

  document.getElementById("gallery-image").src = images[i];
}

function prev() {
  i--;
  if(i < 0) i = images.length - 1;

  document.getElementById("gallery-image").src = images[i];
}