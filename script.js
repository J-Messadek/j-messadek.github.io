const experiences = [
  {
    role: 'Administrateur Système & Réseau (Alternant)',
    company: 'Catalina',
    period: 'Sept. 2025 - Sept. 2026 (En cours)',
    bullets: [
      'Administration avancée des serveurs Linux et Windows, gestion des utilisateurs et Active Directory (AD).',
      'Support technique hardware et software, maintenance des laptops et gestion du parc informatique.',
      'Développement et automatisation de scripts internes en Python pour le monitoring, la supervision et la sécurisation des systèmes.',
      'Gestion des configurations réseau, VLAN, GPO et sécurité des systèmes.',
      'Programmation et planification des interventions extérieures.',
      'Participation à l’optimisation des infrastructures utilisées pour l’analyse des comportements d’achats de clients internationaux et grands distributeurs.',
    ],
    details:
      "J'ai choisi cette alternance chez Catalina pour renforcer mes bases et découvrir l'ensemble de l'informatique : administration systèmes et réseaux, bases de données, scripting, configuration, support et politique de sécurité. Cette expérience m'a permis d'acquérir des connaissances concrètes dans tous les domaines, me donnant une vision globale qui facilitera ma spécialisation future tout en comprenant comment chaque partie interagit.",
  },
  {
    role: 'Développeur Full-Stack & Systèmes',
    company: 'Sir Driver et La Fille du Fleuriste',
    period: '2024 - Présent (prestations ponctuelles)',
    bullets: [
      'Conception et développement d’une plateforme web complète (front-end, back-end, base de données).',
      'Intégration de services tiers : Supabase (authentification, BDD, secrets), Stripe (paiements), Resend / SMTP (emails transactionnels).',
      'Mise en œuvre de la conformité RGPD : gestion du consentement cookies, analytics conditionnels (GA4).',
      'Optimisation performance et SEO : structuration CSS/JS, PurgeCSS, contenus optimisés.',
      'Sécurisation applicative et opérationnelle : gestion des secrets, configuration SMTP sécurisée, bonnes pratiques DevOps (Git, CI/CD).',
      'Exploitation et fiabilité : scripts de monitoring (disponibilité, latence, alertes, logs automatisés).',
    ],
    details:
      'Conception et mise en production d’une plateforme VTC haut de gamme, de l’architecture applicative à l’exploitation. Développement full-stack, intégration de services critiques (paiement, authentification, emails), mise en conformité RGPD et optimisation des performances. Approche orientée fiabilité, sécurité et exploitation réelle d’un service en conditions quasi-production.',
    recommendationUrl: 'pdfs/JM_Lettres_de_Recommandation_DevFullStack.pdf',
  },
  {
    role: 'Animateur Enfance et Jeunesse',
    company: 'Centres et colonies de vacances — Neuilly-sur-Seine, Clichy, autres villes',
    period: '2023 - 2025',
    bullets: [
      'Encadrement et animation de groupes d’enfants et d’adolescents en centres de loisirs et colonies.',
      'Organisation d’activités éducatives, sportives et créatives favorisant la cohésion et le développement personnel.',
      'Mise en place d’ateliers sur la découverte, le respect, l’autonomie et la collaboration.',
      'Gestion des imprévus et adaptation rapide aux besoins et dynamiques de groupe.',
      'Travail en équipe avec les directeurs et animateurs pour assurer la sécurité et le bon déroulement des séjours.',
    ],
    details:
      'Cette expérience m’a permis de développer des qualités humaines et comportementales essentielles : leadership, communication, patience et adaptabilité. J’ai appris à gérer des groupes, à instaurer la confiance et à transmettre des valeurs positives — des compétences aujourd’hui utiles dans ma manière de collaborer, d’encadrer et de comprendre les autres, même dans le monde professionnel.',
  },
];

const education = [
  {
    title: 'Bachelor Cybersécurité',
    school: 'ESGI',
    period: '2025 - 2026 (En cours)',
    description:
      'Formation spécialisée en cybersécurité, administration systèmes et réseaux, et défense des infrastructures critiques.',
    details:
      "Programme complet couvrant le développement (C, Python, Rust, assembleur x64), l'administration Linux avancée, la mise en place et sécurisation de réseaux (CCNA 1 & 2, WiFi, Blue Team, IDS), la cryptographie, la détection de vulnérabilités et la sécurité physique.\nSoft skills : communication, planification, cyberéthique.\nActivités : projets annuels, missions en entreprise, Security Day, MindBreak CTF, DefHack, préparation TOEIC.\nCompétences développées : conception et administration de systèmes-réseaux sécurisés, conduite de projets responsables, sécurisation d’infrastructures critiques.",
    recommendationUrl: 'pdfs/JM_Lettre_Recommandation_Bachelor_ESGI.pdf',
  },
  {
    title: 'BTS CIEL - Cybersécurité, Informatique et Réseaux',
    school: 'Newton',
    period: '2023 - 2025',
    description:
      'Formation technique en cybersécurité, administration et exploitation de réseaux informatiques, développement et valorisation des données.',
    details:
      "Programme centré sur la conception, l'exploitation et la maintenance de systèmes-réseaux sécurisés, le codage pour solutions informatiques, les audits, le traitement et la communication des incidents, ainsi que la sécurisation et le stockage des données sur bases dédiées.\nStages pratiques de 6 à 8 semaines en entreprise.\nSecteurs d'application : industrie 4.0/5.0, IoT, cybersécurité, télécommunications, informatique industrielle, transports, santé et défense.\nCompétences développées : conduite de projets informatiques, administration et sécurisation de réseaux, analyse de données, audits et valorisation des informations.",
    recommendationUrl: 'pdfs/JM_Lettre_Recommandation_BTS_CIEL.pdf',
  },
  {
    title: 'Baccalauréat Général',
    school: 'Lycée Newton',
    period: '2023',
    description: 'Baccalauréat général avec spécialités Mathématiques, SES et HGGSP.',
    details:
      "Acquisition de bases solides en mathématiques, sciences économiques et sociales, ainsi qu'en histoire-géographie, géopolitique et sciences politiques (HGGSP), préparant aux études supérieures en informatique et cybersécurité.",
  },
];

