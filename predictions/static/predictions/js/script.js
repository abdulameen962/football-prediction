const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            blocks: [{
                    "h6": "Doctor",
                    "svg": `
                    <svg class="icon" viewBox="0 0 92 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9941 32.3591L28.5889 32.3111C28.8043 32.2887 29.0103 32.2158 29.188 32.0991L29.1838 32.1031C29.7531 33.9506 30.45 35.8941 31.321 37.9295C32.4384 40.5928 33.5389 42.7802 34.7711 44.8916L34.6011 44.5717C34.4991 46.0273 34.3759 47.5229 34.2145 48.9705C34.1437 49.8245 33.9596 50.6668 33.6664 51.4778L33.6876 51.4058C33.6366 51.4258 33.5644 59.7235 33.5644 59.7235C33.566 62.2982 34.488 64.7974 36.182 66.819C37.876 68.8406 40.2435 70.267 42.9035 70.8684L42.9884 70.8844C43.1066 70.5957 43.3146 70.3473 43.5852 70.1718C43.8559 69.9963 44.1766 69.9018 44.5053 69.9007H46.9442C47.2698 69.9048 47.587 69.9992 47.8561 70.172C48.1251 70.3448 48.334 70.5885 48.4568 70.8724L48.461 70.8844C51.1435 70.3008 53.5381 68.882 55.2569 66.8579C56.9758 64.8337 57.9183 62.3227 57.9318 59.7315C57.9318 59.7315 57.7831 51.4658 57.7066 51.4098C57.4534 50.6368 57.2798 49.8427 57.1882 49.0385L57.184 48.9785C57.0353 47.5229 56.9376 46.0633 56.7973 44.5797C57.8468 42.7962 58.9473 40.6128 59.916 38.3614L60.0775 37.9375C60.9485 35.9021 61.6241 33.9626 62.2147 32.1111C62.3893 32.2278 62.5925 32.3007 62.8053 32.3231H62.8095L63.4086 32.3711C64.1309 32.443 64.7683 31.8832 64.8277 31.0154L65.4736 23.2936V23.2856C65.4732 22.9748 65.3527 22.6748 65.1346 22.4416C64.9164 22.2083 64.6156 22.0577 64.2881 22.0179H64.2074C64.7733 17.997 64.4227 13.9087 63.1792 10.0252L63.2344 10.2292C62.036 7.72474 60.2133 5.52937 57.921 3.82935C55.6288 2.12933 52.9346 0.974852 50.0671 0.463872L49.9566 0.447876C48.5664 0.185541 47.1549 0.0357018 45.7375 0H45.6482C44.1655 0.0249895 42.6887 0.182995 41.2379 0.47187L41.3909 0.447876C38.5249 0.948541 35.8281 2.08806 33.5261 3.77104C31.2242 5.45402 29.384 7.6315 28.1598 10.1212L28.1131 10.2292C26.8898 14.0977 26.5638 18.1685 27.1571 22.1659L27.1401 22.0179C26.8118 22.0514 26.5081 22.1975 26.287 22.4284C26.066 22.6593 25.9431 22.9588 25.9419 23.2696V23.2976L26.5877 31.0194C26.6472 31.9072 27.293 32.443 27.9898 32.3711L27.9941 32.3591Z"/>
                        <path d="M91.2431 83.465C90.9457 71.3083 89.654 68.5571 88.9572 66.6936C88.681 65.9458 88.4558 60.8912 79.5842 57.6121C74.1456 55.5967 67.1264 55.5567 61.1864 53.1933V59.7675C61.1803 63.1378 59.9289 66.4012 57.6468 68.9985C55.3647 71.5957 52.1939 73.3652 48.6777 74.0036L48.58 74.0196C48.5163 74.3743 48.3223 74.6967 48.0319 74.9306C47.7415 75.1644 47.3731 75.2949 46.9909 75.2992H46.9144V80.2579C46.9144 82.5848 47.8966 84.8164 49.6448 86.4617C51.393 88.1071 53.7641 89.0315 56.2365 89.0315C58.7089 89.0315 61.08 88.1071 62.8282 86.4617C64.5764 84.8164 65.5586 82.5848 65.5586 80.2579V76.7948C64.2754 76.6177 63.1056 76.0042 62.2706 75.0702C61.4356 74.1362 60.9932 72.9466 61.0271 71.7264C61.0611 70.5062 61.569 69.34 62.4547 68.4485C63.3405 67.5569 64.5428 67.0018 65.8341 66.8881C67.1254 66.7744 68.4162 67.1101 69.4623 67.8316C70.5084 68.5531 71.2372 69.6104 71.511 70.8035C71.7848 71.9966 71.5845 73.2428 70.948 74.3063C70.3115 75.3698 69.283 76.1769 68.0569 76.5749L68.0187 76.5869V80.4458C68.0187 83.3878 66.7769 86.2094 64.5665 88.2897C62.3561 90.37 59.3582 91.5388 56.2322 91.5388C53.1063 91.5388 50.1084 90.37 47.898 88.2897C45.6876 86.2094 44.4458 83.3878 44.4458 80.4458V80.2459V80.2539V75.2513C44.082 75.2279 43.7372 75.0897 43.4673 74.8589C43.1974 74.628 43.0182 74.3182 42.9587 73.9796V73.9716C39.4387 73.3398 36.2616 71.5756 33.9718 68.9814C31.682 66.3871 30.4219 63.1241 30.4075 59.7515V53.1254C24.442 55.5367 17.3804 55.5847 11.912 57.6041C3.01486 60.8792 2.81091 65.9218 2.53898 66.6816C1.85916 68.5531 0.550499 71.2923 0.253077 83.457C0.20209 85.0565 0.253077 87.5079 5.37724 89.6513C16.5348 93.7701 30.9088 95.0498 45.0789 95.9695H46.4385C60.6383 95.0578 74.9911 93.7821 86.1402 89.6513C91.2431 87.5199 91.2899 85.0805 91.2431 83.465ZM28.8651 78.5064H23.571V83.509H19.7895V78.5224H14.4954V74.9633H19.7895V69.9807H23.571V74.9633H28.8651V78.5064Z"/>
                        <path d="M69.1871 71.8162C69.1866 71.1026 68.8849 70.4144 68.3485 69.9101C67.812 69.4058 67.0848 69.1227 66.3266 69.1229C65.5683 69.1232 64.8413 69.4068 64.3053 69.9115C63.7692 70.4162 63.4681 71.1006 63.4681 71.8142C63.4681 72.5278 63.7692 73.2122 64.3053 73.7168C64.8413 74.2215 65.5683 74.5052 66.3266 74.5054C67.0848 74.5057 67.812 74.2225 68.3485 73.7182C68.8849 73.2139 69.1866 72.5298 69.1871 71.8162Z" fill="white"/>
                    </svg>                    
                `,
                    "text": "We are a network of trained specialists providing services online",
                },
                {
                    "h6": "Patient",
                    "svg": `
                    <svg class="icon" viewBox="0 0 63 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6243 19.4711C29.058 19.6679 31.4678 18.86 33.3253 17.2246C35.1827 15.5892 36.3361 13.26 36.5323 10.7477C36.7209 8.23345 35.936 5.74458 34.3499 3.82689C32.7637 1.9092 30.5057 0.71923 28.071 0.517932C25.6368 0.320752 23.2263 1.12934 21.3691 2.76605C19.512 4.40276 18.3601 6.73371 18.1665 9.24679C18.0715 10.4916 18.2149 11.7436 18.5885 12.9312C18.9621 14.1189 19.5587 15.2189 20.344 16.1685C21.1294 17.1181 22.0883 17.8987 23.1659 18.4656C24.2434 19.0326 25.4186 19.3749 26.6243 19.473V19.4711ZM29.149 38.5263C30.5683 38.8081 31.8477 39.5928 32.7664 40.7448C33.685 41.8969 34.1852 43.3439 34.1806 44.8362C34.1801 46.5404 33.5242 48.1747 32.357 49.3798C31.1899 50.5849 29.607 51.2621 27.9563 51.2626H7.78742C7.1389 51.2628 6.5003 51.0982 5.92794 50.7834C5.35559 50.4686 4.86708 50.0131 4.50549 49.4573C4.14391 48.9014 3.92038 48.2623 3.85461 47.5961C3.78884 46.93 3.88285 46.2574 4.12837 45.6377L6.30898 40.3825L30.5956 22.422H19.0239C14.5798 22.2945 11.4571 23.8884 9.66634 27.5023C8.45254 29.9341 2.00597 44.8034 2.00597 44.8034C1.62892 45.7786 1.48905 46.8344 1.59862 47.8783C1.70818 48.9222 2.06383 49.9225 2.63446 50.7917C3.20509 51.6609 3.97331 52.3725 4.87193 52.8642C5.77054 53.3559 6.77217 53.6128 7.78918 53.6124H15.6666L13.343 69.387L1.11679 105.865C0.622447 107.412 0.743339 109.098 1.45287 110.552C2.1624 112.006 3.40245 113.11 4.90022 113.621C6.398 114.131 8.03081 114.006 9.43945 113.274C10.8481 112.541 11.9172 111.261 12.4115 109.714L26.4708 68.5655C29.2125 73.1649 34.6693 81.4092 35.5973 82.9666C35.8108 85.555 37.7744 108.374 37.7744 108.374C37.9155 109.995 38.6742 111.493 39.8838 112.538C41.0935 113.582 42.6553 114.089 44.2262 113.946C45.0045 113.875 45.7616 113.646 46.4543 113.273C47.1469 112.9 47.7614 112.389 48.2627 111.771C48.764 111.152 49.1422 110.437 49.3756 109.667C49.609 108.897 49.6931 108.088 49.6231 107.284L47.3119 80.4292C47.2335 79.4779 46.9372 78.5595 46.4474 77.7497L36.34 60.8366L37.949 39.6102C37.949 39.6102 40.3431 48.0093 40.5213 48.6159C41.0347 50.35 42.192 51.5941 43.3794 52.5869C44.0745 53.1588 55.872 61.4487 55.872 61.4487C56.5283 61.762 57.0647 62.037 57.7686 62.0862C58.3121 62.1313 58.8588 62.0654 59.3776 61.8922C59.8963 61.719 60.377 61.442 60.792 61.0769C61.207 60.7119 61.5483 60.2659 61.7963 59.7646C62.0443 59.2633 62.1942 58.7165 62.2374 58.1553C62.2913 57.4395 62.1711 56.7211 61.8876 56.0654C61.6042 55.4098 61.1665 54.8377 60.6143 54.4011C60.6143 54.4011 48.8591 46.0675 48.381 45.7051C48.0298 45.4143 47.762 45.0301 47.6065 44.5939L42.9542 27.2929C42.1973 24.6753 39.6427 22.4239 36.4124 22.4239H35.0204L29.1472 38.5282L29.149 38.5263Z"/>
                        <path d="M27.9563 48.9128C28.9699 48.922 29.9479 48.5272 30.6867 47.8107C31.4256 47.0942 31.8683 46.1111 31.9229 45.0661C31.9774 44.021 31.6396 42.9945 30.9796 42.2002C30.3196 41.4058 29.3884 40.9048 28.3797 40.8015L25.4952 48.9383L27.9563 48.9128Z"/>
                    </svg>                    
                `,
                    "text": "Having a hard time with a doctor or health? We are here for you",
                },
                {
                    "h6": "Admin",
                    "svg": `
                    <svg class="icon" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.9722 28.4834C51.1858 28.4834 52.3637 28.6253 53.5417 28.8027V11.6984L26.7708 0.0944824L0 11.6984V29.1221C0 45.2328 11.4222 60.3144 26.7708 63.9695C28.734 63.5082 30.6258 62.8339 32.4819 62.0177C30.019 58.5401 28.5556 54.3173 28.5556 49.775C28.5556 38.0291 38.1574 28.4834 49.9722 28.4834Z"/>
                        <path d="M49.9722 35.5806C42.0837 35.5806 35.6944 41.9326 35.6944 49.775C35.6944 57.6174 42.0837 63.9695 49.9722 63.9695C57.8607 63.9695 64.25 57.6174 64.25 49.775C64.25 41.9326 57.8607 35.5806 49.9722 35.5806ZM49.9722 40.4776C52.1853 40.4776 53.97 42.2874 53.97 44.4521C53.97 46.6167 52.1496 48.4265 49.9722 48.4265C47.7949 48.4265 45.9744 46.6167 45.9744 44.4521C45.9744 42.2874 47.7592 40.4776 49.9722 40.4776ZM49.9722 59.5337C46.6526 59.5337 43.7614 57.9013 41.9767 55.3818C42.1551 52.8268 47.3665 51.5493 49.9722 51.5493C52.5779 51.5493 57.7893 52.8268 57.9678 55.3818C56.1831 57.9013 53.2918 59.5337 49.9722 59.5337Z"/>
                    </svg>                    
                    `,
                    "text": "Reach out to us today and we will hook you up with a specialist today",
                },
            ],
            grids: [{
                    "img": "/static/hospital/images/avatars/avatar-s-8.jpg",
                    "text": "Lorem ipsum",
                },
                {
                    "img": "/static/hospital/images/avatars/avatar-s-5.jpg",
                    "text": "Lorem ipsum",
                },
                {
                    "img": "/static/hospital/images/avatars/avatar-s-26.jpg",
                    "text": "Lorem ipsum",
                },
            ],
            links: [{
                    "class": "link whatsapp",
                    "svg": `
                    <svg class="icon" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.937871 26.7119L2.67251 20.2542C1.44201 18.2691 0.778489 16.0114 0.75018 13.7132C0.649501 6.53402 6.61184 0.714499 14.0679 0.714499C21.5239 0.714499 27.6495 6.53402 27.7502 13.7132C27.8508 20.8924 21.8885 26.7119 14.4325 26.7119C12.0468 26.7156 9.69448 26.1077 7.61727 24.9506L0.937871 26.7119ZM9.29249 7.61422C9.1183 7.62464 8.94857 7.66885 8.79347 7.7442C8.64814 7.82405 8.51586 7.92388 8.40072 8.04057C8.24078 8.18746 8.15077 8.31485 8.05395 8.43833C7.56378 9.06357 7.30616 9.83104 7.32179 10.6195C7.33342 11.2565 7.51492 11.8765 7.79305 12.4562C8.36164 13.6287 9.2876 14.8701 10.5039 16.0205C10.7967 16.2974 11.0827 16.5755 11.3901 16.8342C12.8974 18.097 14.6852 19.0076 16.6114 19.4937L17.3811 19.6068C17.6311 19.6198 17.8805 19.6016 18.1315 19.5899C18.5244 19.5704 18.9068 19.4679 19.2518 19.2897C19.4274 19.202 19.5986 19.1066 19.7649 19.0037C19.7649 19.0037 19.8224 18.9673 19.932 18.8867C20.1124 18.7567 20.2232 18.6644 20.3722 18.5123C20.4827 18.4005 20.5781 18.2693 20.6502 18.1198C20.7525 17.9079 20.8522 17.5036 20.8907 17.167C20.9194 16.9096 20.908 16.7692 20.9028 16.6821C20.8954 16.543 20.7732 16.3987 20.6414 16.3377L19.851 15.9984C19.851 15.9984 18.6696 15.5057 17.9483 15.1912C17.8723 15.1594 17.791 15.1414 17.7086 15.1379C17.6161 15.1287 17.5229 15.1387 17.4353 15.1672C17.3477 15.1957 17.2677 15.242 17.2006 15.303L17.2006 15.3004C17.1938 15.3004 17.1044 15.3744 16.1443 16.5131C16.0893 16.5856 16.0129 16.6404 15.9249 16.6705C15.8368 16.7006 15.7411 16.7046 15.6499 16.6821C15.5616 16.6595 15.4751 16.6308 15.3909 16.5963C15.2225 16.5287 15.1641 16.5027 15.0487 16.4546L15.0419 16.452C14.265 16.1274 13.5438 15.6888 12.9042 15.1522C12.732 15.0092 12.5719 14.8532 12.4078 14.7024C11.8698 14.2127 11.3992 13.6586 11.0077 13.0542L10.9263 12.9307C10.8679 12.8477 10.8204 12.7582 10.7849 12.6642C10.7309 12.4731 10.8624 12.3198 10.8624 12.3198C10.8624 12.3198 11.1856 11.974 11.3355 11.7868C11.4603 11.6312 11.5766 11.4694 11.6838 11.302C11.8396 11.055 11.886 10.8015 11.7995 10.6052C11.4091 9.71611 11.0052 8.83089 10.5905 7.95218C10.5084 7.778 10.2704 7.65321 10.0554 7.62851C9.98243 7.62071 9.90942 7.61292 9.83645 7.60772C9.65503 7.59904 9.4734 7.60208 9.29249 7.61422Z"/>
                    </svg>                                     
                    `,
                },
                {
                    "class": "link email",
                    "svg": `
                    <svg class="icon" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2148 0.219452H2.61479C1.40479 0.219452 0.425795 1.23195 0.425795 2.46945L0.414795 15.9695C0.414795 17.207 1.40479 18.2195 2.61479 18.2195H20.2148C21.4248 18.2195 22.4148 17.207 22.4148 15.9695V2.46945C22.4148 1.23195 21.4248 0.219452 20.2148 0.219452ZM20.2148 4.71945L11.4148 10.3445L2.61479 4.71945V2.46945L11.4148 8.09445L20.2148 2.46945V4.71945Z"/>
                    </svg>                    
                    `,
                },
                {
                    "class": "link twitter",
                    "svg": `
                    <svg class="icon" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37321 0 0 4.92545 0 11C0 17.0746 5.37321 22 12 22C18.6268 22 24 17.0746 24 11C24 4.92545 18.6268 0 12 0ZM17.767 8.29174C17.775 8.40714 17.775 8.52746 17.775 8.64531C17.775 12.2498 14.7804 16.4018 9.30804 16.4018C7.62054 16.4018 6.05625 15.9525 4.73839 15.179C4.97946 15.2036 5.20982 15.2134 5.45625 15.2134C6.84911 15.2134 8.12946 14.7812 9.15 14.0496C7.84286 14.025 6.74464 13.2393 6.36964 12.1589C6.82768 12.2203 7.24018 12.2203 7.71161 12.1098C7.03855 11.9845 6.43359 11.6494 5.99951 11.1615C5.56542 10.6736 5.32898 10.0631 5.33036 9.43348V9.39911C5.72411 9.6029 6.1875 9.72812 6.67232 9.74531C6.26476 9.49633 5.93051 9.159 5.69923 8.76324C5.46794 8.36749 5.34676 7.92553 5.34643 7.47656C5.34643 6.9683 5.49107 6.50424 5.75089 6.10156C6.49795 6.94458 7.43017 7.63405 8.48696 8.12518C9.54375 8.61631 10.7014 8.8981 11.8848 8.95223C11.4643 7.09844 12.975 5.59821 14.7911 5.59821C15.6482 5.59821 16.4196 5.92723 16.9634 6.45759C17.6357 6.34219 18.2786 6.11138 18.8518 5.80201C18.6295 6.43304 18.1634 6.96585 17.5446 7.30223C18.1446 7.2433 18.7232 7.09107 19.2589 6.87746C18.8545 7.42254 18.3482 7.90625 17.767 8.29174Z"/>
                    </svg>                    
                    `,
                },
                {
                    "class": "link linkedin",
                    "svg": `
                    <svg class="icon" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.67237 2.87833C4.67209 3.40873 4.45072 3.91731 4.05695 4.29217C3.66318 4.66704 3.12928 4.87748 2.57268 4.87722C2.01609 4.87695 1.48241 4.666 1.08903 4.29076C0.695658 3.91552 0.47482 3.40673 0.475098 2.87633C0.475376 2.34593 0.696749 1.83735 1.09052 1.46249C1.48428 1.08762 2.01819 0.877176 2.57478 0.877442C3.13138 0.877707 3.66506 1.08866 4.05844 1.4639C4.45181 1.83914 4.67265 2.34793 4.67237 2.87833ZM4.73533 6.35814H0.538057V18.8774H4.73533V6.35814ZM11.367 6.35814H7.19073V18.8774H11.325V12.3078C11.325 8.64801 16.3303 8.30803 16.3303 12.3078V18.8774H20.4751V10.9479C20.4751 4.77822 13.0669 5.00821 11.325 8.03804L11.367 6.35814Z"/>
                    </svg>                    
                    `,
                },
            ],
            logos: [{
                    "src": "/static/hospital/images/technologies/vuejs.png",
                    "name": "vue js",
                },
                {
                    "src": "/static/hospital/images/technologies/javascript.png",
                    "name": "javascript",
                },
                {
                    "src": "/static/hospital/images/technologies/html5.png",
                    "name": "html5",
                },
                {
                    "src": "/static/hospital/images/technologies/css3.png",
                    "name": "css3",
                },
                {
                    "src": "/static/hospital/images/technologies/django.png",
                    "name": "usertesting",
                },
            ],
            services: [{
                    "svg": `
                    <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="48" rx="13" fill="#FFA500"/>
                        <mask id="mask0_25_35" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="9" y="10" width="29" height="28">
                        <path d="M23.5043 20.094C26.1146 20.094 28.2308 18.0583 28.2308 15.547C28.2308 13.0358 26.1146 11 23.5043 11C20.8939 11 18.7778 13.0358 18.7778 15.547C18.7778 18.0583 20.8939 20.094 23.5043 20.094Z" fill="white" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 35.0342C10 29.2939 15.4415 24.641 22.1538 24.641" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.2564 36.3333C33.6126 36.3333 36.3333 33.7159 36.3333 30.4872C36.3333 27.2584 33.6126 24.641 30.2564 24.641C26.9002 24.641 24.1795 27.2584 24.1795 30.4872C24.1795 33.7159 26.9002 36.3333 30.2564 36.3333Z" fill="white" stroke="white" stroke-width="1.66667"/>
                        <path d="M29.5812 28.5385V31.1367H32.2821" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </mask>
                        <g mask="url(#mask0_25_35)">
                            <path d="M7.29915 8.4017H39.7094V39.5812H7.29915V8.4017Z" fill="white"/>
                        </g>
                    </svg>
                    `,
                    "header": "Create Appointments",
                    "text": "Enjoy the comfort of telemedicine appointments for remote consultations and prescriptions.",
                    "class": "service row appointment",
                },
                {
                    "svg": `
                    <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="48" rx="13" fill="#FF0000"/>
                        <path d="M25.66 32.2H20.34C20.1172 32.2 19.9036 32.1083 19.746 31.9452C19.5885 31.782 19.5 31.5607 19.5 31.33V27.995C19.5 27.7643 19.4115 27.543 19.254 27.3798C19.0964 27.2167 18.8828 27.125 18.66 27.125H15.44C15.2172 27.125 15.0036 27.0333 14.846 26.8702C14.6885 26.707 14.6 26.4857 14.6 26.255V20.745C14.6 20.5143 14.6885 20.293 14.846 20.1298C15.0036 19.9667 15.2172 19.875 15.44 19.875H18.66C18.8828 19.875 19.0964 19.7833 19.254 19.6202C19.4115 19.457 19.5 19.2357 19.5 19.005V15.67C19.5 15.4393 19.5885 15.218 19.746 15.0548C19.9036 14.8917 20.1172 14.8 20.34 14.8H25.66C25.8828 14.8 26.0964 14.8917 26.254 15.0548C26.4115 15.218 26.5 15.4393 26.5 15.67V19.005C26.5 19.2357 26.5885 19.457 26.746 19.6202C26.9036 19.7833 27.1172 19.875 27.34 19.875H30.56C30.7828 19.875 30.9964 19.9667 31.154 20.1298C31.3115 20.293 31.4 20.5143 31.4 20.745V26.255C31.4 26.4857 31.3115 26.707 31.154 26.8702C30.9964 27.0333 30.7828 27.125 30.56 27.125H27.34C27.1172 27.125 26.9036 27.2167 26.746 27.3798C26.5885 27.543 26.5 27.7643 26.5 27.995V31.33C26.5 31.5607 26.4115 31.782 26.254 31.9452C26.0964 32.1083 25.8828 32.2 25.66 32.2Z" stroke="white" stroke-width="1.25"/>
                        <path d="M23 38C30.7322 38 37 31.5084 37 23.5C37 15.4917 30.7322 9 23 9C15.2678 9 9 15.4917 9 23.5C9 31.5084 15.2678 38 23 38Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    `,
                    "header": "Buy drugs",
                    "text": "Find nearby pharmacies, transfer prescriptions, all in one place to make managing your health easier than ever before.",
                    "class": "service row pharmacy",
                },
                {
                    "svg": `
                    <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="48" rx="13" fill="#00E1F0"/>
                        <path d="M12 14H22.2222V22.8889H12V14ZM24.7778 14H35V22.8889H24.7778V14ZM12 25.1111H22.2222V34H12V25.1111ZM28.6111 25.1111H31.1667V28.4444H35V30.6667H31.1667V34H28.6111V30.6667H24.7778V28.4444H28.6111V25.1111Z" fill="white"/>
                    </svg>                    
                    `,
                    "header": "Doctor dashboard",
                    "text": "Secure appointments with doctors, manage patients record, to enhance the performance of in-person visits",
                    "class": "service row dashboard",
                },
            ],
            testimonials: [{
                    "image": "/static/hospital/images/person1.png",
                    "stars": "/static/hospital/images/stars/5stars.svg",
                    "text": "I never thought finding the right doctor could be so easy. With this app, I was able to quickly book an appointment with a specialist and receive remote medical advice from the comfort of my own home.",
                    "writer": "Daniella M.",
                    "post": "Patient",
                    "company": "/static/hospital/images/technologies/usertesting.png",
                },
                {
                    "image": "/static/hospital/images/person1.png",
                    "stars": "/static/hospital/images/stars/5stars.svg",
                    "text": "As a doctor, I appreciate the convenience and efficiency of this platform. It allows me to schedule my training, connect with patients, and provide them with the best possible care.",
                    "writer": "John Maxwell",
                    "post": "Doctor",
                    "company": "/static/hospital/images/technologies/userzoom.png",
                },
                {
                    "image": "/static/hospital/images/person1.png",
                    "stars": "/static/hospital/images/stars/3stars.svg",
                    "text": "I had a great experience using this app to locate nearby pharmacies and transfer my prescription. The medication reminders also helped me stay on track with my treatment plan.",
                    "writer": "Ishmael",
                    "post": "Patient",
                    "company": "/static/hospital/images/technologies/html5.png",
                },
                {
                    "image": "/static/hospital/images/person1.png",
                    "stars": "/static/hospital/images/stars/4stars.svg",
                    "text": "The hospital app helped me stay on top of my medication schedule with its handy reminder feature. It's amazing how something so simple can have such a big impact on my health.",
                    "writer": "Regina",
                    "post": "Doctor",
                    "company": "/static/hospital/images/technologies/javascript.png",
                },
                {
                    "image": "/static/hospital/images/person1.png",
                    "stars": "/static/hospital/images/stars/5stars.svg",
                    "text": "I never realized how important it was to have access to my health records until I started using this app.",
                    "writer": "Samwell",
                    "post": "Patient",
                    "company": "/static/hospital/images/technologies/css3.png",
                },
            ],
            footerlinks: [{
                    "name": "Home",
                    "links": [{
                            "name": "Home",
                            "link": "/",
                        },
                        {
                            "name": "About",
                            "link": "/#about",
                        },
                        {
                            "name": "Services",
                            "link": "/#services",
                        },
                        {
                            "name": "Testimonials",
                            "link": "/#services",
                        },
                        {
                            "name": "Login",
                            "link": "/login",
                        },
                        {
                            "name": "Register",
                            "link": "/register",
                        },
                    ]
                },
                {
                    "name": "Patient",
                    "links": [{
                            "name": "Home",
                            "link": "/patient",
                        },
                        {
                            "name": "Appointments",
                            "link": "/patient-appointment",
                        },
                        {
                            "name": "Pharmacy",
                            "link": "/pharmacy",
                        },
                        {
                            "name": "Cart",
                            "link": "/cart",
                        },
                        {
                            "name": "Profile",
                            "link": "/profile",
                        },
                        {
                            "name": "Messsages",
                            "link": "/messages",
                        },
                    ]
                },
                {
                    "name": "Doctor",
                    "links": [{
                            "name": "Home",
                            "link": "/doctor",
                        },
                        {
                            "name": "Availability",
                            "link": "/availability",
                        },
                        {
                            "name": "Profile",
                            "link": "/profile",
                        },
                        {
                            "name": "Messsages",
                            "link": "/messages",
                        },
                    ]
                },
            ]
        }
    },
    mounted() {
        var main = new Splide('#main-carousel', {
            type: 'slide',
            speed: 2000,
            rewind: true,
            perPage: 1,
            rewindSpeed: 1500,
            pagination: true,
            arrows: true,
            autoplay: false,
        });
        main.mount();
    },
    methods: {

    }
})

