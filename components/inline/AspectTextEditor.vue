<template>
    <div>
        <span v-if="!granted" v-html="value"></span>
        <span class="aspect-text-editor" v-if="granted">
            <ckeditor class="aspect-ckeditor" type="inline" v-model="value" :config="config"></ckeditor>
        </span>
    </div>
</template>

<script>
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
            value: this.buildSlot(this.$slots.default),
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
    },
    methods: {
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
                    if(element.children.length > 0){
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