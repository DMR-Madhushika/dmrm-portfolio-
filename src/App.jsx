/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

/* ============================================
   MODERN PROFESSIONAL PORTFOLIO
   Advanced CSS with Sky Blue Theme
   Glass morphism, Animations, Parallax Effects
   ============================================ */
const styles = `
/* ============================================
   IMPORTS & CSS VARIABLES
   ============================================ */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

:root {
  --primary-blue: #4A90E2;
  --sky-blue: #87CEEB;
  --light-blue: #B0E0E6;
  --dark-blue: #2C5F8D;
  --accent: #5DADE2;
  --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  background: linear-gradient(135deg, #e0f7ff 0%, #ffffff 50%, #e6f3ff 100%);
  color: #2c3e50;
}

/* ============================================
   SMOOTH SCROLLING & ANIMATIONS
   ============================================ */
html {
  scroll-behavior: smooth;
}

/* ============================================
   ANIMATED BACKGROUND PARTICLES
   ============================================ */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
}

.particle {
  position: absolute;
  background: var(--sky-blue);
  border-radius: 50%;
  animation: float 20s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-100px) translateX(50px); }
  50% { transform: translateY(-200px) translateX(-50px); }
  75% { transform: translateY(-100px) translateX(100px); }
}

/* ============================================
   NAVIGATION - GLASS MORPHISM DESIGN
   ============================================ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(74, 144, 226, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

.nav-link {
  background: none;
  border: none;
  color: #2c3e50;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  transition: left 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before,
.nav-link.active::before {
  left: 0;
}

.nav-link:hover,
.nav-link.active {
  color: white;
  transform: translateY(-2px);
}

/* ============================================
   MAIN CONTENT WRAPPER
   ============================================ */
.app {
  min-height: 100vh;
}

.main-content {
  padding-top: 80px;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 3rem;
  padding-right: 3rem;
}

/* ============================================
   HOME SECTION - HERO WITH PARALLAX
   ============================================ */
.home-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(135, 206, 235, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(74, 144, 226, 0.15) 0%, transparent 50%);
  z-index: 0;
}

.hero-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
}

.hero-image-container {
  flex-shrink: 0;
  animation: fadeInLeft 0.8s ease;
}

.hero-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid white;
  box-shadow: 0 20px 60px rgba(74, 144, 226, 0.3);
  transition: all 0.4s ease;
  position: relative;
}

.hero-image:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 80px rgba(74, 144, 226, 0.4);
}

.hero-image-wrapper {
  position: relative;
}

.hero-image-wrapper::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  opacity: 0.2;
  z-index: -1;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-content {
  flex: 1;
  text-align: left;
}

.hero-label {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  color: white;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  animation: slideDown 0.8s ease;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--dark-blue), var(--primary-blue), var(--sky-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-description {
  font-size: 1.2rem;
  color: #5a6c7d;
  line-height: 1.8;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.8s both;
}

.btn {
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  color: white;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(74, 144, 226, 0.4);
}

.btn-secondary {
  background: white;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.btn-secondary:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(74, 144, 226, 0.3);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  animation: fadeInUp 0.8s ease 1s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  display: block;
}

.stat-label {
  font-size: 0.95rem;
  color: #5a6c7d;
  margin-top: 0.5rem;
}

/* ============================================
   SECTION STYLES - MODERN LAYOUT
   ============================================ */
.section {
  padding: 8rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-label {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(135, 206, 235, 0.1));
  color: var(--primary-blue);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.1rem;
  color: #5a6c7d;
  max-width: 600px;
  margin: 0 auto;
}

/* ============================================
   ABOUT SECTION - BENTO GRID LAYOUT
   ============================================ */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.about-card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(74, 144, 226, 0.1);
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(74, 144, 226, 0.15);
}

.about-card.large {
  grid-column: 1 / -1;
}

.about-card h3 {
  font-size: 1.8rem;
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon {
  font-size: 2rem;
}

.about-card p {
  font-size: 1.05rem;
  color: #5a6c7d;
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* Balanced grid for About section */
.about-grid-balanced {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.about-card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(74, 144, 226, 0.1);
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(74, 144, 226, 0.15);
}

.about-card h3 {
  font-size: 1.8rem;
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.about-card p {
  font-size: 1.05rem;
  color: #5a6c7d;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.education-item {
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  padding: 2.5rem;
  border-radius: 16px;
  color: white;
  margin-top: 1rem;
}

.education-content h4 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.university-name {
  opacity: 0.95;
  font-size: 1.05rem;
  margin: 0 0 1.5rem 0;
}

.education-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-label {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

.detail-value {
  font-size: 1.2rem;
  font-weight: 700;
}

/* Responsive design */
@media (max-width: 1200px) {
  .about-grid-balanced {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .education-details {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .education-item {
    padding: 2rem;
  }
  
  .about-card {
    padding: 2rem;
  }
}

/* ============================================
   SKILLS SECTION - MODERN CARD DESIGN
   ============================================ */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.skill-card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(74, 144, 226, 0.1);
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(74, 144, 226, 0.15);
}

.skill-card h3 {
  font-size: 1.8rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-category {
  margin-bottom: 2.5rem;
}

.skill-category:last-child {
  margin-bottom: 0;
}

.skill-category h4 {
  color: var(--dark-blue);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  padding: 0.7rem 1.5rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag.tech {
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(135, 206, 235, 0.1));
  color: var(--primary-blue);
}

.skill-tag.tech:hover {
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  color: white;
  transform: translateY(-3px);
}

.skill-tag.soft {
  background: linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(176, 224, 230, 0.1));
  color: var(--sky-blue);
}

.skill-tag.soft:hover {
  background: linear-gradient(135deg, var(--sky-blue), var(--light-blue));
  color: white;
  transform: translateY(-3px);
}

.skill-tag.language {
  background: linear-gradient(135deg, rgba(95, 158, 160, 0.1), rgba(135, 206, 235, 0.1));
  color: #5F9EA0;
}

.skill-tag.language:hover {
  background: linear-gradient(135deg, #5F9EA0, var(--sky-blue));
  color: white;
  transform: translateY(-3px);
}

/* ============================================
   PROJECTS SECTION - CARD GRID
   ============================================ */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(74, 144, 226, 0.1);
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary-blue), var(--sky-blue));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(74, 144, 226, 0.15);
}

.project-header {
  padding: 2.5rem;
  padding-bottom: 1.5rem;
}

.project-card h3 {
  font-size: 1.5rem;
  color: var(--dark-blue);
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.project-type {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(135, 206, 235, 0.1));
  color: var(--primary-blue);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-body {
  padding: 0 2.5rem 2.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  padding: 0.3rem 0.8rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-description {
  color: #5a6c7d;
  line-height: 1.7;
  font-size: 1rem;
}

/* ============================================
   CERTIFICATES SECTION - MASONRY LAYOUT
   ============================================ */
.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.certificate-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(74, 144, 226, 0.1);
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.15);
  border-color: var(--sky-blue);
}

.cert-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.cert-content p {
  color: #5a6c7d;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ============================================
   CONTACT SECTION - SPLIT LAYOUT
   ============================================ */
.contact-item {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border-left: 4px solid var(--sky-blue);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  word-break: break-word;
  overflow-wrap: break-word;
}

.contact-item:hover {
  transform: translateX(5px);
  border-left-color: var(--primary-blue);
}

.contact-item strong {
  color: var(--primary-blue);
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.contact-item span {
  word-break: break-word;
  overflow-wrap: break-word;
  display: block;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info-card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(74, 144, 226, 0.1);
}

.contact-info-card h3 {
  font-size: 1.8rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.05), rgba(135, 206, 235, 0.05));
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.contact-method:hover {
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(135, 206, 235, 0.1));
  transform: translateX(5px);
}

.contact-icon {
  font-size: 2rem;
  color: var(--primary-blue);
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
  min-width: 0;
}

.contact-details h4 {
  color: var(--dark-blue);
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.contact-details p {
  color: #5a6c7d;
  font-size: 0.95rem;
  word-break: break-word;
  overflow-wrap: break-word;
}

.contact-link {
  color: var(--primary-blue);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
  word-break: break-word;
  overflow-wrap: break-word;
  position: relative;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary-blue), var(--sky-blue));
  transition: width 0.3s ease;
}

.contact-link:hover {
  color: var(--sky-blue);
  transform: translateX(3px);
}

.contact-link:hover::after {
  width: 100%;
}

/* ============================================
   FOOTER - MINIMALIST
   ============================================ */
.footer {
  background: white;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(74, 144, 226, 0.1);
  margin-top: 8rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.footer p {
  color: #5a6c7d;
  font-size: 0.95rem;
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-in {
  animation: fadeInUp 0.8s ease both;
}

/* ============================================
   RESPONSIVE DESIGN - MOBILE & TABLET
   ============================================ */
@media (max-width: 1200px) {
  .main-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-wrapper {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    width: 300px;
    height: 300px;
  }
  
  .about-grid,
  .skills-grid,
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1.5rem;
  }
  
  .nav-menu {
    flex-wrap: wrap;
    gap: 0.3rem;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .hero-image {
    width: 250px;
    height: 250px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid,
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .main-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .btn {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
  
  .about-card,
  .skill-card,
  .project-card {
    padding: 2rem;
  }
}
`;