app.component("block-block", {
    props: {
        blocks: Array,
    },
    template: `
    <div class="blocks">
        <div class="block row" v-for="block in blocks">
            <div class="block_image col-sm-12 col-md-2 col-lg-2">
            <div class="image-container" v-html="block.svg">
                {{ block.svg }}
            </div>
            </div>
            <div class="block_text col-sm-12 col-md-10 col-lg-10">
                <h6>{{ block.h6 }}</h6>
                <p> {{ block.text }} </p>
            </div>
        </div>
    </div>
    
    `
})
app.component("grid-block", {
    props: {
        grids: Array,
    },
    template: `
    <div class="grid">
        <header>
            <h5>appointments</h5>
        </header>
        <div class="grid_main">
            <div class="grid_main_single dotted">
               <div class="grid_main_single_inner">
                    <div class="dotted_image">
                        <h3>12</h3>
                    </div>
                    <div class="dotted_text">
                        <p>k+</p>
                    </div>
               </div>
            </div>
            <div class="grid_main_single" v-for="grid in grids">
                 <div class="grid_main_single_inner">
                    <div class="grid_main_single_inner_image">
                        <img :src='grid.img' alt="avatar"/>
                    </div>
                    <div class="grid_main_single_inner_text">
                        <p>{{ grid.text }}</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    `
})
app.component("links-div", {
    props: {
        links: Array,
    },
    template: `
    <div class="links">
       <div v-for="link in links" :class="link.class" v-html="link.svg">
            {{ link.svg }}  
       </div>
    </div>
    
    `
})
app.component("services-block", {
    props: {
        services: Array,
    },
    template: `
   <div class="services-container">
        <div v-for="service in services" :class="service.class">
                <div class="service_container_image col-sm-12 col-md-2 col-lg-2" v-html="service.svg">
                    {{ service.svg }}
                </div>
                <div class="service_container_text col-sm-12 col-md-10 col-lg-10">
                    <h3>{{ service.header }}</h3>
                    <p> {{ service.text }} </p>
                </div>
        </div>
    </div>
   `
})
app.component("testim-onials", {
    props: {
        testimonials: Array,
    },
    template: `
    <section id="main-carousel" class="splide col-sm-12 col-md-12 col-lg-12 testimonial-slider" aria-label="main carousel">
        <div class="splide__track">
            <ul class="splide__list">
                <li class="splide__slide" v-for="testimonial in testimonials">
                   <div class="testimonial-slide row">
                        <div class="image-container col-sm-12 col-md-5 col-lg-5">
                            <img :src="testimonial.image" alt="avatar"/>
                        </div>

                        <div class="text-container col-sm-12 col-md-7 col-lg-7">
                            <svg class="testimonial-icon" width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31 0.26625L30.2177 5.88921C28.653 5.75768 27.3817 6.02075 26.4038 6.6784C25.4259 7.30318 24.7413 8.2239 24.3502 9.44056C23.9916 10.6243 23.9264 12.0054 24.1546 13.5838H31V27H17.7003V13.5838C17.7003 8.84867 18.7923 5.26444 20.9763 2.83111C23.1604 0.3649 26.5016 -0.490055 31 0.26625ZM13.2997 0.26625L12.5173 5.88921C10.9527 5.75768 9.68139 6.02075 8.70347 6.6784C7.72555 7.30318 7.04101 8.2239 6.64984 9.44056C6.29127 10.6243 6.22608 12.0054 6.45426 13.5838H13.2997V27H0V13.5838C0 8.84867 1.09201 5.26444 3.27603 2.83111C5.46004 0.3649 8.80126 -0.490055 13.2997 0.26625Z"/>
                            </svg>       

                            <div class="stars">
                                <img class="ratings" :src="testimonial.stars" alt="rating"/>
                            </div>

                            <p> {{ testimonial.text }} </p>

                            <div class="credit row">
                                <div class="credit_left col-sm-12 col-md-7 col-lg-8">
                                    <h4> {{ testimonial.writer }} </h4>
                                    <p> {{ testimonial.post }} </p>
                                </div>
                                <div class="credit_right col-sm-12 col-md-5 col-lg-4">
                                    <img class="company" :src="testimonial.company" alt="company"/>
                                </div>
                            </div>
                        </div>
                   </div>
                </li>
            </ul>
        </div>
        <div class="splide__arrows splide__arrows--ltr arrows">
            <button class="splide__arrow splide__arrow--prev prev" type="button" aria-label="Previous slide" aria-controls="splide01-track">
                <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_4229)">
                    <circle cx="44" cy="30" r="30" fill="white"/>
                    </g>
                    <path d="M48.4116 22.0586L40.4704 29.9998L48.4116 37.9409" stroke="#1B1C31" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <filter id="filter0_d_1_4229" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="14"/>
                    <feGaussianBlur stdDeviation="7"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4229"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4229" result="shape"/>
                    </filter>
                    </defs>
                </svg>            
            </button>
            <button class="splide__arrow splide__arrow--next next" type="button" aria-label="Next slide" aria-controls="splide01-track">
                <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_4232)">
                    <circle cx="30" cy="30" r="30" transform="matrix(-1 0 0 1 74 0)" fill="white"/>
                    </g>
                    <path d="M39.5884 22.0586L47.5296 29.9998L39.5884 37.9409" stroke="#1B1C31" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <filter id="filter0_d_1_4232" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="14"/>
                    <feGaussianBlur stdDeviation="7"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4232"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4232" result="shape"/>
                    </filter>
                    </defs>
                </svg>            
            </button>
        </div>
    </section>
    
    `
})

