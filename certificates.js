document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('certificates');
  if (!section) return;

  const imagePath = 'assets/sertifikat%20kunjungan%20industri.jpeg';

  const cards = section.querySelectorAll('.document-card');
  const card = cards[0];
  if (!card) return;

  const description = card.querySelector('p:last-child');
  if (description) description.style.display = 'none';

  const preview = document.createElement('a');
  preview.href = imagePath;
  preview.target = '_blank';
  preview.rel = 'noopener noreferrer';
  preview.className = 'certificate-preview';
  preview.setAttribute('aria-label', 'Buka Sertifikat Kompetensi');
  preview.innerHTML = `
    <img src="${imagePath}" alt="Sertifikat Kompetensi" loading="lazy">
    <span class="certificate-preview-label">Klik untuk membuka</span>
  `;

  card.appendChild(preview);
});
