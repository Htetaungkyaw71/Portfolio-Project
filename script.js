const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');
const upper = document.querySelector('.upper');

function close() {
  openMenu.style.display = 'block';
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
  upper.classList.remove('blur');
}

function open() {
  openMenu.style.display = 'none';
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
  upper.classList.add('blur');
}

openMenu.onclick = () => {
  open();
};

closeMenu.onclick = () => {
  close();
};

document.querySelectorAll('#overlay_link').forEach((btn) => {
  btn.onclick = () => {
    close();
  };
});

/// ///// // pop up window for portfolio project////
const projects = [
  {
    id: 'btn1',
    name: 'Tonic',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['HTML', 'CSS', 'Javascript'],
    live: 'https://htetaungkyaw71.github.io/Portfolio-Project/',
    source_code: 'https://github.com/Htetaungkyaw71',
    mimg: './images/work1.png',
    dimg: './images/desktop_project_1.png',
  },
  {
    id: 'btn2',
    name: 'Tonic',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['HTML', 'CSS', 'Javascript'],
    live: 'https://htetaungkyaw71.github.io/Portfolio-Project/',
    source_code: 'https://github.com/Htetaungkyaw71',
    mimg: './images/work2.png',
    dimg: './images/desktop_project_2.png',
  },
  {
    id: 'btn3',
    name: 'Tonic',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['HTML', 'CSS', 'Javascript'],
    live: 'https://htetaungkyaw71.github.io/Portfolio-Project/',
    source_code: 'https://github.com/Htetaungkyaw71',
    mimg: './images/work3.png',
    dimg: './images/desktop_project_3.png',
  },
  {
    id: 'btn4',
    name: 'Tonic',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['HTML', 'CSS', 'Javascript'],
    live: 'https://htetaungkyaw71.github.io/Portfolio-Project/',
    source_code: 'https://github.com/Htetaungkyaw71',
    mimg: './images/work4.png',
    dimg: './images/desktop_project_4.png',
  },
];
const detail = document.getElementById('detail');

function Render(project) {
  return `
    <div class="model">
    <div class="model-column">
        <div class="model-heading">
        <h1>${project.name}</h1>
        <img src="./images/close1.svg" class="detailClose" id="detailClose">
        </div>            
        <div class="position">
            <b>Canopy</b>
            <span class="dot">.</span>
            <span class="pos">Back End Eev</span>
            <span class="dot">.</span>
            <span class="pos">2015</span>
        </div>
        <img src="${project.dimg}" class="desktop_project_img">
        <img src="${project.mimg}" class="mobile_project_img">
    </div>
    <div class="model-column-text">  
        <p class="work-text">
            ${project.description}
        </p>

        <div>
          <ul>
          ${project.technologies.map((t) => (`<li>${t}</li>`)).join('')}
          </ul>
          <div class="model-project">
               <a href="${project.live}" class="btn">See Live
              <img src="./images/live.svg">
              </a>
              <a href="${project.source_code}" class="btn">See Source
              <img src="./images/source.svg">
              </a>
          </div>
        </div>
   
    </div>
  </div>
  `;
}

document.querySelectorAll('.btn').forEach((btn) => {
  btn.onclick = () => {
    projects.forEach((project) => {
      if (btn.id === project.id) {
        detail.style.display = 'block';
        document.body.style.position = 'fixed';
        document.querySelector('.upper').classList.add('blur');
        document.querySelector('.upper').style.background = 'rgb(193,199,208,0.5)';
        detail.innerHTML = Render(project);
        document.querySelector('.detailClose').onclick = () => {
          detail.style.display = 'none';
          document.body.style.position = 'relative';
          document.querySelector('.upper').classList.remove('blur');
          document.querySelector('.upper').style.background = 'none';
        };
      }
    });
  };
});

/// / validate ////

const submitForm = document.getElementById('messageForm');
const showErr = document.getElementById('showError');

function showError(message) {
  return `
  <div class="error">
    ${message}
  </div>
  `;
}

submitForm.onsubmit = (e) => {
  const { email } = submitForm.elements;
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    showErr.innerHTML = showError('Email field has to be in lower case');
  }
  return true;
};

/// localStorage ///

const username = document.getElementById('name');
const useremail = document.getElementById('email');
const usermessage = document.getElementById('message');

if (localStorage.getItem('FormData')) {
  const data = JSON.parse(localStorage.getItem('FormData'));
  document.getElementById('name').value = data.name;
  document.getElementById('email').value = data.email;
  document.getElementById('message').value = data.message;
}

function addLocalStorage(data) {
  const dict = JSON.parse(localStorage.getItem('FormData'));
  const newdict = { ...dict, ...data };
  localStorage.setItem('FormData', JSON.stringify({ ...newdict }));
}

username.onchange = (e) => {
  addLocalStorage({ name: e.target.value });
};
useremail.onchange = (e) => {
  addLocalStorage({ email: e.target.value });
};
usermessage.onchange = (e) => {
  addLocalStorage({ message: e.target.value });
};