const projects = [
  {
    title: 'Plateforme de gestion de prises connectées',
    summary:
      'Application web IoT simulant un système de gestion énergétique intelligent pour entreprises ou écoles, permettant de suivre et limiter la consommation électrique. Stack : Node.js, MySQL, MQTT, WebSocket.',
    github: 'https://github.com/J-Messadek/Projet-Location-de-Prise-de-Recharge',
    details:
      "Projet en groupe sur 5 mois, où les professeurs m'ont demandé de prendre le rôle de chef de groupe, intégrant sécurité et suivi en temps réel.",
    note: '',
  },
  {
    title: 'NASA Space Biology Publications Platform',
    summary:
      'Plateforme web hackathon pour explorer et analyser 608 publications NASA Space Biology, avec recherche sémantique et visualisation interactive de collaborations et tendances scientifiques.',
    github: 'https://github.com/J-Messadek/NASA-Space-Challenges',
    details:
      'Hackathon de 48h avec équipe de 4, intégration de embeddings Google Gemini pour recherche sémantique et visualisation dynamique des réseaux de publications en temps réel.',
    note: '',
  },
  {
    title: 'Simulation ARP Spoofing (Scapy) — pédagogique',
    summary:
      'Script pédagogique simulant une attaque ARP Spoofing en environnement isolé pour étudier les effets Man‑in‑the‑Middle et former à la détection des intrusions réseau.',
    github: 'https://github.com/J-Messadek/ARP-Spoofing', // remplace par ton lien
    details:
      "Travail en labo : mise en place de scénarios de test avec Scapy, analyse des traces (Wireshark) et élaboration de contre‑mesures et procédures d'alerte pour renforcer la résilience réseau.",
    note: 'ATTENTION ⚠️ — Réservé au lab/VM. Interdit sur tout réseau réel ; toute utilisation non autorisée est de la seule responsabilité de l’utilisateur.',
  },
  {
    title: 'Simulation DHCP Starvation (Scapy) — pédagogique',
    summary:
      "Script pédagogique simulant une attaque DHCP Starvation en environnement isolé pour étudier l'épuisement du pool DHCP et tester la résilience des infrastructures.",
    github: 'https://github.com/J-Messadek/DHCP-Starvation',
    details:
      'Scénarios de labo avec génération contrôlée de DHCP Discover, analyse via Wireshark et élaboration de contre‑mesures (rate‑limiting, DHCP snooping).',
    note: 'ATTENTION ⚠️ — Réservé au lab/VM. Interdit sur tout réseau réel ; toute utilisation non autorisée est de la seule responsabilité de l’utilisateur.',
  },
  {
    title: 'Simulation TCP SYN Flood (Scapy) — pédagogique',
    summary:
      "Script pédagogique simulant un SYN Flood (DoS / potentiellement DDoS) en environnement isolé pour étudier l'impact d'une saturation de connexions et tester la résilience des services.",
    github: 'https://github.com/J-Messadek/DDoS',
    details:
      'Scénarios labo pour évaluer contre‑mesures (SYN cookies, rate‑limiting) et analyser le trafic avec Wireshark; usage strictement encadré.',
    note: 'ATTENTION ⚠️ — Réservé au lab/VM. Interdit sur tout réseau réel ; toute utilisation non autorisée est de la seule responsabilité de l’utilisateur.',
  },
  {
    title: 'Simulation DTP Trunk Spoofing (Scapy) — pédagogique',
    summary:
      "Script pédagogique simulant la manipulation du protocole Dynamic Trunking Protocol (DTP) pour étudier les risques liés à la négociation de trunks VLAN et l'impact d'une configuration non désirée sur les switches.",
    github: 'https://github.com/J-Messadek/DTP-Trunk-spoofing', // remplace par ton lien
    details:
      "Scénarios de labo pour analyser l'impact sur la topologie VLAN et tester des mesures de défense (désactivation de DTP, port security, hardening des switches).",
    note: 'ATTENTION ⚠️ — Réservé au lab/VM. Interdit sur tout réseau réel ; toute utilisation non autorisée est de la seule responsabilité de l’utilisateur.',
  },
];

