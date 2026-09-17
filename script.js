const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('show');
    menu.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}

if (!document.querySelector('link[href="biodata.css"]')) {
  const biodataStyle = document.createElement('link');
  biodataStyle.rel = 'stylesheet';
  biodataStyle.href = 'biodata.css';
  document.head.appendChild(biodataStyle);
}

if (!document.querySelector('link[href="reference.css"]')) {
  const referenceStyle = document.createElement('link');
  referenceStyle.rel = 'stylesheet';
  referenceStyle.href = 'reference.css';
  document.head.appendChild(referenceStyle);
}

if (!document.querySelector('link[href="desktop.css"]')) {
  const desktopStyle = document.createElement('link');
  desktopStyle.rel = 'stylesheet';
  desktopStyle.href = 'desktop.css';
  document.head.appendChild(desktopStyle);
}

if (!document.querySelector('link[href="education-modern.css"]')) {
  const educationStyle = document.createElement('link');
  educationStyle.rel = 'stylesheet';
  educationStyle.href = 'education-modern.css';
  document.head.appendChild(educationStyle);
}

const profileSection = document.getElementById('profile');

if (profileSection) {
  profileSection.classList.add('biodata-section');
  profileSection.innerHTML = `
    <div class="biodata-wrap">
      <div class="biodata-title reveal">
        <p class="eyebrow">01 — DATA PRIBADI</p>
        <h2>Biodata <span>Diri.</span></h2>
      </div>
      <div class="biodata-card reveal">
        <div class="biodata-photo">
          <img src="assets/profile.jpg" alt="Foto profil Muhammad Ilyasa Ramadhan">
          <div class="biodata-photo-label">
            <small>PROFILE / 2026</small>
            <strong>MUHAMMAD ILYASA RAMADHAN</strong>
          </div>
        </div>
        <div class="biodata-content">
          <h3>Identitas Pribadi</h3>
          <dl class="biodata-list">
            <div class="biodata-row"><dt>Nama</dt><span class="colon">:</span><dd>MUHAMMAD ILYASA RAMADHAN</dd></div>
            <div class="biodata-row"><dt>Tempat</dt><span class="colon">:</span><dd>PONOROGO</dd></div>
            <div class="biodata-row"><dt>Jenis Kelamin</dt><span class="colon">:</span><dd>LAKI-LAKI</dd></div>
            <div class="biodata-row"><dt>Alamat</dt><span class="colon">:</span><dd>DUKUH KRAJAN II</dd></div>
            <div class="biodata-row"><dt>RT/RW</dt><span class="colon">:</span><dd>003/002</dd></div>
            <div class="biodata-row"><dt>Kel/Desa</dt><span class="colon">:</span><dd>PLALANGAN</dd></div>
            <div class="biodata-row"><dt>Kecamatan</dt><span class="colon">:</span><dd>JENANGAN</dd></div>
            <div class="biodata-row"><dt>Agama</dt><span class="colon">:</span><dd>ISLAM</dd></div>
            <div class="biodata-row"><dt>Pekerjaan</dt><span class="colon">:</span><dd>PELAJAR/MAHASISWA</dd></div>
          </dl>
          <p class="biodata-note">Informasi profil pribadi Muhammad Ilyasa Ramadhan.</p>
        </div>
      </div>
    </div>
  `;
}

const educationSection = document.getElementById('education');

if (educationSection) {
  educationSection.innerHTML = `
    <div class="section-head reveal">
      <span class="section-no">02</span>
      <div>
        <p class="eyebrow">PENDIDIKAN</p>
        <h2>Perjalanan <span>pendidikan.</span></h2>
      </div>
    </div>
    <div class="education-journey">
      <article class="education-step reveal">
        <div class="education-step-year">TK</div>
        <div class="education-step-content">
          <p class="mini-label">PENDIDIKAN DASAR</p>
          <h3>Bustanul Athfal Aisyiyah Wonoasri</h3>
          <p>Pendidikan taman kanak-kanak.</p>
        </div>
      </article>
      <article class="education-step reveal">
        <div class="education-step-year">MI</div>
        <div class="education-step-content">
          <p class="mini-label">MADRASAH IBTIDAIYAH</p>
          <h3>MI Muhammadiyah 5 Wonoasri</h3>
          <p>Pendidikan dasar madrasah ibtidaiyah.</p>
        </div>
      </article>
      <article class="education-step reveal">
        <div class="education-step-year">MTs</div>
        <div class="education-step-content">
          <p class="mini-label">MADRASAH TSANAWIYAH</p>
          <h3>MTs Muhammadiyah 2 Jenangan</h3>
          <p>Pendidikan menengah pertama.</p>
        </div>
      </article>
      <article class="education-step reveal">
        <div class="education-step-year">SMK</div>
        <div class="education-step-content">
          <p class="mini-label">SEKOLAH MENENGAH KEJURUAN</p>
          <h3>SMK Negeri 1 Jenangan</h3>
          <p class="role">Rekayasa Perangkat Lunak (RPL)</p>
          <p>Mempelajari pemrograman, pengembangan website, basis data, desain antarmuka, serta pembuatan project aplikasi.</p>
        </div>
      </article>
    </div>
  `;
}

const activityImages = [
  'assets/Belajar & Praktik Coding.jpeg',
  'assets/Project Development.jpeg',
  'assets/Kegiatan Gamelab Indonesia.jpeg',
  'assets/Pembelajaran & Workshop.jpeg',
  'assets/Presentasi Project.jpeg'
];

const activityCards = document.querySelectorAll('.activity-photo-card');
activityCards.forEach((card, index) => {
  const src = activityImages[index];
  if (!src) {
    card.style.display = 'none';
    return;
  }
  const image = card.querySelector('.activity-photo');
  const links = card.querySelectorAll('.activity-photo-btn');
  if (image) image.src = src;
  if (links[0]) links[0].href = src;
  if (links[1]) links[1].href = src;
});

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('nav a');

function setActiveNav() {
  let current = 'home';
  const position = window.scrollY + 180;
  sections.forEach((section) => {
    if (position >= section.offsetTop) current = section.id;
  });
  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
