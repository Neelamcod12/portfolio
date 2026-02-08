const items = document.querySelectorAll(".reveal");

function show() {
  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", show);
show();
