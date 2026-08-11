// Fabrx Add And Remove JavaScript
toggleItem(document.querySelectorAll('.fabrx-like'));
function toggleItem(fabrxLike) {
  for (var i = 0; i < fabrxLike.length; i++) {
    fabrxLike[i].addEventListener('click', function(e) {
      var current = this;
      for (var i = 0; i < fabrxLike.length; i++) {
        if (current != fabrxLike[i]) {
          fabrxLike[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
      e.preventDefault();
    });
  };
};

// Fabrx Masonry JavaScript
document.querySelectorAll('.fabrx-masonry').forEach(FabrxMasonry => {
  var FabrxISO = new Isotope(FabrxMasonry, {
    itemSelector: '.masonry-item',
    layoutMode: 'packery',
    percentPosition: true,
    isFitWidth: true,
  });
});

// Fabrx Swiper Brand Slider JavaScript
var swiper = new Swiper('.brand-slider', {
  slidesPerView: 6,
  spaceBetween: 6,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    460: {
      slidesPerView: 4,
    },
    575: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  }
});

// Fabrx Single Swiper Slider JavaScript
var swiper = new Swiper('.single-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Fabrx Number Swiper Slider JavaScript
var swiper = new Swiper('.number-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Fabrx Swiper Threecol Slider JavaScript
var swiper = new Swiper('.swiper-threecol', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Fabrx Swiper Twohalf Slider JavaScript
var swiper = new Swiper('.swiper-twohalf', {
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
  }
});

// Fabrx Swiper Two Slider JavaScript
var swiper = new Swiper('.swiper-two', {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-slider-box .swiper-pagination',
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  }
});

// Fabrx Swiper Thumbs Slider JavaScript
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

//Fabrx Datepicker JavaScript
flatpickr('.fabrx-datepicker', {
  locale: {
    weekdays: {
      shorthand: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      longhand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
  },
});
  
//Fabrx Date Rangepicker JavaScript
flatpickr('.fabrx-date-rangepicker', {
  mode: 'range',
  locale: {
    weekdays: {
      shorthand: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      longhand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
  },
});

//Fabrx Multidate Rangepicker JavaScript
flatpickr('.fabrx-multidate-rangepicker', {
  mode: 'range',
  showMonths: 2,
  locale: {
    weekdays: {
      shorthand: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      longhand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
  },
});

//Fabrx Range Slider JavaScript
document.querySelectorAll('input[type="range"]').forEach(FabrxRange => {
  var slider = new Slider(FabrxRange, {
    formatter: function(value) {
      return 'Current value: ' + value;
    }
  });
});

// Fabrx Toggle JavaScript
document.querySelectorAll('.aside-toggle').forEach(fabrxToggle => {
  fabrxToggle.addEventListener('click', ({target}) => {
    target.closest('body').classList.toggle('manage-page');
    target.closest('.fabrx-sidebar').classList.toggle('aside-open');
  });
});

document.querySelectorAll('.search-icon').forEach(fabrxToggle => {
  fabrxToggle.addEventListener('click', ({target}) => {
    target.closest('body').classList.toggle('search-open');
  });
});

//Fabrx Header Toggle Class JavaScript
document.querySelectorAll('.header-aside-toggle').forEach(fabrxToggle => {
  fabrxToggle.addEventListener('click', ({target}) => {
    target.closest('body').classList.toggle('has-sidebar-body');
    target.closest('.fabrx-documentation').classList.toggle('aside-main-open');
  });
});



//Fabrx Smooth Scroll JavaScript
var scroll = new SmoothScroll('.menu-scroll li a', {
  speed: 100,
  offset: 120,
});

//Fabrx Sticky JavaScript
var sticky = new Sticky('.fabrx-sticky', {
  stickyClass: 'sticky',
  wrap: true,
});

//Fabrx Attract Data Value And Apply Inline CSS JavaScript
var dataSize = document.querySelectorAll('[data-size]');
dataSize.forEach(sizeValue => {
  sizeValue.style.width = sizeValue.getAttribute('data-size') + 'px';
  sizeValue.style.height = sizeValue.getAttribute('data-size') + 'px';
});

//Fabrx custom JavaScript
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Fabrx Utils Javascript
var docReady = function docReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};

var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[data]);
  } catch (e) {
    return el.dataset[data];
  }
};

var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};

var addClass = function addClass(el, className) {
  el.classList.add(className);
};

var utils = {
  docReady: docReady,
  resize: resize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
};

var copyLink = function copyLink() {
  var copyLinkModal = document.getElementById('copyLinkModal');
  copyLinkModal && copyLinkModal.addEventListener('shown.bs.modal', function () {
    var invitationLink = document.querySelector('.invitation-link');
    invitationLink.select();
  });
};

//Fabrx Dropzone Javascript
window.Dropzone ? window.Dropzone.autoDiscover = false : '';
var dropzoneInit = function dropzoneInit() {
  var merge = window._.merge;
  var Selector = {
    DROPZONE: '[data-dropzone]',
    DZ_ERROR_MESSAGE: '.dz-error-message',
    DZ_PREVIEW: '.dz-preview',
    DZ_PROGRESS: '.dz-preview .dz-preview-cover .dz-progress',
    DZ_PREVIEW_COVER: '.dz-preview .dz-preview-cover'
  };
  var ClassName = {
    DZ_FILE_PROCESSING: 'dz-file-processing',
    DZ_FILE_COMPLETE: 'dz-file-complete',
    DZ_COMPLETE: 'dz-complete',
    DZ_PROCESSING: 'dz-processing'
  };
  var DATA_KEY = {
    OPTIONS: 'options'
  };
  var Events = {
    ADDED_FILE: 'addedfile',
    COMPLETE: 'complete'
  };
  var dropzones = document.querySelectorAll(Selector.DROPZONE);
  !!dropzones.length && dropzones.forEach(function (item) {
    // const element = item;
    // const $this = $(element);
    var userOptions = utils.getData(item, DATA_KEY.OPTIONS);
    userOptions = userOptions || {};
    var data = userOptions.data ? userOptions.data : {};
    var options = merge({
      addRemoveLinks: false,
      previewsContainer: item.querySelector(Selector.DZ_PREVIEW),
      previewTemplate: item.querySelector(Selector.DZ_PREVIEW).innerHTML,
      thumbnailWidth: null,
      thumbnailHeight: null,
      maxFilesize: 20,
      filesizeBase: 1000,
      init: function init() {
        var thisDropzone = this;

        if (data.length) {
          data.forEach(function (v) {
            var mockFile = {
              name: v.name,
              size: v.size
            };
            thisDropzone.options.addedfile.call(thisDropzone, mockFile);
            thisDropzone.options.thumbnail.call(thisDropzone, mockFile, "".concat(v.url, "/").concat(v.name));
          });
        }

        thisDropzone.on(Events.ADDED_FILE, function addedfile() {
          console.log(item.querySelectorAll(Selector.DZ_PREVIEW_COVER));

          if ('maxFiles' in userOptions) {
            if (userOptions.maxFiles === 1 && item.querySelectorAll(Selector.DZ_PREVIEW_COVER).length > 1) {
              item.querySelector(Selector.DZ_PREVIEW_COVER).remove();
            }

            if (userOptions.maxFiles === 1 && this.files.length > 1) {
              this.removeFile(this.files[0]);
            }
          }
        });
      }
    }, userOptions); // eslint-disable-next-line

    item.querySelector(Selector.DZ_PREVIEW).innerHTML = "";
    var dropzone = new window.Dropzone(item, options);
    dropzone.on(Events.ADDED_FILE, function () {
      if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
        item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_FILE_COMPLETE);
      }

      item.classList.add(ClassName.DZ_FILE_PROCESSING);
    });
    dropzone.on(Events.COMPLETE, function () {
      if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
        item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_PROCESSING);
      }

      item.classList.add(ClassName.DZ_FILE_COMPLETE);
    });
  });
};

