// Lógica para gerar o link encurtado

// Função para randomizar a URL após /
const randomicUrl = () => {
  let random_string =
    Math.random().toString(36).substring(2, 5) +
    Math.random().toString(36).substring(2, 5);

  return random_string;
};

// Função de validação de URL
const validURL = (str) => {
  let pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
};

// Função para pegar a URL original e transformando na URL encurtada
const generateUrl = () => {
  const link = document.querySelector('.link');
  const icon = document.getElementById('icon');
  const urlRandom = randomicUrl();
  const smallUrl = `http://chr.dc/${urlRandom}`;

  if (validURL(link.value)) {
    document.querySelector('.link').value = smallUrl;
    icon.classList.add('active');
  } else {
    return '';
  }

  copyNewLink();
  handleClickClose();
};

// Função que roda quando clicar no close (X)
const handleClickClose = () => {
  const icon = document.getElementById('icon');
  icon.addEventListener('click', () => {
    icon.classList.remove('active');
    initialState();
  });
};

// Função para copiar o link novo
const copyNewLink = () => {
  const link = document.querySelector('.link').select();
  document.execCommand('copy');
  const copyText = 'Copiar';
  const button = document.querySelector('.generate-link');
  button.innerHTML = copyText;
};

// Função que define o estado inicial
const initialState = () => {
  const button = document.querySelector('.generate-link');
  const sortText = 'Encurtar';
  button.innerHTML = sortText;
  document.querySelector('.link').value = '';
  click = true;
};

// Função para lidar com o click no botão gerando o sort link e transformando o texto em copiar
let click = true;
const handleClick = () => {
  const link = document.querySelector('.link').value;

  if (click && link !== '') {
    generateUrl();
    click = false;
  }
};
