<template>
  <div class="robot-container">
    <svg class="robot-svg" viewBox="0 0 200 200" width="150" height="150">
      <!-- Robot head -->
      <rect x="65" y="40" width="70" height="60" rx="10" fill="#4a5568" class="robot-head" />
      
      <!-- Robot eyes -->
      <circle cx="85" cy="65" r="10" fill="#64ffda" class="robot-eye" />
      <circle cx="115" cy="65" r="10" fill="#64ffda" class="robot-eye" />
      
      <!-- Robot mouth -->
      <rect x="80" y="85" width="40" height="5" rx="2" fill="#e2e8f0" />
      
      <!-- Robot antenna -->
      <line x1="100" y1="40" x2="100" y2="25" stroke="#4a5568" stroke-width="3" />
      <circle cx="100" cy="20" r="5" fill="#64ffda" />
      
      <!-- Robot body -->
      <rect x="75" y="100" width="50" height="40" rx="5" fill="#4a5568" class="robot-body" />
      
      <!-- Robot legs -->
      <rect x="83" y="140" width="10" height="30" rx="2" fill="#4a5568" />
      <rect x="107" y="140" width="10" height="30" rx="2" fill="#4a5568" />
      
      <!-- Robot arms -->
      <rect x="50" y="110" width="25" height="8" rx="4" fill="#4a5568" class="robot-arm left-arm" />
      
      <!-- Right arm (the one that waves) -->
      <rect x="125" y="110" width="25" height="8" rx="4" fill="#4a5568" class="robot-arm right-arm" />
      
      <!-- Robot hands -->
      <circle cx="50" cy="114" r="5" fill="#e2e8f0" class="robot-hand left-hand" />
      <circle cx="150" cy="114" r="5" fill="#e2e8f0" class="robot-hand right-hand" />
    </svg>
  </div>
</template>

<script setup>
// No specific setup needed for this component
</script>

<style scoped>
.robot-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.robot-svg {
  transition: transform 0.3s ease;
}

.robot-container:hover .right-arm {
  animation: wave 1s ease-in-out infinite;
  transform-origin: 125px 114px;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.robot-eye {
  transition: all 0.3s ease;
}

.robot-container:hover .robot-eye {
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0% {
    transform: scaleY(1);
  }
  10% {
    transform: scaleY(0.1);
  }
  20% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}

.robot-container:hover .right-hand {
  animation: hand-wave 1s ease-in-out infinite;
}

@keyframes hand-wave {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px) translateX(-2px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px) translateX(-2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style> 