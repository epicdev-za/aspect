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
                    <p>Keywords:</p>
                    <v-combobox style="margin-top: 0; padding-top: 0;" multiple v-model="keywords" append-icon="" outlined chips deletable-chips small-chips class="tag-input" :search-input.sync="search" @keyup.tab="updateTags" @keyup.space="updateTags" @paste="updateTags"></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-checkbox style="margin-top: 0; padding-top: 0;" label="Prevent indexing">
                        <template v-slot:append>
                            <v-tooltip left>
                                <template v-slot:activator="{on, attrs}">
                                    <v-icon color="grey lighten-1" v-on="on" v-bind="attrs">mdi-information</v-icon>
                                </template>
                                <span>Suggest to search engines<br/>not to index this page <br/>their listings</span>
                            </v-tooltip>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-container>
        <v-list>
            <v-list-item @click="$emit('tabclick', 0)">
                <v-list-item-content>
                    <v-list-item-title>Facebook SEO Settings</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="$emit('tabclick', 1)">
                <v-list-item-content>
                    <v-list-item-title>Twitter SEO Settings</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>

<script>
export default {
    name: "PageSeoSettingMenu",
    data(){
        return {
            keywords: [],
            items: [],
            search: ""
        }
    },
    methods: {
        updateTags() {
            this.$nextTick(() => {
                this.keywords.push(...this.search.split(","));
                this.$nextTick(() => {
                    this.search = "";
                });
            });
        }
    }
}
</script>

<style scoped>
.tag-input .v-select__selections{
    flex-wrap: wrap !important;
}
</style>