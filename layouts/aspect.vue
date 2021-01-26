<template>
    <v-app id="aspect" :class="aspectClasses" app>
        <v-navigation-drawer v-if="$store.getters['boost_store/hasPermission']('aspect.admin')" fixed width="300" v-model="aspect.menu.open" disable-resize-watcher>
            <div class="flex-container">
                <div class="flex-items">
                    <v-toolbar flat>
                        <v-btn icon @click="aspect.menu.open = false">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="aspect.menu.logout_dialog = true">
                            <v-icon>mdi-power</v-icon>
                        </v-btn>
                        <v-btn icon :to="'/admin'" nuxt>
                            <v-icon>mdi-view-dashboard-outline</v-icon>
                        </v-btn>
                        <v-btn icon @click="save" v-if="$store.getters['boost_store/hasPermission']('aspect.save')">
                            <v-icon>mdi-content-save-outline</v-icon>
                        </v-btn>
                    </v-toolbar>
                </div>
                <div class="flex-items">
                    <v-sheet>
                        <v-tabs-items v-model="aspect.menu.global_tab">
                            <v-tab-item>
                                <v-tabs-items v-model="aspect.menu.tab">
                                    <v-tab-item>
                                        <v-sheet class="pa-4">
                                            <v-text-field label="Current Page" hide-details :value="this.$router.currentRoute.fullPath" readonly outlined dense></v-text-field>
                                        </v-sheet>
                                        <v-list>
                                            <v-list-item @click="openSettingsPage">
                                                <v-list-item-content>
                                                    <v-list-item-title>Page / SEO Settings</v-list-item-title>
                                                </v-list-item-content>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-chevron-right</v-icon>
                                                </v-list-item-icon>
                                            </v-list-item>
                                            <v-list-item @click="openLayoutSettingsPage" v-if="$store.getters['boost_store/hasPermission']('aspect.elements.manage')">
                                                <v-list-item-content>
                                                    <v-list-item-title>Layout Settings</v-list-item-title>
                                                </v-list-item-content>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-chevron-right</v-icon>
                                                </v-list-item-icon>
                                            </v-list-item>
                                            <v-list-item @click="openElementPage" v-if="$store.getters['boost_store/hasPermission']('aspect.elements.create')">
                                                <v-list-item-content>
                                                    <v-list-item-title>Add Element</v-list-item-title>
                                                </v-list-item-content>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-chevron-right</v-icon>
                                                </v-list-item-icon>
                                            </v-list-item>
                                        </v-list>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <v-toolbar flat>
                                            <v-btn icon @click="aspect.menu.tab = 0">
                                                <v-icon>mdi-arrow-left</v-icon>
                                            </v-btn>
                                            <v-toolbar-title style="font-size: 18px">{{sub_tab_heading}}</v-toolbar-title>
                                        </v-toolbar>
                                        <v-divider/>
                                        <v-sheet :style="{display: ((aspect.menu.sub_tab === 0) ? 'block' : 'none')}">
                                            <PageSeoSettingMenu @tabclick="openSubSubTab"/>
                                        </v-sheet>
                                        <v-sheet :style="{display: ((aspect.menu.sub_tab === 1) ? 'block' : 'none')}" v-if="$store.getters['boost_store/hasPermission']('aspect.elements.manage')">
                                            <LayoutSettingsMenu @tabclick="openSubSubTab"/>
                                        </v-sheet>
                                        <v-sheet :style="{display: ((aspect.menu.sub_tab === 2) ? 'block' : 'none')}" v-if="$store.getters['boost_store/hasPermission']('aspect.elements.create')">
                                            <AddElementMenu/>
                                        </v-sheet>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <v-toolbar flat>
                                            <v-btn icon @click="aspect.menu.tab = 1">
                                                <v-icon>mdi-arrow-left</v-icon>
                                            </v-btn>
                                            <v-toolbar-title style="font-size: 18px">{{sub_sub_tab_heading}}</v-toolbar-title>
                                        </v-toolbar>
                                        <v-divider/>
                                        <v-sheet :style="{display: ((aspect.menu.sub_sub_tab === 0) ? 'block' : 'none')}">
                                            <FacebookSeoSettingMenu/>
                                        </v-sheet>
                                        <v-sheet :style="{display: ((aspect.menu.sub_sub_tab === 1) ? 'block' : 'none')}">
                                            <TwitterSeoSettingMenu/>
                                        </v-sheet>
                                        <v-sheet :style="{display: ((aspect.menu.sub_sub_tab === 2) ? 'block' : 'none')}" v-if="$store.getters['boost_store/hasPermission']('aspect.elements.manage')">
                                            <GlobalLayoutSettingsMenu/>
                                        </v-sheet>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-tab-item>
                            <v-tab-item v-if="$store.getters['boost_store/hasPermission']('aspect.elements.manage')">
                                <ElementSettingMenu/>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-sheet>
                </div>
                <div class="flex-items">
                    <v-toolbar flat>
                        <v-spacer></v-spacer>
                        <v-btn icon :outlined="aspect.preview_mode === 1" @click="togglePreviewMode(1)">
                            <v-icon>mdi-monitor</v-icon>
                        </v-btn>
                        <v-btn icon :outlined="aspect.preview_mode === 2" @click="togglePreviewMode(2)">
                            <v-icon>mdi-tablet-android</v-icon>
                        </v-btn>
                        <v-btn icon :outlined="aspect.preview_mode === 3" @click="togglePreviewMode(3)">
                            <v-icon>mdi-cellphone</v-icon>
                        </v-btn>
                    </v-toolbar>
                </div>
            </div>
        </v-navigation-drawer>

        <v-scale-transition v-if="$store.getters['boost_store/hasPermission']('aspect.admin')" origin="50% 50%">
            <v-btn elevation="2" fab top left fixed v-show="!aspect.menu.open" @click="aspect.menu.open = true">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-scale-transition>

        <div class="aspect-inner">
            <v-system-bar height="20" v-if="aspect.preview_mode > 1" color="grey darken-3" dark>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <span>{{(aspect.preview_mode === 2) ? "Tablet: 600x800" : "Mobile: 320x480"}}</span>
                <v-spacer></v-spacer>
                <span>100%</span>
                <v-icon>mdi-battery</v-icon>
                <span>{{aspect.preview_time}}</span>
            </v-system-bar>
            <nuxt/>
        </div>

        <v-dialog v-model="aspect.menu.logout_dialog" width="400">
            <v-card :loading="aspect.menu.logout_loading" :disabled="aspect.menu.logout_loading">
                <v-card-title>
                    Are you sure?
                </v-card-title>
                <v-card-text>
                    By logging out you will loose access to the website editing functionality. Additionally, any unsaved changes will be lost.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="aspect.menu.logout_dialog = false">Cancel</v-btn>
                    <v-btn text @click="logout">Logout</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="aspect.menu.saving_failed_dialog" width="400" persistent>
            <v-card>
                <v-card-title>
                    Failed to save
                </v-card-title>
                <v-card-text>
                    Apologies for the inconvenience. Please retry the saving. If the issue persists, please take note of your changes, refresh the page and try again.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="aspect.menu.saving_failed_dialog = false">Close</v-btn>
                    <v-btn text @click="save">Retry</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-overlay :value="aspect.menu.saving" z-index="10">
            <v-progress-circular size="64" :rotate="-90" :value="aspect.menu.saving_value"></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
