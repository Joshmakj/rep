const INSTALLED_FLAG = "__tucThemedAlertInstalled";
const queue = [];
let isOpen = false;

const getAlertTitle = (message) => {
  const normalized = message.toLowerCase();
  if (normalized.includes("success") || normalized.includes("submitted")) {
    return "Success";
  }
  if (normalized.includes("error") || normalized.includes("failed")) {
    return "Error";
  }
  return "Notice";
};

const closeActiveAlert = (overlay, onClose) => {
  overlay.classList.remove("tuc-alert-visible");
  overlay.classList.add("tuc-alert-hidden");

  window.setTimeout(() => {
    overlay.remove();
    isOpen = false;
    onClose();
    showNextAlert();
  }, 180);
};

const showNextAlert = () => {
  if (isOpen || queue.length === 0 || typeof document === "undefined") {
    return;
  }

  isOpen = true;
  const message = queue.shift();

  const overlay = document.createElement("div");
  overlay.className = "tuc-alert-overlay tuc-alert-visible";
  overlay.setAttribute("role", "presentation");

  const dialog = document.createElement("div");
  dialog.className = "tuc-alert-dialog";
  dialog.setAttribute("role", "alertdialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-live", "assertive");

  const title = document.createElement("h3");
  title.className = "tuc-alert-title";
  title.textContent = getAlertTitle(message);

  const body = document.createElement("p");
  body.className = "tuc-alert-message";
  body.textContent = message;

  const actions = document.createElement("div");
  actions.className = "tuc-alert-actions";

  const okButton = document.createElement("button");
  okButton.className = "tuc-alert-button";
  okButton.type = "button";
  okButton.textContent = "OK";

  const cleanup = () => {
    document.removeEventListener("keydown", keyHandler);
  };

  const keyHandler = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      closeActiveAlert(overlay, cleanup);
    }
  };

  okButton.addEventListener("click", () => closeActiveAlert(overlay, cleanup));
  document.addEventListener("keydown", keyHandler);

  actions.appendChild(okButton);
  dialog.appendChild(title);
  dialog.appendChild(body);
  dialog.appendChild(actions);
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);
  okButton.focus();
};

export const installThemedAlert = () => {
  if (typeof window === "undefined") {
    return;
  }

  if (window[INSTALLED_FLAG]) {
    return;
  }

  const nativeAlert = window.alert.bind(window);

  window.alert = (value = "") => {
    try {
      queue.push(String(value));
      showNextAlert();
    } catch (error) {
      nativeAlert(value);
    }
  };

  window[INSTALLED_FLAG] = true;
};

