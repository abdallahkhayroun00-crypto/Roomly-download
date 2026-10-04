(() => {
  'use strict';
  const languages = ['en', 'fr', 'tr', 'de', 'ar'];
  const selector = document.getElementById('language');
  const dialog = document.getElementById('screen-dialog');
  const apkLink = document.getElementById('apk-link');
  const apkLabel = document.getElementById('apk-label');
  const status = document.getElementById('release-status');
  const params = new URLSearchParams(location.search);
  let language = languages.includes(params.get('lang')) ? params.get('lang') : 'en';
  let locales = null;
  let release = null;
  let releaseState = 'privateStatus';
  let activeScreen = null;
  const fallback = {
    request: 'Ask the organizer for the APK', downloadReady: 'Download Android APK',
    privateStatus: 'The beta APK is shared directly with invited testers. A public APK has not been published here yet.',
    available: 'An Android APK is available from the official release.',
    releaseError: 'Public download availability could not be checked. Invited testers can still ask the organizer for the APK.',
    zoom: 'View full screenshot'
  };
  function copy(key) { return locales?.[language]?.[key] || fallback[key] || key; }
  function render() {
    const effective = locales ? language : 'en';
    document.documentElement.lang = effective;
    document.documentElement.dir = effective === 'ar' ? 'rtl' : 'ltr';
    selector.value = effective;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = locales?.[effective]?.[node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll('[data-screen]').forEach(link => {
      const title = locales?.[effective]?.[link.dataset.screen] || link.dataset.screen;
      link.setAttribute('aria-label', `${copy('zoom')}: ${title}`);
      link.querySelector('img').alt = `Roomly — ${title}`;
    });
    document.querySelectorAll('.share-link').forEach(link => {
      link.href = `./share.html?lang=${effective}`;
    });
    apkLabel.textContent = copy(release ? 'downloadReady' : 'request');
    status.textContent = copy(releaseState);
    if (activeScreen) document.getElementById('dialog-title').textContent = copy(activeScreen);
  }
  selector.addEventListener('change', () => {
    if (!languages.includes(selector.value) || !locales) return;
    language = selector.value;
    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
    render();
  });
  document.querySelectorAll('[data-screen]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      activeScreen = link.dataset.screen;
      document.getElementById('dialog-title').textContent = copy(activeScreen);
      const img = document.getElementById('dialog-image');
      img.src = link.href;
      img.alt = link.querySelector('img').alt;
      dialog.setAttribute('aria-labelledby', 'dialog-title');
      dialog.showModal();
    });
  });
  dialog.addEventListener('close', () => { activeScreen = null; });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  async function getJson(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(url, {signal: controller.signal, headers: {'Accept': 'application/json'}});
      if (!response.ok) throw new Error('Request failed');
      return await response.json();
    } finally { clearTimeout(timeout); }
  }
  render();
  getJson('./locales.json').then(data => {
    if (!languages.every(lang => data[lang] && typeof data[lang].hero1 === 'string')) throw new Error('Invalid translations');
    locales = data;
    render();
  }).catch(() => { selector.disabled = true; });
  getJson('https://api.github.com/repos/abdallahkhayroun00-crypto/Roomly-download/releases?per_page=30').then(releases => {
    if (!Array.isArray(releases)) throw new Error('Unexpected releases');
    for (const item of releases) {
      if (item.draft || !Array.isArray(item.assets)) continue;
      const asset = item.assets.find(asset => /\.apk$/i.test(asset.name || '') && typeof asset.browser_download_url === 'string' && /^https:\/\/github\.com\/abdallahkhayroun00-crypto\/Roomly-download\/releases\/download\//.test(asset.browser_download_url));
      if (asset) { release = asset; break; }
    }
    if (release) {
      apkLink.href = release.browser_download_url;
      releaseState = 'available';
    }
    render();
  }).catch(() => { releaseState = 'releaseError'; render(); });
})();
