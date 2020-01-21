let btnShortener = document.querySelector(".shortener__btn");
let btnClose = document.querySelector(".shortener__btn--close");
let inputUrl = document.querySelector(".shortener__input");

let removeAnimations = () => {
  btnShortener.classList.remove("colorAnimation");
  inputUrl.classList.remove("opacityAnimation");
};

let addAnimations = () => {
  btnShortener.classList.add("colorAnimation");
  inputUrl.classList.add("opacityAnimation");
};

let createRandomString = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let randomString = Array(5)
    .join()
    .split(",");
  return randomString
    .map(function() {
      return chars.charAt(Math.floor(Math.random() * chars.length));
    })
    .join("");
};
let btnShortenerAction = e => {
  if (e.target.innerText == "ENCURTAR") {
    addAnimations();

    setTimeout(() => {
      inputUrl.classList.add("u-color-white");
      inputUrl.value = `http://chr.dc/${createRandomString()}`;
      e.target.innerText = "COPIAR";
    }, 200);

    setTimeout(() => {
      removeAnimations();
    }, 400);

    btnClose.style.opacity = 1;
    btnClose.disabled = false;
  } else {
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
  }
};

let btnCloseAction = () => {
  setTimeout(() => {
    removeAnimations();
  }, 400);

  addAnimations();

  setTimeout(() => {
    inputUrl.classList.remove("u-color-white");
    inputUrl.value = "";
    btnShortener.innerText = "ENCURTAR";
  }, 200);
  btnClose.style.opacity = 0;
};

btnShortener.addEventListener("click", btnShortenerAction);
btnClose.addEventListener("click", btnCloseAction);