function renderEducation(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';

    const orbitalBtn = item.recommendationUrl
      ? `
      <a href="${item.recommendationUrl}" download class="orbital-btn" title="Télécharger la lettre de recommandation">
        <div class="orbital-ring"></div>
        <div class="orbital-ring orbital-ring-2"></div>
        <span class="orbital-icon">📄</span>
      </a>
    `
      : '';

    div.innerHTML = `
          <div class="header">
            <div class="header-content">
              <div>
                <strong>${item.title}</strong><br>
                <small>${item.school} · ${item.period}</small>
              </div>
              ${orbitalBtn}
            </div>
          </div>
          <p>${item.description}</p>
          <p class="details">${item.details}</p>
        `;
    container.appendChild(div);
  });
}

function renderList(containerId, list, type) {
  const container = document.getElementById(containerId);
  if (!container) return;

  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';

    if (type === 'exp') {
      // Rendre les liens cliquables dans item.details
      const detailsWithLinks = item.details.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" class="link">$1</a>'
      );

      const orbitalBtn = item.recommendationUrl
        ? `
        <a href="${item.recommendationUrl}" download class="orbital-btn" title="Télécharger la lettre de recommandation">
          <div class="orbital-ring"></div>
          <div class="orbital-ring orbital-ring-2"></div>
          <span class="orbital-icon">📄</span>
        </a>
      `
        : '';

      div.innerHTML = `
    <div class="header">
      <div class="header-content">
        <div>
          <strong>${item.role}</strong><br>
          <small>${item.company} · ${item.period}</small>
        </div>
        ${orbitalBtn}
      </div>
    </div>
    <ul>
      ${item.bullets.map(b => `<li>${b}</li>`).join('')}
    </ul>
    <p class="details">
      ${detailsWithLinks}
    </p>
  `;
    } else if (type === 'proj') {
      // Construire le HTML des détails (sans inclure la note)
      const detailsHtml = `<p class="details">
    ${item.details}
  </p>`;

      // Construire la carte complète
      div.innerHTML = `
    <div class="header">
      <strong>${item.title}</strong>
    </div>
    <p>${item.summary}</p>
    ${detailsHtml}
    ${item.note ? `<p class="note-danger">${item.note}</p>` : ''}
    ${
      item.github
        ? `<a href="${item.github}" target="_blank" class="btn-primary" style="margin-top: 0.5rem; display: inline-block;">Voir sur GitHub</a>`
        : `<small>Code disponible sur demande</small>`
    }
  `;
    }

    container.appendChild(div);
  });
}

renderEducation('edu-list', education);
renderList('experience-list', experiences, 'exp');
renderList('projects-list', projects, 'proj');

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Reveal on scroll animation
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-on-scroll');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  // Observer pour les cartes soul
  document.querySelectorAll('.soul-card, .poem-container').forEach(card => {
    observer.observe(card);
  });
});

////////////////////////////////////////////////////////////

const btn = document.getElementById('sliderButton'),
  cont = document.querySelector('.slider-track'),
  fill = document.getElementById('sliderFill'),
  txt = document.getElementById('sliderText'),
  slSec = document.getElementById('sliderSection'),
  uniCont = document.getElementById('universeContainer');
let drag = false,
  sX = 0,
  cX = 0;
const maxD = cont.offsetWidth - btn.offsetWidth,
  thresh = maxD * 0.85;
