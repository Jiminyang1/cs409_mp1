/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/experience/fixed_background.png */ "./assets/experience/fixed_background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-header {
  position: relative;
  z-index: 1000;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 1rem 0;
}
.navbar.scrolled {
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.98);
}
.navbar.scrolled .nav-brand h1 {
  font-size: 1.5rem;
}
.navbar.scrolled .nav-link {
  font-size: 0.9rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  color: #2c3e50;
  font-size: 2rem;
  font-weight: bold;
  transition: font-size 0.3s ease;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
  }
  .nav-menu.active {
    right: 0;
  }
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.nav-link:hover, .nav-link.active {
  color: #3498db;
  background: rgba(52, 152, 219, 0.1);
}
.nav-link.active {
  font-weight: 600;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
}
.hamburger .bar {
  width: 25px;
  height: 3px;
  background: #2c3e50;
  margin: 3px 0;
  transition: all 0.3s ease;
}
.hamburger.active .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
.hamburger.active .bar:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.main-content {
  margin-top: 0;
}

.section {
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.section h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
}
.section h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #3498db;
  border-radius: 2px;
}

.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.hero-section:first-child {
  margin-top: -100px;
  padding-top: 100px;
}

.hero-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  z-index: 1;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
@media (max-width: 768px) {
  .hero-video-bg {
    -o-object-position: center center;
       object-position: center center;
  }
}
@media (max-width: 768px) and (max-width: 480px) {
  .hero-video-bg {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-video-bg {
    animation: none;
  }
}

.hero-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
@media (max-width: 480px) {
  .hero-overlay {
    background: linear-gradient(135deg, #2c3e50, #3498db);
  }
}

.hero-content {
  color: #ffffff;
  z-index: 3;
  animation: fadeInUp 1.2s ease-out;
  margin-top: 8rem;
}
@media (max-width: 768px) {
  .hero-content {
    padding: 0 2rem;
    margin-top: 4rem;
  }
}
@media (min-width: 1920px) {
  .hero-content {
    margin-top: 12rem;
  }
}
@media (min-width: 1366px) and (max-width: 1919px) {
  .hero-content {
    margin-top: 10rem;
  }
}
@media (min-width: 1024px) and (max-width: 1365px) {
  .hero-content {
    margin-top: 6rem;
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}
@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}
@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .hero-subtitle {
    font-size: 1.5rem;
  }
}

.hero-description {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  max-width: 600px;
}
@media (max-width: 768px) {
  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
}

.hero-cta {
  margin-bottom: 4rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
.cta-button i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}
.cta-button:hover i {
  transform: translateY(3px);
}

.about-section {
  background: #ffffff;
  position: relative;
}
.about-section.fade-in {
  animation: fadeInUp 0.8s ease-out;
}
.about-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
  z-index: 1;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.about-text p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.education-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #ecf0f1;
}
.education-section h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.education-item {
  margin-bottom: 1.5rem;
}
.education-item:last-child {
  margin-bottom: 0;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.education-header strong {
  color: #2c3e50;
  font-size: 1.1rem;
}
.education-header .location {
  color: #2c3e50;
  font-size: 0.95rem;
  opacity: 0.8;
}
@media (max-width: 768px) {
  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
}

.education-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.education-details .degree {
  color: #3498db;
  font-size: 0.95rem;
  font-weight: 500;
}
.education-details .date {
  color: #2c3e50;
  font-size: 0.9rem;
  opacity: 0.8;
}
@media (max-width: 768px) {
  .education-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
}

.about-image {
  text-align: center;
}
.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}
.about-image img:hover {
  transform: scale(1.05);
}

.experience-section {
  position: relative;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
.experience-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 80, 0.85);
  z-index: 1;
}

.experience-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
}
.experience-overlay h2 {
  color: #ffffff;
}
.experience-overlay h2::after {
  background: #ffffff;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.3);
}
@media (max-width: 768px) {
  .timeline-line {
    left: 20px;
  }
}

.timeline-item {
  position: relative;
  margin: 2rem 0;
  padding-left: 80px;
}
@media (max-width: 768px) {
  .timeline-item {
    padding-left: 60px;
  }
}

.timeline-marker {
  position: absolute;
  left: 22px;
  top: 2rem;
  width: 16px;
  height: 16px;
  background: #3498db;
  border: 3px solid #ffffff;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .timeline-marker {
    left: 12px;
  }
}

.experience-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.experience-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}

.company-logo {
  width: 50px;
  height: 50px;
  -o-object-fit: contain;
     object-fit: contain;
  border-radius: 10px;
  background: #ffffff;
  padding: 0.5rem;
  flex-shrink: 0;
}

