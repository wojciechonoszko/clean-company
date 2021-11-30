(() => {
    const refs = {
      openMobileBtn: document.querySelector('[mobile-open]'),
      closeMobileBtn: document.querySelector('[mobile-close]'),
      mobile: document.querySelector('[data-mobile-menu]'),
    };
  
    refs.openMobileBtn.addEventListener('click', toggleMobile);
    refs.closeMobileBtn.addEventListener('click', toggleMobile);
  
    function toggleMobile() {
      refs.mobile.classList.toggle('is-hidden-mobile');
    }
  })();