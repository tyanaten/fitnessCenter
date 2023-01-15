const video = document.querySelector('.gym-section__video');
const button = video.querySelector('.gym-section__video-button');

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');

  return iframe;
};

button.removeAttribute('href');

button.addEventListener('click', () => {
  const iframe = createIframe();
  video.style.background = 'none';
  button.remove();
  video.appendChild(iframe);
});
