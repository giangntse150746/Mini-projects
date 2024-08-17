const groups = document.getElementsByClassName("card-group");
let activeIndex = 0;

const getDeviceType = () => {
  const ua = navigator.userAgent;
  // prettier-ignore
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  return "desktop";
};

const handleLoveClick = () => {
  if (
    document
      .querySelector(".card-group[data-status='active']")
      .classList.contains("hovering")
  ) {
    handleShowClick(true);
    setTimeout(() => {
      const nextIndex =
        activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
      const currentGroup = document.querySelector(
          `[data-index="${activeIndex}"]`
        ),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

      currentGroup.dataset.status = "after";
      nextGroup.dataset.status = "becoming-active-from-before";

      setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
      });
    }, 700);
  } else {
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }
};

const handleShowClick = (forceOff = false) => {
  const showIcon = document.querySelector("#show-button>i"),
    group = document.querySelector(".card-group[data-status='active']");
  if (!forceOff) {
    group.classList.toggle("hovering");
    showIcon.classList.toggle("fa-eye-slash");
  } else group.classList.remove("hovering");
};
