<script setup>
const client = useSupabaseClient()
const email = ref("")
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)
async function signUp() {
    try{
        const {data, error} = client.auth.signUp({
            email:email.value,
            password:password.value
        })
        if(error) throw error
        successMsg.value = "Check your email to confirm your account"
    }catch(error){

        errorMsg.value = error.message
    }
}
</script>
<template>
    <div class="h-screen flex">
        <div class="flex-1 flex items-center justify-between bg-white">
            <form @submit.prevent="signUp" class="flex flex-col gap-6 px-16 py-8 rounded-md shadow-lg h-[60%] w-ful">
                <h1 class="text-3xl mb-4 text-blue-950">Register</h1>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col">
                        <input type="email" placeholder="please enter your email" class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                        <span class="text-red-600 font-semibold">{{ errorMsg }}</span>
                    </div>
                    <div class="flex flex-col">
                        <input type="password" placeholder="please enter your password" class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                        <span class="text-red-600 font-semibold">{{ errorMsg }}</span>
                   </div>
                   <span class="text-green-600 font-semibold">{{ successMsg }}</span>
                </div>
                <button type="submit" class="px-4 py-2 rounded-lg bg-indigo-600">Sign Up</button>
                
            </form>

        </div>

    </div>
</template>