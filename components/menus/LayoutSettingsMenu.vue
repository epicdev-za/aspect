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
                    <p>TODO: Margin</p>
                </v-col>
                <v-col cols="12">
                    <p>TODO: Width</p>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
export default {
name: "LayoutSettingsMenu"
}
</script>

<style scoped>

</style>