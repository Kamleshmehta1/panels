var myTrans = document.querySelectorAll(".panel");

myTrans.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  myTrans.forEach((panel) => {
    panel.classList.remove("active");
  });
}

