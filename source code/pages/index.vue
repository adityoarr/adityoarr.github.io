<script setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })

    // Get the 'to top' button element by ID
    var toTopButton = document.getElementById("to-top-button");

    // Check if the button exists
    if (toTopButton) {

        // On scroll event, toggle button visibility based on scroll position
        window.onscroll = function () {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        };

        // Function to scroll to the top of the page smoothly
        window.goToTop = function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }
})
</script>

<template>
    <div class="mt-5 mb-28 mx-2 lg:mx-5" id="name">
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max">
            <div class="col-span-full mx-auto lg:hidden animate__animated animate__fadeInUp">
                <img src="/img/img1.jpg" class="rounded-lg mx-auto" width="70%" alt="Adityo Ar Rafiuddin" />
            </div>
            <div class="col-span-full lg:col-span-2 text-center lg:text-start break-normal" data-aos="fade-down">
                <span class="text-3xl lg:text-6xl font-bold">Hi, I'm</span>
                <p class="mt-5">
                    <span class="text-4xl lg:text-7xl font-black my-name">Adityo Ar Rafiuddin</span>
                </p>
                <p class="mt-5 text-lg">Welcome... welcome..., I'm a <i>Software Engineer</i> based on Malang, East
                    Java, Indonesia right now.
                    I've more than 5
                    years in software development, working either web or mobile apps. My job includes development,
                    maintenance, and sometimes document the application that I handle. For now, I'm working as
                    freelancer and open to job :)</p>
                <div class="grid grid-cols-2 gap-2 mt-5 text-lg">
                    <div class="break-normal">
                        <span class="font-bold">Most tech I've used on work are :</span><br />
                        - Flutter <br />
                        - Code Igniter 3 <br />
                        - Laravel <br />
                        - Firebase <br />
                        - MySQL <br />
                    </div>
                    <div class="break-normal">
                        <span class="font-bold">Currently, I'm excitedly learning :</span><br />
                        - Nest js <br />
                        - Python => Django <br />
                        - SEO <br />
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex">
                <img src="/img/img1.jpg" class="rounded-lg animate__animated animate__fadeInUp"
                    alt="Adityo Ar Rafiuddin" />
            </div>
        </div>
        <div class="mt-5">
            <div class="inline-flex items-center justify-center w-full" data-aos="zoom-in">
                <hr class="w-[32rem] h-px my-8 bg-blue-200 border-0 dark:bg-blue-700">
                <span id="work"
                    class="absolute text-5xl px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Projects</span>
            </div>
            <div data-aos="zoom-in"
                class="inline-flex items-center justify-center text-center w-full text-md text-gray-400">
                <i>The following is a list of my projects that companies or clients have allowed to be displayed
                    publicly</i>
            </div>

            <!-- WORK 1 -->
            <div data-aos="flip-left"
                class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="hidden lg:flex">
                    <img src="/img/work1.png" class="rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full mx-auto lg:hidden">
                    <img src="/img/work1.png" class="rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full lg:col-span-2 text-start break-normal">
                    <span class="text-2xl font-medium">Wedding Invitation (Web)</span>
                    <NuxtLink
                        class="hidden lg:inline-flex float-end px-3 py-2 text-xs font-medium text-center items-center text-white bg-neutral-700 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
                        target="_blank" to="https://github.com/adityoarr/wedding-invitation-template">
                        <svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        Github
                    </NuxtLink>
                    <NuxtLink
                        class="hidden lg:inline-flex me-2 float-end px-3 py-2 text-xs font-medium text-center items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        target="_blank" to="https://adityoarr-wedding-invitation-template-v1.vercel.app/">
                        <svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        Live Demo
                    </NuxtLink>
                    <br />
                    <span class="text-sm text-gray-400">May 2024</span> <br />
                    <span class="text-lg">A wedding invitation for my sister and her husband. From both request, wedding
                        details changed for demo purposes</span>
                    <br />
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next
                        js</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Express
                        js</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Firebase
                        Realtime Database</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GIT</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vercel</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tailwind</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Flowbite</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">REST
                        API</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Google
                        Maps</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Responsive</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Build
                        & Development</button>
                    <br />
                    <button type="button"
                        class="mt-7 lg:hidden inline-flex me-2 px-3 py-2 text-xs font-medium text-center items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        Live Demo
                    </button>
                    <button type="button"
                        class="mt-7 lg:hidden inline-flex px-3 py-2 text-xs font-medium text-center items-center text-white bg-neutral-700 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                        <svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        Github
                    </button>
                </div>
            </div>

            <!-- WORK 2 -->
            <div data-aos="flip-right" class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max mt-16">
                <div class="col-span-full mx-auto lg:hidden">
                    <img src="/img/work2.png" class="rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full lg:col-span-2 text-start break-normal">
                    <span class="text-2xl font-medium">Invoice+Report (Web)</span>
                    <br />
                    <span class="text-sm text-gray-400">2022</span> <br />
                    <span class="text-lg">A web application used to record and
                        create invoice reports for stock items in
                        the store. Consists of invoice list, report
                        generation (invoice, customer,
                        technician)</span>
                    <br />
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Code
                        Igniter 3</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">MySQL</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Web
                        Deployment</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Build
                        & Development</button>
                </div>
                <div class="hidden lg:flex">
                    <img src="/img/work2.png" class="rounded-lg" alt="Wedding Template" />
                </div>
            </div>

            <!-- WORK 3 -->
            <div data-aos="flip-left"
                class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max mt-16 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="hidden lg:flex">
                    <img src="/img/work3.jpg" class="h-80 mx-auto rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full mx-auto lg:hidden">
                    <img src="/img/work3.jpg" class="h-80 mx-auto rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full lg:col-span-2 text-start break-normal">
                    <span class="text-2xl font-medium">Smart app (Mobile)</span>
                    <br />
                    <span class="text-sm text-gray-400">2022</span> <br />
                    <span class="text-lg">A mobile app used for cigarette sales management in
                        the field. Features available include data collection of
                        cigarette brand users at certain venues, sales
                        assignments at venues, reporting, summary report checks,
                        etc. This application is developed for android and iOS.</span>
                    <br />
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Flutter</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hive</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GIT</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Maintenance</button>
                </div>
            </div>

            <!-- WORK 4 -->
            <div data-aos="flip-right" class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max mt-16">
                <div class="col-span-full lg:hidden">
                    <img src="/img/work4.png" class="rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full lg:col-span-2 text-start break-normal">
                    <span class="text-2xl font-medium">Motorcycle Spareparts Store Cashier
                        App (Web)</span>
                    <br />
                    <span class="text-sm text-gray-400">2017</span> <br />
                    <span class="text-lg">A web app used to integrate
                        several existing stores and to
                        digitize several business
                        processes that are still done
                        manually. The existing features
                        include sales and purchase
                        returns, sales and purchase
                        transactions, data collection
                        (goods, customers, suppliers),
                        reporting, printing receipts, etc.</span>
                    <br />
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">PHP</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">MySQL</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bootstrap</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">jQuery</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Web
                        Deployment</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Build
                        & Development</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Training</button>
                </div>
                <div class="hidden lg:flex">
                    <img src="/img/work4.png" class="rounded-lg" alt="Wedding Template" />
                </div>
            </div>

            <!-- WORK 5 -->
            <div data-aos="flip-left"
                class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max mt-16 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="hidden lg:flex">
                    <img src="/img/work5.png" class="rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full mx-auto lg:hidden">
                    <img src="/img/work5.png" class="rounded-lg" alt="Wedding Template" />
                </div>
                <div class="col-span-full lg:col-span-2 text-start break-normal">
                    <span class="text-2xl font-medium">Pinus Hotel Cashier App (Desktop)</span>
                    <br />
                    <span class="text-sm text-gray-400">2017</span> <br />
                    <span class="text-lg">A mini cashier program for fast
                        service in hotels. Features
                        include data collection (rooms,
                        f&b, cashier staff), room and
                        f&b booking transactions,
                        reporting, printing reports, etc.</span>
                    <br />
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delphi
                        7</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ms.
                        Access</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Deployment</button>
                    <button type="button"
                        class="m-2 px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Maintenance</button>
                </div>
            </div>
        </div>

        <div class="mt-5" data-aos="zoom-in">
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-[32rem] h-px my-8 bg-blue-200 border-0 dark:bg-blue-700">
                <span id="about"
                    class="absolute text-5xl px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">About</span>
            </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col auto-cols-max mt-10" data-aos="zoom-in-up">
            <div class="hidden lg:flex">
                <img src="/img/photo.jpg" class="rounded-lg" alt="Adityo Ar Rafiuddin" />
            </div>
            <div class="flex col-span-full lg:hidden">
                <img src="/img/photo.jpg" class="rounded-lg mx-auto" alt="Adityo Ar Rafiuddin" width="70%" />
            </div>
            <div class="col-span-full lg:col-span-2 text-start break-normal">
                <p class="text-center lg:text-start">
                    <span class="text-4xl lg:text-7xl font-extrabold my-name">Adityo Ar Rafiuddin</span>
                </p>
                <p class="mt-10 text-lg">I am a software engineer who has more than 5 years of professional experience.
                    Have experience in building, developing, maintaining, testing, and implementing both website
                    applications and mobile applications. Have 1 year experience as a student employee in a university
                    library.</p>
                <p class="mt-5 text-lg">
                    Someone who is thorough in his work, able to provide problem solving, and can work
                    according to company needs.
                    Someone who likes to learn new things to develop in a better direction
                </p>
                <p class="mt-5 text-lg">
                    In my free time, I love read book, Watch movie, listen song, go around the city on a motorbike,
                    travelling, and do self improvement. Like Fried rice and fried chicken :)
                </p>
                <div class="mt-10">
                    <NuxtLink
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        target="_blank" to="https://github.com/adityoarr">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Github</span>
                    </NuxtLink>
                    <NuxtLink
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        target="_blank" to="https://www.linkedin.com/in/adityoarr/">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                clip-rule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                        <span class="sr-only">LinkedIn</span>
                    </NuxtLink>
                    <NuxtLink
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        target="_blank" to="https://www.instagram.com/adityoarr/"><svg
                            class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Instagram</span>
                    </NuxtLink>
                    <NuxtLink
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        target="_blank" to="https://www.tiktok.com/@adityoarr">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
                            <path
                                d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                        </svg>
                        <span class="sr-only">Tiktok</span>
                    </NuxtLink>
                    <NuxtLink
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        target="_blank" to="https://x.com/adityoarr">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                            viewBox="0 0 50 50">
                            <path
                                d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z">
                            </path>
                        </svg>
                        <span class="sr-only">X</span>
                    </NuxtLink>
                    <NuxtLink
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        target="_blank" to="https://www.youtube.com/channel/UC6DXWkwiJTae2YLST4Xyolg">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Youtube</span>
                    </NuxtLink>
                    <NuxtLink target="_blank" to="https://linktr.ee/adityoarr"
                        class="text-blue-700 border border-blue-700 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                        </svg>
                        <span class="sr-only">Linktree</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <!-- Education -->
            <div class="break-normal" data-aos="flip-right">
                Education <br />
                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ms-4">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <time
                            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2012-2017</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Brawijaya University Malang,
                            Indonesia</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Faculty of Computer
                            Science, Department of Information Systems <br /> GPA: 3.56</p>
                    </li>
                    <li class="mb-10 ms-4">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <time
                            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2009-2012</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Public Senior High School 9
                            Malang, Indonesia</h3>
                    </li>
                </ol>
            </div>

            <!-- Experience -->
            <div class="break-normal" data-aos="flip-right">
                Experience <br />
                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ms-4">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January
                            2022 - November 2023</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">PT. Alfahuma Rekayasa Teknologi
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>
                                Build & develop mobile app with flutter for android & iOS
                            </li>
                            <li>
                                Maintenance android app build with kotlin
                            </li>
                            <li>
                                Build, develop, & maintenance web app build with CodeIgniter 3 & Laravel
                            </li>
                            <li>Team Work</li>
                        </ul>
                        </p>
                    </li>
                    <li class="mb-10 ms-4">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March
                            2018 - January 2022</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3PM Solution
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>
                                Build, develop, & Maintenance android app, either with java, kotlin, or flutter
                            </li>
                            <li>
                                Do maintenance web app build with angular
                            </li>
                            <li>
                                Do Coordination with client about app development
                            </li>
                        </ul>
                        </p>
                    </li>
                </ol>
            </div>
        </div>
        <div class="mt-10">
            <p data-aos="fade-right" data-aos-delay="100"><span class="text-3xl">Skills</span></p>
            <p class="mt-3" data-aos="fade-right" data-aos-delay="300">
                <span class="text-xl">Mobile Development</span> <br />
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Flutter
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Java Android
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Kotlin
                </button>
            </p>
            <p data-aos="fade-right" data-aos-delay="500">
                <span class="text-xl">Frontend Development</span> <br />
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Next JS
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Nuxt JS
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Bootstrap
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Tailwind CSS
                </button>
            </p>
            <p data-aos="fade-right" data-aos-delay="700">
                <span class="text-xl">Backend Development</span> <br />
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Code Igniter 3
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Code Igniter 4
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Laravel
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Express JS
                </button>
            </p>
            <p data-aos="fade-right" data-aos-delay="900">
                <span class="text-xl">Databases</span> <br />
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    MySQL
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Hive
                </button>
            </p>
            <p data-aos="fade-right" data-aos-delay="1100">
                <span class="text-xl">Tools</span> <br />
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Android Studio
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Vercel
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Asana
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Trello
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Play Store / App Store
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    GIT
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Source Tree
                </button>
            </p>
            <p data-aos="fade-right" data-aos-delay="1300">
                <span class="text-xl">Other</span> <br />
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Firebase
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Ms. Office
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Google Sheets
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Software Implementation
                </button>
                <button type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    Software Training
                </button>
            </p>
        </div>
        <div class="mt-14" data-aos="fade-up">
            <span id="resume" class="text-5xl">Get in touch</span><br />
            <div class="inline-flex w-full text-md text-gray-400">
                If you want to know more about me, or just talk, just contact me :)
            </div>
            <div class="my-5">
                <NuxtLink class="font-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"
                    to="mailto:adityo.rafiu.d.din@gmail.com">adityo.rafiu.d.din@gmail.com</NuxtLink>
            </div>
            <div class="break-normal">
                <NuxtLink
                    class="py-2.5 px-5 my-2 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    target="_blank" to="https://www.canva.com/design/DAF4g44cIoQ/ydHHc1heswdX5Tr8xXDGpA/edit">Resume -
                    IND</NuxtLink>
                <button disabled type="button"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Resume
                    - ENG</button>
                <NuxtLink to="https://drive.google.com/file/d/1UQ_K_ygNJBg6lgxRBP9EsXfztXVp4xsn/view?usp=drive_link"
                    target="_blank"
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:focus:ring-yellow-900">
                    Portfolio</NuxtLink>
                <NuxtLink target="_blank"
                    to="https://drive.google.com/drive/folders/1tr6dle2EjrBKzVbEUnvv9VV0FxKIfyfb?usp=drive_link"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Document</NuxtLink>
            </div>
        </div>
    </div>

    <button id="to-top-button" onclick="goToTop()" title="Go To Top"
        class="hidden fixed z-50 bottom-10 lg:bottom-14 right-1 p-1 border-0 w-7 h-7 rounded-full shadow-md bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span class="sr-only">Go to top</span>
    </button>
</template>
