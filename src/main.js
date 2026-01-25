// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

(() => {
  // Get elements
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const tabletMenuButton = document.querySelector('.tablet-menu-button');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  // Check if elements exist
  if (!mobileMenuOverlay) {
    console.warn('Mobile menu overlay not found');
    return;
  }

  // Toggle menu function
  const toggleMenu = () => {
    mobileMenuOverlay.classList.toggle('is-open');
    document.body.style.overflow = mobileMenuOverlay.classList.contains(
      'is-open'
    )
      ? 'hidden'
      : '';
  };

  // Open menu - Mobile button
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMenu);
  }

  // Open menu - Tablet button
  if (tabletMenuButton) {
    tabletMenuButton.addEventListener('click', toggleMenu);
  }

  // Close menu - Close button
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', toggleMenu);
  }

  // Close menu - Click on overlay (outside menu)
  mobileMenuOverlay.addEventListener('click', e => {
    if (e.target === mobileMenuOverlay) {
      toggleMenu();
    }
  });

  // Close menu - Click on navigation links
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Close menu - ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  // Close menu on window resize (if desktop)
  window.addEventListener('resize', () => {
    if (
      window.innerWidth >= 1280 &&
      mobileMenuOverlay.classList.contains('is-open')
    ) {
      toggleMenu();
    }
  });
})();
