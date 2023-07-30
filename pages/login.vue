<script setup lang='ts'>

const client = useSupabaseClient();
const email = ref<string>('');
const loading = ref<boolean>(false);

const route = useRoute()
onMounted(() => {
    if (route.hash.includes('#access_token')) {
        console.log(route.hash)
    }
})

const user = useSupabaseUser()
watchEffect(() => {
    if (user.value) {
        navigateTo('/')
    }
})

const msg = ref<string>('');

const ValidEmail = computed<boolean>(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true)
    }
    return (false)
})

const SignInUser = async () => {
    loading.value = true
    const { error } = await client.auth.signInWithOtp({
        email: email.value,
        options: {
            emailRedirectTo: `${location.origin}/confirm`,
        }
    })
    if (error) {
        msg.value = error.message;
        loading.value = false
        throw error
    } else {
        msg.value = "Check your email for the login link!"
    }
    loading.value = false
    console.log("email sent", location.origin);
}

</script>

<template>
    <div class="min-h-screen flex flex-col items-center pt-14 px-20">
        <h1 class="text-4xl font-bold pt-32">Login</h1>
        <div class="flex flex-col w-full max-w-md px-4 py-9 rounded shadow bg-zinc-800 sm:px-6 md:px-8 lg:px-10 mt-10">
            <div class="">
                <form action="#">
                    <div class="flex flex-col mb-5">
                        <div class="flex relative ">
                            <span
                                class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                    </path>
                                </svg>
                            </span>
                            <input v-model="email" type="text" id="sign-in-email"
                                class=" rounded-r flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                                placeholder="Your email" />
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button @click.prevent="SignInUser" type="submit" :disabled="!ValidEmail || loading"
                            :class="{ 'opacity-50': !ValidEmail, 'hover:bg-violet-700': ValidEmail && !loading }"
                            class="py-2 px-4  bg-violet-600  focus:ring-violet-500 focus:ring-offset-violet-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ">
                            {{ loading ? "Loading..." : "Login" }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <h1 class="pt-3 text-gray-200">{{ msg }}</h1>
    </div>
</template>


<!-- 
begin
  insert into public.profiles(uid, email)
  values(new.id, new.email);
  return new;
end;
-->