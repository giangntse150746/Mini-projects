const themeManager = (function () {
  let themes = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
  ];

  function renderProducts() {
    const themeTable = document.getElementById("theme-table");
    themeTable.innerHTML = "";

    themes.forEach((theme, index) => {
      const row = document.createElement("tr");
      row.className = "border-b";

      row.innerHTML = `
              <td class="py-2 px-4">${theme.name}</td>
              <td class="py-2 px-4 text-center">$${theme.price}</td>
              <td class="py-2 px-4 flex justify-end">
                  <button class="edit-theme bg-green-500 text-white px-2 py-1 rounded mr-2" data-index="${index}">Edit</button>
                  <button class="delete-theme bg-red-500 text-white px-2 py-1 rounded" data-index="${index}">Delete</button>
              </td>
          `;
      themeTable.appendChild(row);
    });
  }

  function addProduct(theme) {
    themes.push(theme);
    renderProducts();
  }

  function updateProduct(index, theme) {
    themes[index] = theme;
    renderProducts();
  }

  function deleteProduct(index) {
    themes.splice(index, 1);
    renderProducts();
  }

  function getProduct(index) {
    return themes[index];
  }

  return {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    renderProducts,
  };
})();

document.getElementById("create-theme").addEventListener("click", () => {
  showProductModal("Create Product", null);
});

document.getElementById("theme-table").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-theme")) {
    const index = e.target.getAttribute("data-index");
    showProductModal("Edit Product", index);
  } else if (e.target.classList.contains("delete-theme")) {
    const index = e.target.getAttribute("data-index");
    themeManager.deleteProduct(index);
  }
});

document.getElementById("modal-save").addEventListener("click", () => {
  const themeName = document.getElementById("modal-theme-name").value.trim();
  const themePrice = document.getElementById("modal-theme-price").value.trim();
  const index = document.getElementById("modal-save").getAttribute("data-index");

  if (themeName && themePrice) {
    const theme = { name: themeName, price: parseFloat(themePrice) };

    if (index !== null) {
      themeManager.updateProduct(index, theme);
    } else {
      themeManager.addProduct(theme);
    }

    closeProductModal();
  }
});

document.getElementById("modal-cancel").addEventListener("click", closeProductModal);

function showProductModal(title, index) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-theme-name").value = "";
  document.getElementById("modal-theme-price").value = "";

  if (index !== null) {
    const theme = themeManager.getProduct(index);
    document.getElementById("modal-theme-name").value = theme.name;
    document.getElementById("modal-theme-price").value = theme.price;
    document.getElementById("modal-save").setAttribute("data-index", index);
  } else {
    document.getElementById("modal-save").removeAttribute("data-index");
  }

  document.getElementById("theme-modal").classList.remove("hidden");
}

function closeProductModal() {
  document.getElementById("theme-modal").classList.add("hidden");
}

themeManager.renderProducts();
