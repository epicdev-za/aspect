<template>
    <v-sheet>
        <v-list>
            <v-list-item @click="$emit('tabclick', 2)">
                <v-list-item-content>
                    <v-list-item-title>Global Layout Settings</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p>Margin:</p>
                    <v-combobox dense outlined :items="['None', 'Small', 'Medium', 'Large']" v-model="margin"></v-combobox>
                </v-col>
                <v-col cols="12">
                    <p>Width:</p>
                    <v-combobox dense outlined :items="['None', 'Small', 'Medium', 'Large']" v-model="width"></v-combobox>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
export default {
    name: "LayoutSettingsMenu",
    data(){
        return {
            margin: 'Small',
            width: 'Small'
        }
    }
}
</script>

<style scoped>

</style>