//Fabrx Popover Javascript
var popoverInit = function popoverInit() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new window.bootstrap.Popover(popoverTriggerEl, {
      trigger: 'focus'
    });
  });
};

//Fabrx Progress Circle Javascript
var progressBar = function progressBar() {
  var merge = window._.merge; 

  var progresCircle = document.querySelectorAll('.progress-circle');

  if (progresCircle.length) {
    progresCircle.forEach(function (item) {
      var userOptions = utils.getData(item, 'options');
      var defaultOptions = {
        strokeWidth: 2,
        trailWidth: 2,
        trailColor: utils.grays['100'],
        easing: 'easeInOut',
        duration: 3000,
        svgStyle: {
          'stroke-linecap': 'round',
          display: 'block',
          width: '100%'
        },
        text: {
          autoStyleContainer: false
        },
        // Set default step function for all animate calls
        step: function step(state, circle) {
          var percentage = Math.round(circle.value() * 100);
          circle.setText("<span class='value'>".concat(percentage, "<b>%</b></span> <span>").concat(userOptions.text || '', "</span>"));
        }
      };
      var options = merge(defaultOptions, userOptions);
      var bar = new ProgressBar.Circle(item, options);
      var linearGradient = "<defs>\n        <linearGradient id=\"gradient\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0%\" stop-color='#1970e2' />\n          <stop offset=\"100%\" stop-color='#4695ff' />\n        </linearGradient>\n      </defs>";
      bar.svg.insertAdjacentHTML('beforeEnd', linearGradient);
      var playProgressTriggered = false;

      var progressCircleAnimation = function progressCircleAnimation() {
        if (!playProgressTriggered) {
          if (utils.isScrolledIntoView(item).partial) {
            bar.animate(options.progress / 100);
            playProgressTriggered = true;
          }
        }

        return playProgressTriggered;
      };

      progressCircleAnimation();
      window.addEventListener('scroll', function () {
        progressCircleAnimation();
      });
    });
  }
};

