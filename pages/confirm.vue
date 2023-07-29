<template>
    <div class="flex w-full justify-center pt-20 text-3xl">
        Redirecting...
    </div>
</template>
  
<script setup>
const user = useSupabaseUser()

watchEffect(() => {
    if (user.value) {
        navigateTo('/')
    }
})
</script>