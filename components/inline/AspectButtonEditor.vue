<template>
    <a :class="(granted) ? 'aspect-button-editor' : null" :download="download" :href="(!granted) ? href : null" :hreflang="hreflang" :media="media" :ping="ping" :referrerpolicy="referrerpolicy" :rel="rel" :target="target" :type="type" @click="openEditor">{{slot}}</a>
</template>

<script>
export default {
    name: "AspectButtonEditor",
    props: {
        download: {
            type: String,
            default: null
        },
        href: {
            type: String,
            default: null
        },
        hreflang: {
            type: String,
            default: null
        },
        media: {
            type: String,
            default: null
        },
        ping: {
            type: String,
            default: null
        },
        referrerpolicy: {
            type: String,
            default: null
        },
        rel: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    data(){
        return {
            granted: (this.$store.getters['boost_store/hasPermission']('aspect.inline')),
            slot: this.buildSlot(this.$slots.default)
        }
    },
    methods: {
        openEditor(){
            console.log(this);
        },
        buildSlot(elements){
            let html = "";
            for(let i = 0; i < elements.length; i++){
                let element = elements[i];
                if(element.tag !== undefined){
                    html += "<" + element.tag;

                    if(element.data !== undefined && element.data.attrs !== undefined){
                        for(let attribute in element.data.attrs){
                            html += " " + attribute + "=\"" + element.data.attrs[attribute] + "\"";
                        }
                    }

                    html += ">";
                    if(element.children !== undefined && element.children.length > 0){
                        html += this.buildSlot(element.children);
                    }
                    html += "</" + element.tag + ">";
                }else if(element.text !== undefined){
                    html += element.text;
                }
            }
            return html;
        }
    }
}
</script>

<style scoped>
#aspect:not(.preview-desktop):not(.preview-tablet):not(.preview-mobile) .aspect-button-editor{
    outline: 2px solid rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
}
</style>