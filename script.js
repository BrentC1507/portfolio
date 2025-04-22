const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('posts');

// Load posts from localStorage
let posts = JSON.parse(localStorage.getItem('posts')) || [];

function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    const postEl = document.createElement('article');
    postEl.className = 'post';
    postEl.innerHTML = `
      <h2 class="post-title">${post.title}</h2>
      <p class="post-date">${post.date}</p>
      <p class="post-content">${post.content}</p>
    `;
    postsContainer.appendChild(postEl);
  });
}

postForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    const newPost = {
      title,
      content,
      date: new Date().toLocaleDateString()
    };
    posts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
    postForm.reset();
  }
});

// Initial render
renderPosts();