function hStart(e) {
  drag = true;
  sX = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - cX;
}
function hMove(e) {
  if (!drag) return;
  e.preventDefault();
  let nX = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - sX;
  nX = Math.max(0, Math.min(nX, maxD));
  cX = nX;
  btn.style.left = nX + 'px';
  fill.style.width = (nX / maxD) * 100 + '%';
  txt.style.opacity = 1 - nX / maxD;
}
function hEnd() {
  if (!drag) return;
  drag = false;
  if (cX >= thresh) {
    btn.style.transition = 'left 0.4s ease-out';
    fill.style.transition = 'width 0.4s ease-out';
    txt.style.transition = 'opacity 0.4s ease-out';
    btn.style.left = maxD + 'px';
    fill.style.width = '100%';
    txt.style.opacity = '0';
    setTimeout(() => {
      slSec.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      slSec.classList.add('hidden');
      setTimeout(() => {
        uniCont.style.display = 'block';
        uniCont.offsetHeight;
        uniCont.classList.add('show');
        initUniverse();
      }, 100);
    }, 400);
  } else {
    btn.style.transition = 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    fill.style.transition = 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    txt.style.transition = 'opacity 0.5s ease';
    btn.style.left = '0px';
    fill.style.width = '0%';
    txt.style.opacity = '1';
    cX = 0;
    setTimeout(() => {
      btn.style.transition = '';
      fill.style.transition = 'width 0.1s ease';
      txt.style.transition = '';
    }, 500);
  }
}
btn.addEventListener('mousedown', hStart);
btn.addEventListener('touchstart', hStart);
document.addEventListener('mousemove', hMove);
document.addEventListener('touchmove', hMove, { passive: false });
document.addEventListener('mouseup', hEnd);
document.addEventListener('touchend', hEnd);
function initUniverse() {
  const c = document.getElementById('starsCanvas'),
    ctx = c.getContext('2d');
  function rz() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
  rz();
  window.addEventListener('resize', rz);
  const stars = [];
  for (let i = 0; i < 265; i++) {
    stars.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      radius: Math.random() * 1.5,
      opacity: Math.random(),
      speedX: (Math.random() - 0.5) * 0.08,
      speedY: (Math.random() - 0.5) * 0.08,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
    });
  }
  const sStars = [];
  function cSS() {
    sStars.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height * 0.5,
      length: Math.random() * 80 + 60,
      speed: Math.random() * 8 + 6,
      angle: (Math.random() * Math.PI) / 6 + Math.PI / 6,
      opacity: 1,
    });
  }
  setInterval(() => {
    if (Math.random() < 0.3) cSS();
  }, 3000);
  const comets = [];
  function cComet() {
    comets.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height * 0.3,
      length: Math.random() * 150 + 120,
      speed: Math.random() * 4 + 3,
      angle: (Math.random() * Math.PI) / 8 + Math.PI / 4,
      opacity: 1,
      size: 3,
    });
  }
  setInterval(() => {
    if (Math.random() < 0.15) cComet();
  }, 8000);
  function anim() {
    ctx.fillStyle = 'rgba(5, 10, 30, 0.15)';
    ctx.fillRect(0, 0, c.width, c.height);
    stars.forEach(s => {
      s.x += s.speedX;
      s.y += s.speedY;
      if (s.x < 0 || s.x > c.width) s.speedX *= -1;
      if (s.y < 0 || s.y > c.height) s.speedY *= -1;
      s.opacity += (Math.random() - 0.5) * s.twinkleSpeed;
      s.opacity = Math.max(0.2, Math.min(1, s.opacity));
      const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 2);
      g.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
      g.addColorStop(0.5, `rgba(255,255,255,${s.opacity * 0.3})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius * 2, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });
    sStars.forEach((s, i) => {
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= 0.01;
      if (s.opacity <= 0 || s.x > c.width || s.y > c.height) {
        sStars.splice(i, 1);
        return;
      }
      const g = ctx.createLinearGradient(
        s.x,
        s.y,
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      g.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = g;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
      ctx.stroke();
    });
    comets.forEach((co, i) => {
      co.x += Math.cos(co.angle) * co.speed;
      co.y += Math.sin(co.angle) * co.speed;
      co.opacity -= 0.008;
      if (co.opacity <= 0 || co.x > c.width || co.y > c.height) {
        comets.splice(i, 1);
        return;
      }
      const headGrad = ctx.createRadialGradient(co.x, co.y, 0, co.x, co.y, co.size * 3);
      headGrad.addColorStop(0, `rgba(200,220,255,${co.opacity})`);
      headGrad.addColorStop(0.5, `rgba(150,180,255,${co.opacity * 0.6})`);
      headGrad.addColorStop(1, 'rgba(100,150,255,0)');
      ctx.fillStyle = headGrad;
      ctx.beginPath();
      ctx.arc(co.x, co.y, co.size * 3, 0, Math.PI * 2);
      ctx.fill();
      const tailGrad = ctx.createLinearGradient(
        co.x,
        co.y,
        co.x - Math.cos(co.angle) * co.length,
        co.y - Math.sin(co.angle) * co.length
      );
      tailGrad.addColorStop(0, `rgba(180,200,255,${co.opacity * 0.8})`);
      tailGrad.addColorStop(0.3, `rgba(150,180,255,${co.opacity * 0.5})`);
      tailGrad.addColorStop(1, 'rgba(100,150,200,0)');
      ctx.strokeStyle = tailGrad;
      ctx.lineWidth = co.size * 1.5;
      ctx.beginPath();
      ctx.moveTo(co.x, co.y);
      ctx.lineTo(co.x - Math.cos(co.angle) * co.length, co.y - Math.sin(co.angle) * co.length);
      ctx.stroke();
    });
    requestAnimationFrame(anim);
  }
  anim();
  let mX = 0,
    mY = 0;
  document.addEventListener('mousemove', e => {
    mX = e.clientX;
    mY = e.clientY;
    stars.forEach(s => {
      const dx = mX - s.x,
        dy = mY - s.y,
        d = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        const f = (100 - d) / 100;
        s.x += dx * f * 0.02;
        s.y += dy * f * 0.02;
      }
    });
  });
  const planets = document.querySelectorAll('.planet');
  let curM = null;
  setTimeout(() => {
    planets.forEach(p => p.classList.add('float'));
  }, 2000);
  planets.forEach(p => {
    p.addEventListener('click', () => {
      const t = p.dataset.planet;
      openModal(t);
      crPart(p);
      p.style.transition = 'all 0.5s ease';
      p.style.transform = 'scale(3)';
      p.style.zIndex = '50';
      planets.forEach(pl => {
        if (pl !== p) pl.style.opacity = '0';
      });
    });
  });
  window.openModal = function (t) {
    if (curM) closeModal(curM);
    document.getElementById(`modal-${t}`).classList.add('active');
    curM = t;
  };
  window.closeModal = function (t) {
    document.getElementById(`modal-${t}`).classList.remove('active');
    curM = null;
    planets.forEach(p => {
      p.style.opacity = '1';
      p.style.transform = 'scale(1)';
      p.style.zIndex = '10';
    });
  };
  function crPart(el) {
    const r = el.getBoundingClientRect(),
      cx = r.left + r.width / 2,
      cy = r.top + r.height / 2;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      document.body.appendChild(p);
      const a = (Math.PI * 2 * i) / 20,
        tx = cx + Math.cos(a) * 100,
        ty = cy + Math.sin(a) * 100;
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.opacity = '1';
      setTimeout(() => {
        p.style.left = tx + 'px';
        p.style.top = ty + 'px';
        p.style.opacity = '0';
      }, 10);
      setTimeout(() => p.remove(), 1000);
    }
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && curM) closeModal(curM);
  });
}

///////////////////////////////////////////////////
const totalItems = 8;
const itemHeight = 110;
const centerOffset = 115;
let currentY = 0;
let targetY = 0;
let isDragging = false;
let lastY = 0;
let velocity = 0;
let animationId = null;
let selectedCase = null;
let isAnimatingToCase = false;
let currentActiveContent = null;

const documentData = {
  1: {
    title: 'Diplôme BTS CIEL',
  },
  2: {
    title: 'Relevé de notes BTS CIEL',
  },
  3: {
    title: 'Bulletins BTS CIEL – 1ʳᵉ et 2ᵉ année',
  },
  4: {
    title: 'Lettres de Recommandations',
  },
  5: {
    title: 'Baccalauréat général',
  },
  6: {
    title: 'CV fin BTS CIEL (19 ans)',
  },
  7: {
    title: 'Certification Cisco CCNA1',
  },
  8: {
    title: 'Attestation Hackathon NASA Space Apps Challenge',
  },
};

function mod(n, m) {
  return ((n % m) + m) % m;
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => notification.classList.remove('show'), 3000);
}

function initializeMenu() {
  const container = document.getElementById('menuContainer');
  const progressDots = document.getElementById('progressDots');

  for (let i = 1; i <= totalItems; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    dot.dataset.case = i;
    dot.addEventListener('click', () => scrollToCase(i));
    progressDots.appendChild(dot);
  }

  for (let copy = 0; copy < 3; copy++) {
    for (let i = 1; i <= totalItems; i++) {
      const item = document.createElement('div');
      item.className = 'menu-item';
      item.innerHTML = `<span class="menu-item-title">${documentData[i].title}</span>`;
      item.dataset.number = i;
      item.dataset.copy = copy;

      const preview = document.createElement('div');
      preview.className = 'menu-item-preview';
      preview.innerHTML = `
    <div class="preview-title">${documentData[i].title}</div>
    <div class="preview-desc">${documentData[i].preview}</div>
`;
      item.appendChild(preview);

      item.addEventListener('click', e => {
        e.stopPropagation();
        scrollToCase(i);
      });

      container.appendChild(item);
    }
  }

  currentY = totalItems * itemHeight - itemHeight;
  targetY = currentY;
  animate();
}

function scrollToCase(caseNumber) {
  isAnimatingToCase = true;
  velocity = 0;

  const targetPosition = (caseNumber - 1 + totalItems) * itemHeight;
  const currentPosition = currentY;

  const positions = [
    targetPosition,
    targetPosition + totalItems * itemHeight,
    targetPosition + 2 * totalItems * itemHeight,
  ];

  let closestPosition = positions[0];
  let minDistance = Math.abs(positions[0] - currentPosition);

  for (let i = 1; i < positions.length; i++) {
    const distance = Math.abs(positions[i] - currentPosition);
    if (distance < minDistance) {
      minDistance = distance;
      closestPosition = positions[i];
    }
  }

  targetY = closestPosition;

  setTimeout(() => {
    isAnimatingToCase = false;
    selectCase(caseNumber);
  }, 800);
}

function selectCase(caseNumber) {
  selectedCase = caseNumber;

  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (parseInt(item.dataset.number) === caseNumber) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });

  const dots = document.querySelectorAll('.progress-dot');
  dots.forEach(dot => {
    if (parseInt(dot.dataset.case) === caseNumber) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  displayPDF(caseNumber);
}

function displayPDF(caseNumber) {
  const placeholder = document.getElementById('placeholder');
  const pdfContents = document.querySelectorAll('.pdf-content');
  const documentInfos = document.querySelectorAll('.document-info');
  const documentTitle = document.getElementById('documentTitle');
  const viewer = document.getElementById('pdfViewer');

  placeholder.style.display = 'none';

  if (currentActiveContent) {
    currentActiveContent.classList.add('exiting');
    setTimeout(() => {
      currentActiveContent.classList.remove('active', 'exiting');
    }, 300);
  }

  const skeleton = document.createElement('div');
  skeleton.className = 'skeleton-loader';
  skeleton.innerHTML = `
                <div class="skeleton-box skeleton-title"></div>
                <div class="skeleton-box skeleton-text"></div>
                <div class="skeleton-box skeleton-text"></div>
                <div class="skeleton-box skeleton-button"></div>
            `;
  viewer.appendChild(skeleton);

  setTimeout(() => {
    skeleton.remove();

    documentTitle.style.opacity = '0';
    setTimeout(() => {
      documentTitle.textContent = documentData[caseNumber].title;
      documentTitle.style.opacity = '1';
    }, 200);

    pdfContents.forEach(content => {
      if (parseInt(content.dataset.case) === caseNumber) {
        content.classList.add('active');
        currentActiveContent = content;
      } else {
        content.classList.remove('active');
      }
    });

    documentInfos.forEach(info => {
      if (parseInt(info.dataset.case) === caseNumber) {
        info.classList.add('active');
      } else {
        info.classList.remove('active');
      }
    });
  }, 600);
}

function animate() {
  const diff = targetY - currentY;
  currentY += diff * (isAnimatingToCase ? 0.08 : 0.15);

  if (!isDragging && !isAnimatingToCase && Math.abs(velocity) > 0.1) {
    targetY += velocity;
    velocity *= 0.95;
  }

  const totalHeight = totalItems * itemHeight;
  const container = document.getElementById('menuContainer');

  if (currentY >= totalHeight * 2) {
    const offset = totalHeight;
    currentY -= offset;
    targetY -= offset;
    container.classList.add('no-transition');
    setTimeout(() => container.classList.remove('no-transition'), 10);
  } else if (currentY < totalHeight) {
    const offset = totalHeight;
    currentY += offset;
    targetY += offset;
    container.classList.add('no-transition');
    setTimeout(() => container.classList.remove('no-transition'), 10);
  }

  updatePosition();
  updateActiveItem();
  updateCounter();

  animationId = requestAnimationFrame(animate);
}

function updatePosition() {
  const container = document.getElementById('menuContainer');
  const offset = -currentY + centerOffset;
  container.style.transform = `translateY(${offset}px)`;
}

function updateActiveItem() {
  const items = document.querySelectorAll('.menu-item');
  const centerPosition = currentY;

  items.forEach(item => {
    const itemTop = item.offsetTop;
    const itemCenter = itemTop + item.offsetHeight / 2;
    const distanceFromCenter = Math.abs(itemCenter - (centerPosition + 50));

    if (distanceFromCenter < 55) {
      item.classList.add('center');
      item.classList.remove('side');
    } else if (distanceFromCenter >= 55 && distanceFromCenter < 165) {
      item.classList.remove('center');
      item.classList.add('side');
    } else {
      item.classList.remove('center', 'side');
    }
  });
}

function updateCounter() {
  const totalHeight = totalItems * itemHeight;
  const normalizedPosition = mod(Math.round(currentY / itemHeight), totalItems);
  const currentNumber = normalizedPosition + 1;

  // Au lieu d'afficher le numéro, on affiche le titre
  const currentTitle = documentData[currentNumber].title;
  document.getElementById('currentNumber').textContent = currentTitle;
}

function snapToNearest() {
  const nearestItem = Math.round(targetY / itemHeight) * itemHeight;
  targetY = nearestItem;
}

document.getElementById('menuWrapper').addEventListener(
  'wheel',
  e => {
    e.preventDefault();
    if (!isAnimatingToCase) {
      targetY += e.deltaY * 0.8;
      velocity = 0;
    }
  },
  { passive: false }
);

const wrapper = document.getElementById('menuWrapper');

wrapper.addEventListener('mousedown', e => {
  if (!isAnimatingToCase) {
    isDragging = true;
    lastY = e.clientY;
    velocity = 0;
  }
});

wrapper.addEventListener(
  'touchstart',
  e => {
    if (!isAnimatingToCase) {
      isDragging = true;
      lastY = e.touches[0].clientY;
      velocity = 0;
    }
  },
  { passive: false }
);

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const deltaY = lastY - e.clientY;
  targetY += deltaY;
  velocity = deltaY;
  lastY = e.clientY;
});

document.addEventListener(
  'touchmove',
  e => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaY = lastY - e.touches[0].clientY;
    targetY += deltaY;
    velocity = deltaY;
    lastY = e.touches[0].clientY;
  },
  { passive: false }
);

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    setTimeout(snapToNearest, 300);
  }
});

document.addEventListener('touchend', () => {
  if (isDragging) {
    isDragging = false;
    setTimeout(snapToNearest, 300);
  }
});

document.addEventListener('keydown', e => {
  if (!isAnimatingToCase) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      targetY -= itemHeight;
      velocity = 0;
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      targetY += itemHeight;
      velocity = 0;
    } else if (e.key >= '1' && e.key <= '5') {
      e.preventDefault();
      scrollToCase(parseInt(e.key));
    }
  }
});

function downloadDocument(docNumber) {
  const button = event.target.closest('.download-btn');
  button.classList.add('downloading');

  showNotification('📥 Téléchargement en cours...');

  setTimeout(() => {
    const documents = {
      1: { url: 'pdfs/xxx.pdf', name: 'JM_Diplome_BTS_CIEL.pdf' },
      2: {
        url: 'pdfs/relevé_de_notes_bts.pdf',
        name: 'JM_ReleveNotes_BTS_CIEL.pdf',
      },
      3: {
        url: 'pdfs/JM_Bulletins_BTS_CIEL.pdf',
        name: 'JM_Bulletins_BTS_CIEL.pdf',
      },
      4: {
        url: 'pdfs/JM_Baccalaureat_general.pdf',
        name: 'JM_Baccalaureat_general.pdf',
      },
      5: {
        url: 'pdfs/CV.pdf',
        name: 'JM_Ancien_CV_BTS_CIEL.pdf',
      },
      6: {
        url: 'pdfs/JM_Lettres_de_Recommandation_BTS_&_Stage.pdf',
        name: 'JM_Lettres_de_recommandations.pdf',
      },
      7: {
        url: 'pdfs/ccna1.pdf',
        name: 'JM_Certification_CCNA1.pdf',
      },
      8: {
        url: 'pdfs/NASA_Space_Apps_Challenge_cropped.pdf',
        name: 'JM_Hackathon_NASA_SpaceAppsChallenge.pdf',
      },
    };

    const doc = documents[docNumber];

    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    button.classList.remove('downloading');
    showNotification('✅ Document téléchargé avec succès !');
  }, 1500);
}

initializeMenu();

/////////////////////////////////////////////

const poemElement = document.getElementById('poem');
let isTyping = false;

const poemSteps = [
  { text: 'Douce lune, ', pause: 400 },
  { text: 'tu écoutes sans cesse ', pause: 600 },
  { text: 'les histoires des autres,', pause: 1200 },
  { text: '\n', pause: 400 },
  { text: 'Mais nul ne se préoccupe ', pause: 500 },
  { text: 'des tiennes.', pause: 1400 },
  { text: '\n', pause: 500 },
  { text: 'Douce lune, ', pause: 600 },
  { text: 'conte-moi tes légendes, ', pause: 800 },
  { text: 'toi qui connus les apôtres,', pause: 1000 },
  { text: '\n', pause: 400 },
  { text: 'Toi dont la beauté ', pause: 500 },
  { text: 'fait pâlir tant de terriennes.', pause: 1600 },
  { text: '\n\n', pause: 1200 },

  { text: 'Douce lune, ', pause: 500 },
  { text: "d'où viennent ", pause: 700 },
  { text: 'les marques de tes cratères ?', pause: 1300 },
  { text: '\n', pause: 400 },
  { text: 'Est-ce le poids du temps, ', pause: 800 },
  { text: "ou le souvenir d'une ", pause: 600 },
  { text: 'bataille', type: 'word', pause: 900 },
  { delete: 8, pause: 500 },
  { text: 'geurre', type: 'word', pause: 700 },
  { delete: 6, pause: 400 },
  { text: 'guerre', type: 'word', pause: 300 },
  { text: ' ?', pause: 1400 },
  { text: '\n', pause: 400 },
  { text: 'Douce lune, ', pause: 600 },
  { text: 'pourquoi me rends-tu visite ', pause: 700 },
  { text: 'en mon sommeil ?', pause: 1200 },
  { text: '\n', pause: 400 },
  { text: 'Pourquoi fuis-tu le jour ? ', pause: 900 },
  { text: 'Est-ce la faute du soleil ?', pause: 1600 },
  { text: '\n\n', pause: 1400 },

  { text: 'Douce lune, ', pause: 700 },
  { text: 'toi qui vois ', pause: 500 },
  { text: 'toute notre cruauté,', pause: 1300 },
  { text: '\n', pause: 400 },
  { text: 'Pourquoi continues-tu ', pause: 600 },
  { text: 'à nous rendre visite ?', pause: 1200 },
  { text: '\n', pause: 500 },
  { text: 'Douce lune, ', pause: 800 },
  { text: 'gardes-tu foi ', pause: 600 },
  { text: 'en nous ? ', pause: 600 },
  { delete: 7, pause: 500 },
  { text: "l'humanité ? ", pause: 1400 },
  { text: '\n', pause: 400 },
  { text: 'Ou nous laisses-tu errer, ', pause: 700 },
  { text: 'sans guide ni ', pause: 1200 },
  { text: 'prosélite ?', pause: 1600 },
  { text: '\n\n', pause: 1500 },

  { text: 'Douce, ', pause: 800 },
  { text: "c'est en ta compagnie ", pause: 600 },
  { text: 'que je me vautre,', pause: 1200 },
  { text: '\n', pause: 400 },
  { text: 'Et plus tu jaunis, ', pause: 700 },
  { text: 'plus moi je rougis,', pause: 1300 },
  { text: '\n', pause: 500 },
  { text: 'Car douce lune, ', pause: 800 },
  { text: "aujourd'hui ", pause: 600 },
  { text: "on me t'a promis,", pause: 1400 },
  { text: '\n', pause: 400 },
  { text: "Et j'ai tremblé ", pause: 700 },
  { text: "d'un pressentiment ", pause: 1000 },
  { text: 'étrange', type: 'word', pause: 900 },
  { delete: 7, pause: 500 },
  { text: 'interdit', type: 'word', pause: 400 },
  { text: '..', pause: 1800 },
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeCharacter(char) {
  const cursor = poemElement.querySelector('.cursor');
  const textNode = document.createTextNode(char);
  poemElement.insertBefore(textNode, cursor);
  await sleep(20 + Math.random() * 30);
}

async function deleteCharacter() {
  const cursor = poemElement.querySelector('.cursor');
  const prevNode = cursor.previousSibling;
  if (prevNode && prevNode.nodeType === Node.TEXT_NODE) {
    const text = prevNode.textContent;
    if (text.length > 1) {
      prevNode.textContent = text.slice(0, -1);
    } else {
      prevNode.remove();
    }
    await sleep(40 + Math.random() * 20);
  }
}

async function startTyping() {
  if (isTyping) return;

  isTyping = true;
  poemElement.innerHTML = '<span class="cursor"></span>';
  await sleep(5000);

  for (const step of poemSteps) {
    if (step.delete) {
      for (let i = 0; i < step.delete; i++) {
        await deleteCharacter();
      }
    } else if (step.text) {
      for (const char of step.text) {
        await typeCharacter(char);
      }
    }

    if (step.pause) {
      await sleep(step.pause);
    }
  }

  isTyping = false;
}

// Fonction à appeler lors de l'ouverture de la modale
function initPoemTyping() {
  startTyping();
}

// Écouter l'ouverture de la modale
const observer2 = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    const modal = document.getElementById('modal-poetry');
    if (modal && modal.style.display !== 'none' && !isTyping) {
      const poemDiv = document.getElementById('poem');
      if (poemDiv && poemDiv.textContent.trim() === '') {
        initPoemTyping();
      }
    }
  });
});

// Observer les changements sur la modale
if (document.getElementById('modal-poetry')) {
  observer2.observe(document.getElementById('modal-poetry'), {
    attributes: true,
    attributeFilter: ['style', 'class'],
  });
}

///////////////////////////////////////////
// Dans votre script.js
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');

  // Masquer les messages précédents
  successMsg.classList.remove('show');
  errorMsg.classList.remove('show');

  // Désactiver le bouton pendant l'envoi
  submitBtn.classList.add('sending');
  submitBtn.textContent = 'Envoi en cours...';
  submitBtn.disabled = true;

  // Paramètres du template EmailJS
  const templateParams = {
    from_name: document.getElementById('prenom').value + ' ' + document.getElementById('nom').value,
    from_email: document.getElementById('email').value,
    subject: document.getElementById('sujet').value,
    message: document.getElementById('message').value,
    to_email: 'j.messadek@proton.me',
  };

  // Envoi via EmailJS
  emailjs
    .send('service_0ggoprx', 'template_xchk4xk', templateParams)
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);

        // Afficher le message de succès
        successMsg.classList.add('show');

        // Réinitialiser le formulaire
        document.getElementById('contactForm').reset();

        // Masquer le message après 5 secondes
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 5000);
      },
      function (error) {
        console.error('FAILED...', error);

        // Afficher le message d'erreur
        errorMsg.classList.add('show');

        setTimeout(() => {
          errorMsg.classList.remove('show');
        }, 5000);
      }
    )
    .finally(function () {
      // Réactiver le bouton
      submitBtn.classList.remove('sending');
      submitBtn.textContent = 'Envoyer';
      submitBtn.disabled = false;
    });
});

const sparklingContainers = document.querySelectorAll('.sparkling-container');
const sparklingText = document.querySelector('.sparkling-text');
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');

function createSparkle(container, x, y, isInText = false) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  // Si la particule est générée dans le texte spécifique, on change sa couleur
  if (isInText) sparkle.classList.add('in-container');

  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';

  // Position finale aléatoire
  sparkle.style.setProperty('--x', Math.random() * 40 - 20 + 'px');
  sparkle.style.setProperty('--y', Math.random() * -50 - 20 + 'px');

  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}

// Survol de chaque container : particules cyan par défaut
sparklingContainers.forEach(container => {
  container.addEventListener('mousemove', e => {
    if (Math.random() > 0.7) {
      const rect = container.getBoundingClientRect();
      createSparkle(
        container,
        e.clientX - rect.left,
        e.clientY - rect.top,
        false // false = couleur cyan par défaut
      );
    }
  });
});

// Survol spécifique du texte narratif : particules roses UNIQUEMENT
if (sparklingText) {
  sparklingText.addEventListener('mousemove', e => {
    e.stopPropagation(); // EMPÊCHE la propagation au container parent

    if (Math.random() > 0.7) {
      const rect = sparklingText.getBoundingClientRect();
      createSparkle(
        sparklingText,
        e.clientX - rect.left,
        e.clientY - rect.top,
        true // true = couleur rose dans le texte
      );
    }
  });
}

// Survol des inputs/textarea du formulaire : particules roses
formInputs.forEach(input => {
  input.addEventListener('mousemove', e => {
    e.stopPropagation(); // EMPÊCHE la propagation au container parent

    if (Math.random() > 0.7) {
      const formContainer = input.closest('.sparkling-container');
      if (formContainer) {
        const rect = formContainer.getBoundingClientRect();
        createSparkle(
          formContainer,
          e.clientX - rect.left,
          e.clientY - rect.top,
          true // true = couleur rose dans les inputs
        );
      }
    }
  });
});
