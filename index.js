function initializeDropdown() {
  document.addEventListener("click", (event) => {
    if (event.target.matches(".dropdown")) {
      const dropdownMenu = event.target.nextElementSibling;
      dropdownMenu.classList.toggle("visible");
    }
  });
}

import "./css/dropdown.css";
export default initializeDropdown();
