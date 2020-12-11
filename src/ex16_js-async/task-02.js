let input = document.querySelector('.search');

let debounce = (fn, ms) => {
  let timeout;

  return function () {
    let call = () => {
      fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(call, ms);
    }
  }
}

let send = () => {
  let search = candy.find(el => el === input.value);

  if (search) {
    console.log(search);
  } else {
    console.log('Ничего не найдено');
  }
}

send = debounce(send, 1000);
input.addEventListener('keyup', send);
