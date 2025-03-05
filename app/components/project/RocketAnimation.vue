<template>
  <div class="rocket-container" :class="{ 'launching': isLaunching }">
    <svg class="rocket-svg" viewBox="0 0 200 200" width="180" height="180" @mouseenter="startLaunch" @mouseleave="stopLaunch">
      <!-- Ground/Platform (grouped for animation) -->
      <g class="platform">
        <rect x="50" y="160" width="100" height="10" rx="2" fill="#555" />
        <rect x="70" y="170" width="60" height="5" rx="1" fill="#444" />
      </g>
      
      <!-- Rocket Group -->
      <g class="rocket-group">
        <!-- Rocket Body -->
        <rect x="85" y="100" width="30" height="50" rx="5" fill="#f5f5f5" />
        
        <!-- Rocket Nose Cone -->
        <path d="M85,100 L100,80 L115,100 Z" fill="#f5f5f5" />
        
        <!-- Rocket Window -->
        <circle cx="100" cy="110" r="5" fill="#64ffda" />
        
        <!-- Rocket Fins -->
        <path d="M85,150 L75,160 L85,150 Z" fill="#f5f5f5" />
        <path d="M115,150 L125,160 L115,150 Z" fill="#f5f5f5" />
        
        <!-- Rocket Bottom -->
        <rect x="85" y="150" width="30" height="5" rx="2" fill="#777" />
        
        <!-- Flames (enhanced) -->
        <g class="flames">
          <!-- Center flames -->
          <path class="flame flame-center-1" d="M95,155 Q100,185 105,155" fill="none" stroke="#ff5722" stroke-width="4" stroke-linecap="round" />
          <path class="flame flame-center-2" d="M93,155 Q100,180 107,155" fill="none" stroke="#ffeb3b" stroke-width="5" stroke-linecap="round" />
          <path class="flame flame-center-3" d="M97,155 Q100,190 103,155" fill="none" stroke="#ff9800" stroke-width="3" stroke-linecap="round" />
          
          <!-- Left flames -->
          <path class="flame flame-left-1" d="M90,155 Q85,170 88,155" fill="none" stroke="#ff5722" stroke-width="3" stroke-linecap="round" />
          <path class="flame flame-left-2" d="M88,155 Q80,175 90,160" fill="none" stroke="#ff9800" stroke-width="3" stroke-linecap="round" />
          <path class="flame flame-left-3" d="M87,155 Q75,165 89,158" fill="none" stroke="#ffeb3b" stroke-width="2" stroke-linecap="round" />
          
          <!-- Right flames -->
          <path class="flame flame-right-1" d="M110,155 Q115,170 112,155" fill="none" stroke="#ff5722" stroke-width="3" stroke-linecap="round" />
          <path class="flame flame-right-2" d="M112,155 Q120,175 110,160" fill="none" stroke="#ff9800" stroke-width="3" stroke-linecap="round" />
          <path class="flame flame-right-3" d="M113,155 Q125,165 111,158" fill="none" stroke="#ffeb3b" stroke-width="2" stroke-linecap="round" />
          
          <!-- Secondary smaller flames -->
          <path class="flame flame-small-1" d="M93,155 Q90,165 96,157" fill="none" stroke="#ff5722" stroke-width="2" stroke-linecap="round" />
          <path class="flame flame-small-2" d="M107,155 Q110,165 104,157" fill="none" stroke="#ff5722" stroke-width="2" stroke-linecap="round" />
          <path class="flame flame-small-3" d="M100,155 Q98,170 102,158" fill="none" stroke="#ff9800" stroke-width="2" stroke-linecap="round" />
        </g>
      </g>
      
      <!-- Launch Smoke (initially hidden) -->
      <g class="smoke">
        <circle class="smoke-particle smoke-1" cx="90" cy="165" r="0" fill="#aaa" opacity="0" />
        <circle class="smoke-particle smoke-2" cx="100" cy="170" r="0" fill="#aaa" opacity="0" />
        <circle class="smoke-particle smoke-3" cx="110" cy="165" r="0" fill="#aaa" opacity="0" />
        <circle class="smoke-particle smoke-4" cx="85" cy="170" r="0" fill="#aaa" opacity="0" />
        <circle class="smoke-particle smoke-5" cx="115" cy="170" r="0" fill="#aaa" opacity="0" />
      </g>
      
      <!-- Stars in background -->
      <circle cx="30" cy="40" r="1" fill="white" />
      <circle cx="50" cy="30" r="1" fill="white" />
      <circle cx="160" cy="20" r="1.5" fill="white" />
      <circle cx="140" cy="60" r="1" fill="white" />
      <circle cx="170" cy="50" r="1" fill="white" />
      <circle cx="20" cy="70" r="1.5" fill="white" />
      <circle cx="180" cy="80" r="1" fill="white" />
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLaunching = ref(false);

