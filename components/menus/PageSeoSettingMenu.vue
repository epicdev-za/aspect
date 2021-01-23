<template>
    <v-sheet>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field label="Title" outlined dense counter="80"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea label="Description" outlined dense counter="160"></v-textarea>
                </v-col>
                <v-col cols="12">
                    <p>TODO: Keywords</p>
                </v-col>
                <v-col cols="12">
                    <p>TODO: Index Checkbox</p>
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
    name: "PageSeoSettingMenu"
}
</script>

<style scoped>

</style>