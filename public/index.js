const email_input = document.querySelector("#email");
const submit_input = document.querySelector("#submit");
const form_input_wrapper = document.querySelector(".form-input-wrapper");
const error_icon = document.querySelector("#error-icon");
const features_nav_items = document.querySelectorAll("#features-nav a");
const features = document.querySelectorAll("#features article");
const faqs = document.querySelectorAll("#faq article");
const menu_button = document.querySelector("#menu-button");
const mobile_menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const logo = document.querySelector("header img");

console.log(logo);

menu_button.addEventListener("click", (e) => {
  if (!e.target.classList.contains("menu-bar-rotate")) {
    e.target.classList.add("menu-bar-rotate");
    if (mobile_menu.classList.contains("scale-0"))
      mobile_menu.classList.remove("scale-0");
    if (!mobile_menu.classList.contains("scale-100"))
      mobile_menu.classList.add("scale-100");
    if (!body.classList.contains("overflow-hidden"))
      body.classList.add("overflow-hidden");
    logo.src = "./images/logo-footer.svg";
    logo.classList.add("w-2/5");
  } else {
    e.target.classList.remove("menu-bar-rotate");

    if (!mobile_menu.classList.contains("scale-0"))
      mobile_menu.classList.add("scale-0");
    if (mobile_menu.classList.contains("scale-100"))
      mobile_menu.classList.remove("scale-100");
    if (body.classList.contains("overflow-hidden"))
      body.classList.remove("overflow-hidden");
    logo.src = "./images/logo-bookmark.svg";
    logo.classList.remove("w-2/5");
  }
});

function reset_features_nav_Items() {
  features_nav_items.forEach((nav_item) => {
    if (nav_item.classList.contains("active-item")) {
      nav_item.classList.remove("active-item");
      nav_item.classList.add("inactive-item");
    }
  });
}

function reset_features() {
  features.forEach((feature) => {
    if (!feature.classList.contains("hidden")) feature.classList.add("hidden");
    if (feature.classList.contains("flex")) feature.classList.remove("flex");
  });
}

function reset_faqs() {
  faqs.forEach((item) => {
    const answer = item.querySelector("p");
    const icon = item.querySelector("svg");

    if (!item.classList.contains("collapsed-q"))
      item.classList.add("collapsed-q");

    if (icon.classList.contains("expanded-q-icon"))
      icon.classList.remove("expanded-q-icon");
    if (!icon.classList.contains("collapsed-q-icon"))
      icon.classList.add("collapsed-q-icon");

    if (!answer.classList.contains("hidden")) answer.classList.add("hidden");
  });
}

features_nav_items.forEach((nav_item) => {
  nav_item.addEventListener("click", (e) => {
    reset_features_nav_Items();
    if (e.target.classList.contains("inactive-item"))
      e.target.classList.remove("inactive-item");
    e.target.classList.add("active-item");

    // console.log(e.target.getAttribute("control"));
    const feature = document.querySelector(
      `#${e.target.getAttribute("control")}`
    );

    reset_features();

    if (feature.classList.contains("hidden"))
      feature.classList.remove("hidden");
    if (!feature.classList.contains("flex")) feature.classList.add("flex");
  });
});

faqs.forEach((item) => {
  item.addEventListener("click", (e) => {
    reset_faqs();
    const activeQuestion = e.target;
    const parent = activeQuestion.closest("article");
    const icon = parent.querySelector("svg");
    const answer = parent.querySelector("p");
    if (parent.classList.contains("collapsed-q"))
      parent.classList.remove("collapsed-q");

    if (icon.classList.contains("collapsed-q-icon"))
      icon.classList.remove("collapsed-q-icon");
    if (!icon.classList.contains("expanded-q-icon"))
      icon.classList.add("expanded-q-icon");
    if (answer.classList.contains("hidden")) answer.classList.remove("hidden");
  });
});

submit_input.addEventListener("click", (e) => {
  e.preventDefault();
  let emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email_input.value.match(emailRegEx)) {
    if (!form_input_wrapper.classList.contains("before:hidden"))
      form_input_wrapper.classList.add("before:hidden");

    if (email_input.classList.contains("form-input-error"))
      email_input.classList.remove("form-input-error");

    if (!error_icon.classList.contains("hidden"))
      error_icon.classList.add("hidden");

    const successMsg = document.createElement("p");
    successMsg.innerText = "You successfully subscribed to our email list.";
    successMsg.classList.add("success-message");
    form_input_wrapper.appendChild(successMsg);
    email_input.value = "";
  } else {
    if (form_input_wrapper.classList.contains("before:hidden"))
      form_input_wrapper.classList.remove("before:hidden");

    if (!email_input.classList.contains("form-input-error"))
      email_input.classList.add("form-input-error");

    if (error_icon.classList.contains("hidden"))
      error_icon.classList.remove("hidden");
  }
});
