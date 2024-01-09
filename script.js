const clientId = 'YwOo64AaoO55VX-Qa8qQiuVz89Rvzk4sB690uWuQMa8';

let input = document.querySelector('#input-txt');
let seeMoreBtn = document.querySelector('.see-more-btn');
let imageSection = document.querySelector('.images');
let searchBtn = document.querySelector('#search-btn');

let page = 1;
async function getImage(){
  const inputValue = input.value;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=YwOo64AaoO55VX-Qa8qQiuVz89Rvzk4sB690uWuQMa8`;

  const response = await fetch(URL);
  const result = await response.json();
  let finalResult = result.results;

  finalResult.forEach((e)=>{
    console.log(e);
    console.log(e.urls);
    console.log(e.urls.small);

    let image = document.createElement('img');
    image.src = e.urls.small;
    imageSection.appendChild(image);
  })
}

searchBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  getImage();
  seeMoreBtn.style.display = "block";
});

seeMoreBtn.addEventListener('click',()=>{
  page++;
  getImage();
})

