<template>
    <NuxtPage />
</template>
  
<style>
@keyframes fadeIn {
    0% {
        opacity: 0.001
    }

    100% {
        opacity: 1
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1,
    }

    100% {
        opacity: 0.001
    }
}

.page-enter-active,
.page-leave-active {
    transition: opacity 100ms;
}

.page-enter,
.page-leave-to {
    opacity: 0;
}

.page-enter-active {
    animation-duration: 100ms;
    animation-name: fadeIn;
    animation-timing-function: linear;
    backface-visibility: hidden;
}

.page-leave-active {
    animation-name: fadeOut;
    animation-duration: 0.001s;
}
</style>