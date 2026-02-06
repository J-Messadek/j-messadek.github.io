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
        "Conception et mise en production d’une plateforme VTC haut de gamme et d'une bijouterie floral, de l’architecture applicative à l’exploitation. Développement full-stack, intégration de services critiques (paiement, authentification, emails), mise en conformité RGPD et optimisation des performances. Approche orientée fiabilité, sécurité et exploitation réelle d’un service en conditions quasi-production.",
      recommendationUrl: 'pdfs/JM_Lettres_Recommandation_DevFullStack.pdf',
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
  ],
  education = [
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
  ],
  projects = [
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
      github: 'https://github.com/J-Messadek/ARP-Spoofing',
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
      github: 'https://github.com/J-Messadek/DTP-Trunk-spoofing',
      details:
        "Scénarios de labo pour analyser l'impact sur la topologie VLAN et tester des mesures de défense (désactivation de DTP, port security, hardening des switches).",
      note: 'ATTENTION ⚠️ — Réservé au lab/VM. Interdit sur tout réseau réel ; toute utilisation non autorisée est de la seule responsabilité de l’utilisateur.',
    },
  ];
function renderEducation(e, t) {
  const n = document.getElementById(e);
  n &&
    t.forEach(e => {
      const t = document.createElement('div');
      t.className = 'card';
      const s = e.recommendationUrl
        ? `\n      <a href="${e.recommendationUrl}" download class="orbital-btn" title="Télécharger la lettre de recommandation">\n        <div class="orbital-ring"></div>\n        <div class="orbital-ring orbital-ring-2"></div>\n        <span class="orbital-icon">📄</span>\n      </a>\n    `
        : '';
      ((t.innerHTML = `\n          <div class="header">\n            <div class="header-content">\n              <div>\n                <strong>${e.title}</strong><br>\n                <small>${e.school} · ${e.period}</small>\n              </div>\n              ${s}\n            </div>\n          </div>\n          <p>${e.description}</p>\n          <p class="details">${e.details}</p>\n        `),
        n.appendChild(t));
    });
}
function renderList(e, t, n) {
  const s = document.getElementById(e);
  s &&
    t.forEach(e => {
      const t = document.createElement('div');
      if (((t.className = 'card'), 'exp' === n)) {
        const n = e.details.replace(
            /(https?:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank" class="link">$1</a>'
          ),
          s = e.recommendationUrl
            ? `\n        <a href="${e.recommendationUrl}" download class="orbital-btn" title="Télécharger la lettre de recommandation">\n          <div class="orbital-ring"></div>\n          <div class="orbital-ring orbital-ring-2"></div>\n          <span class="orbital-icon">📄</span>\n        </a>\n      `
            : '';
        t.innerHTML = `\n    <div class="header">\n      <div class="header-content">\n        <div>\n          <strong>${e.role}</strong><br>\n          <small>${e.company} · ${e.period}</small>\n        </div>\n        ${s}\n      </div>\n    </div>\n    <ul>\n      ${e.bullets.map(e => `<li>${e}</li>`).join('')}\n    </ul>\n    <p class="details">\n      ${n}\n    </p>\n  `;
      } else if ('proj' === n) {
        const n = `<p class="details">\n    ${e.details}\n  </p>`;
        t.innerHTML = `\n    <div class="header">\n      <strong>${e.title}</strong>\n    </div>\n    <p>${e.summary}</p>\n    ${n}\n    ${e.note ? `<p class="note-danger">${e.note}</p>` : ''}\n    ${e.github ? `<a href="${e.github}" target="_blank" class="btn-primary" style="margin-top: 0.5rem; display: inline-block;">Voir sur GitHub</a>` : '<small>Code disponible sur demande</small>'}\n  `;
      }
      s.appendChild(t);
    });
}
(renderEducation('edu-list', education),
  renderList('experience-list', experiences, 'exp'),
  renderList('projects-list', projects, 'proj'),
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
  }));
const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' },
  observer = new IntersectionObserver(e => {
    e.forEach(e => {
      e.isIntersecting && e.target.classList.add('reveal-on-scroll');
    });
  }, observerOptions);
document.addEventListener('DOMContentLoaded', () => {
  (document.body.classList.add('loaded'),
    document.querySelectorAll('.soul-card, .poem-container').forEach(e => {
      observer.observe(e);
    }));
});
const btn = document.getElementById('sliderButton'),
  cont = document.querySelector('.slider-track'),
  fill = document.getElementById('sliderFill'),
  txt = document.getElementById('sliderText'),
  slSec = document.getElementById('sliderSection'),
  uniCont = document.getElementById('universeContainer');
