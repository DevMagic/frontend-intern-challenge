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
  const urlRandom = randomicUrl();
  const smallUrl = `http://ch.dc/${urlRandom}`;

  validURL(link.value)
    ? (document.querySelector('.link').value = smallUrl)
    : '';

  return smallUrl;
};

// Função para copiar o link novo
const copyNewLink = (isCopy) => {
  const link = document.querySelector('.link').select();
  document.execCommand('copy');
  const copyText = isCopy ? 'Copiar' : 'Encurtar';
  const button = document.querySelector('.generate-link');
  button.innerHTML = copyText;
};

// Função para lidar com o click no botão gerando o sort link e transformando o texto em copiar
let click = true;
const handleClick = () => {
  const link = document.querySelector('.link').value;
  if (click && link !== '') {
    generateUrl();
    copyNewLink(click);
    click = !click;
  }
};
