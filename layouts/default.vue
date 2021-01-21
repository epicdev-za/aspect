<template>
    <div id="aspect" :class="getPreviewClass()">
        <AspectMenu @toggle-menu="toggleMenu" @cycle-preview="cyclePreview"/>

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
    name: "default",
    data(){
        return {
            aspect: {
                menu_open: true,
                preview_mode: 0
            }
        }
    },
    methods: {
        toggleMenu(){
            this.aspect.menu_open = !this.aspect.menu_open;
        },
        getPreviewClass(){
            return {
                'menu-open': (this.aspect.menu_open),
                'preview-mobile': (this.aspect.preview_mode === 1),
                'preview-tablet': (this.aspect.preview_mode === 2)
            }
        },
        cyclePreview(){
            this.aspect.preview_mode++;
            if(this.aspect.preview_mode === 3){
                this.aspect.preview_mode = 0;
            }
        }
    }
}
</script>

<style>
*, ::before, ::after{
    background-repeat: unset !important;
    box-sizing: unset !important;
}
</style>

<style scoped>
#aspect.menu-open .aspect-inner {padding-left: 300px;}
@media (max-width: 1100px){  #aspect.menu-open .aspect-inner {padding-left: 0;}}

#aspect{
    transition: padding-left 0.25s ease-out, width 0.25s ease-out;
}

#aspect .aspect-inner {
    transition: max-width 0.25s ease-out, max-height 0.25s ease-out, margin-left 0.25s ease-out, margin-top 0.25s, padding-left 0.25s ease-out;
    outline: 100vw solid #191e23;
}

#aspect.preview-mobile .aspect-inner {
    max-width: 320px;
    max-height: 480px;
    overflow: auto;
    margin-left: calc(50% - 160px);
    margin-top: calc(50vh - 240px);
    padding-left: 0;
}
#aspect.menu-open.preview-mobile {
    padding-left: 300px;
    width: calc(100% - 300px);
}
#aspect.preview-tablet .aspect-inner {
    max-width: 600px;
    max-height: 800px;
    overflow: auto;
    margin-left: calc(50% - 300px);
    margin-top: calc(50vh - 400px);
    padding-left: 0;
}
#aspect.menu-open.preview-tablet {
    padding-left: 300px;
    width: calc(100% - 300px);
}
</style>