let drag = !1,
  sX = 0,
  cX = 0;
const maxD = cont.offsetWidth - btn.offsetWidth,
  thresh = 0.85 * maxD;
function hStart(e) {
  ((drag = !0), (sX = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - cX));
}
function hMove(e) {
  if (!drag) return;
  e.preventDefault();
  let t = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - sX;
  ((t = Math.max(0, Math.min(t, maxD))),
    (cX = t),
    (btn.style.left = t + 'px'),
    (fill.style.width = (t / maxD) * 100 + '%'),
    (txt.style.opacity = 1 - t / maxD));
}
function hEnd() {
  drag &&
    ((drag = !1),
    cX >= thresh
      ? ((btn.style.transition = 'left 0.4s ease-out'),
        (fill.style.transition = 'width 0.4s ease-out'),
        (txt.style.transition = 'opacity 0.4s ease-out'),
        (btn.style.left = maxD + 'px'),
        (fill.style.width = '100%'),
        (txt.style.opacity = '0'),
        setTimeout(() => {
          ((slSec.style.transition = 'opacity 0.8s ease, transform 0.8s ease'),
            slSec.classList.add('hidden'),
            setTimeout(() => {
              ((uniCont.style.display = 'block'),
                uniCont.offsetHeight,
                uniCont.classList.add('show'),
                initUniverse(),
                enableUniverseScroll());
            }, 100));
        }, 400))
      : ((btn.style.transition = 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'),
        (fill.style.transition = 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'),
        (txt.style.transition = 'opacity 0.5s ease'),
        (btn.style.left = '0px'),
        (fill.style.width = '0%'),
        (txt.style.opacity = '1'),
        (cX = 0),
        setTimeout(() => {
          ((btn.style.transition = ''),
            (fill.style.transition = 'width 0.1s ease'),
            (txt.style.transition = ''));
        }, 500)));
}
function closeUniverse() {
  (uniCont.classList.remove('show'),
    setTimeout(() => {
      ((uniCont.style.display = 'none'),
        slSec.classList.remove('hidden'),
        (btn.style.transition = ''),
        (fill.style.transition = ''),
        (txt.style.transition = ''),
        (btn.style.left = '0px'),
        (fill.style.width = '0%'),
        (txt.style.opacity = '1'),
        (cX = 0));
    }, 800));
}
function enableUniverseScroll() {
  let e = 0;
  let t = !1;
  let n = 0;
  function s(e) {
    n = e.touches[0].clientY;
  }
  (uniCont.addEventListener('wheel', function n(s) {
    t ||
      ((e += Math.abs(s.deltaY)),
      e >= 150 && ((t = !0), closeUniverse(), uniCont.removeEventListener('wheel', n)));
  }),
    uniCont.addEventListener('touchstart', s),
    uniCont.addEventListener('touchmove', function e(i) {
      if (t) return;
      Math.abs(i.touches[0].clientY - n) >= 150 &&
        ((t = !0),
        closeUniverse(),
        uniCont.removeEventListener('touchstart', s),
        uniCont.removeEventListener('touchmove', e));
    }));
}
function initUniverse() {
  const e = document.getElementById('starsCanvas'),
    t = e.getContext('2d');
  function n() {
    ((e.width = window.innerWidth), (e.height = window.innerHeight));
  }
  (n(), window.addEventListener('resize', n));
  const s = [];
  for (let t = 0; t < 265; t++)
    s.push({
      x: Math.random() * e.width,
      y: Math.random() * e.height,
      radius: 1.5 * Math.random(),
      opacity: Math.random(),
      speedX: 0.08 * (Math.random() - 0.5),
      speedY: 0.08 * (Math.random() - 0.5),
      twinkleSpeed: 0.03 * Math.random() + 0.01,
    });
  const i = [];
  setInterval(() => {
    Math.random() < 0.3 &&
      i.push({
        x: Math.random() * e.width,
        y: Math.random() * e.height * 0.5,
        length: 80 * Math.random() + 60,
        speed: 8 * Math.random() + 6,
        angle: (Math.random() * Math.PI) / 6 + Math.PI / 6,
        opacity: 1,
      });
  }, 3e3);
  const a = [];
  (setInterval(() => {
    Math.random() < 0.15 &&
      a.push({
        x: Math.random() * e.width,
        y: Math.random() * e.height * 0.3,
        length: 150 * Math.random() + 120,
        speed: 4 * Math.random() + 3,
        angle: (Math.random() * Math.PI) / 8 + Math.PI / 4,
        opacity: 1,
        size: 3,
      });
  }, 8e3),
    (function n() {
      ((t.fillStyle = 'rgba(5, 10, 30, 0.15)'),
        t.fillRect(0, 0, e.width, e.height),
        s.forEach(n => {
          ((n.x += n.speedX),
            (n.y += n.speedY),
            (n.x < 0 || n.x > e.width) && (n.speedX *= -1),
            (n.y < 0 || n.y > e.height) && (n.speedY *= -1),
            (n.opacity += (Math.random() - 0.5) * n.twinkleSpeed),
            (n.opacity = Math.max(0.2, Math.min(1, n.opacity))));
          const s = t.createRadialGradient(n.x, n.y, 0, n.x, n.y, 2 * n.radius);
          (s.addColorStop(0, `rgba(255,255,255,${n.opacity})`),
            s.addColorStop(0.5, `rgba(255,255,255,${0.3 * n.opacity})`),
            s.addColorStop(1, 'rgba(255,255,255,0)'),
            t.beginPath(),
            t.arc(n.x, n.y, 2 * n.radius, 0, 2 * Math.PI),
            (t.fillStyle = s),
            t.fill());
        }),
        i.forEach((n, s) => {
          if (
            ((n.x += Math.cos(n.angle) * n.speed),
            (n.y += Math.sin(n.angle) * n.speed),
            (n.opacity -= 0.01),
            n.opacity <= 0 || n.x > e.width || n.y > e.height)
          )
            return void i.splice(s, 1);
          const a = t.createLinearGradient(
            n.x,
            n.y,
            n.x - Math.cos(n.angle) * n.length,
            n.y - Math.sin(n.angle) * n.length
          );
          (a.addColorStop(0, `rgba(255,255,255,${n.opacity})`),
            a.addColorStop(1, 'rgba(255,255,255,0)'),
            (t.strokeStyle = a),
            (t.lineWidth = 2),
            t.beginPath(),
            t.moveTo(n.x, n.y),
            t.lineTo(n.x - Math.cos(n.angle) * n.length, n.y - Math.sin(n.angle) * n.length),
            t.stroke());
        }),
        a.forEach((n, s) => {
          if (
            ((n.x += Math.cos(n.angle) * n.speed),
            (n.y += Math.sin(n.angle) * n.speed),
            (n.opacity -= 0.008),
            n.opacity <= 0 || n.x > e.width || n.y > e.height)
          )
            return void a.splice(s, 1);
          const i = t.createRadialGradient(n.x, n.y, 0, n.x, n.y, 3 * n.size);
          (i.addColorStop(0, `rgba(200,220,255,${n.opacity})`),
            i.addColorStop(0.5, `rgba(150,180,255,${0.6 * n.opacity})`),
            i.addColorStop(1, 'rgba(100,150,255,0)'),
            (t.fillStyle = i),
            t.beginPath(),
            t.arc(n.x, n.y, 3 * n.size, 0, 2 * Math.PI),
            t.fill());
          const o = t.createLinearGradient(
            n.x,
            n.y,
            n.x - Math.cos(n.angle) * n.length,
            n.y - Math.sin(n.angle) * n.length
          );
          (o.addColorStop(0, `rgba(180,200,255,${0.8 * n.opacity})`),
            o.addColorStop(0.3, `rgba(150,180,255,${0.5 * n.opacity})`),
            o.addColorStop(1, 'rgba(100,150,200,0)'),
            (t.strokeStyle = o),
            (t.lineWidth = 1.5 * n.size),
            t.beginPath(),
            t.moveTo(n.x, n.y),
            t.lineTo(n.x - Math.cos(n.angle) * n.length, n.y - Math.sin(n.angle) * n.length),
            t.stroke());
        }),
        requestAnimationFrame(n));
    })());
  let o = 0,
    r = 0;
  document.addEventListener('mousemove', e => {
    ((o = e.clientX),
      (r = e.clientY),
      s.forEach(e => {
        const t = o - e.x,
          n = r - e.y,
          s = Math.sqrt(t * t + n * n);
        if (s < 100) {
          const i = (100 - s) / 100;
          ((e.x += t * i * 0.02), (e.y += n * i * 0.02));
        }
      }));
  });
  const l = document.querySelectorAll('.planet');
  let c = null;
  (setTimeout(() => {
    l.forEach(e => e.classList.add('float'));
  }, 2e3),
    l.forEach(e => {
      e.addEventListener('click', () => {
        const t = e.dataset.planet;
        (openModal(t),
          (function (e) {
            const t = e.getBoundingClientRect(),
              n = t.left + t.width / 2,
              s = t.top + t.height / 2;
            for (let e = 0; e < 20; e++) {
              const t = document.createElement('div');
              ((t.className = 'particle'), document.body.appendChild(t));
              const i = (2 * Math.PI * e) / 20,
                a = n + 100 * Math.cos(i),
                o = s + 100 * Math.sin(i);
              ((t.style.left = n + 'px'),
                (t.style.top = s + 'px'),
                (t.style.opacity = '1'),
                setTimeout(() => {
                  ((t.style.left = a + 'px'), (t.style.top = o + 'px'), (t.style.opacity = '0'));
                }, 10),
                setTimeout(() => t.remove(), 1e3));
            }
          })(e),
          (e.style.transition = 'all 0.5s ease'),
          (e.style.transform = 'scale(3)'),
          (e.style.zIndex = '50'),
          l.forEach(t => {
            t !== e && (t.style.opacity = '0');
          }));
      });
    }),
    (window.openModal = function (e) {
      (c && closeModal(c), document.getElementById(`modal-${e}`).classList.add('active'), (c = e));
    }),
    (window.closeModal = function (e) {
      (document.getElementById(`modal-${e}`).classList.remove('active'),
        (c = null),
        l.forEach(e => {
          ((e.style.opacity = '1'), (e.style.transform = 'scale(1)'), (e.style.zIndex = '10'));
        }));
    }),
    document.addEventListener('keydown', e => {
      'Escape' === e.key && c && closeModal(c);
    }));
}
(btn.addEventListener('mousedown', hStart),
  btn.addEventListener('touchstart', hStart),
  document.addEventListener('mousemove', hMove),
  document.addEventListener('touchmove', hMove, { passive: !1 }),
  document.addEventListener('mouseup', hEnd),
  document.addEventListener('touchend', hEnd));
const totalItems = 8,
  itemHeight = 110,
  centerOffset = 115;
let currentY = 0,
  targetY = 0,
  isDragging = !1,
  lastY = 0,
  velocity = 0,
  animationId = null,
  selectedCase = null,
  isAnimatingToCase = !1,
  currentActiveContent = null;
const documentData = {
  1: { title: 'Diplôme BTS CIEL' },
  2: { title: 'Relevé de notes BTS CIEL' },
  3: { title: 'Bulletins BTS CIEL – 1ʳᵉ et 2ᵉ année' },
  4: { title: 'Lettres de Recommandation' },
  5: { title: 'Baccalauréat général' },
  6: { title: 'CV fin BTS CIEL (19 ans)' },
  7: { title: 'Certification Cisco CCNA1' },
  8: { title: 'Attestation Hackathon NASA Space Apps Challenge' },
};
function mod(e, t) {
  return ((e % t) + t) % t;
}
function showNotification(e) {
  const t = document.getElementById('notification');
  ((t.textContent = e), t.classList.add('show'), setTimeout(() => t.classList.remove('show'), 3e3));
}
function initializeMenu() {
  const e = document.getElementById('menuContainer'),
    t = document.getElementById('progressDots');
  for (let e = 1; e <= totalItems; e++) {
    const n = document.createElement('div');
    ((n.className = 'progress-dot'),
      (n.dataset.case = e),
      n.addEventListener('click', () => scrollToCase(e)),
      t.appendChild(n));
  }
  for (let t = 0; t < 3; t++)
    for (let n = 1; n <= totalItems; n++) {
      const s = document.createElement('div');
      ((s.className = 'menu-item'),
        (s.innerHTML = `<span class="menu-item-title">${documentData[n].title}</span>`),
        (s.dataset.number = n),
        (s.dataset.copy = t));
      const i = document.createElement('div');
      ((i.className = 'menu-item-preview'),
        (i.innerHTML = `\n    <div class="preview-title">${documentData[n].title}</div>\n    <div class="preview-desc">${documentData[n].preview}</div>\n`),
        s.appendChild(i),
        s.addEventListener('click', e => {
          (e.stopPropagation(), scrollToCase(n));
        }),
        e.appendChild(s));
    }
  ((currentY = totalItems * itemHeight - itemHeight), (targetY = currentY), animate());
}
function scrollToCase(e) {
  ((isAnimatingToCase = !0), (velocity = 0));
  const t = (e - 1 + totalItems) * itemHeight,
    n = currentY,
    s = [t, t + totalItems * itemHeight, t + 2 * totalItems * itemHeight];
  let i = s[0],
    a = Math.abs(s[0] - n);
  for (let e = 1; e < s.length; e++) {
    const t = Math.abs(s[e] - n);
    t < a && ((a = t), (i = s[e]));
  }
  ((targetY = i),
    setTimeout(() => {
      ((isAnimatingToCase = !1), selectCase(e));
    }, 800));
}
function selectCase(e) {
  selectedCase = e;
  document.querySelectorAll('.menu-item').forEach(t => {
    parseInt(t.dataset.number) === e ? t.classList.add('selected') : t.classList.remove('selected');
  });
  (document.querySelectorAll('.progress-dot').forEach(t => {
    parseInt(t.dataset.case) === e ? t.classList.add('active') : t.classList.remove('active');
  }),
    displayPDF(e));
}
function displayPDF(e) {
  const t = document.getElementById('placeholder'),
    n = document.querySelectorAll('.pdf-content'),
    s = document.querySelectorAll('.document-info'),
    i = document.getElementById('documentTitle'),
    a = document.getElementById('pdfViewer');
  ((t.style.display = 'none'),
    currentActiveContent &&
      (currentActiveContent.classList.add('exiting'),
      setTimeout(() => {
        currentActiveContent.classList.remove('active', 'exiting');
      }, 300)));
  const o = document.createElement('div');
  ((o.className = 'skeleton-loader'),
    (o.innerHTML =
      '\n                <div class="skeleton-box skeleton-title"></div>\n                <div class="skeleton-box skeleton-text"></div>\n                <div class="skeleton-box skeleton-text"></div>\n                <div class="skeleton-box skeleton-button"></div>\n            '),
    a.appendChild(o),
    setTimeout(() => {
      (o.remove(),
        (i.style.opacity = '0'),
        setTimeout(() => {
          ((i.textContent = documentData[e].title), (i.style.opacity = '1'));
        }, 200),
        n.forEach(t => {
          parseInt(t.dataset.case) === e
            ? (t.classList.add('active'), (currentActiveContent = t))
            : t.classList.remove('active');
        }),
        s.forEach(t => {
          parseInt(t.dataset.case) === e ? t.classList.add('active') : t.classList.remove('active');
        }));
    }, 600));
}
function animate() {
  ((currentY += (targetY - currentY) * (isAnimatingToCase ? 0.08 : 0.15)),
    !isDragging &&
      !isAnimatingToCase &&
      Math.abs(velocity) > 0.1 &&
      ((targetY += velocity), (velocity *= 0.95)));
  const e = totalItems * itemHeight,
    t = document.getElementById('menuContainer');
  if (currentY >= 2 * e) {
    ((currentY -= e),
      (targetY -= e),
      t.classList.add('no-transition'),
      setTimeout(() => t.classList.remove('no-transition'), 10));
  } else if (currentY < e) {
    ((currentY += e),
      (targetY += e),
      t.classList.add('no-transition'),
      setTimeout(() => t.classList.remove('no-transition'), 10));
  }
  (updatePosition(),
    updateActiveItem(),
    updateCounter(),
    (animationId = requestAnimationFrame(animate)));
}
function updatePosition() {
  const e = document.getElementById('menuContainer'),
    t = -currentY + centerOffset;
  e.style.transform = `translateY(${t}px)`;
}
function updateActiveItem() {
  const e = document.querySelectorAll('.menu-item'),
    t = currentY;
  e.forEach(e => {
    const n = e.offsetTop + e.offsetHeight / 2,
      s = Math.abs(n - (t + 50));
    s < 55
      ? (e.classList.add('center'), e.classList.remove('side'))
      : s >= 55 && s < 165
        ? (e.classList.remove('center'), e.classList.add('side'))
        : e.classList.remove('center', 'side');
  });
}
function updateCounter() {
  const e = mod(Math.round(currentY / itemHeight), totalItems),
    t = documentData[e + 1].title;
  document.getElementById('currentNumber').textContent = t;
}
function snapToNearest() {
  const e = Math.round(targetY / itemHeight) * itemHeight;
  targetY = e;
}
document.getElementById('menuWrapper').addEventListener(
  'wheel',
  e => {
    (e.preventDefault(), isAnimatingToCase || ((targetY += 0.8 * e.deltaY), (velocity = 0)));
  },
  { passive: !1 }
);
const wrapper = document.getElementById('menuWrapper');
function downloadDocument(e) {
  const t = event.target.closest('.download-btn');
  (t.classList.add('downloading'),
    showNotification('📥 Téléchargement en cours...'),
    setTimeout(() => {
      const n = {
          1: { url: 'pdfs/JM_Diplome_BTS_CIEL.pdf', name: 'JM_Diplome_BTS_CIEL.pdf' },
          2: { url: 'pdfs/relevé_de_notes_bts.pdf', name: 'JM_ReleveNotes_BTS_CIEL.pdf' },
          3: { url: 'pdfs/JM_Bulletins_BTS_CIEL.pdf', name: 'JM_Bulletins_BTS_CIEL.pdf' },
          4: { url: 'pdfs/JM_Baccalaureat_general.pdf', name: 'JM_Baccalaureat_general.pdf' },
          5: { url: 'pdfs/CV.pdf', name: 'JM_Ancien_CV_BTS_CIEL.pdf' },
          6: {
            url: 'pdfs/JM_Lettres_Recommandation.pdf',
            name: 'JM_Lettres_Recommandation.pdf',
          },
          7: { url: 'pdfs/ccna1.pdf', name: 'JM_Certification_CCNA1.pdf' },
          8: {
            url: 'pdfs/NASA_Space_Apps_Challenge_cropped.pdf',
            name: 'JM_Hackathon_NASA_SpaceAppsChallenge.pdf',
          },
        }[e],
        s = document.createElement('a');
      ((s.href = n.url),
        (s.download = n.name),
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s),
        t.classList.remove('downloading'),
        showNotification('✅ Document téléchargé avec succès !'));
    }, 1500));
}
(wrapper.addEventListener('mousedown', e => {
  isAnimatingToCase || ((isDragging = !0), (lastY = e.clientY), (velocity = 0));
}),
  wrapper.addEventListener(
    'touchstart',
    e => {
      isAnimatingToCase || ((isDragging = !0), (lastY = e.touches[0].clientY), (velocity = 0));
    },
    { passive: !1 }
  ),
  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const t = lastY - e.clientY;
    ((targetY += t), (velocity = t), (lastY = e.clientY));
  }),
  document.addEventListener(
    'touchmove',
    e => {
      if (!isDragging) return;
      e.preventDefault();
      const t = lastY - e.touches[0].clientY;
      ((targetY += t), (velocity = t), (lastY = e.touches[0].clientY));
    },
    { passive: !1 }
  ),
  document.addEventListener('mouseup', () => {
    isDragging && ((isDragging = !1), setTimeout(snapToNearest, 300));
  }),
  document.addEventListener('touchend', () => {
    isDragging && ((isDragging = !1), setTimeout(snapToNearest, 300));
  }),
  document.addEventListener('keydown', e => {
    isAnimatingToCase ||
      ('ArrowUp' === e.key
        ? (e.preventDefault(), (targetY -= itemHeight), (velocity = 0))
        : 'ArrowDown' === e.key
          ? (e.preventDefault(), (targetY += itemHeight), (velocity = 0))
          : e.key >= '1' && e.key <= '5' && (e.preventDefault(), scrollToCase(parseInt(e.key))));
  }),
  initializeMenu());
