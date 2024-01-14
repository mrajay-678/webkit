import styles from './Logo.module.scss';
import Link from 'next/link';

export default function Logo({classVariable}) {
    return (
        <Link href="/" className={classVariable}>
            <svg className={styles.logo} width="120" height="120" viewBox="0 0 120 120" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g className={styles.outer}>
                    <g className={styles.spin}>
                        <path
                            d="M114.765 62.3611L114.552 63.6943L107.957 66.4859L107.939 66.597L113.342 71.2985L113.13 72.6318L106.69 66.9298L101.215 66.0583L101.398 64.9102L106.873 65.7817L114.765 62.3611Z"
                            fill="black"/>
                        <path
                            d="M99.2255 74.8962L99.7973 73.8128L108.944 83.9052L108.361 85.0107L94.8672 83.1541L95.4389 82.0708L107.289 83.7878L107.33 83.7104L99.2255 74.8962ZM103.153 77.9656L100.189 83.5814L99.2607 83.0913L102.225 77.4755L103.153 77.9656Z"
                            fill="black"/>
                        <path
                            d="M94.1536 98.2513C94.7025 98.7111 95.3237 98.8961 96.0171 98.8064C96.7104 98.7168 97.3594 98.3761 97.964 97.7846C98.3899 97.3679 98.6938 96.9278 98.8756 96.4642C99.0545 96.0036 99.1095 95.5534 99.0406 95.1136C98.9717 94.6797 98.7769 94.299 98.4564 93.9714C98.2203 93.7301 97.9613 93.5697 97.6794 93.49C97.3974 93.4103 97.1044 93.3909 96.8005 93.4318C96.4965 93.4786 96.1921 93.5607 95.8873 93.6782C95.5796 93.7986 95.2849 93.9353 95.0033 94.0884L93.7674 94.7556C93.3969 94.9607 93.0045 95.1436 92.5902 95.304C92.1759 95.4645 91.755 95.5675 91.3272 95.6129C90.8994 95.6642 90.4785 95.6243 90.0645 95.4931C89.6504 95.3678 89.2569 95.1145 88.8839 94.7333C88.406 94.2449 88.1028 93.6817 87.9742 93.0439C87.8456 92.4061 87.9059 91.7408 88.155 91.0482C88.4071 90.3585 88.8637 89.6902 89.5249 89.0433C90.1473 88.4343 90.7884 88.0081 91.4481 87.7649C92.1108 87.5246 92.7523 87.4594 93.3728 87.5693C93.9933 87.6792 94.556 87.9593 95.0608 88.4098L94.2031 89.249C93.8207 88.9178 93.4029 88.7291 92.9497 88.6829C92.4964 88.6367 92.0389 88.7112 91.5771 88.9066C91.1183 89.1049 90.6833 89.4051 90.2723 89.8072C89.8167 90.2531 89.4859 90.7253 89.2801 91.224C89.0743 91.7285 89.0041 92.2168 89.0697 92.689C89.1352 93.167 89.3472 93.5892 89.7056 93.9555C90.0086 94.2653 90.3426 94.4457 90.7074 94.4968C91.0751 94.5509 91.4733 94.5081 91.9021 94.3684C92.3279 94.2316 92.7838 94.0333 93.2698 93.7734L94.679 93.0242C95.6066 92.5363 96.4535 92.2877 97.2197 92.2784C97.9858 92.2691 98.6559 92.5578 99.23 93.1445C99.7108 93.6359 100.002 94.1959 100.104 94.8247C100.207 95.4593 100.135 96.1008 99.889 96.7493C99.6432 97.4037 99.2389 98.0062 98.676 98.557C98.1072 99.1135 97.5019 99.5018 96.8601 99.7216C96.2183 99.9415 95.5901 99.9936 94.9756 99.8779C94.361 99.7681 93.8174 99.4896 93.345 99.0425L94.1536 98.2513Z"
                            fill="black"/>
                        <path d="M88.4141 106.425L81.7825 95.4772L82.7822 94.8716L89.4138 105.82L88.4141 106.425Z"
                              fill="black"/>
                        <path
                            d="M71.4383 113.382L67.8104 101.107L68.9013 100.784L79.1917 108.92L79.2876 108.892L76.2495 98.6124L77.3704 98.2811L80.9983 110.556L79.9134 110.877L69.5955 102.736L69.4996 102.765L72.5412 113.056L71.4383 113.382Z"
                            fill="black"/>
                        <path
                            d="M45.4671 108.405C45.4836 108.845 45.559 109.272 45.6934 109.684C45.8268 110.1 46.0238 110.483 46.2846 110.831C46.5404 111.182 46.8611 111.484 47.2468 111.737C47.6285 111.989 48.0769 112.175 48.5921 112.296C49.4034 112.487 50.179 112.446 50.9189 112.175C51.6588 111.903 52.3086 111.414 52.8683 110.706C53.424 109.998 53.8332 109.083 54.0958 107.964C54.3575 106.848 54.3951 105.849 54.2084 104.967C54.0217 104.084 53.6538 103.354 53.1047 102.775C52.5506 102.2 51.8537 101.814 51.014 101.617C50.2473 101.437 49.5299 101.449 48.8617 101.652C48.1936 101.854 47.621 102.234 47.144 102.789C46.6629 103.344 46.3241 104.058 46.1276 104.933L45.7896 104.731L49.7812 105.668L49.5414 106.69L44.8074 105.579L45.0473 104.557C45.2966 103.494 45.7272 102.626 46.3389 101.952C46.9507 101.278 47.6813 100.818 48.5307 100.572C49.3801 100.327 50.2916 100.318 51.2652 100.546C52.3524 100.801 53.2422 101.286 53.9348 102.001C54.6265 102.719 55.0872 103.611 55.3169 104.675C55.5416 105.742 55.5017 106.924 55.1972 108.222C54.9678 109.2 54.631 110.052 54.1868 110.778C53.7426 111.504 53.2175 112.091 52.6115 112.54C52.0015 112.987 51.3352 113.282 50.6126 113.425C49.8891 113.572 49.1318 113.553 48.3408 113.367C47.6593 113.207 47.0619 112.954 46.5485 112.607C46.031 112.258 45.6015 111.845 45.26 111.367C44.9135 110.892 44.6599 110.377 44.4992 109.821C44.3335 109.269 44.2667 108.705 44.2988 108.131L45.4671 108.405Z"
                            fill="black"/>
                        <path
                            d="M41.5848 97.6541L34.7135 108.453L28.449 104.468L29.0127 103.582L34.2911 106.94L36.8779 102.875L31.9317 99.7275L32.4954 98.8416L37.4415 101.989L40.035 97.9126L34.6512 94.487L35.2149 93.6011L41.5848 97.6541Z"
                            fill="black"/>
                        <path
                            d="M14.7995 90.6763L24.8112 82.701L25.52 83.5907L21.8481 96.1843L21.9104 96.2625L30.2943 89.584L31.0225 90.4982L21.0108 98.4735L20.3059 97.5886L23.972 84.9676L23.9097 84.8894L15.516 91.5758L14.7995 90.6763Z"
                            fill="black"/>
                        <path
                            d="M10.632 71.5771L11.0031 72.6919C10.6157 72.9132 10.2822 73.191 10.0027 73.5256C9.71801 73.8575 9.49716 74.2297 9.3402 74.642C9.18325 75.0544 9.10006 75.4905 9.09066 75.9503C9.08126 76.4102 9.15618 76.8793 9.31542 77.3576C9.57074 78.1246 10.0033 78.7579 10.6132 79.2575C11.2217 79.7531 11.9766 80.0618 12.8778 80.1833C13.7737 80.3023 14.7811 80.1755 15.8999 79.8031C17.0266 79.428 17.9129 78.9244 18.5588 78.2922C19.2034 77.656 19.6207 76.9572 19.8107 76.1957C19.9955 75.4315 19.9602 74.666 19.7049 73.899C19.5456 73.4207 19.3244 73.0003 19.0413 72.6378C18.7581 72.2753 18.4321 71.9755 18.0633 71.7381C17.6905 71.5021 17.2907 71.3366 16.8638 71.2416C16.4356 71.1426 16.0002 71.1207 15.5574 71.1758L15.1863 70.061C15.7766 69.9743 16.3583 69.987 16.9315 70.0992C17.4993 70.2088 18.0329 70.4133 18.5321 70.7126C19.0301 71.0079 19.47 71.3928 19.8519 71.8673C20.2338 72.3418 20.5327 72.9032 20.7485 73.5516C21.0881 74.5715 21.1345 75.5617 20.8877 76.5222C20.637 77.4839 20.1201 78.3455 19.3372 79.1067C18.5529 79.8641 17.5262 80.454 16.2572 80.8764C14.9882 81.2989 13.8128 81.442 12.7311 81.3059C11.6481 81.1658 10.72 80.7853 9.94677 80.1644C9.16962 79.5448 8.61128 78.725 8.27173 77.7051C8.0559 77.0567 7.95864 76.4282 7.97996 75.8194C7.99733 75.212 8.11877 74.6402 8.3443 74.104C8.56455 73.5652 8.86911 73.0818 9.25798 72.6537C9.64552 72.2217 10.1035 71.8628 10.632 71.5771Z"
                            fill="black"/>
                        <path
                            d="M5.21558 56.9264L5.4431 55.5957L12.0706 52.8801L12.0895 52.7692L6.74083 48.0059L6.96836 46.6752L13.3424 52.4508L18.8068 53.3851L18.6109 54.531L13.1465 53.5967L5.21558 56.9264Z"
                            fill="black"/>
                        <path
                            d="M20.8096 44.765L20.2299 45.8441L11.1579 35.6843L11.7495 34.5832L25.2289 36.5395L24.6491 37.6186L12.8123 35.814L12.7709 35.8911L20.8096 44.765ZM16.9047 41.6666L19.9101 36.0729L20.8351 36.5698L17.8297 42.1636L16.9047 41.6666Z"
                            fill="black"/>
                        <path
                            d="M26.1165 21.3728C25.5726 20.9071 24.9535 20.7153 24.2591 20.7974C23.5648 20.8795 22.9122 21.213 22.3012 21.7979C21.8708 22.21 21.5621 22.6468 21.3752 23.1083C21.1914 23.567 21.1315 24.0165 21.1955 24.457C21.2597 24.8917 21.4503 25.2745 21.7673 25.6056C22.0006 25.8494 22.2579 26.0126 22.539 26.0954C22.8201 26.1781 23.1128 26.2007 23.4172 26.1632C23.7217 26.1197 24.0269 26.0409 24.333 25.9267C24.642 25.8097 24.9381 25.6762 25.2214 25.5262L26.4645 24.8725C26.8373 24.6714 27.2316 24.4929 27.6476 24.3369C28.0636 24.181 28.4857 24.0826 28.9139 24.0418C29.3422 23.9952 29.7627 24.0397 30.1752 24.1754C30.5879 24.3052 30.9787 24.5628 31.3475 24.948C31.82 25.4416 32.1171 26.0081 32.2387 26.6473C32.3604 27.2865 32.2928 27.951 32.0361 28.6409C31.7766 29.3278 31.3127 29.991 30.6445 30.6307C30.0155 31.2329 29.3698 31.652 28.7074 31.8881C28.0422 32.1211 27.4 32.1793 26.7807 32.0627C26.1615 31.946 25.6019 31.6598 25.102 31.2039L25.9688 30.374C26.3476 30.7094 26.7633 30.9027 27.216 30.9538C27.6687 31.0049 28.127 30.9353 28.5909 30.7451C29.0519 30.5518 29.4901 30.2563 29.9054 29.8587C30.3659 29.4178 30.7018 28.9492 30.913 28.4528C31.1244 27.9506 31.1998 27.463 31.1394 26.9902C31.0791 26.5115 30.8718 26.087 30.5174 25.7168C30.2177 25.4038 29.8858 25.2197 29.5215 25.1646C29.1544 25.1065 28.7557 25.145 28.3255 25.28C27.8982 25.4121 27.4402 25.6055 26.9513 25.8601L25.534 26.5939C24.6012 27.0716 23.7517 27.3109 22.9855 27.3119C22.2192 27.3129 21.5523 27.0169 20.9847 26.424C20.5092 25.9274 20.2239 25.3642 20.1286 24.7344C20.0334 24.0987 20.1122 23.458 20.365 22.8122C20.6179 22.1605 21.0288 21.5624 21.5976 21.0178C22.1725 20.4675 22.782 20.0859 23.4261 19.873C24.0703 19.6602 24.699 19.6149 25.3122 19.7373C25.9256 19.8539 26.4661 20.1382 26.9336 20.5905L26.1165 21.3728Z"
                            fill="black"/>
                        <path d="M31.7571 13.3369L38.3079 24.3336L37.3039 24.9317L30.753 13.9351L31.7571 13.3369Z"
                              fill="black"/>
                        <path
                            d="M48.6749 6.4999L52.2098 18.8021L51.1165 19.1163L40.888 10.9028L40.7919 10.9304L43.752 21.2323L42.6287 21.5551L39.0938 9.25289L40.1811 8.94048L50.4371 17.159L50.5332 17.1314L47.5696 6.81748L48.6749 6.4999Z"
                            fill="black"/>
                        <path
                            d="M74.6788 11.5607C74.6656 11.1202 74.5934 10.6932 74.4622 10.2798C74.332 9.86232 74.1378 9.47863 73.8797 9.12873C73.6266 8.77577 73.3082 8.47126 72.9244 8.21521C72.5447 7.96014 72.0977 7.77022 71.5835 7.64544C70.7736 7.44894 69.9977 7.48362 69.2558 7.7495C68.5138 8.01537 67.8603 8.49993 67.2952 9.20318C66.7342 9.9074 66.3181 10.8183 66.0469 11.9359C65.7767 13.0494 65.7316 14.0482 65.9115 14.9322C66.0915 15.8162 66.4538 16.5494 66.9985 17.1318C67.5482 17.7111 68.2422 18.1024 69.0804 18.3058C69.8457 18.4915 70.5631 18.4855 71.2328 18.2879C71.9025 18.0902 72.4779 17.7153 72.9592 17.1632C73.4445 16.6121 73.7887 15.9003 73.9918 15.0278L74.3283 15.2316L70.3439 14.2648L70.5915 13.2444L75.3169 14.391L75.0693 15.4114C74.8118 16.4723 74.3747 17.3374 73.7578 18.0066C73.141 18.6758 72.4069 19.1301 71.5556 19.3695C70.7043 19.6088 69.7928 19.6106 68.821 19.3748C67.7358 19.1115 66.8497 18.6199 66.1625 17.9001C65.4764 17.1762 65.0225 16.2814 64.8008 15.2158C64.5842 14.1471 64.6331 12.9649 64.9475 11.6691C65.1843 10.6933 65.5276 9.84402 65.9774 9.12136C66.4271 8.3987 66.9567 7.81546 67.566 7.37163C68.1794 6.92878 68.8479 6.63865 69.5715 6.50125C70.2962 6.3598 71.0533 6.38487 71.8429 6.57646C72.5231 6.74152 73.1186 6.99964 73.6294 7.35082C74.1442 7.70298 74.5705 8.11942 74.9084 8.60014C75.2512 9.07779 75.5009 9.595 75.6574 10.1518C75.8188 10.7055 75.8814 11.2694 75.8449 11.8437L74.6788 11.5607Z"
                            fill="black"/>
                        <path
                            d="M78.5779 22.3356L85.5282 11.587L91.7632 15.6187L91.1931 16.5004L85.9395 13.1033L83.3229 17.1498L88.2459 20.3331L87.6757 21.2148L82.7528 18.0315L80.1294 22.0885L85.488 25.5535L84.9179 26.4352L78.5779 22.3356Z"
                            fill="black"/>
                        <path
                            d="M105.332 29.4942L95.2628 37.3964L94.5605 36.5015L98.3241 23.935L98.2623 23.8563L89.83 30.4736L89.1085 29.5541L99.1781 21.652L99.8765 22.5419L96.1185 35.1359L96.1803 35.2145L104.622 28.5896L105.332 29.4942Z"
                            fill="black"/>
                        <path
                            d="M109.381 48.6119L109.018 47.4943C109.408 47.276 109.743 47.0006 110.025 46.6682C110.312 46.3384 110.536 45.9679 110.696 45.5568C110.856 45.1456 110.943 44.7102 110.955 44.2504C110.968 43.7906 110.897 43.321 110.741 42.8414C110.492 42.0726 110.064 41.4361 109.458 40.9319C108.853 40.4316 108.101 40.1173 107.2 39.9889C106.305 39.8633 105.297 39.9824 104.175 40.3464C103.046 40.713 102.156 41.2099 101.505 41.8372C100.856 42.4685 100.433 43.1642 100.238 43.9242C100.047 44.687 100.077 45.4528 100.326 46.2216C100.482 46.7012 100.7 47.1232 100.98 47.4878C101.261 47.8524 101.584 48.1547 101.951 48.3948C102.322 48.6336 102.721 48.8021 103.147 48.9004C103.574 49.0026 104.01 49.0278 104.453 48.976L104.816 50.0936C104.225 50.1759 103.643 50.1587 103.071 50.0422C102.504 49.9283 101.972 49.7199 101.475 49.4168C100.979 49.1177 100.542 48.7295 100.164 48.2521C99.7854 47.7748 99.4907 47.2111 99.2798 46.5612C98.948 45.5387 98.909 44.5481 99.1631 43.5896C99.421 42.6297 99.9444 41.7721 100.733 41.0168C101.523 40.2654 102.554 39.6833 103.826 39.2704C105.098 38.8575 106.275 38.7232 107.356 38.8675C108.437 39.0158 109.363 39.4033 110.131 40.03C110.904 40.6554 111.456 41.4794 111.788 42.5019C111.999 43.1518 112.091 43.7811 112.065 44.3897C112.043 44.9969 111.917 45.5678 111.688 46.1022C111.464 46.6394 111.155 47.1205 110.763 47.5457C110.373 47.9747 109.912 48.3302 109.381 48.6119Z"
                            fill="black"/>
                    </g>
                </g>
                <g className={styles.inner}>
                    <circle cx="59.9999" cy="60.0004" r="25.1" stroke="black" fill="none"/>
                    <path
                        d="M60 68.8002C58.5333 68.8002 57.4333 67.7231 57.4333 66.371C57.4333 65.6148 57.6854 65.0648 58.4645 64.3314C59.2437 63.5981 59.7708 62.9335 59.7708 62.4294V61.6044C59.0833 61.4669 58.5333 60.9627 58.3958 60.2752H57.5708C57.0437 60.2752 56.2875 60.8252 55.6458 61.5356C55.0041 62.246 54.4312 62.5669 53.6291 62.5669C52.2541 62.5669 51.2 61.4669 51.2 60.0002C51.2 58.5335 52.2541 57.4335 53.6291 57.4335C54.2937 57.4335 54.8208 57.6627 55.2791 58.121C56.1958 59.0377 56.9062 59.771 57.5708 59.771H58.3958C58.5333 59.0606 59.0833 58.5564 59.7708 58.4419V57.6169C59.7708 57.2273 59.4729 56.7231 58.8541 56.1044L58.3729 55.6231C57.7312 54.9814 57.4333 54.3856 57.4333 53.6294C57.4333 52.2544 58.5562 51.2002 60 51.2002C61.4666 51.2002 62.5666 52.2773 62.5666 53.6294C62.5666 54.4085 62.177 55.1419 61.4208 55.8294C60.6416 56.5398 60.275 57.1356 60.275 57.6169V58.4419C60.9854 58.5564 61.4895 59.0606 61.6041 59.771H62.4291C62.9333 59.771 63.5291 59.4044 64.2166 58.6023C64.9041 57.8231 65.6375 57.4335 66.3708 57.4335C67.7458 57.4335 68.8 58.5564 68.8 60.0002C68.8 61.4669 67.7229 62.5669 66.3708 62.5669C65.7291 62.5669 65.1791 62.3377 64.7437 61.9023C63.85 61.0085 63.0937 60.2752 62.4291 60.2752H61.6041C61.4895 60.9627 60.9854 61.4669 60.275 61.6044V62.4294C60.275 62.9106 60.6645 63.4835 61.4208 64.1939C62.177 64.9044 62.5666 65.6148 62.5666 66.371C62.5666 67.746 61.4437 68.8002 60 68.8002Z"
                        fill="black"/>
                </g>
            </svg>
        </Link>
    )
}