(function () {
  const searchBar = document.querySelector(".search"),
    searchButton = document.querySelector(".search-toggle-btn"),
    searchInput = document.querySelector(".search-input");

  searchButton.addEventListener("click", (e) => {
    const expanded = searchButton.getAttribute("aria-expanded") === "false";
    searchButton.setAttribute("aria-expanded", String(expanded));

    searchBar.classList.toggle("-active");

    searchBar.addEventListener(
      "transitionend",
      (e) => {
        if (e.propertyName === "width") {
          expanded && searchInput.focus();
        }
      },
      { once: true }
    );

    expanded
      ? searchButton.setAttribute("aria-label", "Close search")
      : searchButton.setAttribute("aria-label", "Open search");
  });
})();
