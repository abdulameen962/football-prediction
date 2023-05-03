const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            works: [{
                    class: "step step1",
                    header: "Create Account",
                    text: "Sign up with your name and email address to experience what steady cash-out feels like.",
                    image: `
                  <img src="/static/predictions/css/images/step1.svg" alt="background image"/>
                  `
                },
                {
                    class: "step step2",
                    header: "Choose User Type",
                    text: "Check out the free version or Subscribe to the premium version to enjoy the ultimate VIP experience with exclusive access to more of our top-rated predictions.",
                    image: `
                    <img src="/static/predictions/css/images/step2.svg" alt="background image"/>
                `
                },
                {
                    class: "step step3",
                    header: "Check Tips",
                    text: "Get reliable predictions for the latest football matches.",
                    image: `
                    <img src="/static/predictions/css/images/step3.svg" alt="background image"/>
                `
                },
                {
                    class: "step step1",
                    header: "Bet on any Betting Platform",
                    text: "Make good decisions and place bets on any desired betting platform.",
                    image: `
                    <img src="/static/predictions/css/images/step4.svg" alt="background image"/>
                `
                },
                {
                    class: "step step2",
                    header: "Cashout",
                    text: "With an assuring smile, Win Big, Withdraw your greens and Ball with ease.",
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
                            "text": "Exact correct scores",
                        },
                        {
                            "text": "Combo ticket picks"
                        },
                        {
                            "text": "Combo draws",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "HT/FT tips",
                        },
                        {
                            "text": "Halftime Correct scores",
                        },
                        {
                            "text": "Watchlist of new tips",
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
                            "text": "Exact correct scores",
                        },
                        {
                            "text": "Combo ticket picks"
                        },
                        {
                            "text": "Combo draws",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "HT/FT tips",
                        },
                        {
                            "text": "Halftime Correct scores",
                        },
                        {
                            "text": "Watchlist of new tips",
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
                            "text": "Exact correct scores",
                        },
                        {
                            "text": "Combo ticket picks"
                        },
                        {
                            "text": "Combo draws",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "HT/FT tips",
                        },
                        {
                            "text": "Halftime Correct scores",
                        },
                        {
                            "text": "Watchlist of new tips",
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
                            "text": "Exact correct scores",
                        },
                        {
                            "text": "Combo ticket picks"
                        },
                        {
                            "text": "Combo draws",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "HT/FT tips",
                        },
                        {
                            "text": "Halftime Correct scores",
                        },
                        {
                            "text": "Watchlist of new tips",
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
                            "text": "Exact correct scores",
                        },
                        {
                            "text": "Combo ticket picks"
                        },
                        {
                            "text": "Combo draws",
                        },
                        {
                            "text": "Live scores of matches",
                        },
                        {
                            "text": "HT/FT tips",
                        },
                        {
                            "text": "Halftime Correct scores",
                        },
                        {
                            "text": "Full Support for any of your enquires",
                        },
                        {
                            "text": "Watchlist of new tips",
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
        var checkbox = document.querySelector("[type='checkbox']");
        var aside = document.querySelector("aside");
        var navbar = document.querySelector(".responsive_content .responsive_content_nav");
        var notification_number = document.querySelector(".notification_number");

        function getNotificationNumber() {
            axios
                .get(`/update-notifications/`, {
                    method: "GET",
                })
                .then(response => {
                    number = response.data;
                    if (response.status == 200) {
                        var number = number.number;
                        notification_number.innerHTML = `${number}`;
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.error = true;
                })
                .finally(() => this.loading = false);
        }
        if (email) {
            email.required = true;
            var label = email.previousElementSibling;
            label.innerHTML = "Email Address:";
        }
        if (inners) {
            inners.forEach(function(e) {
                if (e.innerHTML == "Sign in with Google") {
                    e.innerHTML = `
                    <img src="/static/predictions/css/images/Google.svg" alt="google"/>
                    `
                    e.style.display = "flex";
                } else if (e.innerHTML == "Sign in with Instagram") {
                    e.innerHTML = `
                    <img src="/static/predictions/css/images/instagram.svg" alt="google"/>
                    `
                    e.style.display = "flex";
                } else if (e.innerHTML == "Sign in with Facebook") {
                    e.innerHTML = `
                    <img src="/static/predictions/css/images/facebook.svg" alt="google"/>
                    `
                    e.style.display = "flex";
                }
            })
        }
        if (checkbox) {
            checkbox.checked = true;
        }
        if (aside) {
            var aside_side = document.querySelector(".body_main");
            aside.onmouseover = () => {
                var texts = document.querySelectorAll(".expand_content");
                texts.forEach(function(e) {
                    aside.classList.add("active");
                    aside_side.classList.add("active_main");
                    e.style.display = "block";
                })
            }
            aside.onmouseout = () => {
                var texts = document.querySelectorAll(".expand_content");
                texts.forEach(function(e) {
                    aside.classList.remove("active");
                    aside_side.classList.remove("active_main");
                    e.style.display = "none";
                })
            }
        }
        if (navbar) {
            var section = document.querySelector(".aside_nav section");
            if (window.matchMedia("(max-width: 991px)").matches) {
                var mainheader = document.querySelector("section div .navbar-brand");
                mainheader.remove();
                aside.append(mainheader);
                aside.insertBefore(mainheader, aside.children[0]);
                var notification = document.querySelector(".nav_side .dropdown");
                notification.remove()
                var responsive_content = document.querySelector(".responsive_content");
                responsive_content.append(notification);
                responsive_content.insertBefore(notification, responsive_content.children[0]);
                navbar.onclick = () => {
                    if (section.className == "") {
                        //get the form to add
                        var searchbar = document.querySelector(".nav_side form");
                        if (searchbar) {
                            searchbar.remove();
                            //get the maindiv
                            var maindiv = section.children[0];
                            maindiv.append(searchbar);
                            maindiv.insertBefore(searchbar, maindiv.children[0])
                        };
                        //change the searcbar icon
                        navbar.innerHTML = `<svg class="responsive_content_nav_icon"  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L1 11M1 1L11 11" stroke="#B2B4BE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        `;
                        section.classList.add("active_section");
                    } else if (section.className == "active_section") {
                        section.classList.remove("active_section");
                        navbar.innerHTML = `<svg class="responsive_content_nav_icon"  width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759785 11.8536 0.853553C11.7598 0.947321 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947321 0.146447 0.853553C0.0526785 0.759785 0 0.632608 0 0.5ZM0 4.5C0 4.36739 0.0526785 4.24021 0.146447 4.14645C0.240215 4.05268 0.367392 4 0.5 4H11.5C11.6326 4 11.7598 4.05268 11.8536 4.14645C11.9473 4.24021 12 4.36739 12 4.5C12 4.63261 11.9473 4.75979 11.8536 4.85355C11.7598 4.94732 11.6326 5 11.5 5H0.5C0.367392 5 0.240215 4.94732 0.146447 4.85355C0.0526785 4.75979 0 4.63261 0 4.5ZM0 8.5C0 8.36739 0.0526785 8.24021 0.146447 8.14645C0.240215 8.05268 0.367392 8 0.5 8H11.5C11.6326 8 11.7598 8.05268 11.8536 8.14645C11.9473 8.24021 12 8.36739 12 8.5C12 8.63261 11.9473 8.75979 11.8536 8.85355C11.7598 8.94732 11.6326 9 11.5 9H0.5C0.367392 9 0.240215 8.94732 0.146447 8.85355C0.0526785 8.75979 0 8.63261 0 8.5Z" fill="#B2B4BE"/>
                        </svg>
                        `;
                    }
                }
            }
        }
        if (notification_number) {
            setInterval(() => {
                getNotificationNumber()
            }, 30000);
            notification_number.parentElement.onclick = () => {
                //get the notifications
                axios
                    .get(`/get-notifications/`, {
                        method: "GET",
                    })
                    .then(response => {
                        notification = response.data;
                        if (response.status == 200) {
                            var ul = document.querySelector(".notification_list_main");
                            if (notification.length > 0) {
                                ul.innerHTML = "";
                                for (let i = 0; i < notification.length; i++) {
                                    const li = document.createElement("li");
                                    li.innerHTML = `
                                            <div class="row_header row">
                                                <header class="notification_list_header">
                                                    <h4> ${notification[i].header} </h4>
                                                </header>
                                                <div class="notification_list_extras">
                                                    <p>${notification[i].created}</p>
                                                    <button class="notification_list_delete">
                                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.28571 19.5556C1.28571 20.9 2.44286 22 3.85714 22H14.1429C15.5571 22 16.7143 20.9 16.7143 19.5556V7.33333C16.7143 5.98889 15.5571 4.88889 14.1429 4.88889H3.85714C2.44286 4.88889 1.28571 5.98889 1.28571 7.33333V19.5556ZM5.14286 7.33333H12.8571C13.5643 7.33333 14.1429 7.88333 14.1429 8.55556V18.3333C14.1429 19.0056 13.5643 19.5556 12.8571 19.5556H5.14286C4.43571 19.5556 3.85714 19.0056 3.85714 18.3333V8.55556C3.85714 7.88333 4.43571 7.33333 5.14286 7.33333ZM13.5 1.22222L12.5871 0.354444C12.3557 0.134444 12.0214 0 11.6871 0H6.31286C5.97857 0 5.64429 0.134444 5.41286 0.354444L4.5 1.22222H1.28571C0.578571 1.22222 0 1.77222 0 2.44444C0 3.11667 0.578571 3.66667 1.28571 3.66667H16.7143C17.4214 3.66667 18 3.11667 18 2.44444C18 1.77222 17.4214 1.22222 16.7143 1.22222H13.5Z" fill="#FF0000"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <p> ${notification[i].message} </p>
                                            </div>
                                        `
                                    if (notification[i].read) {
                                        li.className = "notification_list_single read";
                                    } else {
                                        li.className = "notification_list_single unread";
                                    }
                                    ul.append(li);
                                }
                                //for show more li
                                const li = document.createElement("li");
                                li.innerHTML = `<a href="/notifications/">Show All</a>`
                                ul.append(li);
                            } else {
                                ul.innerHTML = "";
                                ul.innerHTML = `<li>No notifications currently,check back later</li>`
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.error = true
                    })
                    .finally(() => this.loading = false)
            }
        }

    },
    methods: {
        deleteNotification(event, id) {
            axios
                .delete(`/edit-notifications/${id}`, {
                    // method: "Delete",
                    // withCredentials: true,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRFToken': getCookie('csrftoken'),
                    }
                })
                .then(response => {
                    var message = response.data;
                    if (response.status == 200) {
                        //do the needful
                        console.log(message.message);
                    }
                })
        },
        readNotifications(event, id) {
            axios
                .put(`/edit-notifications/${id}`, {
                    // method: "PUT",
                    headers: {
                        'X-CSRFToken': getCookie('csrftoken'),
                    }
                })
                .then(response => {
                    var message = response.data;
                    if (response.status == 200) {
                        //do the needful
                        console.log(message.message);
                    }
                })
        }
    }
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