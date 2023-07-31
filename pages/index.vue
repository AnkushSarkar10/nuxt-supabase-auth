<script setup lang='ts'>
import { Database } from '../types/supabase'

definePageMeta({
  middleware: 'auth',
});

const user = useSupabaseUser();
const client = useSupabaseClient<Database>();

const logout = async () => {
  const { error } = await client.auth.signOut();
  console.log('logout')
  if (error) throw error
  navigateTo('/login')
}


onMounted(() => {
  console.log(user.value?.id);
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center pt-14 px-20">
    <div class="w-full flex gap-10 justify-end">
      <NuxtLink v-if="!user" to="/login" class="px-5 py-2 bg-violet-600 font-semibold text-lg uppercase rounded">
        Login
      </NuxtLink>
      <button v-if="user" @click="logout" class="px-5 py-2 bg-red-600 font-semibold text-lg uppercase rounded">
        Logout
      </button>
    </div>

    <h1 class="text-4xl font-bold pt-20">User Management with Nuxt and Supabase</h1>

    <NuxtLink v-if="user" to="/profile" class="mt-10 px-5 py-2 bg-green-600 font-semibold text-lg uppercase rounded">
      Profile
    </NuxtLink>

  </div>
</template>