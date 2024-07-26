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

export const lsThemeNames = [
  "Binance 7YA",
  "Binance Build",
  "Futures Chat Room",
  "Binance Users",
  "Binance World Championship",
  "Life in Binance",
  "Meme Coins",
  "DApps",
  "Airdrops",
  "Futures Copy Trading",
  "ETH Upgrade",
  "Binance Launchpad",
  "Web3 Gaming",
  "Halving Horizons",
  "Bitcoin Halving",
  "Bitcoin NFTs",
  "Bitcoin Payments",
  "Bitcoin Evolution",
  "Binance VIP",
  "Web3 Education",
  "Binance Ledger",
  "Risk Detection",
  "Machine Learning",
  "Stablecoins",
  "Institutional Adoption",
  "Bitcoin ETFs",
  "Binance Crypto is Better",
  "SocialFi",
  "Binance WODL Points Received || SAFU",
  "Trading Indicators",
  "Digital Art",
  "Digital Art",
  "Recurring Trading",
  "Recurring Trading",
  "Recurring Trading",
  "Recurring Trading",
  "Binance Pool",
];