.experience-info {
  flex: 1;
}
.experience-info h3 {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.experience-info h4 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.experience-info .duration {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.experience-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 0.95rem;
}

.projects-section {
  background: #ffffff;
}

.carousel-container {
  position: relative;
  max-width: 1000px;
  margin: 3rem auto 0;
  padding: 0 60px;
}
@media (max-width: 768px) {
  .carousel-container {
    padding: 0 40px;
  }
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-track {
  display: flex;
  width: 300%;
  height: 100%;
  transition: transform 0.4s ease;
}

.carousel-slide {
  width: 33.333%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 95%;
  height: 450px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-content {
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.project-content p {
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  flex: 1;
}

.project-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
}
.project-header h3 {
  color: #2c3e50;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}
@media (max-width: 768px) {
  .project-header h3 {
    font-size: 1.4rem;
  }
}

.project-logo {
  width: 70px;
  height: 70px;
  -o-object-fit: contain;
     object-fit: contain;
  margin-bottom: 1.2rem;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.6rem;
  transition: all 0.3s ease;
}
.project-card:hover .project-logo {
  transform: scale(1.1);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

.tag {
  background: #4aa3df;
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  z-index: 10;
}
.carousel-nav:hover {
  background: #3498db;
  transform: translateY(-50%) scale(1.1);
}
.carousel-nav i {
  font-size: 1rem;
  color: #2c3e50;
  transition: color 0.2s ease;
}
.carousel-nav:hover i {
  color: #ffffff;
}

.carousel-prev {
  left: 15px;
}

.carousel-next {
  right: 15px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1.5rem;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(52, 152, 219, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}
.indicator.active {
  background: #3498db;
}
.indicator:hover {
  background: #3498db;
}

.skills-section {
  background: #ecf0f1;
}

.skills-grid {
  -moz-columns: 3;
       columns: 3;
  -moz-column-gap: 3rem;
       column-gap: 3rem;
  margin-top: 3rem;
}
@media (max-width: 1024px) {
  .skills-grid {
    -moz-columns: 2;
         columns: 2;
    -moz-column-gap: 2rem;
         column-gap: 2rem;
  }
}
@media (max-width: 768px) {
  .skills-grid {
    -moz-columns: 1;
         columns: 1;
    -moz-column-gap: 0;
         column-gap: 0;
  }
}

.skill-category {
  background: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  -moz-column-break-inside: avoid;
       break-inside: avoid;
  height: 280px;
  display: flex;
  flex-direction: column;
}
.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
.category-header i {
  font-size: 1.5rem;
  color: #3498db;
  margin-right: 0.8rem;
  background: #f7fbfe;
  padding: 0.6rem;
  border-radius: 10px;
}
.category-header h3 {
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex: 1;
  align-content: flex-start;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  background: #4aa3df;
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.skill-tag i {
  margin-right: 0.4rem;
  font-size: 0.9rem;
}
.skill-tag:hover {
  background: #3498db;
  transform: scale(1.05);
}

.contact-section {
  background: #2c3e50;
  color: #ffffff;
}
.contact-section h2 {
  color: #ffffff;
}
.contact-section h2::after {
  background: #ffffff;
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  transition: background 0.3s ease;
}
.contact-item:hover {
  background: rgba(255, 255, 255, 0.2);
}
.contact-item i {
  font-size: 1.5rem;
  color: #3498db;
}
.contact-item span {
  font-size: 1.1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.social-link {
  display: inline-block;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}
.social-link:hover {
  background: #3498db;
  transform: translateY(-3px);
}
.social-link i {
  font-size: 1.5rem;
}

.courses-btn {
  background: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  margin-top: 0.8rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.courses-btn i {
  font-size: 0.8rem;
}
.courses-btn:hover {
  background: #217dbb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}
.courses-btn:active {
  transform: translateY(0);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.modal.active {
  opacity: 1;
  visibility: visible;
}
.modal.active .modal-content {
  transform: scale(1);
  opacity: 1;
}

.modal-content {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.3s ease;
}
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 85vh;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem 1.5rem;
  border-bottom: 2px solid #ecf0f1;
}
.modal-header h3 {
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}
@media (max-width: 768px) {
  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }
  .modal-header h3 {
    font-size: 1.5rem;
  }
}

.modal-close {
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}
.modal-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #e74c3c;
  transform: scale(1.1);
}

.modal-body {
  padding: 2rem 2.5rem 2.5rem;
  overflow-y: auto;
  max-height: calc(80vh - 100px);
}
@media (max-width: 768px) {
  .modal-body {
    padding: 1.5rem;
    max-height: calc(85vh - 80px);
  }
}

.courses-grid {
  display: grid;
  gap: 1.5rem;
}

.course-category {
  background: #ecf0f1;
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}
.course-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
.course-category h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.course-category h4 i {
  color: #3498db;
  font-size: 1.1rem;
  background: rgba(52, 152, 219, 0.1);
  padding: 0.5rem;
  border-radius: 8px;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.8rem;
}
@media (max-width: 768px) {
  .course-list {
    grid-template-columns: 1fr;
  }
}

.course-item {
  background: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #3498db;
  transition: all 0.2s ease;
}
.course-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.course-item .course-code {
  color: #3498db;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}
.course-item .course-name {
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.3;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.main-footer {
  background: #34495e;
  color: #ffffff;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}

.footer-links {
  display: flex;
  gap: 2rem;
}
.footer-links a {
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}
.footer-links a:hover {
  color: #3498db;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in {
  animation: fadeInUp 0.6s ease-out;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
  .section h2 {
    font-size: 2rem;
  }

  .about-content {
    text-align: center;
  }

  .about-text p {
    font-size: 1rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["// SCSS Variables\n$primary-color: #2c3e50;\n$secondary-color: #3498db;\n$accent-color: #e74c3c;\n$text-color: #2c3e50;\n$light-gray: #ecf0f1;\n$white: #ffffff;\n$dark-gray: #34495e;\n\n// Mixins\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin transition($property: all, $duration: 0.3s, $timing: ease) {\n  transition: $property $duration $timing;\n}\n\n@mixin section-padding {\n  padding: 80px 0;\n}\n\n// Base Reset\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Arial', sans-serif;\n  line-height: 1.6;\n  color: $text-color;\n  overflow-x: hidden;\n}\n\n// Container\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n// Header & Navigation\n.main-header {\n  position: relative;\n  z-index: 1000;\n}\n\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  @include transition();\n  z-index: 1000;\n  padding: 1rem 0;\n\n  &.scrolled {\n    padding: 0.5rem 0;\n    background: rgba(255, 255, 255, 0.98);\n    \n    .nav-brand h1 {\n      font-size: 1.5rem;\n    }\n    \n    .nav-link {\n      font-size: 0.9rem;\n    }\n  }\n}\n\n.nav-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-brand {\n  h1 {\n    color: $primary-color;\n    font-size: 2rem;\n    font-weight: bold;\n    @include transition(font-size);\n  }\n}\n\n.nav-menu {\n  display: flex;\n  list-style: none;\n  gap: 2rem;\n  \n  @media (max-width: 768px) {\n    position: fixed;\n    top: 0;\n    right: -100%;\n    width: 100%;\n    height: 100vh;\n    background: $white;\n    flex-direction: column;\n    @include flex-center;\n    @include transition(right);\n    \n    &.active {\n      right: 0;\n    }\n  }\n}\n\n.nav-item {\n  position: relative;\n}\n\n.nav-link {\n  text-decoration: none;\n  color: $text-color;\n  font-weight: 500;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 25px;\n  @include transition();\n  \n  &:hover, &.active {\n    color: $secondary-color;\n    background: rgba(52, 152, 219, 0.1);\n  }\n  \n  &.active {\n    font-weight: 600;\n  }\n}\n\n// Hamburger Menu\n.hamburger {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  \n  @media (max-width: 768px) {\n    display: flex;\n  }\n  \n  .bar {\n    width: 25px;\n    height: 3px;\n    background: $primary-color;\n    margin: 3px 0;\n    @include transition();\n  }\n  \n  &.active {\n    .bar:nth-child(1) {\n      transform: rotate(45deg) translate(5px, 5px);\n    }\n    \n    .bar:nth-child(2) {\n      opacity: 0;\n    }\n    \n    .bar:nth-child(3) {\n      transform: rotate(-45deg) translate(7px, -6px);\n    }\n  }\n}\n\n// Main Content\n.main-content {\n  margin-top: 0; // Remove margin since hero section will be full height\n}\n\n// Sections\n.section {\n  @include section-padding;\n  min-height: 100vh;\n  @include flex-center;\n  flex-direction: column;\n  \n  h2 {\n    font-size: 3rem;\n    text-align: center;\n    margin-bottom: 3rem;\n    color: $primary-color;\n    position: relative;\n    \n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -10px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 80px;\n      height: 4px;\n      background: $secondary-color;\n      border-radius: 2px;\n    }\n  }\n}\n\n// Hero Section\n.hero-section {\n  position: relative;\n  height: 100vh;\n  min-height: 600px;\n  overflow: hidden;\n  @include flex-center;\n  flex-direction: column;\n  \n  // Ensure hero section starts at top, accounting for navbar\n  &:first-child {\n    margin-top: -100px;\n    padding-top: 100px;\n  }\n}\n\n.hero-video-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 1;\n  \n  // Performance optimizations\n  will-change: transform;\n  backface-visibility: hidden;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  \n  // Responsive video optimization\n  @media (max-width: 768px) {\n    object-position: center center;\n    // Hide video on very small screens to improve performance\n    @media (max-width: 480px) {\n      display: none;\n    }\n  }\n  \n  // Reduce motion for accessibility\n  @media (prefers-reduced-motion: reduce) {\n    animation: none;\n  }\n}\n\n.hero-overlay {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  @include flex-center;\n  flex-direction: column;\n  text-align: center;\n  \n  // Fallback background when video is hidden on small screens\n  @media (max-width: 480px) {\n    background: linear-gradient(135deg, $primary-color, $secondary-color);\n  }\n}\n\n.hero-content {\n  color: $white;\n  z-index: 3;\n  animation: fadeInUp 1.2s ease-out;\n  margin-top: 8rem;  // Push content down\n  \n  @media (max-width: 768px) {\n    padding: 0 2rem;\n    margin-top: 4rem;  // Less margin on mobile\n  }\n  \n  // Large screens need more top margin\n  @media (min-width: 1920px) {\n    margin-top: 12rem;\n  }\n  \n  @media (min-width: 1366px) and (max-width: 1919px) {\n    margin-top: 10rem;\n  }\n  \n  @media (min-width: 1024px) and (max-width: 1365px) {\n    margin-top: 6rem;\n  }\n}\n\n.hero-title {\n  font-size: 4rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  \n  @media (max-width: 768px) {\n    font-size: 3rem;\n  }\n  \n  @media (max-width: 480px) {\n    font-size: 2.5rem;\n  }\n}\n\n.hero-subtitle {\n  font-size: 2.5rem;\n  font-weight: 400;\n  margin-bottom: 1.5rem;\n  \n  @media (max-width: 768px) {\n    font-size: 2rem;\n  }\n  \n  @media (max-width: 480px) {\n    font-size: 1.5rem;\n  }\n}\n\n.hero-description {\n  font-size: 1.3rem;\n  margin-bottom: 3rem;\n  max-width: 600px;\n  \n  @media (max-width: 768px) {\n    font-size: 1.1rem;\n    margin-bottom: 2.5rem;\n  }\n}\n\n.hero-cta {\n  margin-bottom: 4rem;\n}\n\n.cta-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.8rem;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: $white;\n  text-decoration: none;\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  @include transition(all, 0.3s);\n  \n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n    border-color: rgba(255, 255, 255, 0.5);\n    transform: translateY(-3px);\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n  }\n  \n  i {\n    font-size: 0.9rem;\n    @include transition(transform, 0.3s);\n  }\n  \n  &:hover i {\n    transform: translateY(3px);\n  }\n}\n\n\n// About Section (now simplified without video background)\n.about-section {\n  background: $white;\n  position: relative;\n  \n  // Smooth entrance animation\n  &.fade-in {\n    animation: fadeInUp 0.8s ease-out;\n  }\n  \n  // Add subtle shadow to separate from hero section\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 10px;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);\n    z-index: 1;\n  }\n}\n\n.about-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    text-align: center;\n  }\n}\n\n.about-text {\n  p {\n    font-size: 1.2rem;\n    margin-bottom: 1.5rem;\n    line-height: 1.8;\n  }\n}\n\n.education-section {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 2px solid $light-gray;\n  \n  h3 {\n    color: $primary-color;\n    font-size: 1.3rem;\n    font-weight: 600;\n    margin-bottom: 1.5rem;\n  }\n}\n\n.education-item {\n  margin-bottom: 1.5rem;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.education-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  \n  strong {\n    color: $primary-color;\n    font-size: 1.1rem;\n  }\n  \n  .location {\n    color: $text-color;\n    font-size: 0.95rem;\n    opacity: 0.8;\n  }\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.2rem;\n  }\n}\n\n.education-details {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  \n  .degree {\n    color: $secondary-color;\n    font-size: 0.95rem;\n    font-weight: 500;\n  }\n  \n  .date {\n    color: $text-color;\n    font-size: 0.9rem;\n    opacity: 0.8;\n  }\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.2rem;\n  }\n}\n\n.about-image {\n  text-align: center;\n  \n  img {\n    max-width: 100%;\n    height: auto;\n    border-radius: 15px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n    @include transition(transform);\n    \n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n}\n\n// Experience Section\n.experience-section {\n  position: relative;\n  background: url('../assets/experience/fixed_background.png') center center;\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  \n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(44, 62, 80, 0.85);\n    z-index: 1;\n  }\n}\n\n.experience-overlay {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  \n  h2 {\n    color: $white;\n    \n    &::after {\n      background: $white;\n    }\n  }\n}\n\n.timeline {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem 0;\n}\n\n.timeline-line {\n  position: absolute;\n  left: 30px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: rgba(255, 255, 255, 0.3);\n  \n  @media (max-width: 768px) {\n    left: 20px;\n  }\n}\n\n.timeline-item {\n  position: relative;\n  margin: 2rem 0;\n  padding-left: 80px;\n  \n  @media (max-width: 768px) {\n    padding-left: 60px;\n  }\n}\n\n.timeline-marker {\n  position: absolute;\n  left: 22px;\n  top: 2rem;\n  width: 16px;\n  height: 16px;\n  background: $secondary-color;\n  border: 3px solid $white;\n  border-radius: 50%;\n  \n  @media (max-width: 768px) {\n    left: 12px;\n  }\n}\n\n.experience-card {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-radius: 15px;\n  padding: 2rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  @include transition(all, 0.3s);\n  \n  &:hover {\n    transform: translateY(-5px);\n    background: rgba(255, 255, 255, 0.15);\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  }\n}\n\n.experience-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    text-align: center;\n    gap: 0.5rem;\n  }\n}\n\n.company-logo {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n  border-radius: 10px;\n  background: $white;\n  padding: 0.5rem;\n  flex-shrink: 0;\n}\n\n.experience-info {\n  flex: 1;\n  \n  h3 {\n    color: $white;\n    font-size: 1.3rem;\n    font-weight: 600;\n    margin-bottom: 0.2rem;\n  }\n  \n  h4 {\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 1rem;\n    font-weight: 500;\n    margin-bottom: 0.5rem;\n  }\n  \n  .duration {\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 0.9rem;\n  }\n}\n\n.experience-description {\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n\n// Projects Section - Carousel\n.projects-section {\n  background: $white;\n}\n\n.carousel-container {\n  position: relative;\n  max-width: 1000px;\n  margin: 3rem auto 0;\n  padding: 0 60px;\n  \n  @media (max-width: 768px) {\n    padding: 0 40px;\n  }\n}\n\n.carousel-wrapper {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.carousel-track {\n  display: flex;\n  width: 300%;\n  height: 100%;\n  @include transition(transform, 0.4s, ease);\n}\n\n.carousel-slide {\n  width: 33.333%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.project-card {\n  background: $white;\n  border-radius: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  width: 95%;\n  height: 450px;\n  @include transition(all, 0.3s);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  \n  &:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n  }\n}\n\n.project-content {\n  padding: 2.5rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  \n  p {\n    color: $text-color;\n    line-height: 1.6;\n    margin-bottom: 2rem;\n    font-size: 1.05rem;\n    flex: 1;\n  }\n}\n\n.project-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  \n  h3 {\n    color: $primary-color;\n    font-size: 1.6rem;\n    font-weight: 700;\n    margin-bottom: 1rem;\n    line-height: 1.3;\n    \n    @media (max-width: 768px) {\n      font-size: 1.4rem;\n    }\n  }\n}\n\n.project-logo {\n  width: 70px;\n  height: 70px;\n  object-fit: contain;\n  margin-bottom: 1.2rem;\n  border-radius: 16px;\n  background: rgba(0, 0, 0, 0.02);\n  padding: 0.6rem;\n  @include transition(all, 0.3s);\n  \n  .project-card:hover & {\n    transform: scale(1.1);\n  }\n}\n\n.project-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  justify-content: center;\n}\n\n.tag {\n  background: lighten($secondary-color, 5%);\n  color: $white;\n  padding: 0.4rem 0.8rem;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n// Carousel Navigation\n.carousel-nav {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: $white;\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  @include flex-center;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  @include transition(all, 0.2s);\n  z-index: 10;\n  \n  &:hover {\n    background: $secondary-color;\n    transform: translateY(-50%) scale(1.1);\n  }\n  \n  i {\n    font-size: 1rem;\n    color: $primary-color;\n    @include transition(color, 0.2s);\n  }\n  \n  &:hover i {\n    color: $white;\n  }\n}\n\n.carousel-prev {\n  left: 15px;\n}\n\n.carousel-next {\n  right: 15px;\n}\n\n// Carousel Indicators\n.carousel-indicators {\n  display: flex;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-top: 1.5rem;\n}\n\n.indicator {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(52, 152, 219, 0.3);\n  cursor: pointer;\n  @include transition(all, 0.2s);\n  \n  &.active {\n    background: $secondary-color;\n  }\n  \n  &:hover {\n    background: $secondary-color;\n  }\n}\n\n// Skills Section\n.skills-section {\n  background: $light-gray;\n}\n\n.skills-grid {\n  columns: 3;\n  column-gap: 3rem;\n  margin-top: 3rem;\n  \n  @media (max-width: 1024px) {\n    columns: 2;\n    column-gap: 2rem;\n  }\n  \n  @media (max-width: 768px) {\n    columns: 1;\n    column-gap: 0;\n  }\n}\n\n.skill-category {\n  background: $white;\n  border-radius: 15px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  @include transition(all, 0.3s);\n  break-inside: avoid;\n  height: 280px;\n  display: flex;\n  flex-direction: column;\n  \n  &:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  }\n}\n\n.category-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  \n  i {\n    font-size: 1.5rem;\n    color: $secondary-color;\n    margin-right: 0.8rem;\n    background: lighten($secondary-color, 45%);\n    padding: 0.6rem;\n    border-radius: 10px;\n  }\n  \n  h3 {\n    color: $primary-color;\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin: 0;\n  }\n}\n\n.skill-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  flex: 1;\n  align-content: flex-start;\n}\n\n.skill-tag {\n  display: inline-flex;\n  align-items: center;\n  background: lighten($secondary-color, 5%);\n  color: $white;\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  @include transition(all, 0.2s);\n  \n  i {\n    margin-right: 0.4rem;\n    font-size: 0.9rem;\n  }\n  \n  &:hover {\n    background: $secondary-color;\n    transform: scale(1.05);\n  }\n}\n\n// Contact Section\n.contact-section {\n  background: $primary-color;\n  color: $white;\n  \n  h2 {\n    color: $white;\n    \n    &::after {\n      background: $white;\n    }\n  }\n}\n\n.contact-content {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.contact-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n\n.contact-item {\n  @include flex-center;\n  gap: 1rem;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n  border-radius: 10px;\n  @include transition(background);\n  \n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n  \n  i {\n    font-size: 1.5rem;\n    color: $secondary-color;\n  }\n  \n  span {\n    font-size: 1.1rem;\n  }\n}\n\n.social-links {\n  @include flex-center;\n  gap: 2rem;\n}\n\n.social-link {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  @include flex-center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  color: $white;\n  text-decoration: none;\n  @include transition();\n  \n  &:hover {\n    background: $secondary-color;\n    transform: translateY(-3px);\n  }\n  \n  i {\n    font-size: 1.5rem;\n  }\n}\n\n// Courses Button Styling\n.courses-btn {\n  background: $secondary-color;\n  color: $white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.6rem 1.2rem;\n  margin-top: 0.8rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  @include transition(all, 0.3s);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  \n  i {\n    font-size: 0.8rem;\n  }\n  \n  &:hover {\n    background: darken($secondary-color, 10%);\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);\n  }\n  \n  &:active {\n    transform: translateY(0);\n  }\n}\n\n// Modal Styles\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(5px);\n  @include flex-center;\n  z-index: 2000;\n  opacity: 0;\n  visibility: hidden;\n  @include transition(all, 0.3s);\n  \n  &.active {\n    opacity: 1;\n    visibility: visible;\n    \n    .modal-content {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n}\n\n.modal-content {\n  background: $white;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-width: 800px;\n  width: 90%;\n  max-height: 80vh;\n  overflow: hidden;\n  transform: scale(0.8);\n  opacity: 0;\n  @include transition(all, 0.3s);\n  \n  @media (max-width: 768px) {\n    width: 95%;\n    max-height: 85vh;\n  }\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 2.5rem 1.5rem;\n  border-bottom: 2px solid $light-gray;\n  \n  h3 {\n    color: $primary-color;\n    font-size: 1.8rem;\n    font-weight: 600;\n    margin: 0;\n  }\n  \n  @media (max-width: 768px) {\n    padding: 1.5rem 1.5rem 1rem;\n    \n    h3 {\n      font-size: 1.5rem;\n    }\n  }\n}\n\n.modal-close {\n  background: none;\n  border: none;\n  color: $text-color;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  @include transition(all, 0.2s);\n  @include flex-center;\n  width: 40px;\n  height: 40px;\n  \n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    color: $accent-color;\n    transform: scale(1.1);\n  }\n}\n\n.modal-body {\n  padding: 2rem 2.5rem 2.5rem;\n  overflow-y: auto;\n  max-height: calc(80vh - 100px);\n  \n  @media (max-width: 768px) {\n    padding: 1.5rem;\n    max-height: calc(85vh - 80px);\n  }\n}\n\n.courses-grid {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.course-category {\n  background: $light-gray;\n  border-radius: 15px;\n  padding: 1.5rem;\n  @include transition(all, 0.3s);\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  }\n  \n  h4 {\n    color: $primary-color;\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    gap: 0.8rem;\n    \n    i {\n      color: $secondary-color;\n      font-size: 1.1rem;\n      background: rgba(52, 152, 219, 0.1);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n}\n\n.course-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 0.8rem;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.course-item {\n  background: $white;\n  padding: 1rem;\n  border-radius: 10px;\n  border-left: 4px solid $secondary-color;\n  @include transition(all, 0.2s);\n  \n  &:hover {\n    transform: translateX(5px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  \n  .course-code {\n    color: $secondary-color;\n    font-weight: 600;\n    font-size: 0.9rem;\n    margin-bottom: 0.3rem;\n  }\n  \n  .course-name {\n    color: $primary-color;\n    font-weight: 500;\n    font-size: 0.95rem;\n    line-height: 1.3;\n  }\n}\n\n// Modal animation keyframes\n@keyframes modalFadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-50px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n// Footer\n.main-footer {\n  background: $dark-gray;\n  color: $white;\n  padding: 2rem 0;\n  text-align: center;\n}\n\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n.footer-links {\n  display: flex;\n  gap: 2rem;\n  \n  a {\n    color: $white;\n    text-decoration: none;\n    @include transition();\n    \n    &:hover {\n      color: $secondary-color;\n    }\n  }\n}\n\n// Smooth scrolling animation\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fade-in {\n  animation: fadeInUp 0.6s ease-out;\n}\n\n// Responsive Design\n@media (max-width: 768px) {\n  .section {\n    padding: 60px 0;\n    \n    h2 {\n      font-size: 2rem;\n    }\n  }\n  \n  .about-content {\n    text-align: center;\n  }\n  \n  .about-text p {\n    font-size: 1rem;\n  }\n  \n  .contact-info {\n    grid-template-columns: 1fr;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/aboutme_bg.mp4":
/*!*******************************!*\
  !*** ./assets/aboutme_bg.mp4 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab2d48049173b9c3b6ee.mp4";

/***/ }),

/***/ "./assets/experience/dbs_logo.png":
/*!****************************************!*\
  !*** ./assets/experience/dbs_logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0cefb87777b9606dfa73.png";

/***/ }),

/***/ "./assets/experience/etl_logo.png":
/*!****************************************!*\
  !*** ./assets/experience/etl_logo.png ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/experience/fixed_background.png":
/*!************************************************!*\
  !*** ./assets/experience/fixed_background.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42f84fe0f96d917041cf.png";

/***/ }),

/***/ "./assets/experience/osu_logo.png":
/*!****************************************!*\
  !*** ./assets/experience/osu_logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6de83bc9cafb44041c63.png";

/***/ }),

/***/ "./assets/image.jpg":
/*!**************************!*\
  !*** ./assets/image.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f7c3d1bc154868c1bcc8.jpg";

/***/ }),

/***/ "./assets/projects/project1.png":
/*!**************************************!*\
  !*** ./assets/projects/project1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42c813520156b50c007b.png";

/***/ }),

/***/ "./assets/projects/project2.png":
/*!**************************************!*\
  !*** ./assets/projects/project2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25bcd7aabeef9388478a.png";

/***/ }),

