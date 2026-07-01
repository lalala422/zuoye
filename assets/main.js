(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const lastUpdated = document.querySelector('#last-updated');
  async function loadLastUpdatedDate() {
    if (!lastUpdated) return;
    try {
      const apiUrl =
        'https://api.github.com/repos/lalala422/zuoye/commits' +
        '?sha=main&per_page=1&cache_bust=' + Date.now();

      const response = await fetch(apiUrl, {
        cache: 'no-store',
        headers: { Accept: 'application/vnd.github+json' }
      });

      if (!response.ok) throw new Error('GitHub API request failed');

      const commits = await response.json();
      const dateText =
        commits?.[0]?.commit?.committer?.date ||
        commits?.[0]?.commit?.author?.date;

      if (!dateText) throw new Error('No commit date found');

      const date = new Date(dateText);
      lastUpdated.textContent = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(date);
    } catch (error) {
      lastUpdated.textContent = 'Recently';
      console.warn('Could not load last updated date:', error);
    }
  }

  loadLastUpdatedDate();
})();
