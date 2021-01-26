<template>
    <div>
        <span v-if="!granted" v-html="value"></span>
        <span class="aspect-text-editor" v-if="granted">
            <ckeditor class="aspect-ckeditor" type="inline" v-model="value" :config="config"></ckeditor>
        </span>
    </div>
</template>

<script>
const AspectUtil = require("../../handlers/AspectUtil");
export default {
    name: "AspectTextEditor",
    props: {
        uuid: {
            type: String,
            required: true,
            validator: function(value){
                return value.match(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/);
            }
        },
        rich: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            granted: (this.$store.getters['boost_store/hasPermission']('aspect.inline')),
            value: AspectUtil.convertSlotToString(this.$slots.default),
            config: (() => {
                if(this.rich){
                    return {
                        format_tags: "p;h2;h3;h4",
                        removeButtons: 'Scayt,Underline,Subscript,Superscript,Strike,Anchor,Outdent,Indent,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,NumberedList,BulletedList,Blockquote,SpecialChar,Styles,About,Image,Table,HorizontalRule,SpecialChar'
                    };
                }
                return {
                    plugins: 'toolbar'
                }
            })()
        }
    }
}
</script>

<style scoped>
#aspect:not(.preview-desktop):not(.preview-tablet):not(.preview-mobile) .aspect-text-editor{
    min-width: 10px;
    min-height: 10px;
    outline: 2px solid rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
}

#aspect:not(.preview-desktop):not(.preview-tablet):not(.preview-mobile) .aspect-text-editor div:first-child{
    min-width: 5px;
}
</style>

<style>
.cke_toolbar_break{
    display: none !important;
}
</style>