/***/ "./assets/projects/project3.png":
/*!**************************************!*\
  !*** ./assets/projects/project3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eea6f550a9285786e150.png";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/aboutme_bg.mp4 */ "./assets/aboutme_bg.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image.jpg */ "./assets/image.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/experience/dbs_logo.png */ "./assets/experience/dbs_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/experience/osu_logo.png */ "./assets/experience/osu_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/experience/etl_logo.png */ "./assets/experience/etl_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/projects/project1.png */ "./assets/projects/project1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/projects/project2.png */ "./assets/projects/project2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/projects/project3.png */ "./assets/projects/project3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Jimin's Page</title>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\">\n    </head>\n    <body>\n        <!-- Sticky Navigation Header -->\n        <header class=\"main-header\">\n            <nav class=\"navbar\" id=\"navbar\">\n                <div class=\"nav-container\">\n                    <div class=\"nav-brand\">\n                        <h1>Jimin's Page</h1>\n                    </div>\n                    <ul class=\"nav-menu\" id=\"nav-menu\">\n                        <li class=\"nav-item\">\n                            <a href=\"#hero\" class=\"nav-link\" data-section=\"hero\">Home</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#about\" class=\"nav-link\" data-section=\"about\">About</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#experience\" class=\"nav-link\" data-section=\"experience\">Experience</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#projects\" class=\"nav-link\" data-section=\"projects\">Projects</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#misc\" class=\"nav-link\" data-section=\"misc\">Skills</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#contact\" class=\"nav-link\" data-section=\"contact\">Contact</a>\n                        </li>\n                    </ul>\n                    <div class=\"hamburger\" id=\"hamburger\">\n                        <span class=\"bar\"></span>\n                        <span class=\"bar\"></span>\n                        <span class=\"bar\"></span>\n                    </div>\n                </div>\n            </nav>\n        </header>\n\n        <!-- Main Content -->\n        <main class=\"main-content\">\n            <!-- Hero Welcome Section -->\n            <section id=\"hero\" class=\"section hero-section\">\n                <!-- Video Background -->\n                <video class=\"hero-video-bg\" autoplay muted loop playsinline>\n                    <source src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"video/mp4\">\n                    Your browser does not support the video tag.\n                </video>\n                <div class=\"hero-overlay\">\n                    <div class=\"hero-content\">\n                        <h1 class=\"hero-title\">Welcome!</h1>\n                        <h2 class=\"hero-subtitle\">I am Jimin</h2>\n                        <p class=\"hero-description\">Passionate Software Engineer & Computer Science Graduate Student</p>\n                        <div class=\"hero-cta\">\n                            <a href=\"#about\" class=\"cta-button\">\n                                <span>More</span>\n                                <i class=\"fas fa-arrow-down\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <!-- About Me Details Section -->\n            <section id=\"about\" class=\"section about-section\">\n                <div class=\"container\">\n                    <h2>About Me</h2>\n                    <div class=\"about-content\">\n                        <div class=\"about-text\">\n                            <p>Hi, I'm Jimin Yang, a passionate software engineer pursuing my Master's in Computer Science at UIUC.</p>\n                            <p>I specialize in full-stack development, machine learning, and distributed systems. Currently seeking Summer 2026 internship opportunities.</p>\n                            <div class=\"education-section\">\n                                <h3>Education</h3>\n                                <div class=\"education-item\">\n                                    <div class=\"education-header\">\n                                        <strong>University of Illinois Urbana-Champaign</strong>\n                                        <span class=\"location\">Champaign, IL</span>\n                                    </div>\n                                    <div class=\"education-details\">\n                                        <span class=\"degree\">Master of Computer Science | GPA: 3.91/4.0</span>\n                                        <span class=\"date\">Expected Dec 2026</span>\n                                    </div>\n                                    <button class=\"courses-btn\" data-school=\"uiuc\">\n                                        <i class=\"fas fa-book\"></i>\n                                        Selected Courses\n                                    </button>\n                                </div>\n                                <div class=\"education-item\">\n                                    <div class=\"education-header\">\n                                        <strong>The Ohio State University</strong>\n                                        <span class=\"location\">Columbus, OH</span>\n                                    </div>\n                                    <div class=\"education-details\">\n                                        <span class=\"degree\">Bachelor of Computer Science | GPA: 3.85/4.0</span>\n                                        <span class=\"date\">Aug 2024</span>\n                                    </div>\n                                    <button class=\"courses-btn\" data-school=\"osu\">\n                                        <i class=\"fas fa-book\"></i>\n                                        Selected Courses\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"about-image\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Jimin Yang's Photo\">\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <!-- Experience Section -->\n            <section id=\"experience\" class=\"section experience-section\">\n                <div class=\"experience-overlay\">\n                    <div class=\"container\">\n                        <h2>Experience</h2>\n                        <div class=\"timeline\">\n                            <div class=\"timeline-line\"></div>\n                            \n                            <!-- DBS Bank Experience -->\n                            <div class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"experience-card\">\n                                    <div class=\"experience-header\">\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"DBS Bank Logo\" class=\"company-logo\">\n                                        <div class=\"experience-info\">\n                                            <h3>DBS Bank</h3>\n                                            <h4>Software Engineer Intern</h4>\n                                            <span class=\"duration\">July - Aug 2025 • Guangzhou, China</span>\n                                        </div>\n                                    </div>\n                                    <p class=\"experience-description\">\n                                        Contributed to DBS corporate banking platform serving 10k+ enterprise clients. \n                                        Built distributed lock systems and RESTful APIs with comprehensive testing coverage.\n                                    </p>\n                                </div>\n                            </div>\n\n                            <!-- OSU Experience -->\n                            <div class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"experience-card\">\n                                    <div class=\"experience-header\">\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"OSU Logo\" class=\"company-logo\">\n                                        <div class=\"experience-info\">\n                                            <h3>The Ohio State University</h3>\n                                            <h4>Research Assistant</h4>\n                                            <span class=\"duration\">June - Sept 2024 • Columbus, OH</span>\n                                        </div>\n                                    </div>\n                                    <p class=\"experience-description\">\n                                        Led engineering team building LLM habit coach, increasing user participation by 67%. \n                                        Architected RAG system reducing hallucinations by 80%.\n                                    </p>\n                                </div>\n                            </div>\n\n                            <!-- EduTechnology Experience -->\n                            <div class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"experience-card\">\n                                    <div class=\"experience-header\">\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"EduTechnology Logo\" class=\"company-logo\">\n                                        <div class=\"experience-info\">\n                                            <h3>EduTechnology, LLC</h3>\n                                            <h4>Software Engineer Intern</h4>\n                                            <span class=\"duration\">May - Aug 2024 • Columbus, OH</span>\n                                        </div>\n                                    </div>\n                                    <p class=\"experience-description\">\n                                        Built full-stack community platform serving 200+ local artists. \n                                        Achieved 65% improvement in engagement through platform optimization.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <!-- Projects Section -->\n            <section id=\"projects\" class=\"section projects-section\">\n                <div class=\"container\">\n                    <h2>Projects</h2>\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-wrapper\">\n                            <div class=\"carousel-track\" id=\"carousel-track\">\n                                <!-- Project 1 -->\n                                <div class=\"carousel-slide active\">\n                                    <div class=\"project-card\">\n                                        <div class=\"project-content\">\n                                            <div class=\"project-header\">\n                                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"AnkiCode Logo\" class=\"project-logo\">\n                                                <h3>AnkiCode - Smart Code Memory Training</h3>\n                                            </div>\n                                            <p>A Chrome extension using FSRS algorithm for intelligent code review sessions. Helps programmers retain LeetCode solutions through spaced repetition.</p>\n                                            <div class=\"project-tags\">\n                                                <span class=\"tag\">React</span>\n                                                <span class=\"tag\">TypeScript</span>\n                                                <span class=\"tag\">Chrome Extension</span>\n                                                <span class=\"tag\">Manifest V3</span>\n                                                <span class=\"tag\">FSRS Algorithm</span>\n                                                <span class=\"tag\">Tailwind CSS</span>\n                                                <span class=\"tag\">Vite</span>\n                                                <span class=\"tag\">Local Storage</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- Project 2 -->\n                                <div class=\"carousel-slide\">\n                                    <div class=\"project-card\">\n                                        <div class=\"project-content\">\n                                            <div class=\"project-header\">\n                                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"TasteSpot Logo\" class=\"project-logo\">\n                                                <h3>TasteSpot</h3>\n                                            </div>\n                                            <p>High-concurrency discount shopping platform with distributed authentication architecture. Designed for flash sales with data integrity and optimistic locking.</p>\n                                            <div class=\"project-tags\">\n                                                <span class=\"tag\">GitHub Actions</span>\n                                                <span class=\"tag\">Docker</span>\n                                                <span class=\"tag\">Redis</span>\n                                                <span class=\"tag\">AWS SNS</span>\n                                                <span class=\"tag\">Redisson</span>\n                                                <span class=\"tag\">CAS Locking</span>\n                                                <span class=\"tag\">RabbitMQ</span>\n                                                <span class=\"tag\">Spring Boot</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- Project 3 -->\n                                <div class=\"carousel-slide\">\n                                    <div class=\"project-card\">\n                                        <div class=\"project-content\">\n                                            <div class=\"project-header\">\n                                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"E-Commerce Platform Logo\" class=\"project-logo\">\n                                                <h3>Distributed E-Commerce Platform</h3>\n                                            </div>\n                                            <p>Microservices architecture handling 200K+ daily transactions with 99.9% uptime. Features MySQL sharding strategy and Kafka message queue for 5000 TPS.</p>\n                                            <div class=\"project-tags\">\n                                                <span class=\"tag\">Spring Cloud</span>\n                                                <span class=\"tag\">MySQL</span>\n                                                <span class=\"tag\">Redis Cluster</span>\n                                                <span class=\"tag\">Kafka</span>\n                                                <span class=\"tag\">Kubernetes</span>\n                                                <span class=\"tag\">Docker</span>\n                                                <span class=\"tag\">Microservices</span>\n                                                <span class=\"tag\">Load Balancing</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- Navigation Arrows -->\n                        <button class=\"carousel-nav carousel-prev\" id=\"carousel-prev\">\n                            <i class=\"fas fa-chevron-left\"></i>\n                        </button>\n                        <button class=\"carousel-nav carousel-next\" id=\"carousel-next\">\n                            <i class=\"fas fa-chevron-right\"></i>\n                        </button>\n\n                        <!-- Carousel Indicators -->\n                        <div class=\"carousel-indicators\">\n                            <button class=\"indicator active\" data-slide=\"0\"></button>\n                            <button class=\"indicator\" data-slide=\"1\"></button>\n                            <button class=\"indicator\" data-slide=\"2\"></button>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <!-- Skills Section -->\n            <section id=\"misc\" class=\"section skills-section\">\n                <div class=\"container\">\n                    <h2>Technical Skills</h2>\n                    <div class=\"skills-grid\">\n                        <!-- Programming Languages -->\n                        <div class=\"skill-category\">\n                            <div class=\"category-header\">\n                                <i class=\"fas fa-code\"></i>\n                                <h3>Programming Languages</h3>\n                            </div>\n                            <div class=\"skill-tags\">\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-java\"></i>\n                                    Java\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-python\"></i>\n                                    Python\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-golang\"></i>\n                                    Go\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-js-square\"></i>\n                                    JavaScript/TypeScript\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-php\"></i>\n                                    PHP\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-plus\"></i>\n                                    C++\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-database\"></i>\n                                    SQL\n                                </span>\n                            </div>\n                        </div>\n\n                        <!-- Frameworks & Tools -->\n                        <div class=\"skill-category\">\n                            <div class=\"category-header\">\n                                <i class=\"fas fa-tools\"></i>\n                                <h3>Frameworks & Tools</h3>\n                            </div>\n                            <div class=\"skill-tags\">\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-react\"></i>\n                                    React\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-node-js\"></i>\n                                    Node.js/Express\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-leaf\"></i>\n                                    Spring Boot\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-gin\"></i>\n                                    Gin\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-stream\"></i>\n                                    Kafka\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-key\"></i>\n                                    JWT\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-plug\"></i>\n                                    WebSocket\n                                </span>\n                            </div>\n                        </div>\n\n                        <!-- Cloud & Database -->\n                        <div class=\"skill-category\">\n                            <div class=\"category-header\">\n                                <i class=\"fas fa-cloud\"></i>\n                                <h3>Cloud & Database</h3>\n                            </div>\n                            <div class=\"skill-tags\">\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-aws\"></i>\n                                    AWS\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-google\"></i>\n                                    GCP\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fab fa-docker\"></i>\n                                    Docker\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-dharmachakra\"></i>\n                                    Kubernetes\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-database\"></i>\n                                    MySQL\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-leaf\"></i>\n                                    MongoDB\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-memory\"></i>\n                                    Redis\n                                </span>\n                                <span class=\"skill-tag\">\n                                    <i class=\"fas fa-elephant\"></i>\n                                    PostgreSQL\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <!-- Contact Section -->\n            <section id=\"contact\" class=\"section contact-section\">\n                <div class=\"container\">\n                    <h2>Contact Me</h2>\n                    <div class=\"contact-content\">\n                        <div class=\"contact-info\">\n                            <div class=\"contact-item\">\n                                <i class=\"fas fa-envelope\"></i>\n                                <span>jimin.yang.0607@gmail.com</span>\n                            </div>\n                            <div class=\"contact-item\">\n                                <i class=\"fab fa-linkedin\"></i>\n                                <span>linkedin.com/in/jiminyang07</span>\n                            </div>\n                            <div class=\"contact-item\">\n                                <i class=\"fab fa-github\"></i>\n                                <span>github.com/Jiminyang1</span>\n                            </div>\n                        </div>\n                        \n                        <!-- Social Media Icons -->\n                        <div class=\"social-links\">\n                            <a href=\"https://linkedin.com/in/jiminyang07\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                                <i class=\"fab fa-linkedin-in\"></i>\n                            </a>\n                            <a href=\"https://github.com/Jiminyang1\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                                <i class=\"fab fa-github\"></i>\n                            </a>\n                            <a href=\"mailto:jimin.yang.0607@gmail.com\" class=\"social-link\">\n                                <i class=\"fas fa-envelope\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </main>\n\n        <!-- Courses Modal -->\n        <div id=\"courses-modal\" class=\"modal\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h3 id=\"modal-title\">Selected Courses</h3>\n                    <button class=\"modal-close\" aria-label=\"Close modal\">\n                        <i class=\"fas fa-times\"></i>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div id=\"courses-content\">\n                        <!-- Course content will be populated by JavaScript -->\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Footer -->\n        <footer class=\"main-footer\">\n            <div class=\"container\">\n                <div class=\"footer-content\">\n                    <p>&copy; 2025 Jimin's Page. All rights reserved.</p>\n                    <div class=\"footer-links\">\n                        <a href=\"#privacy\">Privacy Policy</a>\n                        <a href=\"#terms\">Terms of Service</a>\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

