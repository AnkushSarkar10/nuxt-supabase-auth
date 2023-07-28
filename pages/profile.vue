<script setup lang='ts'>
definePageMeta({
  middleware: 'auth',
});

const userName = ref<string>('John Doe');
const userEmail = ref<string>('john.doe@example.com');
</script>

<template>
    <div class="min-h-screen flex flex-col items-center pt-14 px-20">
        <h1 class="text-4xl font-bold">User Profile</h1>

        <div class="mt-16 p-10 rounded-3xl shadow-lg flex items-center border-[3px] border-violet-600">
            <div class="mr-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                    alt="User Photo" class="w-28 h-28 rounded-full border-[3px] border-violet-600" />
            </div>
            <div>
                <h2 class="text-2xl font-bold">{{ userName }}</h2>
                <p class="text-gray-400">Email: {{ userEmail }}</p>
            </div>
        </div>
    </div>
</template>
  

<style scoped></style>