//Fabrx Tooltip Javascript
var tooltipInit = function tooltipInit() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new window.bootstrap.Tooltip(tooltipTriggerEl);
  });
};

docReady(progressBar);
docReady(tooltipInit);
docReady(popoverInit);
docReady(dropzoneInit);
docReady(copyLink);

//Fabrx Get Selected Radio Button ID By Name Javascript
var getSelectedRadio = function getSelectedRadio(radioName) {
  var ele = document.getElementsByName(radioName); 
  var value = '';
  for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked) {
      value = ele[i].id;
      break;
    }
  } 
  return value;
}

//Fabrx Custom JavaScript
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Fabrx Resize JavaScript
var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};

//Fabrx Getdata JavaScript
var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[data]);
  } catch (e) {
    return el.dataset[data];
  }
};

var isScrolledIntoView = function isScrolledIntoView(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return {
    all: top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth,
    partial: top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset
  };
};

//Fabrx On Window Load Customizer JavaScript
var getSelectedRadioValue = function getSelectedRadioValue(radioName) {
  var ele = document.getElementsByName(radioName); 
  var value = '';
  for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked) {
      value = ele[i].value;
      break;
    }
  } 
  return value;
}

window.onload = function() {
  document.querySelector('body').style.opacity = '1';
  var skinStorage = localStorage.getItem('selectedSkin');
  if(skinStorage != '' && skinStorage != null) {
    document.getElementById(skinStorage).checked = true;
  }
  var skinValue = getSelectedRadioValue('FabrxSkins');
  localStorage.setItem('skins', skinValue);
  var rtlMode = document.getElementById('RTLMode');
  if(rtlMode.checked) {
    localStorage.setItem('rtlModeValue', rtlMode.value);
    initRTLMode();
  }
  else {
    localStorage.removeItem('rtlModeValue');
    var customizerBody = document.querySelector('body').classList.remove(localStorage.getItem('rtlModeValue'));
  }
  customizerBody = document.querySelector('body').classList.add(localStorage.getItem('skins'), localStorage.getItem('rtlModeValue'));
}

//Fabrx Onhover Get Inline CSS JavaScript
var fabrxNavItem = document.querySelectorAll('.menu-category li').forEach((fabrxNavItem) => {
  fabrxNavItem.addEventListener('mouseover', (e) => {
    var fabrxPosition = fabrxNavItem.getBoundingClientRect();
    fabrxNavItem.style.top = fabrxPosition.top + 'px';
  });
});

