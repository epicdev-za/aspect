<template>
    <v-sheet>
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
    name: "GlobalLayoutSettingsMenu",
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