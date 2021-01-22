<template>
    <v-app id="aspect" :class="(aspect.menu.open) ? 'menu-open' : ''" app>
        <v-navigation-drawer v-if="$store.getters['boost_store/hasPermission']('aspect.admin')" fixed width="300" :value="aspect.menu.open">
            <div class="flex-container">
                <div class="flex-items">
                    <v-toolbar flat>
                        <v-btn icon @click="aspect.menu.open = false">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-power</v-icon>
                        </v-btn>
                        <v-btn icon :to="'/admin'" nuxt>
                            <v-icon>mdi-view-dashboard-outline</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-content-save-outline</v-icon>
                        </v-btn>
                    </v-toolbar>
                </div>
                <div class="flex-items">

                </div>
                <div class="flex-items">
                    <v-toolbar flat>
                        <v-toolbar-title>Preview:</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-monitor</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-tablet-android</v-icon>
                        </v-btn>
                        <v-btn icon>
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
            <nuxt/>
        </div>
    </v-app>
</template>

<script>
export default {
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
                    open: (this.$store.getters['boost_store/hasPermission']('aspect.admin'))
                }
            }
        }
    }
}
</script>

<style scoped>
#aspect .aspect-inner{
    transition: margin-left 0.2s cubic-bezier(.4,0,.2,1);
}

#aspect.menu-open .aspect-inner{
    margin-left: 300px;
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
</style>
