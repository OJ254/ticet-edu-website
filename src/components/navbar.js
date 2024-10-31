class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav
        class="bg-primary-800 dark:bg-primary-900 w-full fixed z-40 top-0 start-0 h-20 flex items-center justify-center"
      >
        <div
          class="xl:h-full relative w-full max-w-8xl flex flex-wrap items-center justify-between mx-4"
        >
          <a
            href="/index.html"
            aria-label="home page"
            class="flex items-center"
          >
            <img
              id="logo-light"
              class="hidden h-12 2xl:h-12"
              src="/public/assets/logo-light.svg"
              alt=""
            />

            <img
              id="logo-dark"
              class="hidden h-12 2xl:h-12"
              src="/public/assets/logo-light.svg"
              alt=""
            />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class="absolute top-16 xl:relative xl:top-0 surface rounded-md xl:bg-primary-800 xl:dark:bg-primary-900 hidden w-full xl:flex xl:h-full xl:items-center xl:w-auto"
            id="navbar-dropdown"
          >
            <ul
              class="flex flex-col items-center gap-2 xl:h-full font-medium p-4 xl:p-0 mt-4 rounded-md xl:space-x-4 rtl:space-x-reverse xl:flex-row xl:mt-0 border borders xl:border-0"
            >
              <li>
                <a
                  href="/index.html"
                  class="relative xl:h-full surface block py-2 px-3 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:dark:hover:text-secondary-yellow-500 xl:hover:text-secondary-yellow-500 rounded xl:bg-transparent xl:dark:bg-transparent xl:p-0"
                  aria-current="page"
                  >Home</a
                >
              </li>

              <li
                class="xl:flex xl:h-full xl:items-center relative group w-full xl:max-w-max"
              >
                <button
                  class="surface-hover flex gap-2 items-center justify-between w-full py-2 px-3 rounded xl:hover:bg-transparent border borders xl:border-0 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:hover:text-secondary-yellow-500 xl:p-0 xl:w-auto xl:dark:hover:text-secondary-yellow-500 dark:focus:text-white xl:dark:hover:bg-transparent"
                >
                  Who we Are
                  <svg
                    class="icons"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.64019 7.86012H5.30686V9.19345H6.64019V7.86012ZM1.26019 2.87012L0.317525 3.81278L4.08819 7.58412L5.03086 6.64145L1.26019 2.87012ZM10.6875 2.87012L6.91686 6.64145L7.85953 7.58412L11.6309 3.81278L10.6875 2.87012Z"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  class="surface text-app-colors-heading dark:text-app-colors-heading-d z-50 xl:absolute xl:top-16 -mt-0.25 xl:right-0 hidden group-hover:block font-normal rounded-b-md shadow-lg w-full xl:w-60"
                >
                  <ul
                    class="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/src/pages/who-we-are/about.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >About</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/who-we-are/our-position.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Our Position</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/who-we-are/public-position_1.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Public Position</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li
                class="xl:flex xl:h-full xl:items-center relative group w-full xl:max-w-max"
              >
                <button
                  class="surface-hover flex gap-2 items-center justify-between w-full py-2 px-3 rounded xl:hover:bg-transparent border borders xl:border-0 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:hover:text-secondary-yellow-500 xl:p-0 xl:w-auto xl:dark:hover:text-secondary-yellow-500 dark:focus:text-white xl:dark:hover:bg-transparent"
                >
                  What we Do
                  <svg
                    class="icons"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.64019 7.86012H5.30686V9.19345H6.64019V7.86012ZM1.26019 2.87012L0.317525 3.81278L4.08819 7.58412L5.03086 6.64145L1.26019 2.87012ZM10.6875 2.87012L6.91686 6.64145L7.85953 7.58412L11.6309 3.81278L10.6875 2.87012Z"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  class="surface text-app-colors-heading dark:text-app-colors-heading-d z-50 xl:absolute xl:top-16 -mt-0.25 xl:right-0 hidden group-hover:block font-normal rounded-b-md shadow-lg w-full xl:w-60"
                >
                  <ul
                    class="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/src/pages/what-we-do/features.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Features</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/what-we-do/for-learners.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >For Learners</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/what-we-do/for-content-creators.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >For Content Creators</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/what-we-do/for-learning-institutions.html"
                        class="hidden surface-hover text-hover [block] px-4 py-2"
                        >For Learning Institutions</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li
                class="hidden .xl:flex xl:h-full xl:items-center relative group w-full xl:max-w-max"
              >
                <button
                  class="surface-hover flex gap-2 items-center justify-between w-full py-2 px-3 rounded xl:hover:bg-transparent border borders xl:border-0 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:hover:text-secondary-yellow-500 xl:p-0 xl:w-auto xl:dark:hover:text-secondary-yellow-500 dark:focus:text-white xl:dark:hover:bg-transparent"
                >
                  Our Workplace
                  <svg
                    class="icons"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.64019 7.86012H5.30686V9.19345H6.64019V7.86012ZM1.26019 2.87012L0.317525 3.81278L4.08819 7.58412L5.03086 6.64145L1.26019 2.87012ZM10.6875 2.87012L6.91686 6.64145L7.85953 7.58412L11.6309 3.81278L10.6875 2.87012Z"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  class="surface text-app-colors-heading dark:text-app-colors-heading-d z-50 xl:absolute xl:top-16 -mt-0.25 xl:right-0 hidden group-hover:block font-normal rounded-b-md shadow-lg w-full xl:w-80"
                >
                  <ul
                    class="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/src/pages/our-workplace/working-at-ticet-edu.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Working at ticet edu</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-workplace/corporate-culture.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Corporate Culture</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-workplace/diversity-equity-inclusion.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Diversity, Equity, and Inclusion</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-workplace/upskilling-training.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Upskilling and Training</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-workplace/career-growth-opportunities.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Career Growth and Opportunities</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-workplace/corporate-offices.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Corporate Offices</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li
                class="xl:flex xl:h-full xl:items-center relative group w-full xl:max-w-max"
              >
                <button
                  class="surface-hover flex gap-2 items-center justify-between w-full py-2 px-3 rounded xl:hover:bg-transparent border borders xl:border-0 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:hover:text-secondary-yellow-500 xl:p-0 xl:w-auto xl:dark:hover:text-secondary-yellow-500 dark:focus:text-white xl:dark:hover:bg-transparent"
                >
                  Our Impact
                  <svg
                    class="icons"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.64019 7.86012H5.30686V9.19345H6.64019V7.86012ZM1.26019 2.87012L0.317525 3.81278L4.08819 7.58412L5.03086 6.64145L1.26019 2.87012ZM10.6875 2.87012L6.91686 6.64145L7.85953 7.58412L11.6309 3.81278L10.6875 2.87012Z"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  class="surface text-app-colors-heading dark:text-app-colors-heading-d z-50 xl:absolute xl:top-16 -mt-0.25 xl:right-0 hidden group-hover:block font-normal rounded-b-md shadow-lg w-full xl:w-60"
                >
                  <ul
                    class="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/src/pages/our-impact/triple-bottom-line.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Triple Bottom Line</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-impact/environment.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Environment</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-impact/society.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Society</a
                      >
                    </li>
                    <li>
                      <a
                        href="/src/pages/our-impact/governance.html"
                        class="surface-hover text-hover block px-4 py-2"
                        >Governance</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li
                class="xl:flex xl:h-full xl:items-center relative group w-full xl:max-w-max"
              >
                <button
                  class="surface-hover flex gap-2 items-center justify-between w-full py-2 px-3 rounded xl:hover:bg-transparent border borders xl:border-0 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:hover:text-secondary-yellow-500 xl:p-0 xl:w-auto xl:dark:hover:text-secondary-yellow-500 dark:focus:text-white xl:dark:hover:bg-transparent"
                >
                  News/Blogs
                  <svg
                    class="icons"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.64019 7.86012H5.30686V9.19345H6.64019V7.86012ZM1.26019 2.87012L0.317525 3.81278L4.08819 7.58412L5.03086 6.64145L1.26019 2.87012ZM10.6875 2.87012L6.91686 6.64145L7.85953 7.58412L11.6309 3.81278L10.6875 2.87012Z"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  class="surface text-app-colors-heading dark:text-app-colors-heading-d z-50 xl:absolute xl:top-16 -mt-0.25 xl:right-0 hidden group-hover:block font-normal rounded-b-md shadow-lg w-full xl:w-60"
                >
                  <ul
                    class="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="surface-hover text-hover block px-4 py-2"
                        >News</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="surface-hover text-hover block px-4 py-2"
                        >Blogs</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li
                class="xl:flex xl:h-full xl:items-center relative group w-full xl:max-w-max"
              >
                <button
                  class="surface-hover flex gap-2 items-center justify-between w-full py-2 px-3 rounded xl:hover:bg-transparent border borders xl:border-0 text-app-colors-heading dark:text-app-colors-heading-d xl:text-app-colors-heading-d xl:hover:text-secondary-yellow-500 xl:p-0 xl:w-auto xl:dark:hover:text-secondary-yellow-500 dark:focus:text-white xl:dark:hover:bg-transparent"
                >
                  FAQs
                </button>
              </li>

              <li class="flex gap-4">
                <button
                  id="theme-toggle"
                  title="theme-toggle-button"
                  type="button"
                  class="text-gray-300 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg p-2.5"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    class="w-6 h-6 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    class="w-6 h-6 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  class="pill-button primary-button"
                  onclick="window.location.href='https://infobrix.co.ke/'"
                >
                  Sign In / Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    // Apply dark mode based on localStorage or user preference
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Load external script
    const script = document.createElement("script");
    script.src = "/src/script.js";
    script.defer = true;
    document.head.appendChild(script);

    document.addEventListener("DOMContentLoaded", function () {
      const collapseToggle = document.querySelector(
        "[data-collapse-toggle='navbar-dropdown']"
      );
      const navbarDropdown = document.getElementById("navbar-dropdown");

      collapseToggle.addEventListener("click", function () {
        navbarDropdown.classList.toggle("hidden");
      });

      document.addEventListener("click", function (event) {
        if (
          !navbarDropdown.contains(event.target) &&
          !collapseToggle.contains(event.target)
        ) {
          navbarDropdown.classList.add("hidden");
        }
      });
    });
  }
}

// Define the custom element
customElements.define("nav-bar", Navbar);
