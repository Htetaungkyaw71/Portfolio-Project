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
    name: 'Gamery',
    description: 'This is free to play games web application. Users can download free games in this app.',
    technologies: ['JavaScript','React','Redux'],
    live: 'https://gamery.onrender.com/',
    source_code: 'https://github.com/Htetaungkyaw71/Gamery',
    mimg: './images/game_popup.png',
    dimg: './images/game_popup.png',
    dev: 'Front End Dev'
  },
  {
    id: 'btn2',
    name: 'Chat Valley',
    description: 'Video chat with strangers. Users can chat random strangers from around the world. Users need to allow their camera and microphone in web browsers. I built with Html, CSS, JavaScript and other libraries.',
    technologies: ['JavaScript', 'NodeJs', 'WebRtc'],
    live: 'https://chat-valley-zx8a.onrender.com',
    source_code: 'https://github.com/Htetaungkyaw71/Chat-Valley',
    mimg: './images/chat_popup.png',
    dimg: './images/chat_popup.png',
    dev: 'Full Stack Dev'
  },
  {
    id: 'btn3',
    name: 'Ask Me',
    description: 'A question and answer application. Users can create account and ask questions. I build with HTML, CSS, JavaScript and React. There is no other specification for this application.',
    technologies: ['JavaScript', 'React', 'Firebase'],
    live: 'https://askme-sigma.vercel.app/',
    source_code: 'https://github.com/Htetaungkyaw71/askme',
    mimg: './images/ask_popup.png',
    dimg: './images/ask_popup.png',
    dev: 'Full Stack Dev'
  },
  {
    id: 'btn4',
    name: 'Shoppe',
    description: ' A simple and small ecommerce application. Users can view products and can add products to cart and can checkout. Include authentication and stripe payment.',
    technologies: ['JavaScript','React','Redux'],
    live: 'https://shoppe-eltm.onrender.com/',
    source_code: 'https://github.com/Htetaungkyaw71/Ecommerce',
    mimg: './images/s_popup.png',
    dimg: './images/s_popup.png',
    dev: 'Front End Dev'
  },
];
const detail = document.getElementById('detail');

function Render(project) {
  return `
    <div class="model">
    <div class="model-column">
        <div class="model-heading">
        <h1>${project.name}</h1>
        <img src="./images/close1.svg" class="detailClose" id="detailClose" style="cursor:pointer">
        </div>            
        <div class="position" style="margin-top:15px;margin-bottom:15px">
            <b class="pos_b">Personal Project</b>
            <span class="pos">${project.dev}</span>
            <span class="pos">2022</span>
        </div>
        <img src="${project.dimg}" class="desktop_project_img" style="transform:rotate(0deg)">
        <img src="${project.mimg}" class="mobile_project_img" style="transform:rotate(0deg)">
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
               <a href="${project.live}" target="_blank" class="btn">See Live
               <i class="fa-solid fa-globe"></i>
              </a>
              <a href="${project.source_code}" target="_blank" class="btn">See Source
              <i class="fa-brands fa-github"></i>
              </a>
          </div>
        </div>
   
    </div>
  </div>
  `;
}

document.querySelectorAll('.btn').forEach((btn) => {
  btn.onclick = (event) => {
    event.preventDefault();
    projects.forEach((project) => {
      if (btn.id === project.id) {
        detail.style.display = 'block';
        detail.classList.add('popup');
        document.body.style.position = 'fixed';
       document.querySelector('.upper').classList.add('blur');
       document.querySelector('.upper').style.background = 'rgb(193,199,208,0.5)';
        detail.innerHTML = Render(project);
        
        setTimeout(function() {
          detail.classList.remove('popup');
        }, 300);
        document.querySelector('.detailClose').onclick = (event) => {
          event.preventDefault();
          detail.classList.add('hidden')
      
          setTimeout(function() {
            detail.classList.remove('hidden');
            detail.style.display = 'none';

           document.body.style.position = 'relative';
           document.querySelector('.upper').classList.remove('blur');
           document.querySelector('.upper').style.background = 'none';
          }, 200);
          
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
