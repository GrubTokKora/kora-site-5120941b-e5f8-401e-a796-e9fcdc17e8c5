/* Skin Journey by Vanessa — site behaviour. No dependencies.
   Header state, mobile menu, tabs, today's hours, scroll reveal, studio clips, 404 anchors. */
(function () {
  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: solid once the page scrolls */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile menu */
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      doc.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
  }

  /* Treatment menu tabs (WAI-ARIA tabs pattern) */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var n = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? i + 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
        if (n === null) return;
        e.preventDefault();
        select(tabs[(n + tabs.length) % tabs.length], true);
      });
    });
  });

  /* Today's hours + open/closed status (America/New_York), from the Google Business Profile hours */
  var HOURS = { 0: ['15:00', '18:00'], 1: ['11:00', '19:00'], 2: ['11:30', '19:00'], 3: ['11:00', '19:00'],
                4: ['11:00', '19:00'], 5: ['16:00', '19:00'], 6: ['11:00', '17:00'] };
  (function () {
    var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
    var day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
    var toMin = function (t) { var p = t.split(':'); return +p[0] * 60 + +p[1]; };
    var fmt = function (t) { var p = t.split(':'), h = +p[0]; return (h % 12 || 12) + (p[1] !== '00' ? ':' + p[1] : '') + (h < 12 ? ' am' : ' pm'); };
    document.querySelectorAll('[data-day]').forEach(function (r) {
      if (Number(r.getAttribute('data-day')) === day) r.classList.add('is-today');
    });
    var t = HOURS[day], open = mins >= toMin(t[0]) && mins < toMin(t[1]);
    var text = open ? 'Open now · until ' + fmt(t[1])
      : mins < toMin(t[0]) ? 'Opens today at ' + fmt(t[0])
      : 'Closed now · opens tomorrow at ' + fmt(HOURS[(day + 1) % 7][0]);
    document.querySelectorAll('[data-open-status]').forEach(function (s) {
      s.textContent = text;
      s.classList.toggle('is-open', open);
    });
  })();

  /* Scroll reveal */
  var reveals = document.querySelectorAll('[data-reveal]');
  if (!reduce && 'IntersectionObserver' in window) {
    doc.classList.add('can-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Real treatment clips: play only while visible; poster only with reduced motion */
  var vids = document.querySelectorAll('video[data-autoplay]');
  if (!reduce && 'IntersectionObserver' in window) {
    var vo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); }
      });
    }, { threshold: 0.35 });
    vids.forEach(function (v) { vo.observe(v); });
  }

  /* Shell anchors (#treatments, #about…) live in the shared header/footer; off the homepage, point them home. */
  if (document.body.getAttribute('data-page') !== 'home') {
    document.querySelectorAll('[data-header] a[href^="#"], #mobile-menu a[href^="#"], footer a[href^="#"], .bookbar a[href^="#"]').forEach(function (el) {
      el.setAttribute('href', '/' + el.getAttribute('href'));
    });
  }

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
