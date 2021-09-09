<template>
    
</template>
<script>
import axios from 'axios';

export default ({
    name:'CASCookie',
    beforeMount(){
        console.log(document.cookie);
        axios.get("http://176.132.208.146:9595/api/account").then(
            (user) => {
                console.log(user);
            },
            err=>{
                console.log(err);
            }

        )
    }
})
</script>
