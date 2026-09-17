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

/* Desain biodata baru */
const biodataStyle = document.createElement('link');
biodataStyle.rel = 'stylesheet';
biodataStyle.href = 'biodata.css';
document.head.appendChild(biodataStyle);

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
          <p class="biodata-note">Data biodata ditampilkan sebagai bagian dari profil pribadi.</p>
        </div>
      </div>
    </div>
  `;
}

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