//Fabrx Dropdown Stop Propagation JavaScript
document.querySelectorAll('.dropdown-menu, .dropdown-toggle').forEach(dropdownMenu => {
  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

//Fabrx Toggle Class JavaScript
document.querySelectorAll('.back-arrow').forEach(fabrxSidebarSwitcher => {
  fabrxSidebarSwitcher.addEventListener('click', (e) => {
    if (document.body.className.match('sidebar-compact')) {
      document.querySelector('body').classList.toggle('sidebar-compact');
      document.querySelector('body').classList.add('previous-compact');
    }
    else if (document.body.className.match('previous-compact')) {
      document.querySelector('body').classList.toggle('sidebar-compact');
    }
    else {
      document.querySelector('body').classList.toggle('sidebar-icons');
    }
  });
});
document.querySelectorAll('.fabrx-hamburger').forEach(fabrxHamburger => {
  fabrxHamburger.addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('sidebar-menu');
  });
});
document.querySelectorAll('body').forEach(fabrxHamburger => {
  fabrxHamburger.addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('customize-box');
  });
});
document.querySelectorAll('.customize-btn, .customize-close').forEach(fabrxCustomizerToggle => {
  fabrxCustomizerToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('body').classList.toggle('customize-box');
  });
});
document.querySelectorAll('.fabrx-search').forEach(fabrxSearch => {
  fabrxSearch.addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('search-open');
  });
});
document.querySelectorAll('.customize-sidebar').forEach(fabrxSearch => {
  fabrxSearch.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

//Fabrx Set Item Value By Local Storage JavaScript
document.querySelectorAll('[name="FabrxSkins"]').forEach(skins => {
  skins.addEventListener('change', (e) => {
    localStorage.setItem('skins', skins.value);
  });
});

//Fabrx RTL Selected, And Dselect JavaScript
if (localStorage.getItem('rtlModeCheck') == 'true') {
  initRTLMode();
}
else if (localStorage.getItem('rtlModeCheck') == 'false') {
  var rtlMode = document.getElementById('RTLMode').removeAttribute('checked');
  var customizerBody = document.querySelector('body').classList.remove(localStorage.getItem('rtlModeValue'));
}
function initRTLMode() {
  document.getElementById('RTLMode').checked = true;
  var customizerHtml = document.querySelector('html').setAttribute('dir','rtl');
  var customizerBody = document.querySelector('body').classList.add(localStorage.getItem('rtlModeValue'));
  var rtlCss = document.createElement('link');
  rtlCss.href = '../assets/css/bootstrap.rtl.min.css';
  rtlCss.rel = 'stylesheet';
  rtlCss.type = 'text/css';
  rtlCss.media = 'all';
  document.getElementsByTagName('head')[0].prepend(rtlCss);
}
if (localStorage.getItem('DarkModeCheck') == 'true') {
  var darkImage = document.getElementsByTagName('img');
  for (var i=0; i<darkImage.length; i++) {
    if(darkImage[i].getAttribute('data-src')) {
      darkImage[i].setAttribute('src',darkImage[i].getAttribute('data-src'));
    }
  };
}

//Fabrx Reload Page And Set item By LocalStorage JavaScript
document.querySelector('#CustomizerPreview').addEventListener('click', event => {
  var skin = getSelectedRadio('FabrxSkins');
  localStorage.setItem('selectedSkin', skin);
  var skinValue = getSelectedRadioValue('FabrxSkins');
  localStorage.setItem('skins', skinValue);
  var rtlMode = document.getElementById('RTLMode');
  localStorage.setItem('rtlModeCheck', rtlMode.checked);
  var darkMode = document.getElementById('DarkMode');
  localStorage.setItem('DarkModeCheck', darkMode.checked);
  if(rtlMode.checked) {
    localStorage.setItem('rtlModeValue', rtlMode.value);
  }
  else {
    localStorage.removeItem('rtlModeValue');
    var customizerBody = document.querySelector('body').classList.remove(localStorage.getItem('rtlModeValue'));
  }
  window.location.reload();
});

//Fabrx Remove Local Storage And Reload Page JavaScript
document.querySelector('#ResetCustomizer').addEventListener('click', event => {
  localStorage.removeItem('skins');
  localStorage.removeItem('DarkModeCheck');
  localStorage.removeItem('rtlModeCheck');
  localStorage.removeItem('rtlModeValue');
  localStorage.removeItem('headerStyle');
  localStorage.removeItem('selectedSkin');
  window.location.reload();
});
customizerBody = document.querySelector('body').classList.add(localStorage.getItem('skins'), localStorage.getItem('rtlModeValue'));