app.component("foo-ter", {
    props: {
        footerlinks: Array,
    },
    template: `
        <div class="link_list_container" v-for="footerlink in footerlinks">
            <ul class="link-list">
                    <h4> {{ footerlink.name }} </h4>
                    <li v-for="link in footerlink.links">
                        <a :href="link.link"> {{ link.name }} </a>
                    </li>
            </ul>
        </div>
    `
})

app.component("appoint-ments", {
    props: {
        cart: Array,
        header: String,
    },
    template: `
    <div class="pharmacy">
        <div class="pharmacy-main">
            <header>
                <h3>{{ header }}</h3>
            </header>
            <div class="drugs">
                    <div class="drug" v-for="drug in cart">
                        <div class="row drug-top">
                            <div class="drug-top-image">
                                <img :src="drug.drug.drugpic.url" :alt="drug.drug.name"/>
                            </div>
                        </div>
                        <div class="drug-bottom">
                            <div class="drug-top-text">
                                <h3> {{ drug.drug.name }} </h3>
                            </div>
                            <p class="drug-descr"> {{ drug.drug.descr }} </p>
                            <p class="drug-price">Amount ordered: {{ drug.amount }} piece(s) </p>
                            <p class="drug-price">Total amount: {{ drug.itemprice }} </p>
                            <p class="drug-price">Price per piece: {{ drug.drug.price }} </p>
                        </div>
                    </div>
            </div> 
        </div>
    </div>
    
    `
})

app.mount("body");