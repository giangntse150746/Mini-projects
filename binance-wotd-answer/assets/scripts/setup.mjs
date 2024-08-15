export function initGlobalMethods() {
  if (!Array.prototype.last) {
    Array.prototype.last = () => {
      if (!this || !this.length) return 0;
      return this[this.length - 1];
    };
  }
  if (!Array.prototype.toElement) {
    Array.prototype.toElement = (data, template) => {
      data.map((item) => template(item)).join("");
    };
  }
}

export function initCheckAllActions() {
  const checkAllCheckbox = document.getElementById("showAllCheckbox");
  if (checkAllCheckbox)
    checkAllCheckbox.addEventListener("click", () => {
      const isChecked = checkAllCheckbox.checked;
      document.getElementById("showAllText").innerText = isChecked ? "Hide All" : "Show All";
      document.querySelectorAll(".accordion-box").forEach((box) => {
        box.classList.toggle("expand", isChecked);
      });
    });
  const textSpan = document.getElementById("showAllText");
  textSpan.addEventListener("click", () => {
    checkAllCheckbox.checked = !checkAllCheckbox.checked;
    const isChecked = checkAllCheckbox.checked;
    textSpan.innerText = isChecked ? "Hide All" : "Show All";
    document.querySelectorAll(".accordion-box").forEach((box) => {
      box.classList.toggle("expand", isChecked);
    });
  });
}

export function initFilterActions(callback) {
  const includes = document.getElementById("includes");
  const excludes = document.getElementById("excludes");
  const selectTheme = document.getElementById("themeSelect");
  const selectCategory = document.getElementById("categorySelect");
  // init action
  includes.addEventListener("change", () => callback(includes, "includes"));
  excludes.addEventListener("change", () => callback(excludes, "excludes"));
  selectTheme.addEventListener("change", () => callback(selectTheme, "theme"));
  selectCategory.addEventListener("change", () => callback(selectCategory, "category"));
}

export function initModalActions() {
  const modal = document.getElementById("createThemeModal");
  const modalBackground = document.getElementById("createThemeModalBg");
  const modalContent = document.getElementById("createThemeModalMain");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  const handleOpenModal = () => {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modalBackground.classList.add("bg-opacity-50");
      modalContent.classList.remove("scale-90", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
  };

  const handleCloseModal = () => {
    modalContent.classList.add("scale-90", "opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");
    modalBackground.classList.remove("bg-opacity-50");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  };

  openModalBtn.addEventListener("click", () => handleOpenModal());
  closeModalBtn.addEventListener("click", () => handleCloseModal());
  window.addEventListener("click", (e) => {
    if (e.target === modal) handleCloseModal();
  });
}
