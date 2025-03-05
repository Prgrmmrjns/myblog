<template>
    <div class="coffee-container" :class="{ 'spill': isSpilling }">
      <svg class="coffee-svg" viewBox="0 0 200 200" width="250" height="250" @mouseenter="startSpill" @mouseleave="stopSpill">
        <!-- Laptop (kept separate from the cup) -->
        <g class="laptop">
          <!-- Laptop base -->
          <rect x="40" y="140" width="120" height="10" rx="2" fill="#333" />
          <!-- Laptop screen -->
          <rect x="50" y="100" width="100" height="40" rx="2" fill="#333" />
          <rect x="55" y="105" width="90" height="30" rx="1" fill="#1a1a1a" />
          <!-- Screen content (code-like lines) -->
          <rect x="60" y="110" width="50" height="2" fill="#64ffda" opacity="0.8" />
          <rect x="60" y="115" width="70" height="2" fill="#64ffda" opacity="0.6" />
          <rect x="60" y="120" width="40" height="2" fill="#64ffda" opacity="0.8" />
          <rect x="60" y="125" width="60" height="2" fill="#64ffda" opacity="0.7" />
        </g>
        
        <!-- Coffee cup group (this will rotate) -->
        <g class="coffee-cup-group">
          <!-- Cup -->
          <path class="cup" d="M70,40 L70,80 Q70,90 80,90 L120,90 Q130,90 130,80 L130,40 Z" fill="#f5f5f5" />
          
          <!-- Handle -->
          <path class="handle" d="M130,55 Q145,55 145,65 Q145,75 130,75" fill="none" stroke="#f5f5f5" stroke-width="4" stroke-linecap="round" />
          
          <!-- Coffee in cup -->
          <path class="coffee" d="M73,45 L73,80 Q73,87 80,87 L120,87 Q127,87 127,80 L127,45 Z" fill="#6F4E37" />
          
          <!-- Steam -->
          <path class="steam steam-1" d="M80,30 Q85,20 90,30" fill="none" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" />
          <path class="steam steam-2" d="M100,30 Q105,15 110,30" fill="none" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" />
          <path class="steam steam-3" d="M90,25 Q95,15 100,25" fill="none" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" />
        </g>
        
        <!-- Spill (initially hidden) -->
        <path class="spill-coffee" d="M130,70 Q145,85 120,110" fill="none" stroke="#6F4E37" stroke-width="5" stroke-linecap="round" opacity="0" />
        
        <!-- Coffee puddle on laptop (initially hidden) -->
        <ellipse class="coffee-puddle" cx="100" cy="100" rx="0" ry="0" fill="#6F4E37" opacity="0" />
      </svg>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSpilling = ref(false);
  
  function startSpill() {
    isSpilling.value = true;
  }
  
  function stopSpill() {
    isSpilling.value = false;
  }
  </script>
  
  <style scoped>
  .coffee-container {
    position: relative;
    display: inline-block;
    transition: transform 0.5s ease;
    margin: 20px 0;
  }
  
  .coffee-svg {
    transition: transform 0.5s ease;
  }
  
  .coffee-cup-group {
    transition: transform 0.5s ease;
  }
  
  .spill .coffee-cup-group {
    transform: rotate(15deg);
    transform-origin: center 70px;
  }
  
  .spill .spill-coffee {
    animation: spill-anim 0.7s ease forwards;
  }
  
  .spill .coffee-puddle {
    animation: puddle-anim 0.5s ease 0.3s forwards;
  }
  
  @keyframes spill-anim {
    0% {
      opacity: 0;
      stroke-dasharray: 0 100;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
      stroke-dasharray: 100 0;
    }
  }
  
  @keyframes puddle-anim {
    0% {
      opacity: 0;
      rx: 0;
      ry: 0;
    }
    100% {
      opacity: 0.8;
      rx: 25;
      ry: 10;
    }
  }
  
  .steam {
    opacity: 0.6;
    transform-origin: center;
    animation: steam-anim 2s ease-in-out infinite;
  }
  
  .steam-1 {
    animation-delay: 0.2s;
  }
  
  .steam-2 {
    animation-delay: 0.6s;
  }
  
  .steam-3 {
    animation-delay: 1s;
  }
  
  @keyframes steam-anim {
    0% {
      opacity: 0;
      transform: translateY(0) scaleX(1);
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0;
      transform: translateY(-15px) scaleX(1.5);
    }
  }
  
  .laptop {
    transition: transform 0.3s ease;
  }
  
  .spill .laptop {
    animation: laptop-shake 0.3s ease 0.4s;
  }
  
  @keyframes laptop-shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
  </style>