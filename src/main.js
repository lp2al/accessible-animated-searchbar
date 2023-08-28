(function () {
  const searchBar = document.querySelector(".search"),
    searchButton = document.querySelector(".toggle-search-btn"),
    searchInput = document.querySelector(".search-input");

  searchButton.addEventListener("click", (e) => {
    const expanded = searchButton.getAttribute("aria-expanded") === "false";
    searchButton.setAttribute("aria-expanded", String(expanded));

    searchBar.classList.toggle("show-search");

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
