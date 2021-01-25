<template>
    <v-sheet>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p>Title:</p>
                    <v-text-field outlined dense counter="80"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <p>Description:</p>
                    <v-textarea outlined dense counter="160"></v-textarea>
                </v-col>
                <v-col cols="12">
                    <p>Image:</p>
                    <ImageUploader></ImageUploader>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
import ImageUploader from "./ImageUploader";
export default {
    components: {ImageUploader},
    name: "FacebookSeoSettingMenu"
}
</script>

<style scoped>

</style>