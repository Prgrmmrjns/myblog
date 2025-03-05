<template>
  <div class="bookshelf-container" :class="{ 'book-falling': isBookFalling }">
    <svg class="bookshelf-svg" viewBox="0 0 240 200" width="220" height="180" @mouseenter="startBookFall" @mouseleave="stopBookFall">
      <!-- Bookshelf structure -->
      <!-- Bottom shelf -->
      <rect class="shelf shelf-bottom" x="40" y="160" width="160" height="8" rx="2" fill="#8B4513" />
      <!-- Middle shelf -->
      <rect class="shelf shelf-middle" x="40" y="110" width="160" height="8" rx="2" fill="#8B4513" />
      <!-- Top shelf -->
      <rect class="shelf shelf-top" x="40" y="60" width="160" height="8" rx="2" fill="#8B4513" />
      <!-- Side supports -->
      <rect class="shelf-support-left" x="40" y="60" width="6" height="108" fill="#8B4513" />
      <rect class="shelf-support-right" x="194" y="60" width="6" height="108" fill="#8B4513" />
      
      <!-- Books on bottom shelf (static) -->
      <rect class="book bottom-book-1" x="50" y="125" width="20" height="35" fill="#3498db" />
      <rect class="book bottom-book-2" x="70" y="130" width="15" height="30" fill="#e74c3c" />
      <rect class="book bottom-book-3" x="85" y="128" width="22" height="32" fill="#2ecc71" />
      <rect class="book bottom-book-4" x="107" y="125" width="18" height="35" fill="#f1c40f" />
      <rect class="book bottom-book-5" x="125" y="133" width="25" height="27" fill="#9b59b6" />
      <rect class="book bottom-book-6" x="150" y="125" width="15" height="35" fill="#e67e22" />
      <rect class="book bottom-book-7" x="165" y="128" width="20" height="32" fill="#1abc9c" />
      
      <!-- Books on middle shelf (static) -->
      <rect class="book middle-book-1" x="45" y="75" width="25" height="35" fill="#1abc9c" />
      <rect class="book middle-book-2" x="70" y="78" width="18" height="32" fill="#3498db" />
      <rect class="book middle-book-3" x="88" y="75" width="22" height="35" fill="#e74c3c" />
      <rect class="book middle-book-4" x="110" y="80" width="15" height="30" fill="#2ecc71" />
      <rect class="book middle-book-5" x="125" y="75" width="20" height="35" fill="#f1c40f" />
      <rect class="book middle-book-6" x="145" y="78" width="25" height="32" fill="#9b59b6" />
      <rect class="book middle-book-7" x="170" y="75" width="20" height="35" fill="#e67e22" />
      
      <!-- Books on top shelf (static) -->
      <rect class="book top-book-1" x="45" y="25" width="18" height="35" fill="#e67e22" />
      <rect class="book top-book-2" x="63" y="28" width="22" height="32" fill="#9b59b6" />
      <rect class="book top-book-3" x="85" y="25" width="15" height="35" fill="#3498db" />
      <rect class="book top-book-4" x="100" y="30" width="20" height="30" fill="#2ecc71" />
      <rect class="book top-book-5" x="120" y="25" width="25" height="35" fill="#f1c40f" />
      <rect class="book top-book-6" x="145" y="28" width="15" height="32" fill="#e74c3c" />
      <!-- Empty space for falling book -->
      
      <!-- Falling Book (at right edge of top shelf) -->
      <g class="falling-book">
        <rect x="160" y="25" width="20" height="35" rx="1" fill="#1abc9c" />
        <line x1="165" y1="30" x2="165" y2="55" stroke="#fff" stroke-width="0.5" opacity="0.5" />
        <line x1="170" y1="30" x2="170" y2="55" stroke="#fff" stroke-width="0.5" opacity="0.5" />
        <line x1="175" y1="30" x2="175" y2="55" stroke="#fff" stroke-width="0.5" opacity="0.5" />
      </g>
      
      <!-- Pages flying out effect (only visible during fall) -->
      <g class="flying-pages">
        <path d="M165,35 Q170,30 175,35" fill="none" stroke="#fff" stroke-width="1" />
        <path d="M165,45 Q175,40 170,50" fill="none" stroke="#fff" stroke-width="1" />
        <path d="M170,40 Q165,50 175,45" fill="none" stroke="#fff" stroke-width="1" />
      </g>
      
      <!-- Shadow on floor (only visible during/after fall) -->
      <ellipse class="book-shadow" cx="170" cy="170" rx="0" ry="0" fill="#000" opacity="0" />
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isBookFalling = ref(false);

function startBookFall() {
  isBookFalling.value = true;
}

function stopBookFall() {
  setTimeout(() => {
    isBookFalling.value = false;
  }, 600); // Small delay before allowing the book to return
}
</script>

<style scoped>
.bookshelf-container {
  position: relative;
  display: inline-block;
  margin: 10px 0;
}

.bookshelf-svg {
  overflow: visible; /* Allow book to fall outside of SVG bounds */
}

.falling-book {
  transform-origin: 170px 25px;
  transition: transform 0.1s ease;
}

.book-falling .falling-book {
  animation: book-fall 0.8s cubic-bezier(0.2, 0.85, 0.4, 1.2) forwards;
}

.flying-pages {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.book-falling .flying-pages {
  animation: pages-fly 0.6s ease-in 0.2s forwards;
}

.book-shadow {
  transition: all 0.3s ease;
}

.book-falling .book-shadow {
  animation: shadow-appear 0.3s ease 0.6s forwards;
}

@keyframes book-fall {
  0% {
    transform: rotate(0deg) translateY(0) translateX(0);
  }
  30% {
    transform: rotate(25deg) translateY(50px) translateX(10px);
  }
  60% {
    transform: rotate(10deg) translateY(100px) translateX(5px);
  }
  100% {
    transform: rotate(0deg) translateY(145px) translateX(-10px);
  }
}

@keyframes pages-fly {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.8);
  }
  30% {
    opacity: 0.9;
    transform: translate(-5px, 20px) scale(1);
  }
  70% {
    opacity: 0.7;
    transform: translate(10px, 50px) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(15px, 80px) scale(0.5);
  }
}

@keyframes shadow-appear {
  0% {
    opacity: 0;
    rx: 0;
    ry: 0;
  }
  100% {
    opacity: 0.3;
    rx: 15;
    ry: 3;
  }
}

/* Add a subtle wobble to nearby books when one is falling */
.book-falling .top-book-5, 
.book-falling .top-book-6 {
  animation: book-wobble 0.3s ease-in-out;
}

@keyframes book-wobble {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-2px) rotate(-1deg); }
  50% { transform: translateX(1px) rotate(0.5deg); }
  75% { transform: translateX(-1px) rotate(0deg); }
  100% { transform: translateX(0) rotate(0deg); }
}

/* Make sure the book that's falling doesn't wobble with the others */
.book-falling .falling-book {
  animation: book-fall 0.8s cubic-bezier(0.2, 0.85, 0.4, 1.2) forwards;
}
</style> 