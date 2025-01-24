<script setup>
    const client = useSupabaseClient()
    const router = useRoute()
    const email = ref("")
    const password = ref("")
    const errorMsg = ref(null)
    async function signIn(){
        try{
            console.log(email.value)
            console.log(password.value)
            const {error} = await client.auth.signInWithPassword({
                email:email.value,
                password:password.value
            })
            if(error) throw error
            navigateTo('/')
        }catch(error){
            errorMsg.value = error.message
            console.log(error)
        }

    }
</script>
<template>
    <div class="w-full h-screen  mx-auto flex items-center justify-between">
        <div class=" w-full h-screen flex items-center justify-center bg-white">
            <form @submit.prevent="signIn" class="flex flex-col gap-6 px-16 py-8 rounded-md shadow-lg h-[60%] w-ful">
                <h1 class="text-3xl mb-4 text-blue-950">Login</h1>
                <div class="flex flex-col gap-4">
                   <div class="flex flex-col">
                        <input type="email"  v-model="email" placeholder="please enter your email" class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                        <span class="text-red-600 font-semibold">{{ errorMsg }}</span>
                    </div>
                    <div class="flex flex-col">
                        <input type="password" v-model="password" placeholder="please enter your password" class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                        <span class="text-red-600 font-semibold">{{ errorMsg }}</span>
                   </div>
                </div>
                <button type="submit" class="px-4 py-2 rounded-lg bg-indigo-600">Sign In</button>
                <NuxtLink to="/register">Create An Account</NuxtLink>
            </form>

        </div>

    </div>
</template>