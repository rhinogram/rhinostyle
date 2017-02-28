export default function load(url) {
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();

  ajax.onload = () => {
    const div = document.createElement('div');
    div.style.cssText = 'border: 0; clip: rect(0 0 0 0); height: 0; overflow: hidden; padding: 0; position: absolute; width: 0;';
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
}