function startLaunch() {
  isLaunching.value = true;
}

function stopLaunch() {
  setTimeout(() => {
    isLaunching.value = false;
  }, 500); // Small delay to prevent abrupt animation stop
}
</script>

<style scoped>
.rocket-container {
  position: relative;
  display: inline-block;
  margin: 20px 0;
}

.rocket-svg {
  transition: transform 0.3s ease;
}

.rocket-group {
  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: center 130px;
}

.launching .rocket-group {
  transform: translateY(-60px);
}

/* Platform fade-out animation */
.platform {
  transition: opacity 0.8s ease, transform 1.2s ease;
}

.launching .platform {
  opacity: 0;
  transform: translateY(20px);
}

.flames {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.launching .flames {
  opacity: 1;
}

.flame {
  transform-origin: center bottom;
  animation: flame-anim 0.5s ease-in-out infinite alternate;
  stroke-dasharray: 30;
  stroke-dashoffset: 0;
}

/* Center flames */
.flame-center-1 {
  animation: flame-anim 0.3s ease-in-out infinite alternate;
  animation-delay: 0.1s;
}

.flame-center-2 {
  animation: flame-anim 0.4s ease-in-out infinite alternate;
  animation-delay: 0.05s;
}

.flame-center-3 {
  animation: flame-anim 0.5s ease-in-out infinite alternate;
  animation-delay: 0.15s;
}

/* Left flames */
.flame-left-1 {
  animation: flame-anim-left 0.3s ease-in-out infinite alternate;
  animation-delay: 0.2s;
}

.flame-left-2 {
  animation: flame-anim-left 0.4s ease-in-out infinite alternate;
  animation-delay: 0.1s;
}

.flame-left-3 {
  animation: flame-anim-left 0.35s ease-in-out infinite alternate;
  animation-delay: 0.25s;
}

/* Right flames */
.flame-right-1 {
  animation: flame-anim-right 0.3s ease-in-out infinite alternate;
  animation-delay: 0.2s;
}

.flame-right-2 {
  animation: flame-anim-right 0.4s ease-in-out infinite alternate;
  animation-delay: 0.1s;
}

.flame-right-3 {
  animation: flame-anim-right 0.35s ease-in-out infinite alternate;
  animation-delay: 0.25s;
}

/* Small flames */
.flame-small-1, .flame-small-2, .flame-small-3 {
  animation: flame-anim-small 0.25s ease-in-out infinite alternate;
  animation-delay: 0.15s;
}

@keyframes flame-anim {
  0% {
    transform: scaleY(0.8);
    opacity: 0.7;
  }
  100% {
    transform: scaleY(1.2);
    opacity: 1;
  }
}

@keyframes flame-anim-left {
  0% {
    transform: scaleY(0.8) rotate(-5deg);
    opacity: 0.7;
  }
  100% {
    transform: scaleY(1.2) rotate(-10deg);
    opacity: 1;
  }
}

@keyframes flame-anim-right {
  0% {
    transform: scaleY(0.8) rotate(5deg);
    opacity: 0.7;
  }
  100% {
    transform: scaleY(1.2) rotate(10deg);
    opacity: 1;
  }
}

@keyframes flame-anim-small {
  0% {
    transform: scaleY(0.6);
    opacity: 0.5;
  }
  100% {
    transform: scaleY(1.1);
    opacity: 0.9;
  }
}

.launching .smoke-particle {
  animation: smoke-anim 1.5s ease-out forwards;
}

.smoke-1 {
  animation-delay: 0.1s;
}

.smoke-2 {
  animation-delay: 0.3s;
}

.smoke-3 {
  animation-delay: 0.2s;
}

.smoke-4 {
  animation-delay: 0.4s;
}

.smoke-5 {
  animation-delay: 0.2s;
}

@keyframes smoke-anim {
  0% {
    opacity: 0;
    r: 0;
    transform: translateY(0) translateX(0);
  }
  20% {
    opacity: 0.8;
    r: 10;
  }
  100% {
    opacity: 0;
    r: 20;
    transform: translateY(40px) translateX(var(--smoke-x, 0));
  }
}

.smoke-1 {
  --smoke-x: -15px;
}

.smoke-2 {
  --smoke-x: 5px;
}

.smoke-3 {
  --smoke-x: 15px;
}

.smoke-4 {
  --smoke-x: -20px;
}

.smoke-5 {
  --smoke-x: 20px;
}
</style> 