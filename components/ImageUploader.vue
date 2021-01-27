<template>
    <div>
        <input type="file" accept=".png, .jpg, .jpeg" style="display: none" v-on:change="fileSelected"/>
        <v-img :src="image" aspect-ratio="1.66666" style="background-color: rgb(238, 238, 238); border-radius: 5px;">
            <template v-slot:default>
                <v-toolbar dense flat color="rgba(0, 0, 0, 0.5)">
                    <span style="color: #e3e3e3; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{file.name}}</span>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{on, attrs}">
                            <v-btn icon v-on="on" v-bind="attrs" @click="openFileSelector">
                                <v-icon color="#e3e3e3">mdi-upload</v-icon>
                            </v-btn>
                        </template>
                        <span>Upload</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{on, attrs}">
                            <v-btn icon :disabled="file.size === 0" v-on="on" v-bind="attrs" @click="openCropper">
                                <v-icon color="#e3e3e3">mdi-crop</v-icon>
                            </v-btn>
                        </template>
                        <span>Crop</span>
                    </v-tooltip>
                </v-toolbar>
                <v-row class="ma-0" align="center" justify="center" style="height: calc(100% - 48px)">
                    <v-icon x-large color="grey lighten-2" style="font-size: 76px" v-if="!loading && file.size === 0">mdi-image</v-icon>
                    <v-progress-circular indeterminate color="grey darken-1" v-if="loading"></v-progress-circular>
                    <v-alert v-show="alert_text !== null" border="left" color="pink darken-1" dark dense style="position: absolute; bottom: 0;">{{alert_text}}</v-alert>
                </v-row>
            </template>
        </v-img>
        <v-dialog width="800" v-model="cropper_open">
            <v-card>
                <v-card-title>Crop Image</v-card-title>
                <v-card-text>
                    <vue-cropper style="max-height: 600px;" viewMode="2" :rotatable="false" :zoomable="false" :scalable="false" :src="'https://images.unsplash.com/photo-1611725710362-5b891cc038ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'"></vue-cropper>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed @click="cropper_open = false">Cancel</v-btn>
                    <v-btn depressed>Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
    components: {VueCropper},
    name: "ImageUploader",
    data(){
        return {
            file: new File([], "No file selected"),
            loading: false,
            image: "",
            alert_text: null,
            alert_timeout: 0,
            cropper_open: false
        }
    },
    props: {
        maxsize: {
            type: Number,
            default: 20971520
        }
    },
    watch: {
        file: {
            handler(){
                this.renderThumbnail();
            }
        }
    },
    methods: {
        openFileSelector(){
            this.$el.children[0].click();
        },
        fileSelected(e){
            this.file = e.target.files[0];
            this.image = "";
        },
        renderThumbnail(){
            let _this = this;

            if(this.file.size > 0){
                if(this.file.size < this.maxsize){
                    this.loading = true;

                    let accepted_types = ["jpg", "png", "jpeg"];
                    let current_type = this.file.name.substr(this.file.name.lastIndexOf('.') + 1);
                    if(accepted_types.includes(current_type)){

                        let image = new Image();
                        image.onload = function (){
                            let canvas = document.createElement("canvas");
                            canvas.width = image.width;
                            canvas.height = image.height;
                            canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);

                            const thumb_size = {
                                width: 500,
                                height: 300
                            };

                            const resized_size = {
                                width: 500,
                                height: 300
                            };

                            if(image.width > image.height){
                                let factor = thumb_size.width / image.width;
                                resized_size.height = image.height * factor;
                            }else{
                                let factor = thumb_size.width / image.width;
                                resized_size.height = image.height * factor;
                            }

                            if(resized_size.height < thumb_size.height){
                                let increase_amount = thumb_size.height - resized_size.height;
                                let increase_factor = thumb_size.height / increase_amount;
                                resized_size.height = thumb_size.height;
                                resized_size.width = resized_size.width * increase_factor;
                            }

                            let resized_canvas = document.createElement("canvas");
                            resized_canvas.width = thumb_size.width;
                            resized_canvas.height = thumb_size.height;

                            let offset = {
                                x: 0,
                                y: 0
                            };

                            if(resized_size.width > thumb_size.width){
                                offset.x = 0 - ((resized_size.width - thumb_size.width) / 2);
                            }
                            if(resized_size.height > thumb_size.height){
                                offset.y = 0 - ((resized_size.height - thumb_size.height) / 2);
                            }

                            resized_canvas.getContext('2d').drawImage(canvas, offset.x, offset.y, resized_size.width, resized_size.height);

                            let double_rendered_canvas = document.createElement("canvas");
                            double_rendered_canvas.width = thumb_size.width;
                            double_rendered_canvas.height = thumb_size.height;
                            double_rendered_canvas.getContext('2d').drawImage(resized_canvas, 0, 0, double_rendered_canvas.width, double_rendered_canvas.height);

                            _this.image = double_rendered_canvas.toDataURL("image/jpeg");
                            _this.loading = false;
                        }
                        image.onerror = function (){
                            this.clearFile("Unknown error");
                        }
                        image.src = window.URL.createObjectURL(this.file);

                    }else{
                        this.clearFile("Wrong file type");
                    }
                }else{
                    this.clearFile("File too big");
                }
            }
        },
        clearFile(alert){
            let _this = this;

            this.file = new File([], "No file selected");
            this.loading = false;

            if(alert !== undefined){
                this.alert_text = alert;
                clearTimeout(this.alert_timeout);
                this.alert_timeout = setTimeout(() => {
                    _this.alert_text = null;
                    _this.alert_timeout = 0;
                }, 2000);
            }
        },
        openCropper(){
            this.cropper_open = true;
        }
    },
    destroyed() {
        clearTimeout(this.alert_timeout);
    }
}
</script>

<style scoped>

</style>