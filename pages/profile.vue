<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()
async function logout() {
    try{
        const {error} = await client.auth.signOut()
        if(error) throw error
        router.push("/login")
    }catch(error){
        console.log(error.message)
    }
    
}
</script>
<template>
    <main class="h-screen container py-36">
        <div class="flex flex-col border-2 border-l-indigo-400 p-10 rounded-lg bg-green-200">
            <h1 class="text-xl mb-2">Email:{{ user.email }}</h1>
            <button @click="logout" type="button" class="self-start mt-6 rounded-lg bg-blue-500 text-white">Logout</button>
        </div>

    </main>
</template>