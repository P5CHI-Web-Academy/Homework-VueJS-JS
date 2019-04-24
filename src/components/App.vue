<template>
    <v-app id="inspire">
        <v-navigation-drawer fixed v-model="drawer" right app>
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="cyan" dark fixed app>
            <v-spacer></v-spacer>
            <v-toolbar-title>Application</v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content>
            <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                <v-layout row wrap>
                    <v-flex v-for="img in images" :key="img" sm6 md4 xs12>
                        <v-card flat tile class="d-flex">
                            <v-img max-width="100%" :src="img"/>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="cyan" app>
            <v-spacer></v-spacer>
            <span class="white--text">&copy; 2017 </span>
        </v-footer>
    </v-app>
</template>

<script>
    import img1 from 'img/1.jpg'
    import img2 from 'img/2.jpg'
    import img3 from 'img/3.jpeg'
    import img4 from 'img/4.jpeg'
    import img5 from 'img/5.jpeg'
    import img6 from 'img/6.jpeg'
    import img7 from 'img/7.jpeg'
    import img8 from 'img/8.jpeg'
    import img9 from 'img/9.jpg'

    export default {
        data: () => ({
            drawer: false,
            drawerRight: false,
            right: true,
            left: false,
            size: 'sm',
            images: [
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9
            ]
        })
    }
</script>
