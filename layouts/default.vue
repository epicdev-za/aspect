<template>
    <div id="aspect" class="menu-open">
        <AspectMenu/>

        <div class="aspect-inner">
            <nuxt/>
        </div>
    </div>
</template>

<script>
import AspectMenu from "../node_modules/aspect/components/AspectMenu";
export default {
    components: {AspectMenu},
    head(){
        return {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    name: "default"
}
</script>

<style scoped>
#aspect.menu-open .aspect-inner {padding-left: 300px;}
@media (max-width: 1100px){  #aspect.menu-open .aspect-inner {padding-left: 0;}}
</style>
