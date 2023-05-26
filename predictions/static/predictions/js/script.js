const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            searchInput: "",
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
        var form = document.getElementById("search_form");
        var trs = document.querySelectorAll(".tr_element");
        const league_list_main = document.getElementById("league_list_main");
        // var live_scores_container = document.querySelector(".live_scores_container");

        if (email) {
            email.required = true;
            var label = email.previousElementSibling;
            label.innerHTML = "Email Address:";
        }
        if (inners) {
            inners.forEach(function(e) {
                if (e.innerHTML == "Sign in with Google") {
                    e.innerHTML = `
                    Sign in with Google<img src="/static/predictions/css/images/Google.svg" alt="google"/>
                    `
                    e.style.display = "flex";
                } else if (e.innerHTML == "Sign in with Instagram") {
                    e.innerHTML = `
                    <img src="/static/predictions/css/images/instagram.svg" alt="google"/>
                    `
                    e.style.display = "none";
                } else if (e.innerHTML == "Sign in with Facebook") {
                    e.innerHTML = `
                    <img src="/static/predictions/css/images/facebook.svg" alt="google"/>
                    `
                    e.style.display = "none";
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
            getNotificationNumber()
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
                            var ul = document.querySelector("#notification_list_main");
                            if (notification.length > 0) {
                                ul.innerHTML = "";
                                for (let i = 0; i < notification.length; i++) {
                                    const li = document.createElement("li");
                                    li.innerHTML = `
                                            <div class="row_header">
                                                <header class="notification_list_header">
                                                    <h5> ${notification[i].header} </h5>
                                                </header>
                                                <div>
                                                    <div class="notification_list_extras">
                                                        <p>${notification[i].created}</p>
                                                    </div>
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
                                li.innerHTML = `<a href="/notifications/" class="text-dark">Show All</a>`
                                li.classList.add("show_notifications")
                                ul.append(li);
                            } else if (notification.message) {
                                ul.innerHTML = "";
                                var li = document.createElement("li");
                                li.innerHTML = "No notifications currently,check back later"
                                ul.append(li);
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
        if (form) {
            const options = document.querySelector(".searchoptions");
            const input = document.querySelector("[name='search']");
            var lis = document.querySelectorAll(".searchoptions li");
            var result_search = document.getElementById("search_result");
            var search_reset = document.querySelector(".search_reset");
            input.onfocus = () => {
                options.style.display = "block";
                result_search.style.display = "none";
            }
            input.onblur = () => {
                setTimeout(() => {
                    options.style.display = "none";
                    result_search.style.display = "none";
                }, 500);
            }
            lis.forEach(function(e) {
                e.onclick = () => {
                    form.dataset.search = e.dataset.search;
                    input.placeholder = `Search in ${e.dataset.search}s`
                }
            })
            form.onsubmit = (event) => {
                event.preventDefault();
                var crsf = document.querySelector("[name='csrfmiddlewaretoken']").value;
                fetch("/search/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json; charset=UTF-8',
                            'X-CSRFToken': crsf,
                        },
                        body: JSON.stringify({
                            "command": form.dataset.search,
                            "term": input.value,
                        })
                    })
                    .then(response => response.json().then(res => {
                        options.style.display = "none";
                        if (response.status == 201) {
                            //no link
                            document.querySelector("[name='search']").value = "";
                            if (result_search) {
                                result_search.style.display = "block";
                                result_search.innerHTML = `<ul><li>Search term not found,pls search for another <p class="search_reset text-info">Search for another</p></li></ul>`;
                            } else {
                                console.log(result_search);
                            }

                        } else if (response.status == 200) {
                            //link
                            document.querySelector("[name='search']").value = "";
                            //get all the search result
                            result_search.innerHTML = "";
                            for (let i = 0; i < res.length; i++) {
                                const li = document.createElement("li");
                                li.innerHTML = `<a class="text-dark" href="${res[i].link}">${res[i].league}</a>`
                                result_search.append(li);
                            }
                            result_search.style.display = "block";
                            // window.location.href = res.message;
                        }
                    }))
            }
            if (search_reset) {
                search_reset.onclick = () => {
                    result_search.style.display = "none";
                    options.style.display = "block";
                }
            }

        }
        if (trs) {
            trs.forEach(e => {
                var parent = e.parentElement;
                var tbody = parent.lastElementChild.lastElementChild;
                e.remove();
                tbody.append(e);
            });
        }
        if (league_list_main) {
            var leagues_list = document.querySelectorAll("#league_list_main li");
            leagues_list.forEach((e) => {
                var main_table = e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild;
                e.onclick = () => {
                    fetch(`/get-type-league-info/${e.dataset.value}/${league_list_main.dataset.identifier}/`, {
                            method: "GET"
                        })
                        .then(response => response.json().then(res => {
                            var showable = e.parentElement.previousElementSibling.children[1];
                            if (response.status == 200) {
                                // with information
                                showable.innerHTML = e.innerHTML;
                                var all_predictions = res.result.predictions;
                                main_table.innerHTML = "";
                                var thead = document.createElement("thead");
                                var trhead = document.createElement("tr");
                                trhead.innerHTML = `
                                    <th class="w-auto" scope="col">Home</th>
                                    <th class="w-auto" scope="col">Away</th>     
                                `
                                if (e.dataset.value == "correct_score") {
                                    var tr1 = document.createElement("th");
                                    tr1.className = "w-auto";
                                    tr1.setAttribute("scope", "col");
                                    tr1.innerHTML = "Correct scores";
                                    var tr2 = document.createElement("th");
                                    tr2.className = "w-auto";
                                    tr2.setAttribute("scope", "col");
                                    tr2.innerHTML = "Tip";
                                    trhead.append(tr1, tr2);
                                } else if (e.dataset.value == "halftime_correct_score") {
                                    var tr1 = document.createElement("th");
                                    tr1.className = "w-auto";
                                    tr1.setAttribute("scope", "col");
                                    tr1.innerHTML = "Halftime Correct scores";
                                    trhead.append(tr1);
                                } else if (e.dataset.value == "combo_draws") {
                                    var tr1 = document.createElement("th");
                                    tr1.className = "w-auto";
                                    tr1.setAttribute("scope", "col");
                                    tr1.innerHTML = "Combo Draws";
                                    trhead.append(tr1);
                                } else if (e.dataset.value == "combo_tickets") {
                                    var tr1 = document.createElement("th");
                                    tr1.className = "w-auto";
                                    tr1.setAttribute("scope", "col");
                                    tr1.innerHTML = "Combo Tickets";
                                    trhead.append(tr1);
                                }
                                thead.append(trhead);
                                var tbody = document.createElement("tbody");
                                for (let i = 0; i < all_predictions.length; i++) {
                                    var tr = document.createElement("tr");
                                    tr.innerHTML = `
                                    <td class="w-auto">${all_predictions[i].home}</td>
                                    <td class="w-auto">${all_predictions[i].away}</td>
                                    `
                                    if (e.dataset.value == "correct_score") {
                                        var tr1 = document.createElement("td");
                                        tr1.className = "w-auto";
                                        if (all_predictions[i].correct_score == "?") {
                                            tr1.innerHTML = `<a href="/activate-subscription/">${all_predictions[i].correct_score}</a>`;
                                        } else {
                                            tr1.innerHTML = `${all_predictions[i].correct_score}`;
                                        }
                                        var tr2 = document.createElement("td");
                                        tr2.className = "w-auto";
                                        if (all_predictions[i].tip == "home") {
                                            tr2.innerHTML = `
                                            <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" fill="#03B962"/>
                                                <circle cx="27" cy="25" r="15" stroke="white" stroke-width="2"/>
                                                <path d="M21.4347 32V17.4545H24.0696V23.6122H30.8097V17.4545H33.4517V32H30.8097V25.821H24.0696V32H21.4347Z" fill="white"/>
                                                <path d="M21.4347 32H20.9347V32.5H21.4347V32ZM21.4347 17.4545V16.9545H20.9347V17.4545H21.4347ZM24.0696 17.4545H24.5696V16.9545H24.0696V17.4545ZM24.0696 23.6122H23.5696V24.1122H24.0696V23.6122ZM30.8097 23.6122V24.1122H31.3097V23.6122H30.8097ZM30.8097 17.4545V16.9545H30.3097V17.4545H30.8097ZM33.4517 17.4545H33.9517V16.9545H33.4517V17.4545ZM33.4517 32V32.5H33.9517V32H33.4517ZM30.8097 32H30.3097V32.5H30.8097V32ZM30.8097 25.821H31.3097V25.321H30.8097V25.821ZM24.0696 25.821V25.321H23.5696V25.821H24.0696ZM24.0696 32V32.5H24.5696V32H24.0696ZM21.9347 32V17.4545H20.9347V32H21.9347ZM21.4347 17.9545H24.0696V16.9545H21.4347V17.9545ZM23.5696 17.4545V23.6122H24.5696V17.4545H23.5696ZM24.0696 24.1122H30.8097V23.1122H24.0696V24.1122ZM31.3097 23.6122V17.4545H30.3097V23.6122H31.3097ZM30.8097 17.9545H33.4517V16.9545H30.8097V17.9545ZM32.9517 17.4545V32H33.9517V17.4545H32.9517ZM33.4517 31.5H30.8097V32.5H33.4517V31.5ZM31.3097 32V25.821H30.3097V32H31.3097ZM30.8097 25.321H24.0696V26.321H30.8097V25.321ZM23.5696 25.821V32H24.5696V25.821H23.5696ZM24.0696 31.5H21.4347V32.5H24.0696V31.5Z" fill="white"/>
                                                <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" stroke="white"/>
                                            </svg> 
                                            `;
                                        } else if (all_predictions[i].tip == "away") {
                                            tr2.innerHTML = `
                                            <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" fill="#FC3A3A"/>
                                                <circle cx="27" cy="25" r="15" stroke="white" stroke-width="2"/>
                                                <path d="M23.3026 32H20.4901L25.6108 17.4545H28.8636L33.9915 32H31.179L27.294 20.4375H27.1804L23.3026 32ZM23.3949 26.2969H31.0653V28.4134H23.3949V26.2969Z" fill="white"/>
                                                <path d="M23.3026 32V32.5H23.6622L23.7766 32.159L23.3026 32ZM20.4901 32L20.0184 31.834L19.784 32.5H20.4901V32ZM25.6108 17.4545V16.9545H25.2567L25.1392 17.2885L25.6108 17.4545ZM28.8636 17.4545L29.3352 17.2883L29.2175 16.9545H28.8636V17.4545ZM33.9915 32V32.5H34.6979L34.463 31.8338L33.9915 32ZM31.179 32L30.705 32.1592L30.8195 32.5H31.179V32ZM27.294 20.4375L27.768 20.2783L27.6535 19.9375H27.294V20.4375ZM27.1804 20.4375V19.9375H26.8207L26.7063 20.2785L27.1804 20.4375ZM23.3949 26.2969V25.7969H22.8949V26.2969H23.3949ZM31.0653 26.2969H31.5653V25.7969H31.0653V26.2969ZM31.0653 28.4134V28.9134H31.5653V28.4134H31.0653ZM23.3949 28.4134H22.8949V28.9134H23.3949V28.4134ZM23.3026 31.5H20.4901V32.5H23.3026V31.5ZM20.9617 32.166L26.0824 17.6206L25.1392 17.2885L20.0184 31.834L20.9617 32.166ZM25.6108 17.9545H28.8636V16.9545H25.6108V17.9545ZM28.3921 17.6208L33.5199 32.1662L34.463 31.8338L29.3352 17.2883L28.3921 17.6208ZM33.9915 31.5H31.179V32.5H33.9915V31.5ZM31.6529 31.8408L27.768 20.2783L26.8201 20.5967L30.705 32.1592L31.6529 31.8408ZM27.294 19.9375H27.1804V20.9375H27.294V19.9375ZM26.7063 20.2785L22.8285 31.841L23.7766 32.159L27.6544 20.5965L26.7063 20.2785ZM23.3949 26.7969H31.0653V25.7969H23.3949V26.7969ZM30.5653 26.2969V28.4134H31.5653V26.2969H30.5653ZM31.0653 27.9134H23.3949V28.9134H31.0653V27.9134ZM23.8949 28.4134V26.2969H22.8949V28.4134H23.8949Z" fill="white"/>
                                                <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" stroke="white"/>
                                            </svg>    
                                            `;
                                        } else if (all_predictions[i].tip == "draw") {
                                            tr2.innerHTML = `
                                            <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" fill="#F7A400"/>
                                                <circle cx="27" cy="25" r="15" stroke="white" stroke-width="2"/>
                                                <path d="M26.3636 32H21.4347V17.4545H26.4631C27.9072 17.4545 29.1477 17.7457 30.1847 18.3281C31.2263 18.9058 32.0265 19.7367 32.5852 20.821C33.1439 21.9053 33.4233 23.2027 33.4233 24.7131C33.4233 26.2282 33.1416 27.5303 32.5781 28.6193C32.0194 29.7083 31.2121 30.544 30.1562 31.1264C29.1051 31.7088 27.8409 32 26.3636 32ZM24.0696 29.7202H26.2358C27.2491 29.7202 28.0942 29.5355 28.7713 29.1662C29.4484 28.7921 29.9574 28.2358 30.2983 27.4972C30.6392 26.7538 30.8097 25.8258 30.8097 24.7131C30.8097 23.6004 30.6392 22.6771 30.2983 21.9432C29.9574 21.2045 29.4531 20.6529 28.7855 20.2884C28.1226 19.919 27.2988 19.7344 26.3139 19.7344H24.0696V29.7202Z" fill="white"/>
                                                <path d="M21.4347 32H20.9347V32.5H21.4347V32ZM21.4347 17.4545V16.9545H20.9347V17.4545H21.4347ZM30.1847 18.3281L29.9398 18.7641L29.9422 18.7654L30.1847 18.3281ZM32.5852 20.821L32.1408 21.05L32.1408 21.05L32.5852 20.821ZM32.5781 28.6193L32.134 28.3896L32.1333 28.3911L32.5781 28.6193ZM30.1562 31.1264L29.9148 30.6886L29.9139 30.6891L30.1562 31.1264ZM24.0696 29.7202H23.5696V30.2202H24.0696V29.7202ZM28.7713 29.1662L29.0107 29.6051L29.0131 29.6038L28.7713 29.1662ZM30.2983 27.4972L30.7523 27.7067L30.7528 27.7056L30.2983 27.4972ZM30.2983 21.9432L29.8443 22.1527L29.8448 22.1538L30.2983 21.9432ZM28.7855 20.2884L28.5422 20.7252L28.5459 20.7272L28.7855 20.2884ZM24.0696 19.7344V19.2344H23.5696V19.7344H24.0696ZM26.3636 31.5H21.4347V32.5H26.3636V31.5ZM21.9347 32V17.4545H20.9347V32H21.9347ZM21.4347 17.9545H26.4631V16.9545H21.4347V17.9545ZM26.4631 17.9545C27.8397 17.9545 28.9921 18.2318 29.9398 18.7641L30.4295 17.8922C29.3033 17.2597 27.9747 16.9545 26.4631 16.9545V17.9545ZM29.9422 18.7654C30.8952 19.2939 31.6262 20.0514 32.1408 21.05L33.0297 20.592C32.4269 19.4221 31.5574 18.5176 30.4271 17.8909L29.9422 18.7654ZM32.1408 21.05C32.6553 22.0486 32.9233 23.2637 32.9233 24.7131H33.9233C33.9233 23.1416 33.6326 21.762 33.0297 20.592L32.1408 21.05ZM32.9233 24.7131C32.9233 26.1668 32.6531 27.3864 32.134 28.3896L33.0222 28.8491C33.6301 27.6742 33.9233 26.2897 33.9233 24.7131H32.9233ZM32.1333 28.3911C31.6192 29.393 30.8821 30.155 29.9148 30.6886L30.3977 31.5642C31.5421 30.933 32.4196 30.0237 33.023 28.8476L32.1333 28.3911ZM29.9139 30.6891C28.9521 31.2219 27.7754 31.5 26.3636 31.5V32.5C27.9064 32.5 29.2581 32.1957 30.3986 31.5638L29.9139 30.6891ZM24.0696 30.2202H26.2358V29.2202H24.0696V30.2202ZM26.2358 30.2202C27.3073 30.2202 28.2407 30.0251 29.0107 29.6051L28.5319 28.7272C27.9477 29.0459 27.1908 29.2202 26.2358 29.2202V30.2202ZM29.0131 29.6038C29.7884 29.1755 30.3692 28.5367 30.7523 27.7067L29.8443 27.2876C29.5456 27.9349 29.1084 28.4088 28.5295 28.7285L29.0131 29.6038ZM30.7528 27.7056C31.1324 26.8777 31.3097 25.8732 31.3097 24.7131H30.3097C30.3097 25.7783 30.146 26.6299 29.8438 27.2887L30.7528 27.7056ZM31.3097 24.7131C31.3097 23.5533 31.1326 22.5523 30.7518 21.7325L29.8448 22.1538C30.1459 22.8018 30.3097 23.6475 30.3097 24.7131H31.3097ZM30.7523 21.7337C30.3697 20.9048 29.7937 20.2692 29.0252 19.8495L28.5459 20.7272C29.1126 21.0366 29.5451 21.5043 29.8443 22.1527L30.7523 21.7337ZM29.0289 19.8516C28.2726 19.4302 27.3593 19.2344 26.3139 19.2344V20.2344C27.2383 20.2344 27.9726 20.4078 28.5422 20.7251L29.0289 19.8516ZM26.3139 19.2344H24.0696V20.2344H26.3139V19.2344ZM23.5696 19.7344V29.7202H24.5696V19.7344H23.5696Z" fill="white"/>
                                                <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" stroke="white"/>
                                            </svg>   
                                            `;
                                        }
                                        tr.append(tr1, tr2);
                                    } else if (e.dataset.value == "halftime_correct_score") {
                                        var tr1 = document.createElement("td");
                                        tr1.className = "w-auto";
                                        if (all_predictions[i].halftime_correct_score == "?") {
                                            tr1.innerHTML = `<a href="/activate-subscription/">${all_predictions[i].halftime_correct_score}</a>`;
                                        } else {
                                            tr1.innerHTML = `${all_predictions[i].halftime_correct_score}`;
                                        }
                                        tr.append(tr1);
                                    } else if (e.dataset.value == "combo_draws") {
                                        var tr1 = document.createElement("td");
                                        tr1.className = "w-auto";
                                        if (all_predictions[i].combo_draws == "?") {
                                            tr1.innerHTML = `<a href="/activate-subscription/">${all_predictions[i].combo_draws}</a>`;
                                        } else {
                                            tr1.innerHTML = `${all_predictions[i].combo_draws}`;
                                        }
                                        tr.append(tr1);
                                    } else if (e.dataset.value == "combo_tickets") {
                                        var tr1 = document.createElement("td");
                                        tr1.className = "w-auto";
                                        if (all_predictions[i].combo_tickets == "?") {
                                            tr1.innerHTML = `<a href="/activate-subscription/">${all_predictions[i].combo_tickets}</a>`;
                                        } else {
                                            tr1.innerHTML = `${all_predictions[i].combo_tickets}`;
                                        }
                                        tr.append(tr1);
                                    }

                                    tbody.append(tr)

                                }
                                main_table.append(thead, tbody)
                            } else if (response.status == 201) {
                                //without any table info
                                showable.innerHTML = e.innerHTML;
                                main_table.innerHTML = "This league doesn't have the specified prediction type,you can try choosing another type or check back again"
                            }
                        }))
                        .catch(error => {
                            console.log(error)
                        })
                }
            })
        }

    },
    methods: {
        deleteNotification(event, id) {
            var parentElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            if (parentElement.className != "notifications_main_page_single read" || parentElement.className != "notifications_main_page_single unread") {
                parentElement = parentElement.parentElement;
            }
            var mainparent = parentElement.parentElement;
            axios
                .delete(`/edit-notifications/${id}`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRFToken': getCookie('csrftoken'),
                    }
                })
                .then(response => {
                    if (response.status == 200) {
                        //do the needful
                        parentElement.style.opacity = "0";
                        parentElement.remove();
                        if (mainparent.innerHTML == "") {
                            mainparent.innerHTML = "<p>No notifications yet,you are all caught up</p>"
                        }
                        getNotificationNumber();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => this.loading = false);

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
        },
        addWatchlist(event, id) {
            var el = event.target;
            if (el.dataset.stage != "add" || el.dataset.stage != "remove") {
                el = el.parentElement;
                if (el.dataset.stage != "add" || el.dataset.stage != "remove") {
                    el = el.parentElement;
                }
            }
            if (el.dataset.stage == "add") {
                fetch(`/add-watchlist/${id}/`, {
                        method: "PUT",
                        headers: {
                            'X-CSRFToken': getCookie('csrftoken'),
                        }
                    })
                    .then(response => response.json().then(res => {
                        var message = res;
                        if (response.status == 200) {
                            //do the needful
                            el.dataset.stage = "remove";
                            el.className = "watchlisted";
                            // console.log(message.message);
                        }
                    }))
            } else {
                fetch(`/add-watchlist/${id}/`, {
                        method: "DELETE",
                        headers: {
                            'X-CSRFToken': getCookie('csrftoken'),
                        }
                    })
                    .then(response => response.json().then(res => {
                        var message = res;
                        if (response.status == 200) {
                            //do the needful
                            el.dataset.stage = "add";
                            el.className = "watchlist";
                            // console.log(message.message);
                        }
                    }));
            }
        },
        showForm(event, id) {
            var el = event.target;
            var formdiv = document.getElementById(id)
            if (el.className != "secondary-button edit_button") {
                el = el.parentElement;
                console.log(el);
            }
            if (el.dataset.stage == "show") {
                formdiv.classList.add("info-form-active");
                el.dataset.stage = "hide";
            } else if (el.dataset.stage == "hide") {
                formdiv.classList.remove("info-form-active");
                el.dataset.stage = "show";
            }
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

app.component("predict", {
    props: {
        predict: Object,
        command: String,
        type: String,
        href: String,
    },
    template: `
        <tr class="tr_element">
            <td class="w-auto">{{ predict.home }}</td>
            <td class="w-auto">{{ predict.away }}</td>
            <td class="w-auto" v-if="command == 'correct_score' && type=='premium'">{{ predict.correct_score }} </td>
            <td class="w-auto" v-else-if="command == 'correct_score' && type=='freemium'"> <a :href="href"> ? </a> </td>
            <td class="w-auto" v-else-if="command == 'halftime_correct_score' && type=='premium'">{{ predict.halftime_correct_score }} </td>
            <td class="w-auto" v-else-if="command == 'halftime_correct_score' && type=='freemium'"> <a :href="href"> ? </a> </td>
            <td class="w-auto" v-else-if="command == 'combo_draws' && type=='premium'">{{ predict.combo_draws }} </td>
            <td class="w-auto" v-else-if="command == 'combo_draws' && type=='freemium'"> <a :href="href"> ? </a> </td>
            <td class="w-auto" v-else-if="command == 'combo_tickets' && type=='premium'">{{ predict.combo_tickets }} </td>
            <td class="w-auto" v-else> <a :href="href"> ? </a>  </td>
            <td class="w-auto" v-if="predict.tip == 'home' && command == 'correct_score'">
                <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" fill="#03B962"/>
                    <circle cx="27" cy="25" r="15" stroke="white" stroke-width="2"/>
                    <path d="M21.4347 32V17.4545H24.0696V23.6122H30.8097V17.4545H33.4517V32H30.8097V25.821H24.0696V32H21.4347Z" fill="white"/>
                    <path d="M21.4347 32H20.9347V32.5H21.4347V32ZM21.4347 17.4545V16.9545H20.9347V17.4545H21.4347ZM24.0696 17.4545H24.5696V16.9545H24.0696V17.4545ZM24.0696 23.6122H23.5696V24.1122H24.0696V23.6122ZM30.8097 23.6122V24.1122H31.3097V23.6122H30.8097ZM30.8097 17.4545V16.9545H30.3097V17.4545H30.8097ZM33.4517 17.4545H33.9517V16.9545H33.4517V17.4545ZM33.4517 32V32.5H33.9517V32H33.4517ZM30.8097 32H30.3097V32.5H30.8097V32ZM30.8097 25.821H31.3097V25.321H30.8097V25.821ZM24.0696 25.821V25.321H23.5696V25.821H24.0696ZM24.0696 32V32.5H24.5696V32H24.0696ZM21.9347 32V17.4545H20.9347V32H21.9347ZM21.4347 17.9545H24.0696V16.9545H21.4347V17.9545ZM23.5696 17.4545V23.6122H24.5696V17.4545H23.5696ZM24.0696 24.1122H30.8097V23.1122H24.0696V24.1122ZM31.3097 23.6122V17.4545H30.3097V23.6122H31.3097ZM30.8097 17.9545H33.4517V16.9545H30.8097V17.9545ZM32.9517 17.4545V32H33.9517V17.4545H32.9517ZM33.4517 31.5H30.8097V32.5H33.4517V31.5ZM31.3097 32V25.821H30.3097V32H31.3097ZM30.8097 25.321H24.0696V26.321H30.8097V25.321ZM23.5696 25.821V32H24.5696V25.821H23.5696ZM24.0696 31.5H21.4347V32.5H24.0696V31.5Z" fill="white"/>
                    <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" stroke="white"/>
                </svg>                                                                                               
            </td>                                                                              
            <td class="w-auto" v-else-if="predict.tip == 'away' && command == 'correct_score'">
                <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" fill="#FC3A3A"/>
                    <circle cx="27" cy="25" r="15" stroke="white" stroke-width="2"/>
                    <path d="M23.3026 32H20.4901L25.6108 17.4545H28.8636L33.9915 32H31.179L27.294 20.4375H27.1804L23.3026 32ZM23.3949 26.2969H31.0653V28.4134H23.3949V26.2969Z" fill="white"/>
                    <path d="M23.3026 32V32.5H23.6622L23.7766 32.159L23.3026 32ZM20.4901 32L20.0184 31.834L19.784 32.5H20.4901V32ZM25.6108 17.4545V16.9545H25.2567L25.1392 17.2885L25.6108 17.4545ZM28.8636 17.4545L29.3352 17.2883L29.2175 16.9545H28.8636V17.4545ZM33.9915 32V32.5H34.6979L34.463 31.8338L33.9915 32ZM31.179 32L30.705 32.1592L30.8195 32.5H31.179V32ZM27.294 20.4375L27.768 20.2783L27.6535 19.9375H27.294V20.4375ZM27.1804 20.4375V19.9375H26.8207L26.7063 20.2785L27.1804 20.4375ZM23.3949 26.2969V25.7969H22.8949V26.2969H23.3949ZM31.0653 26.2969H31.5653V25.7969H31.0653V26.2969ZM31.0653 28.4134V28.9134H31.5653V28.4134H31.0653ZM23.3949 28.4134H22.8949V28.9134H23.3949V28.4134ZM23.3026 31.5H20.4901V32.5H23.3026V31.5ZM20.9617 32.166L26.0824 17.6206L25.1392 17.2885L20.0184 31.834L20.9617 32.166ZM25.6108 17.9545H28.8636V16.9545H25.6108V17.9545ZM28.3921 17.6208L33.5199 32.1662L34.463 31.8338L29.3352 17.2883L28.3921 17.6208ZM33.9915 31.5H31.179V32.5H33.9915V31.5ZM31.6529 31.8408L27.768 20.2783L26.8201 20.5967L30.705 32.1592L31.6529 31.8408ZM27.294 19.9375H27.1804V20.9375H27.294V19.9375ZM26.7063 20.2785L22.8285 31.841L23.7766 32.159L27.6544 20.5965L26.7063 20.2785ZM23.3949 26.7969H31.0653V25.7969H23.3949V26.7969ZM30.5653 26.2969V28.4134H31.5653V26.2969H30.5653ZM31.0653 27.9134H23.3949V28.9134H31.0653V27.9134ZM23.8949 28.4134V26.2969H22.8949V28.4134H23.8949Z" fill="white"/>
                    <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" stroke="white"/>
                </svg>                                                
            </td>                                                                           
            <td class="w-auto" v-else-if="predict.tip == 'draw' && command == 'correct_score'">
                <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" fill="#F7A400"/>
                    <circle cx="27" cy="25" r="15" stroke="white" stroke-width="2"/>
                    <path d="M26.3636 32H21.4347V17.4545H26.4631C27.9072 17.4545 29.1477 17.7457 30.1847 18.3281C31.2263 18.9058 32.0265 19.7367 32.5852 20.821C33.1439 21.9053 33.4233 23.2027 33.4233 24.7131C33.4233 26.2282 33.1416 27.5303 32.5781 28.6193C32.0194 29.7083 31.2121 30.544 30.1562 31.1264C29.1051 31.7088 27.8409 32 26.3636 32ZM24.0696 29.7202H26.2358C27.2491 29.7202 28.0942 29.5355 28.7713 29.1662C29.4484 28.7921 29.9574 28.2358 30.2983 27.4972C30.6392 26.7538 30.8097 25.8258 30.8097 24.7131C30.8097 23.6004 30.6392 22.6771 30.2983 21.9432C29.9574 21.2045 29.4531 20.6529 28.7855 20.2884C28.1226 19.919 27.2988 19.7344 26.3139 19.7344H24.0696V29.7202Z" fill="white"/>
                    <path d="M21.4347 32H20.9347V32.5H21.4347V32ZM21.4347 17.4545V16.9545H20.9347V17.4545H21.4347ZM30.1847 18.3281L29.9398 18.7641L29.9422 18.7654L30.1847 18.3281ZM32.5852 20.821L32.1408 21.05L32.1408 21.05L32.5852 20.821ZM32.5781 28.6193L32.134 28.3896L32.1333 28.3911L32.5781 28.6193ZM30.1562 31.1264L29.9148 30.6886L29.9139 30.6891L30.1562 31.1264ZM24.0696 29.7202H23.5696V30.2202H24.0696V29.7202ZM28.7713 29.1662L29.0107 29.6051L29.0131 29.6038L28.7713 29.1662ZM30.2983 27.4972L30.7523 27.7067L30.7528 27.7056L30.2983 27.4972ZM30.2983 21.9432L29.8443 22.1527L29.8448 22.1538L30.2983 21.9432ZM28.7855 20.2884L28.5422 20.7252L28.5459 20.7272L28.7855 20.2884ZM24.0696 19.7344V19.2344H23.5696V19.7344H24.0696ZM26.3636 31.5H21.4347V32.5H26.3636V31.5ZM21.9347 32V17.4545H20.9347V32H21.9347ZM21.4347 17.9545H26.4631V16.9545H21.4347V17.9545ZM26.4631 17.9545C27.8397 17.9545 28.9921 18.2318 29.9398 18.7641L30.4295 17.8922C29.3033 17.2597 27.9747 16.9545 26.4631 16.9545V17.9545ZM29.9422 18.7654C30.8952 19.2939 31.6262 20.0514 32.1408 21.05L33.0297 20.592C32.4269 19.4221 31.5574 18.5176 30.4271 17.8909L29.9422 18.7654ZM32.1408 21.05C32.6553 22.0486 32.9233 23.2637 32.9233 24.7131H33.9233C33.9233 23.1416 33.6326 21.762 33.0297 20.592L32.1408 21.05ZM32.9233 24.7131C32.9233 26.1668 32.6531 27.3864 32.134 28.3896L33.0222 28.8491C33.6301 27.6742 33.9233 26.2897 33.9233 24.7131H32.9233ZM32.1333 28.3911C31.6192 29.393 30.8821 30.155 29.9148 30.6886L30.3977 31.5642C31.5421 30.933 32.4196 30.0237 33.023 28.8476L32.1333 28.3911ZM29.9139 30.6891C28.9521 31.2219 27.7754 31.5 26.3636 31.5V32.5C27.9064 32.5 29.2581 32.1957 30.3986 31.5638L29.9139 30.6891ZM24.0696 30.2202H26.2358V29.2202H24.0696V30.2202ZM26.2358 30.2202C27.3073 30.2202 28.2407 30.0251 29.0107 29.6051L28.5319 28.7272C27.9477 29.0459 27.1908 29.2202 26.2358 29.2202V30.2202ZM29.0131 29.6038C29.7884 29.1755 30.3692 28.5367 30.7523 27.7067L29.8443 27.2876C29.5456 27.9349 29.1084 28.4088 28.5295 28.7285L29.0131 29.6038ZM30.7528 27.7056C31.1324 26.8777 31.3097 25.8732 31.3097 24.7131H30.3097C30.3097 25.7783 30.146 26.6299 29.8438 27.2887L30.7528 27.7056ZM31.3097 24.7131C31.3097 23.5533 31.1326 22.5523 30.7518 21.7325L29.8448 22.1538C30.1459 22.8018 30.3097 23.6475 30.3097 24.7131H31.3097ZM30.7523 21.7337C30.3697 20.9048 29.7937 20.2692 29.0252 19.8495L28.5459 20.7272C29.1126 21.0366 29.5451 21.5043 29.8443 22.1527L30.7523 21.7337ZM29.0289 19.8516C28.2726 19.4302 27.3593 19.2344 26.3139 19.2344V20.2344C27.2383 20.2344 27.9726 20.4078 28.5422 20.7251L29.0289 19.8516ZM26.3139 19.2344H24.0696V20.2344H26.3139V19.2344ZM23.5696 19.7344V29.7202H24.5696V19.7344H23.5696Z" fill="white"/>
                    <rect x="0.5" y="0.5" width="53" height="49" rx="12.5" stroke="white"/>
                </svg>                                                
            </td>            
            <td class="w-auto"> <button class="btn btn-info text-white"> {{ predict.prediction_status }} </button> </td>
        </tr>
    
    
    `
})

app.component("personal", {
    props: {
        infos: Array,
    },
    template: `
    <div class="row info_text_main">
        <div class="col-sm-12 col-md-6 col-lg-6" v-for="info in infos">
            <h6> {{ info.title }} </h6>
            <p v-if="info.name != ''"> {{ info.name }} </p>
            <p v-else> None </p>
        </div>
    </div>
    
    
    `
})

app.component("user_dashboard", {
    props: {
        hot_leagues: Array,
        hot_predictions: Array,
    },
    template: `
    <div class="dashboard-single latest_leagues latest">
        <header>
            <h3>Hottest Leagues</h3>
        </header>
        <div class="latest_leagues_main">
            <div class="table-responsive table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="w-auto" scope="col">Logo</th>
                            <th class="w-auto" scope="col">League</th>
                            <th class="w-auto" scope="col">Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="league in hot_leagues">
                            <td class="w-auto"><img :src="league.logo" :alt="league.league"/></td>
                            <td class="w-auto">{{ league.league }}</td>   
                            <td class="w-auto">{{ league.code }}</td>                                                                                                              
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        </div>
        <div class="dashboard-single latest_predictions latest">
            <header>
                <h3>Latest Predictions</h3>
            </header>
            <div class="latest_predictions_main">
                <div class="table-responsive table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="w-auto" scope="col">League</th>
                                <th class="w-auto" scope="col">Home</th>
                                <th class="w-auto" scope="col">Away</th>
                                <th class="w-auto" scope="col">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="league in hot_predictions">
                                <td class="w-auto">({{ league.league.code }}){{ league.league.league }}</td>
                                <td class="w-auto">{{ league.home }}</td>   
                                <td class="w-auto">{{ league.away }}</td>   
                                <td class="w-auto">{{ league.published }}</td>                                                                                                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    
    `
})


app.component("live_score", {
    props: {
        scores: Array,
        filterKey: String,
    },
    data: function() {
        return {
            sortKey: ""
        }
    },
    computed: {
        fElement: function() {
            const filterKey = this.filterKey && this.filterKey.toLowerCase()

            let entries = this.scores

            if (filterKey) {
                entries = entries.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        )
                    })
                })
            }

            if (entries != "") {
                return entries;
            } else {
                // alert("the search term you entered doesn't exist");
                filterKey = "";
                return entries;
            }
        },
        sortColumns() {
            const sortedColumns = {}

            this.columns.forEach(function(key) {
                sortedColumns[key] = 1
            })

            return sortedColumns
        }
    },
    template: `
    <div class="dashboard-single live_scores row p-4" v-for="score in fElement">
        <div class="col-sm-12 col-md-5 col-lg-5 row flex-row justify-content-center align-items-center home">
            <div :class="'home_status' + ' ' + 'col-sm-12 col-md-5 col-lg-5' + ' ' + score.status">
                <button v-if="score.status == 'IN PLAY'" class="btn rounded btn-danger text-white home_button">{{ score.status }}</button>
                <button v-else-if="score.status == 'NOT STARTED'" class="btn rounded btn-light home_button">{{ score.status }}</button>
                <button v-else-if="score.status == 'HALF TIME BREAK'" class="btn rounded btn-warning text-white home_button">{{ score.status }}</button>
                <button v-else-if="score.status == 'ADDED TIME'" class="btn rounded btn-info text-white home_button">{{ score.status }}</button>
                <button v-else-if="score.status == 'FINISHED'" class="btn rounded btn-success text-white home_button">{{ score.status }}</button>
                <button v-else class="btn rounded btn-primary text-white home_button">{{ score.status }}</button>

            </div>

            <div class="home_current_time col-sm-4 col-md-2 col-lg-2">
                <span class="p-1 rounded-pill text-dark text-center"> {{ score.time }}' </span>
            </div>
            <div class="home_home_team col-sm-12 col-md-5 col-md-5">
                <p>{{ score.home_name }}</p>
            </div>
        </div>
        <div class="score d-flex flew-row justify-content-center align-items-center col-sm-12 col-md-2 col-lg-2">
            <button class="btn btn-light"> {{ score.score }} </button>
        </div>
        <div class="away col-sm-12 col-md-5 col-lg-5 row flex-row justify-content-center align-items-center">
            <div class="away_team col-sm-12 col-md-5 col-lg-5">
                <p> {{ score.away_name }} </p>
            </div>
            <div class="away_location col-sm-12 col-md-7 col-lg-7">
                <p><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13 0 0 2.817 0 6.3C0 11.025 7 18 7 18C7 18 14 11.025 14 6.3C14 2.817 10.87 0 7 0ZM2 6.3C2 3.816 4.24 1.8 7 1.8C9.76 1.8 12 3.816 12 6.3C12 8.892 9.12 12.771 7 15.192C4.92 12.789 2 8.865 2 6.3Z" fill="#808080" fill-opacity="0.8"/>
                <path d="M7 8.54993C8.38071 8.54993 9.5 7.54257 9.5 6.29993C9.5 5.05729 8.38071 4.04993 7 4.04993C5.61929 4.04993 4.5 5.05729 4.5 6.29993C4.5 7.54257 5.61929 8.54993 7 8.54993Z" fill="#808080" fill-opacity="0.8"/>
                </svg>                
                <span class="ps-3">{{ score.location }}</span></p>
            </div>
        </div>
    </div>
    `
})

app.mount("body");