/* ============================================
   MAIN APP COMPONENT
   State Management & Routing
   ============================================ */
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject styles
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div className="app">
      <Particles />
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        scrolled={scrolled}
      />
      <main className="main-content">
        {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'certificates' && <Certificates />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

/* ============================================
   ANIMATED PARTICLES BACKGROUND
   ============================================ */
const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 20
  }));

  return (
    <div className="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
};

/* ============================================
   NAVIGATION COMPONENT
   ============================================ */
const Navigation = ({ activeSection, setActiveSection, scrolled }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">D M R Madhushika</div>
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item}>
              <button
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => setActiveSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

/* ============================================
   HOME SECTION - HERO
   ============================================ */
const Home = ({ setActiveSection }) => {
  return (
    <section className="home-section">
      <div className="hero-background"></div>
      <div className="hero-wrapper">
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src="/images/profileimg.png" 
              alt="Rushani Madhushika" 
              className="hero-image"
            />
          </div>
        </div>
        <div className="hero-content">
          <span className="hero-label">👋 Welcome to my portfolio</span>
          <h1 className="hero-title">Rushani Madhushika</h1>
          <h2 className="hero-subtitle">Software Engineering Student</h2>
          <p className="hero-description">
            Passionate about building creative solutions through technology and developing 
            user-friendly web applications. Transforming ideas into elegant digital experiences.
          </p>
          <div className="hero-buttons">
            <a 
              href="/DMRM CV.pdf" 
              className="btn btn-primary" 
              download="Rushani_Madhushika_CV.pdf"
            >
              📄 Download CV
            </a>
            <button className="btn btn-secondary" onClick={() => setActiveSection('contact')}>
              💬 Get in Touch
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3.66</span>
              <span className="stat-label">GPA / 4.0</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">17+</span>
              <span className="stat-label">Certificates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   ABOUT SECTION
   ============================================ */
const About = () => {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-label">Get to know me</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
          Enthusiastic learner with a passion for technology and innovation
        </p>
      </div>

      <div className="about-grid-balanced">
        <div className="about-card">
          <h3><span className="icon">👨‍💻</span> My Story</h3>
          <p>
            I'm an enthusiastic undergraduate Software Engineering student with a strong 
            passion for learning and building creative solutions through technology. I enjoy 
            developing user-friendly web applications and exploring new programming tools 
            and frameworks.
          </p>
          <p>
            I'm eager to apply my academic knowledge to real-world projects, grow as a 
            developer, and contribute to a professional team environment.
          </p>
        </div>

        <div className="about-card">
          <h3><span className="icon">🎓</span> Education</h3>
          <div className="education-item">
            <div className="education-content">
              <h4>BSc (Hons) in Software Engineering</h4>
              <p className="university-name">KAATSU International University (KIU)</p>
            </div>
            <div className="education-details">
              <div className="detail-item">
                <span className="detail-label">📅 Duration</span>
                <span className="detail-value">2024 - Present</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎯 GPA</span>
                <span className="detail-value">3.66 / 4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   SKILLS SECTION
   ============================================ */
const Skills = () => {
  const skillsData = {
    technical: [
      { category: 'Programming Languages', skills: ['Java', 'JavaScript', 'PHP', 'Python', 'C++', 'C#'] },
      { category: 'Web Development', skills: ['HTML', 'CSS', 'React.js'] },
      { category: 'Frameworks & Tools', skills: ['Spring Boot', 'RStudio', 'MS Office', 'MySQL'] },
      { category: 'Networking', skills: ['Cisco Packet Tracer'] }
    ],
    soft: ['Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Leadership', 'Creativity', 'Critical Thinking', 'Work Ethic', 'Interpersonal Skills'],
    languages: ['Sinhala', 'English', 'Tamil (Basics)']
  };

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-label">My expertise</span>
        <h2 className="section-title">Skills & Abilities</h2>
        <p className="section-description">
          A comprehensive overview of my technical and interpersonal capabilities
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3><span className="icon">⚡</span> Technical Skills</h3>
          {skillsData.technical.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <h4>{cat.category}</h4>
              <div className="skill-items">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag tech">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-card">
          <h3><span className="icon">🤝</span> Soft Skills</h3>
          <div className="skill-category">
            <div className="skill-items">
              {skillsData.soft.map((skill, idx) => (
                <span key={idx} className="skill-tag soft">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category" style={{ marginTop: '2.5rem' }}>
            <h4>Languages</h4>
            <div className="skill-items">
              {skillsData.languages.map((lang, idx) => (
                <span key={idx} className="skill-tag language">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   PROJECTS SECTION
   ============================================ */
const Projects = () => {
  const projects = [
    {
      title: 'Mobile Pro',
      subtitle: 'E-Commerce Phone Shop',
      type: 'Web Application',
      tech: ['React.js', 'PHP', 'MySQL'],
      description: 'Full-featured e-commerce platform with product management, order tracking, repair services, Phone Matcher tool, real-time stock monitoring, and automated reporting system.'
    },
    {
      title: 'ShutterFix Website',
      subtitle: 'Photography E-Commerce',
      type: 'E-Commerce Site',
      tech: ['HTML', 'PHP', 'JavaScript'],
      description: 'Responsive e-commerce website enabling users to view photography galleries, browse service packages, and make online bookings seamlessly.'
    },
    {
      title: 'ShutterFix Management',
      subtitle: 'Photography System',
      type: 'Desktop Application',
      tech: ['Java'],
      description: 'Standalone Java application for comprehensive photography business management including billing, booking scheduling, customer management, and payment processing.'
    },
    {
      title: 'Mehra HR System',
      subtitle: 'Human Resource Management',
      type: 'Desktop Application',
      tech: ['Java', 'OOP', 'Design Patterns'],
      description: 'Enterprise HRIS automating HR operations with employee record management, salary calculations, and GUI for CRUD operations. Implements Singleton, Factory, and Strategy patterns.'
    },
    {
      title: 'Ice World',
      subtitle: 'Responsive Web Design',
      type: 'Practice Project',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'Modern responsive website frontend showcasing UI/UX design skills with smooth animations, intuitive layouts, and cross-device compatibility.'
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-label">My work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          A showcase of my development journey and technical expertise
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <p style={{ color: '#5a6c7d', marginBottom: '1rem' }}>{project.subtitle}</p>
              <span className="project-type">{project.type}</span>
            </div>
            <div className="project-body">
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ============================================
   CERTIFICATES SECTION
   ============================================ */
const Certificates = () => {
  const certificates = [
    'Programming in Python - Python for Beginners (University of Moratuwa)',
    'Introduction to PHP (Training Facility UK)',
    'PHP for Beginners (SimonSezIT)',
    'Web Development with HTML and CSS for Beginners (Zenva)',
    'Introduction to UI UX Design (Ilbey UCAR)',
    'Java Programming Masterclass (Quaatso)',
    'Artificial Intelligence in Education and Learning (Proactive Ideas)',
    'GIT Fundamentals (Quaatso)',
    'React JavaScript (Digital Partner)',
    'SQL for Beginners (Training Facility UK)',
    'Fundamentals of Human-Computer Information Retrieval (University of North Carolina)',
    'ReactJS Projects For Beginners (Simplilearn)',
    'Full Stack Developer Course (Simplilearn)',
    'Getting Started with ReactJS Components (Simplilearn)',
    'Introduction to Flutter Course (Simplilearn)',
    'Introduction to MERN Stack Course (Simplilearn)',
    'WordPress for Beginners (Training Facility UK)',
    'Android App Development for Beginners (Simplilearn)',
    'Introduction to JIRA (Simplilearn)'
  ];

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-label">Continuous learning</span>
        <h2 className="section-title">Certificates & Courses</h2>
        <p className="section-description">
          Professional development and skill enhancement through various learning platforms
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div key={idx} className="certificate-card">
            <span className="cert-icon">🎓</span>
            <div className="cert-content">
              <p>{cert}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ============================================
   CONTACT SECTION
   ============================================ */
const Contact = () => {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-label">Let's connect</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>

      <div className="contact-wrapper" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <div className="contact-method">
            <span className="contact-icon">📧</span>
            <div className="contact-details">
              <h4>Email</h4>
              <p>rushanimadhushika77@gmail.com</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="contact-icon">📱</span>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+94 71 490 3526</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="contact-icon">📍</span>
            <div className="contact-details">
              <h4>Location</h4>
              <p>No.394/3/16, School Road<br/>Thanthirimulla, Panadura</p>
            </div>
          </div>
          <div className="contact-method">
           <span className="contact-icon">🔗</span>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/rushani-madhushika-658472310" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                 linkedin.com/in/rushani-madhushika-658472310
                </a>
              </div>
          </div>
          <div className="contact-method">
            <span className="contact-icon">💻</span>
            <div className="contact-details">
              <h4>GitHub</h4>
              <a 
                href="https://github.com/DMR-Madhushika" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/DMR-Madhushika
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   FOOTER COMPONENT
   ============================================ */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 D M R Madhushika</p>
      </div>
    </footer>
  );
};

export default App;