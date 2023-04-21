const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            works: [{
                    class: "step step1",
                    header: "Create Account",
                    text: "in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                  <img src="/static/predictions/css/images/step1.svg" alt="background image"/>
                  `
                },
                {
                    class: "step step2",
                    header: "Choose User Type",
                    text: "in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                    <img src="/static/predictions/css/images/step2.svg" alt="background image"/>
                `
                },
                {
                    class: "step step3",
                    header: "Check Predictions",
                    text: "in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                    <img src="/static/predictions/css/images/step3.svg" alt="background image"/>
                `
                },
                {
                    class: "step step1",
                    header: "Bet on any Betting Platform",
                    text: "in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                    <img src="/static/predictions/css/images/step4.svg" alt="background image"/>
                `
                },
                {
                    class: "step step2",
                    header: "Cashout",
                    text: "in dignissimos delectus? Quam qui rerum laboriosam nam adipisci ipsam maiores",
                    image: `
                    <img src="/static/predictions/css/images/step5.svg" alt="background image"/>
                `
                },
            ],
            membership: [{
                    "svg": `
                        <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#03B962" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#03B962" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `,
                    "plan": "Freemium",
                    "duration": "Free forever",
                    "price": "Free",
                    "features": [{
                            "text": "Limited number of leagues",
                        },
                        {
                            "text": "Limited number of predictions",
                        },
                        {
                            "text": "Support for your enquiries",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                    ],
                },
                {
                    "svg": `
                        <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#F7A400" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#F7A400" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `,
                    "plan": "Premium",
                    "duration": "Monthly duration",
                    "price": "$15.00",
                    "features": [{
                            "text": "Large number of leagues",
                        },
                        {
                            "text": "Large number of predictions",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "Watchlist to get email updates of new Predictions",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "Monthly Subscription,can cancel anytime",
                        },
                    ],
                },
                {
                    "svg": `
                        <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#595AB4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#595AB4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `,
                    "plan": "Premium Pro",
                    "duration": "Yearly Duration",
                    "price": "$150.00",
                    "features": [{
                            "text": "Large number of leagues",
                        },
                        {
                            "text": "Large number of predictions",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "Watchlist to get email updates of new Predictions",
                        },
                        {
                            "text": "Discounted Yearly Subscription,can cancel anytime",
                        },
                    ],
                },
            ],
            usertypes: [{
                    "svg": `
                        <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#03B962" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#03B962" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `,
                    "plan": "Freemium",
                    "duration": "Free forever",
                    "price": "Free",
                    "href": "/complete-signup/freemium/",
                    "features": [{
                            "text": "Limited number of leagues",
                        },
                        {
                            "text": "Limited number of predictions",
                        },
                        {
                            "text": "Support for your enquiries",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                    ],
                },
                {
                    "svg": `
                        <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#F7A400" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#F7A400" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `,
                    "plan": "Premium",
                    "duration": "Monthly/Yearly duration",
                    "price": "$15.00",
                    "href": "/complete-signup/premium/",
                    "features": [{
                            "text": "Large number of leagues",
                        },
                        {
                            "text": "Large number of predictions",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "Watchlist to get email updates of new Predictions",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "Monthly/Yearly Subscription,can cancel anytime",
                        },
                    ],
                },
            ],
            premiumtypes: [{
                    "svg": `
                    <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#F7A400" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#F7A400" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `,
                    "plan": "Premium",
                    "duration": "Monthly duration",
                    "price": "$15.00",
                    "href": "https://sandbox-flw-web-v3.herokuapp.com/pay/predict-football",
                    "features": [{
                            "text": "Large number of leagues",
                        },
                        {
                            "text": "Large number of predictions",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "Watchlist to get email updates of new Predictions",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "Monthly Subscription,can cancel anytime",
                        },
                    ],
                },
                {
                    "svg": `
                    <svg viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.72397 19.0264L42.1317 12.2541M2.75108 20.3007L26.0936 40.521C26.2634 40.6689 26.4674 40.7769 26.6897 40.8368C26.9121 40.8967 27.1469 40.9069 27.3759 40.8665C27.6049 40.8261 27.8221 40.7362 28.0105 40.6039C28.199 40.4716 28.3537 40.3003 28.4627 40.1033L43.4818 13.1188C43.6293 12.8526 43.689 12.5514 43.6529 12.2553C43.6169 11.9592 43.4868 11.6822 43.2799 11.461L35.0168 2.64471C34.8465 2.46214 34.6292 2.32488 34.3855 2.24598C34.1419 2.16707 33.8799 2.14914 33.6246 2.19388L8.27729 6.66329C8.02204 6.70858 7.78202 6.81502 7.58002 6.97251C7.37803 7.13 7.22077 7.3333 7.12318 7.56311L2.37379 18.6739C2.25503 18.9524 2.22752 19.2572 2.29491 19.5478C2.36231 19.8384 2.52141 20.101 2.75108 20.3007Z" stroke="#595AB4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.493 3.48564L31.7912 14.0773M31.7912 14.0773L20.9509 4.42844L14.0645 17.203M31.7912 14.0773L27.1288 39.465L14.0645 17.203M7.90303 8.17417L14.0645 17.203" stroke="#595AB4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `,
                    "plan": "Premium Pro",
                    "duration": "Yearly Duration",
                    "price": "$150.00",
                    "href": "https://sandbox-flw-web-v3.herokuapp.com/pay/predict-football",
                    "features": [{
                            "text": "Large number of leagues",
                        },
                        {
                            "text": "Large number of predictions",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "Watchlist to get email updates of new Predictions",
                        },
                        {
                            "text": "Discounted Yearly Subscription,can cancel anytime",
                        },
                    ],
                },
            ],
        }
    },
    mounted() {
        AOS.init();
        var inners = document.querySelectorAll("ul.socialaccount_providers li a");
        var email = document.querySelector("[type='email']");
        if (email) {
            email.required = true;
            var label = email.previousElementSibling;
            label.innerHTML = "Email Address:";
        }
        if (inners) {
            inners.forEach(function(e) {
                if (e.innerHTML == "Sign in with Google") {
                    e.innerHTML = `
                    Sign in with <img src="/static/predictions/css/images/Google.svg" alt="google"/>
                    `
                } else if (e.innerHTML == "Sign in with Instagram") {
                    e.innerHTML = `
                    Sign in with <img src="/static/predictions/css/images/instagram.svg" alt="google"/>
                    `
                } else if (e.innerHTML == "Sign in with Facebook") {
                    e.innerHTML = `
                    Sign in with <img src="/static/predictions/css/images/facebook.svg" alt="google"/>
                    `
                }
            })
        }
    },
    methods: {}
})

