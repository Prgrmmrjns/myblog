<template>
  <div 
    class="letter-animation-container"
    @mouseenter="startAnimation"
    @mouseleave="stopAnimation"
  >
    <!-- Mailbox (stationary) -->
    <div class="mailbox">
      <svg class="mailbox-svg" viewBox="0 0 200 150" width="150" height="150">
        <!-- Mailbox body -->
        <rect x="120" y="40" width="70" height="90" rx="5" fill="#4a5568" class="mailbox-body" />
        
        <!-- Mailbox post/stand -->
        <rect x="145" y="130" width="20" height="20" fill="#718096" />
        
        <!-- Mailbox slot -->
        <rect x="135" y="70" width="40" height="8" rx="2" fill="#2d3748" class="mailbox-slot" />
        
        <!-- Mailbox flag -->
        <rect x="190" y="50" width="8" height="30" fill="#f56565" class="mailbox-flag" />
        
        <!-- Mailbox details -->
        <rect x="135" y="90" width="40" height="2" fill="#2d3748" />
        <rect x="135" y="100" width="40" height="2" fill="#2d3748" />
      </svg>
    </div>
    
    <!-- Letter (animated) -->
    <div class="letter" :class="{ 'flying': isFlying, 'delivered': isDelivered }">
      <svg class="letter-svg" viewBox="0 0 40 30" width="60" height="45">
        <!-- Envelope body -->
        <rect x="0" y="0" width="40" height="30" rx="2" fill="#f5f5f5" />
        
        <!-- Envelope fold lines -->
        <path d="M0,0 L20,15 L40,0" fill="#e2e8f0" />
        <path d="M0,30 L15,15 M40,30 L25,15" stroke="#e2e8f0" stroke-width="0.5" />
        
        <!-- Stamp -->
        <rect x="28" y="5" width="7" height="7" rx="1" fill="#64ffda" />
      </svg>
    </div>
    
    <!-- Success indicator (appears after delivery) -->
    <div class="success-indicator" :class="{ 'show': isDelivered }">
      <svg viewBox="0 0 20 20" width="30" height="30">
        <circle cx="10" cy="10" r="9" fill="#48bb78" />
        <path d="M6,10 L9,13 L14,7" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isFlying = ref(false);
const isDelivered = ref(false);
let animationTimers = [];

// Clear any existing timers to prevent memory leaks
function clearTimers() {
  animationTimers.forEach(timer => clearTimeout(timer));
  animationTimers = [];
}

function startAnimation() {
  // Reset states
  clearTimers();
  isDelivered.value = false;
  
  // Start animation
  isFlying.value = true;
  
  // After animation completes (match this with the CSS animation duration)
  const timer = setTimeout(() => {
    isDelivered.value = true;
    isFlying.value = false;
  }, 2000);
  
  animationTimers.push(timer);
}

function stopAnimation() {
  // If we want to instantly reset animation when mouse leaves
  clearTimers();
  isFlying.value = false;
  isDelivered.value = false;
}
</script>

<style scoped>
.letter-animation-container {
  position: relative;
  height: 200px;
  margin: 30px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
}

/* Fix duplicate mailbox definition - use just one */
.mailbox {
  position: absolute;
  right: 40%;
  bottom: 10px;
  z-index: 2;
}

/* Add a small shadow to the mailbox */
.mailbox-svg {
  filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.2));
}

.letter {
  position: absolute;
  left: -80px;
  top: 75px;
  z-index: 1;
  opacity: 0;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.15));
}

.letter.flying {
  animation: fly-to-mailbox 2s forwards;
}

.letter.delivered {
  opacity: 0;
}

/* Mailbox flag animation after delivery */
.letter.delivered + .mailbox .mailbox-flag {
  animation: raise-flag 0.5s ease-out forwards;
}

/* Only activate slot glow when letter is flying */
.letter.flying ~ .mailbox .mailbox-slot {
  animation: slot-glow 2s ease;
}

.success-indicator {
  position: absolute;
  top: 70px;
  right: 35%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
}

.success-indicator.show {
  opacity: 1;
  transform: scale(1);
  animation: pop-in 0.5s ease-out;
}

/* Keep all the existing animations */
@keyframes fly-to-mailbox {
  0% {
    opacity: 1;
    left: -80px;
    top: 75px;
    transform: rotate(0deg) scale(1);
  }
  25% {
    left: 15%;
    top: 50px;
    transform: rotate(10deg) scale(1);
  }
  50% {
    left: 35%;
    top: 60px;
    transform: rotate(-5deg) scale(1);
  }
  75% {
    left: 45%;
    top: 70px;
    transform: rotate(0deg) scale(1);
  }
  85% {
    opacity: 1;
    left: 52%;
    top: 73px;
    transform: rotate(0deg) scale(1);
  }
  95% {
    opacity: 0.8;
    left: 60%;
    top: 74px;
    transform: rotate(0deg) scale(0.8);
  }
  100% {
    opacity: 0;
    left: 63%;
    top: 74px;
    transform: rotate(0deg) scale(0.5);
  }
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes raise-flag {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes slot-glow {
  0% {
    filter: brightness(1);
  }
  85% {
    filter: brightness(1);
  }
  90% {
    filter: brightness(1.5);
  }
  95% {
    filter: brightness(1.8);
  }
  100% {
    filter: brightness(1);
  }
}
</style> 