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
                <v-col cols="12">
                    <p>Username:</p>
                    <v-text-field outlined dense placeholder="@" v-model="username"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
import ImageUploader from "./../ImageUploader";
export default {
    components: {ImageUploader},
    name: "TwitterSeoSettingMenu",
    data(){
        return {
            username: ""
        }
    },
    watch: {
        username: {
            handler(){
                if(this.username.length > 0){
                    if(this.username[0] !== '@'){
                        this.username = "@" + this.username;
                    }
                }
            }
        }
    }
}
</script>

<style scoped>

</style>