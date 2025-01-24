<script setup>
    definePageMeta({
    middleware: ["auth"]
    })
const user = useSupabaseUser()
const client = useSupabaseClient()
async function logout() {
    try{
        const {error} = await client.auth.signOut()
        if(error) throw error
        navigateTo('/login')
    }catch(error){
        console.log(error.message)
    }
    
}
</script>
<template>
    <main class="mx-auto flex items-center h-screen container py-36">
        <div class="flex flex-col border-2 border-l-indigo-400 p-10 rounded-lg bg-green-200">
            <h1 class="text-xl mb-2">Email:{{ user.email }}</h1>
            <button @click="logout" type="button" class="self-start mt-6 rounded-lg bg-blue-500 text-white p-4">Logout</button>
        </div>

    </main>
</template>