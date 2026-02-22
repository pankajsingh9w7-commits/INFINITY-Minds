const appInfo = {
  version: "2.0.0",
  releaseDate: "22 February 2026",
  changes: {
    added: [
      "Version history system added",
      "About page upgrade"
    ],
    improved: [
      "Mobile UI improvements",
      "Sidebar toggle improved"
    ],
    fixed: [
      "Minor layout bugs fixed"
    ]
  }
};

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {

  // Current version box
  document.getElementById("version-number").textContent =
    "v" + appInfo.version;

  document.getElementById("last-updated").textContent =
    "Last Updated: " + appInfo.releaseDate;

  // Toggle changelog
  const toggleBtn = document.getElementById("toggleChangelog");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.getElementById("changelog").classList.toggle("hidden");
    });
  }

  // Fill changelog
  if (appInfo.changes) {

    document.getElementById("changelog-title").textContent =
      "🚀 v" + appInfo.version + " - " + appInfo.releaseDate;

    appInfo.changes.added.forEach(item => {
      document.getElementById("added-list").innerHTML += "<li>" + item + "</li>";
    });

    appInfo.changes.improved.forEach(item => {
      document.getElementById("improved-list").innerHTML += "<li>" + item + "</li>";
    });

    appInfo.changes.fixed.forEach(item => {
      document.getElementById("fixed-list").innerHTML += "<li>" + item + "</li>";
    });

  }

});