/* js */
document.addEventListener('DOMContentLoaded', function () {
  // DOM elements
  var navbar = document.getElementById('navbar');
  var navLinks = document.querySelectorAll('.nav-link');
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('nav-menu');
  var sections = document.querySelectorAll('.section'); // 1. sticky navbar and navbar size adjustment

  var lastScrollY = window.scrollY;

  function handleNavbarScroll() {
    var currentScrollY = window.scrollY; // add scroll style

    if (currentScrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  } // 2. position indicator - highlight current section


  function updateActiveNavLink() {
    var scrollPosition = window.scrollY + navbar.offsetHeight + 50;
    var currentSection = ''; // check each section

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    }); // special handling: when scrolling to the bottom of the page, highlight the last menu item

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      currentSection = 'contact';
    } // update active state of navigation links


    navLinks.forEach(function (link) {
      link.classList.remove('active');

      if (link.getAttribute('data-section') === currentSection) {
        link.classList.add('active');
      }
    });
  } // 3. smooth scroll


  function smoothScrollToSection(targetId) {
    var targetSection = document.getElementById(targetId);

    if (targetSection) {
      var offsetTop = targetSection.offsetTop - navbar.offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  } // 4. mobile hamburger menu


  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active'); // prevent background scroll

    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  } // 5. close mobile menu


  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  } // 6. throttle function - optimize scroll performance


  function throttle(func, limit) {
    var inThrottle;
    return function () {
      var args = arguments;
      var context = this;

      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function () {
          return inThrottle = false;
        }, limit);
      }
    };
  } // 7. add fade in animation


  function addFadeInAnimation() {
    var observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions); // observe all section elements

    sections.forEach(function (section) {
      observer.observe(section);
    });
  } // event listeners
  // scroll event - use throttle to optimize performance


  window.addEventListener('scroll', throttle(function () {
    handleNavbarScroll();
    updateActiveNavLink();
  }, 16)); // ~60fps
  // navigation link click event

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetSection = this.getAttribute('data-section'); // smooth scroll to target section

      smoothScrollToSection(targetSection); // close mobile menu

      if (window.innerWidth <= 768) {
        closeMobileMenu();
      }
    });
  }); // hamburger menu click event

  hamburger.addEventListener('click', toggleMobileMenu); // click menu outside to close mobile menu

  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768 && !navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  }); // window size change to close mobile menu

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  }); // ESC key to close mobile menu

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  }); // 7. Modal function - course information window

  function initModal() {
    var modal = document.getElementById('courses-modal');
    var modalTitle = document.getElementById('modal-title');
    var modalContent = document.getElementById('courses-content');
    var closeBtn = document.querySelector('.modal-close');
    var courseBtns = document.querySelectorAll('.courses-btn');
    if (!modal || !courseBtns.length) return; // course data

    var coursesData = {
      uiuc: {
        title: 'University of Illinois Urbana-Champaign - Selected Courses',
        categories: [{
          name: 'Core Computer Science',
          icon: 'fas fa-microchip',
          courses: [{
            code: 'CS 425',
            name: 'Distributed Systems'
          }, {
            code: 'CS 411',
            name: 'Database Systems'
          }, {
            code: 'CS 427',
            name: 'Software Engineering'
          }, {
            code: 'CS 423',
            name: 'Operating Systems'
          }, {
            code: 'CS 435',
            name: 'Computer Networks'
          }]
        }, {
          name: 'Advanced Topics',
          icon: 'fas fa-brain',
          courses: [{
            code: 'CS 445',
            name: 'Machine Learning'
          }, {
            code: 'CS 409',
            name: 'Web Development'
          }, {
            code: 'CS 438',
            name: 'Computer Architecture'
          }, {
            code: 'CS 421',
            name: 'Programming Languages'
          }, {
            code: 'CS 463',
            name: 'Cybersecurity'
          }]
        }, {
          name: 'Mathematics & Theory',
          icon: 'fas fa-calculator',
          courses: [{
            code: 'CS 374',
            name: 'Data Structures and Algorithms'
          }]
        }]
      },
      osu: {
        title: 'The Ohio State University - Selected Courses',
        categories: [{
          name: 'Programming & Development',
          icon: 'fas fa-code',
          courses: [{
            code: 'CSE 3241',
            name: 'Database'
          }, {
            code: 'CSE 3901',
            name: 'Software Development'
          }, {
            code: 'CSE 3521',
            name: 'Machine Learning'
          }, {
            code: 'CSE 2331',
            name: 'Data Structure'
          }, {
            code: 'CSE 2421',
            name: 'Algorithm'
          }]
        }, {
          name: 'Systems & Architecture',
          icon: 'fas fa-server',
          courses: [{
            code: 'CSE 2431',
            name: 'Computer Organization'
          }, {
            code: 'CSE 3232',
            name: 'Web Development'
          }]
        }, {
          name: 'Programming Languages',
          icon: 'fas fa-file-code',
          courses: [{
            code: 'CSE 1223',
            name: 'Python'
          }, {
            code: 'CSE 2221',
            name: 'C++'
          }]
        }, {
          name: 'Mathematics',
          icon: 'fas fa-square-root-alt',
          courses: [{
            code: 'MATH 1151',
            name: 'Linear Algebra'
          }, {
            code: 'MATH 1172',
            name: 'Calculus'
          }, {
            code: 'STAT 3470',
            name: 'Probability and Statistics'
          }]
        }]
      }
    }; // generate course HTML content

    function generateCoursesHTML(schoolData) {
      return schoolData.categories.map(function (category) {
        return "\n                <div class=\"course-category\">\n                    <h4>\n                        <i class=\"".concat(category.icon, "\"></i>\n                        ").concat(category.name, "\n                    </h4>\n                    <div class=\"course-list\">\n                        ").concat(category.courses.map(function (course) {
          return "\n                            <div class=\"course-item\">\n                                <div class=\"course-code\">".concat(course.code, "</div>\n                                <div class=\"course-name\">").concat(course.name, "</div>\n                            </div>\n                        ");
        }).join(''), "\n                    </div>\n                </div>\n            ");
      }).join('');
    } // open modal


    function openModal(school) {
      var schoolData = coursesData[school];
      if (!schoolData) return;
      modalTitle.textContent = schoolData.title;
      modalContent.innerHTML = "<div class=\"courses-grid\">".concat(generateCoursesHTML(schoolData), "</div>");
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // add ESC key support

      document.addEventListener('keydown', handleEscapeKey);
    } // close modal


    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscapeKey);
    } // ESC key to close modal


    function handleEscapeKey(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    } // event listeners


    courseBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var school = btn.getAttribute('data-school');
        openModal(school);
      });
    }); // close button

    closeBtn.addEventListener('click', closeModal); // click background to close modal

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    console.log('course modal function initialized');
  } // 8. carousel function


  function initCarousel() {
    var carouselTrack = document.getElementById('carousel-track');
    var prevBtn = document.getElementById('carousel-prev');
    var nextBtn = document.getElementById('carousel-next');
    var slides = document.querySelectorAll('.carousel-slide');
    var indicators = document.querySelectorAll('.indicator');
    if (!carouselTrack || !prevBtn || !nextBtn) return;
    var currentSlide = 0;
    var totalSlides = slides.length;

    function updateCarousel() {
      // update track position
      var translateX = -currentSlide * (100 / totalSlides);
      carouselTrack.style.transform = "translateX(".concat(translateX, "%)"); // update active state

      slides.forEach(function (slide, index) {
        slide.classList.toggle('active', index === currentSlide);
      }); // update indicators

      indicators.forEach(function (indicator, index) {
        indicator.classList.toggle('active', index === currentSlide);
      });
    }

    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      updateCarousel();
    }

    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
      }
    }

    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    } // event listeners


    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide); // indicators click event

    indicators.forEach(function (indicator, index) {
      indicator.addEventListener('click', function () {
        return goToSlide(index);
      });
    }); // keyboard navigation

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    }); // initialize

    updateCarousel();
  } // initialize


  function init() {
    // initial check navbar state
    handleNavbarScroll();
    updateActiveNavLink(); // add fade in animation observer

    addFadeInAnimation(); // initialize carousel

    initCarousel(); // initialize modal function

    initModal(); // add loading animation

    document.body.classList.add('loaded');
    console.log('Jimin\'s Page loaded!');
  } // initialize after page load


  init(); // extra function: click logo to go to top

  var navBrand = document.querySelector('.nav-brand');
  navBrand.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }); // extra function: keyboard navigation support

  document.addEventListener('keydown', function (e) {
    // use number keys 1-5 to quickly navigate to different sections
    var keyMap = {
      '1': 'about',
      '2': 'experience',
      '3': 'projects',
      '4': 'misc',
      '5': 'contact'
    };

    if (keyMap[e.key]) {
      smoothScrollToSection(keyMap[e.key]);
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map