document.addEventListener("DOMContentLoaded", function () {

  const video = document.getElementById("myVideo");
  const container = document.getElementById("videoContainer");
  const afterVideo = document.getElementById("afterVideo");

  video.addEventListener("ended", function () {
    container.remove();            // remove video
    afterVideo.style.display = "block"; // show image
  });

});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}
  


