<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >
      <v-card>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
        <v-container
          v-bind="{ [`grid-list-${size}`]: true }"
          fluid
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              v-for="img in images"
              :key="img"
              sm6
              md4
              xs12
            >
              <v-card
                flat
                tile

                class="d-flex"
              >
                <v-img
                  max-width="100%"
                  :src="img"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import img1 from '../../public/img/1.jpg'
import img2 from '../../public/img/2.jpg'
import img3 from '../../public/img/3.jpg'
import img4 from '../../public/img/4.jpg'
import img5 from '../../public/img/5.jpg'
import img6 from '../../public/img/6.jpg'
import img7 from '../../public/img/7.jpg'
import img8 from '../../public/img/8.jpg'
import img9 from '../../public/img/9.png'
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