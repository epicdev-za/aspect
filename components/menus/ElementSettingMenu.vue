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
                    <v-col cols="12" v-if="element_context._props.textmode">
                        <p>Label:</p>
                        <v-text-field outlined dense v-model="element_context.slot"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <p>
                            <span style="display: inline-block; width: calc(100% - 30px);">Link:</span>
                            <v-tooltip left>
                                <template v-slot:activator="{on, attrs}">
                                    <v-icon color="grey lighten-1" v-on="on" v-bind="attrs">mdi-information</v-icon>
                                </template>
                                <span>For external links, type the full url.<br/>For internal links, type just the page<br/>url starting with a '/'.<br/><br/>Examples:<br/>https://www.google.com<br/>/about<br/>/account/order-history</span>
                            </v-tooltip>
                        </p>
                        <v-text-field outlined dense v-model="element_context._props.href"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-checkbox style="margin-top: 0; padding-top: 0;" label="Open in new tab" v-model="element_context.new_tab"></v-checkbox>
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