const axios = require("axios");
import SaveHandler from "../node_modules/aspect/handlers/SaveHandler.js";
import PageSeoSettingMenu from "../node_modules/aspect/components/menus/PageSeoSettingMenu.vue";
import LayoutSettingsMenu from "../node_modules/aspect/components/menus/LayoutSettingsMenu.vue";
import AddElementMenu from "../node_modules/aspect/components/menus/AddElementMenu.vue";
import FacebookSeoSettingMenu from "../node_modules/aspect/components/menus/FacebookSeoSettingMenu.vue";
import TwitterSeoSettingMenu from "../node_modules/aspect/components/menus/TwitterSeoSettingMenu.vue";
import GlobalLayoutSettingsMenu from "../node_modules/aspect/components/menus/GlobalLayoutSettingsMenu.vue";
import ElementSettingMenu from "../node_modules/aspect/components/menus/ElementSettingMenu.vue";
export default {
    components: {PageSeoSettingMenu, LayoutSettingsMenu, AddElementMenu, FacebookSeoSettingMenu, TwitterSeoSettingMenu, GlobalLayoutSettingsMenu, ElementSettingMenu},
    head(){
        return {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    name: "aspect",
    data(){
        return {
            aspect: {
                menu: {
                    open: (this.$store.getters['boost_store/hasPermission']('aspect.admin')),
                    logout_dialog: false,
                    logout_loading: false,
                    global_tab: 0,
                    tab: 0,
                    sub_tab: 0,
                    sub_sub_tab: 0,
                    saving: false,
                    saving_value: 0,
                    saving_failed_dialog: false
                },
                preview_mode: 0,
                preview_time: '12:00 AM',
                preview_time_interval: 0
            }
        }
    },
    methods: {
        logout(){
            let _this = this;
            _this.logout_loading = true;
            axios.post("/api/auth/logout", {}).then(() => {
                _this.$router.go();
            });
        },
        togglePreviewMode(mode){
            if(this.aspect.preview_mode !== mode){
                this.aspect.preview_mode = mode;
            }else{
                this.aspect.preview_mode = 0;
            }
        },
        systemBarPreviewTime(){
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            this.aspect.preview_time = hours + ':' + minutes + ' ' + ampm;
        },
        openSettingsPage(){
            this.aspect.menu.sub_tab = 0;
            this.aspect.menu.tab = 1;
        },
        openLayoutSettingsPage(){
            this.aspect.menu.sub_tab = 1;
            this.aspect.menu.tab = 1;
        },
        openElementPage(){
            this.aspect.menu.sub_tab = 2;
            this.aspect.menu.tab = 1;
        },
        openSubSubTab(tab){
            switch(tab){
                case 0:
                    this.aspect.menu.sub_sub_tab = 0;
                    this.aspect.menu.tab = 2;
                    break;
                case 1:
                    this.aspect.menu.sub_sub_tab = 1;
                    this.aspect.menu.tab = 2;
                    break;
                case 2:
                    this.aspect.menu.sub_sub_tab = 2;
                    this.aspect.menu.tab = 2;
                    break;
            }
        },
        save(){
            if(this.$store.getters['boost_store/hasPermission']('aspect.admin')) {
                let _this = this;

                this.aspect.menu.saving_failed_dialog = false;
                this.aspect.menu.saving = true;
                this.aspect.menu.saving_value = 0;
                SaveHandler({}, (progress) => {
                    _this.aspect.menu.saving_value = progress;
                }).then(() => {
                    _this.aspect.menu.saving = false;
                    _this.$router.go();
                }).catch(() => {
                    _this.aspect.menu.saving = false;
                    _this.aspect.menu.saving_failed_dialog = true;
                });
            }
        }
    },
    computed: {
        aspectClasses(){
            return {
                'menu-open': (this.aspect.menu.open),
                'preview-desktop': (this.aspect.preview_mode === 1),
                'preview-tablet': (this.aspect.preview_mode === 2),
                'preview-mobile': (this.aspect.preview_mode === 3)
            }
        },
        sub_tab_heading(){
            switch(this.aspect.menu.sub_tab){
                case 0:
                    return "Page / SEO Settings";
                case 1:
                    return "Layout Settings";
                case 2:
                    return "Add Element";
            }
        },
        sub_sub_tab_heading(){
            switch(this.aspect.menu.sub_sub_tab){
                case 0:
                    return "Facebook SEO Settings";
                case 1:
                    return "Twitter SEO Settings";
                case 2:
                    return "Global Layout Settings";
            }
        }
    },
    mounted() {
        this.aspect.preview_time_interval = setInterval(this.systemBarPreviewTime, 1000);
    },
    destroyed() {
        clearInterval(this.aspect.preview_time_interval);
    }
}
</script>

<style scoped>
#aspect{
    transition: padding-left 0.2s cubic-bezier(.4,0,.2,1);
}

#aspect.menu-open{
    padding-left: 300px;
}

#aspect .aspect-inner{
    position: relative;
    font-size: 14px;
}

.flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: normal;
    align-content: normal;
    height: 100%;
}

.flex-items:nth-child(1) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
}

.flex-items:nth-child(2) {
    display: block;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    align-self: auto;
    order: 0;
}

.flex-items:nth-child(3) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
}

#aspect.preview-tablet .aspect-inner{
    max-width: 600px;
    max-height: 800px;
    margin-left: calc(50% - 300px);
    margin-top: calc(50vh - 400px);
}

#aspect.preview-mobile .aspect-inner{
    max-width: 320px;
    max-height: 480px;
    margin-left: calc(50% - 160px);
    margin-top: calc(50vh - 240px);
}

#aspect.preview-tablet .aspect-inner, #aspect.preview-mobile .aspect-inner{
    overflow: auto;
    outline: 100vw solid #616161;
}
</style>
