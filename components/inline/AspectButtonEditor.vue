<template>
    <a :class="(granted) ? 'aspect-button-editor' : null" :download="download" :href="(!granted) ? href : null" :hreflang="hreflang" :media="media" :ping="ping" :referrerpolicy="referrerpolicy" :rel="rel" :target="_target" :type="type" @click="openEditor">{{slot}}</a>
</template>

<script>
const AspectUtil = require("../../handlers/AspectUtil");
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
        },
        textmode: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            granted: (this.$store.getters['boost_store/hasPermission']('aspect.inline')),
            slot: AspectUtil.convertSlotToString(this.$slots.default),
            new_tab: (this.target === '_blank')
        }
    },
    methods: {
        openEditor(){
            let aspect_context = AspectUtil.getAspectContext(this);
            aspect_context.openElementEditor(0, this);
        }
    },
    computed: {
        _target(){
            return (this.new_tab) ? '_blank' : this.target;
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