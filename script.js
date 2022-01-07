const tagsContainer = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if(e.key === 'Enter') {
    setTimeout(() => {
      randomSelect();
    });
  } 
});

function createTags(input) {

  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

  tagsContainer.innerHTML = '';

  tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
}

function randomSelect() {
  const times = 10;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);

  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);

  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}