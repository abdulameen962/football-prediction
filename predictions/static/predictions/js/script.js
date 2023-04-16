const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            works: [{
                    class: "step step1",
                    header: "Create Account",
                    text: "assumenda quibusdam voluptate sequi, quo distinctio doloribus laborum maxime nisi in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                  <div class="number">1</div>
                  <div class="cta">
                      <a href="#" class="primary-btn">Sign up</a>
                  </div>
                  <img src="#" alt="background image"/>
                  `
                },
                {
                    class: "step step2",
                    header: "Create Account",
                    text: "assumenda quibusdam voluptate sequi, quo distinctio doloribus laborum maxime nisi in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                <div class="number">1</div>
                <div class="cta">
                    <a href="#" class="primary-btn">Sign up</a>
                </div>
                <img src="#" alt="background image"/>
                `
                },
                {
                    class: "step step3",
                    header: "Create Account",
                    text: "assumenda quibusdam voluptate sequi, quo distinctio doloribus laborum maxime nisi in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                <div class="number">1</div>
                <div class="cta">
                    <a href="#" class="primary-btn">Sign up</a>
                </div>
                <img src="#" alt="background image"/>
                `
                },
                {
                    class: "step step1",
                    header: "Create Account",
                    text: "assumenda quibusdam voluptate sequi, quo distinctio doloribus laborum maxime nisi in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                <div class="number">1</div>
                <div class="cta">
                    <a href="#" class="primary-btn">Sign up</a>
                </div>
                <img src="#" alt="background image"/>
                `
                },
                {
                    class: "step step2",
                    header: "Create Account",
                    text: "assumenda quibusdam voluptate sequi, quo distinctio doloribus laborum maxime nisi in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                <div class="number">1</div>
                <div class="cta">
                    <a href="#" class="primary-btn">Sign up</a>
                </div>
                <img src="#" alt="background image"/>
                `
                },
                {
                    class: "step step3",
                    header: "Create Account",
                    text: "assumenda quibusdam voluptate sequi, quo distinctio doloribus laborum maxime nisi in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                <div class="number">1</div>
                <div class="cta">
                    <a href="#" class="primary-btn">Sign up</a>
                </div>
                <img src="#" alt="background image"/>
                `
                },
            ],
        }
    },
    mounted() {
        // var main = new Splide('#main-carousel', {
        //     type: 'slide',
        //     speed: 2000,
        //     rewind: true,
        //     perPage: 1,
        //     rewindSpeed: 1500,
        //     pagination: true,
        //     arrows: true,
        //     autoplay: false,
        // });
        // main.mount();
    },
    methods: {

    }
})

app.component("works", {
    props: {
        works: Array,
    },
    template: `
      <div v-for="work in works" :class="work.class">
          <div class="work-single">
              <div class="image" v-html="work.image">
                    {{ work.image }}
              </div>
              <div class="text">
                  <h3> {{ work.header }} </h3>
                  <p>  {{ work.text }} </p>
              </div>
          </div>
      </div>
    `
})

app.mount("body");