const poemElement = document.getElementById('poem');
let isTyping = !1;
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
  { text: 'toi qui connus les apôtres,', pause: 1e3 },
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
  { text: "d'un pressentiment ", pause: 1e3 },
  { text: 'étrange', type: 'word', pause: 900 },
  { delete: 7, pause: 500 },
  { text: 'interdit', type: 'word', pause: 400 },
  { text: '..', pause: 1800 },
];
async function sleep(e) {
  return new Promise(t => setTimeout(t, e));
}
async function typeCharacter(e) {
  const t = poemElement.querySelector('.cursor'),
    n = document.createTextNode(e);
  (poemElement.insertBefore(n, t), await sleep(20 + 30 * Math.random()));
}
async function deleteCharacter() {
  const e = poemElement.querySelector('.cursor').previousSibling;
  if (e && e.nodeType === Node.TEXT_NODE) {
    const t = e.textContent;
    (t.length > 1 ? (e.textContent = t.slice(0, -1)) : e.remove(),
      await sleep(40 + 20 * Math.random()));
  }
}
async function startTyping() {
  if (!isTyping) {
    ((isTyping = !0), (poemElement.innerHTML = '<span class="cursor"></span>'), await sleep(5e3));
    for (const e of poemSteps) {
      if (e.delete) for (let t = 0; t < e.delete; t++) await deleteCharacter();
      else if (e.text) for (const t of e.text) await typeCharacter(t);
      e.pause && (await sleep(e.pause));
    }
    isTyping = !1;
  }
}
function initPoemTyping() {
  startTyping();
}
const observer2 = new MutationObserver(e => {
  e.forEach(e => {
    const t = document.getElementById('modal-poetry');
    if (t && 'none' !== t.style.display && !isTyping) {
      const e = document.getElementById('poem');
      e && '' === e.textContent.trim() && initPoemTyping();
    }
  });
});
(document.getElementById('modal-poetry') &&
  observer2.observe(document.getElementById('modal-poetry'), {
    attributes: !0,
    attributeFilter: ['style', 'class'],
  }),
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const t = document.getElementById('submitBtn'),
      n = document.getElementById('successMessage'),
      s = document.getElementById('errorMessage');
    (n.classList.remove('show'),
      s.classList.remove('show'),
      t.classList.add('sending'),
      (t.textContent = 'Envoi en cours...'),
      (t.disabled = !0));
    const i = {
      from_name:
        document.getElementById('prenom').value + ' ' + document.getElementById('nom').value,
      from_email: document.getElementById('email').value,
      subject: document.getElementById('sujet').value,
      message: document.getElementById('message').value,
      to_email: 'j.messadek@proton.me',
    };
    emailjs
      .send('service_0ggoprx', 'template_xchk4xk', i)
      .then(
        function (e) {
          (console.log('SUCCESS!', e.status, e.text),
            n.classList.add('show'),
            document.getElementById('contactForm').reset(),
            setTimeout(() => {
              n.classList.remove('show');
            }, 5e3));
        },
        function (e) {
          (console.error('FAILED...', e),
            s.classList.add('show'),
            setTimeout(() => {
              s.classList.remove('show');
            }, 5e3));
        }
      )
      .finally(function () {
        (t.classList.remove('sending'), (t.textContent = 'Envoyer'), (t.disabled = !1));
      });
  }));
