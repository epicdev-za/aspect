<template>
    <v-sheet>
        <v-toolbar flat>
            <v-btn icon @click="$emit('close')">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title style="font-size: 18px">{{element_setting_heading}}</v-toolbar-title>
        </v-toolbar>
        <v-divider/>
        <v-sheet :style="{display: ((element_type === 0) ? 'block' : 'none')}">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <p>Label:</p>
                        <v-text-field outlined dense v-model="element_context.slot"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>download:</p>
                        <v-text-field outlined dense v-model="element_context._props.download"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>href:</p>
                        <v-text-field outlined dense v-model="element_context._props.href"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>hreflang:</p>
                        <v-text-field outlined dense v-model="element_context._props.hreflang"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>media:</p>
                        <v-text-field outlined dense v-model="element_context._props.media"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>ping:</p>
                        <v-text-field outlined dense v-model="element_context._props.ping"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>referrerpolicy:</p>
                        <v-combobox dense outlined :items="['', 'no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin', 'same-origin', 'strict-origin-when-cross-origin', 'unsafe-url']" v-model="element_context._props.referrerpolicy"></v-combobox>
                    </v-col>
                    <v-col cols="12">
                        <p>rel:</p>
                        <v-combobox dense outlined :items="['', 'alternate', 'author', 'bookmark', 'external', 'help', 'license', 'next', 'nofollow', 'noreferrer', 'noopener', 'prev', 'search', 'tag']" v-model="element_context._props.rel"></v-combobox>
                    </v-col>
                    <v-col cols="12">
                        <p>target:</p>
                        <v-combobox dense outlined :items="['', '_blank', '_self', '_parent', '_top']" v-model="element_context._props.target"></v-combobox>
                    </v-col>
                    <v-col cols="12">
                        <p>type:</p>
                        <v-text-field outlined dense v-model="element_context._props.type"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-sheet>
</template>

<script>
export default {
    name: "ElementSettingMenu",
    props: {
        element_type: {
            type: Number,
            required: true
        },
        element_context: {
            type: Object,
            required: true
        }
    },
    computed: {
        element_setting_heading(){
            switch (this.element_type){
                case 0:
                    return "Button Settings";
            }
        }
    }
}
</script>

<style scoped>

</style>