app.component("works", {
    props: {
        works: Array,
    },
    template: `
      <div v-for="work in works" :class="work.class">
          <div class="work-single" data-aos="fade-up" data-aos-duration="1000">
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

app.component("membership", {
    props: {
        membership: Array,
    },
    template: `
      <div v-for="member in membership" class="member-single" data-aos="fade-up" data-aos-duration="1000">
          <div class="member-single-main">
              <div class="title row">
                    <div class="left col-sm-12 col-md-9 col-lg-10 row">
                        <div class="title-image col-sm-4 col-md-3 col-lg-2" v-html="member.svg">
                           {{ member.svg }}
                        </div>
                        <div class="title-header col-sm-8 col-md-9 col-lg-10">
                            <h4> {{ member.plan }} </h4>
                            <p> {{ member.duration }} </p>
                        </div>
                    </div>
                    <div class="right col-sm-12 col-md-3 col-lg-2">
                        <span> {{ member.price }} </span>
                    </div>
              </div>
              <div class="text">
                  <ul>
                    <li v-for="list in member.features"> {{ list.text }} </li>
                  </ul>
              </div>
              <div class="cta" v-show="member.href">
                   <a class="primary-button" :href="member.href">Choose</a>
              </div>
          </div>
      </div>
      <slot></slot>
    `
})

app.mount("body");