const sparklingContainers = document.querySelectorAll('.sparkling-container'),
  sparklingText = document.querySelector('.sparkling-text'),
  formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
function createSparkle(e, t, n, s = !1) {
  const i = document.createElement('div');
  (i.classList.add('sparkle'),
    s && i.classList.add('in-container'),
    (i.style.left = t + 'px'),
    (i.style.top = n + 'px'),
    i.style.setProperty('--x', 40 * Math.random() - 20 + 'px'),
    i.style.setProperty('--y', -50 * Math.random() - 20 + 'px'),
    e.appendChild(i),
    setTimeout(() => i.remove(), 2e3));
}
(sparklingContainers.forEach(e => {
  e.addEventListener('mousemove', t => {
    if (Math.random() > 0.7) {
      const n = e.getBoundingClientRect();
      createSparkle(e, t.clientX - n.left, t.clientY - n.top, !1);
    }
  });
}),
  sparklingText &&
    sparklingText.addEventListener('mousemove', e => {
      if ((e.stopPropagation(), Math.random() > 0.7)) {
        const t = sparklingText.getBoundingClientRect();
        createSparkle(sparklingText, e.clientX - t.left, e.clientY - t.top, !0);
      }
    }),
  formInputs.forEach(e => {
    e.addEventListener('mousemove', t => {
      if ((t.stopPropagation(), Math.random() > 0.7)) {
        const n = e.closest('.sparkling-container');
        if (n) {
          const e = n.getBoundingClientRect();
          createSparkle(n, t.clientX - e.left, t.clientY - e.top, !0);
        }
      }
    });
  }));
