<template>
    <v-img aspect-ratio="1.66666" style="background-color: rgb(238, 238, 238); border-radius: 5px;">
        <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-icon x-large color="grey lighten-2" style="font-size: 76px">mdi-image</v-icon>
            </v-row>
        </template>
        <template v-slot:default>
            <v-row class="fill-height ma-0 pa-1" justify="end">
                <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                        <v-btn icon v-on="on" v-bind="attrs">
                            <v-icon>mdi-upload</v-icon>
                        </v-btn>
                    </template>
                    <span>Upload</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                        <v-btn icon v-on="on" v-bind="attrs">
                            <v-icon>mdi-crop</v-icon>
                        </v-btn>
                    </template>
                    <span>Crop</span>
                </v-tooltip>
            </v-row>
        </template>
    </v-img>
</template>

<script>
export default {
    name: "ImageUploader"
}
</script>

<style scoped>

</style>