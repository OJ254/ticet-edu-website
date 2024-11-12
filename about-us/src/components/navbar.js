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
    <a href="/index.html" aria-label="home page" class="flex items-center">
      <svg
        id="logo-light"
        class="h-12 2xl:h-12"
        viewBox="0 0 409 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.873 80.8105H75.0245L83.9837 99.9996H25.7677L12.873 80.8105Z"
          fill="url(#paint0_linear_60936_187418)"
          stroke="#2195F2"
          stroke-width="0.000655023"
        />
        <path
          d="M26.2758 51.0001C30.4801 50 47.8218 50.5001 49.5692 51.0001C51.3166 51.5001 66.2147 77.0002 66.2147 77.0002H43.1246C43.1246 77.0002 22.0716 52.0003 26.2758 51.0001Z"
          fill="url(#paint1_linear_60936_187418)"
        />
        <path
          d="M53.3649 47.9852L70.1183 73.8395C73.6767 79.3246 73.6767 86.2011 70.1183 91.6862L64.7326 99.999H86.6216C93.0844 99.999 99.076 96.848 102.423 91.6862L102.759 91.1745C105.991 85.7702 105.875 79.154 102.432 73.8395L53.3649 0.000465393L37.1934 24.9274L53.3649 47.9852Z"
          fill="url(#paint2_linear_60936_187418)"
        />
        <path
          d="M29.2729 50.6149L46.245 50.9994C46.4101 50.9994 42.5664 50.9994 49.398 50.9994C46.245 50.9994 45.6895 53.3266 42.996 57.4198L28.6835 78.584C24.5005 83.9995 23.9029 86.4995 28.6835 91.4995L35.8544 99.998H15.3579C9.98693 99.998 5.00759 97.4186 2.2262 93.1932L1.94646 92.7743C-0.73902 88.3504 -0.64311 82.9344 2.21821 78.584L16.1412 57.4198C18.9146 53.1943 23.9019 50.6149 29.2729 50.6149Z"
          fill="url(#paint3_linear_60936_187418)"
        />
        <path
          d="M151.993 73.9194C147.595 73.9194 144.173 72.7992 141.73 70.5587C139.331 68.276 138.131 65.1056 138.131 61.0475V47.1611H132V38.918H132.333C134.199 38.918 135.621 38.4742 136.598 37.5865C137.62 36.6987 138.131 35.3672 138.131 33.5917V31.0554H148.128V38.918H156.658V47.1611H148.128V60.4134C148.128 61.597 148.35 62.5905 148.794 63.3936C149.238 64.1545 149.927 64.7252 150.86 65.1056C151.793 65.4861 152.948 65.6763 154.325 65.6763C154.636 65.6763 154.992 65.6551 155.392 65.6129C155.792 65.5706 156.214 65.5283 156.658 65.4861V73.5389C155.992 73.6235 155.236 73.708 154.392 73.7925C153.548 73.8771 152.748 73.9194 151.993 73.9194ZM162.516 73.5389V38.918H172.512V73.5389H162.516ZM162.516 35.811V26.2998H172.512V35.811H162.516ZM197.688 74.2998C194.045 74.2998 190.757 73.5178 187.825 71.9537C184.937 70.3473 182.626 68.1704 180.894 65.4227C179.205 62.675 178.361 59.5891 178.361 56.1651C178.361 52.741 179.205 49.6763 180.894 46.9709C182.582 44.2232 184.892 42.0673 187.825 40.5032C190.757 38.9392 194.045 38.1571 197.688 38.1571C200.398 38.1571 202.908 38.601 205.219 39.4887C207.529 40.3764 209.506 41.6234 211.15 43.2298C212.793 44.7938 213.971 46.6538 214.682 48.8097L206.018 52.3606C205.396 50.6274 204.33 49.2536 202.819 48.239C201.353 47.2245 199.643 46.7172 197.688 46.7172C195.955 46.7172 194.4 47.1188 193.023 47.922C191.69 48.7251 190.624 49.8454 189.824 51.2826C189.068 52.7199 188.691 54.3685 188.691 56.2285C188.691 58.0885 189.068 59.7371 189.824 61.1743C190.624 62.6115 191.69 63.7318 193.023 64.5349C194.4 65.3381 195.955 65.7397 197.688 65.7397C199.687 65.7397 201.42 65.2324 202.886 64.2179C204.352 63.2034 205.396 61.8296 206.018 60.0964L214.682 63.7106C214.015 65.7397 212.86 67.5574 211.216 69.1637C209.573 70.7701 207.595 72.0383 205.285 72.9682C202.975 73.856 200.443 74.2998 197.688 74.2998ZM238.095 74.2998C234.23 74.2998 230.876 73.4967 228.032 71.8903C225.189 70.2417 222.99 68.0436 221.435 65.2958C219.88 62.5481 219.102 59.5045 219.102 56.1651C219.102 52.6988 219.902 49.6129 221.501 46.9075C223.146 44.2021 225.345 42.0673 228.099 40.5032C230.854 38.9392 233.964 38.1571 237.429 38.1571C240.317 38.1571 242.872 38.601 245.093 39.4887C247.315 40.3342 249.181 41.5389 250.691 43.103C252.246 44.667 253.423 46.4848 254.223 48.5561C255.023 50.5851 255.423 52.8044 255.423 55.2139C255.423 55.8903 255.378 56.5667 255.289 57.243C255.245 57.8771 255.134 58.4266 254.956 58.8916H227.699V51.9167H249.291L244.56 55.2139C245.005 53.3963 244.982 51.7899 244.493 50.3949C244.005 48.9577 243.139 47.8374 241.894 47.0343C240.695 46.1888 239.207 45.7661 237.429 45.7661C235.696 45.7661 234.208 46.1677 232.964 46.9709C231.72 47.774 230.787 48.9577 230.165 50.5217C229.543 52.0858 229.299 53.988 229.432 56.2285C229.254 58.173 229.498 59.885 230.165 61.3645C230.831 62.8441 231.853 64.0065 233.23 64.852C234.608 65.6551 236.274 66.0567 238.229 66.0567C240.006 66.0567 241.517 65.7185 242.76 65.0422C244.049 64.3659 245.049 63.4358 245.759 62.2523L253.757 65.8665C253.046 67.5574 251.913 69.0369 250.358 70.3051C248.847 71.5733 247.048 72.5666 244.96 73.2853C242.872 73.9616 240.584 74.2998 238.095 74.2998ZM278.836 73.9194C274.438 73.9194 271.017 72.7992 268.573 70.5587C266.174 68.276 264.974 65.1056 264.974 61.0475V47.1611H258.843V38.918H259.176C261.042 38.918 262.464 38.4742 263.442 37.5865C264.464 36.6987 264.974 35.3672 264.974 33.5917V31.0554H274.971V38.918H283.501V47.1611H274.971V60.4134C274.971 61.597 275.193 62.5905 275.637 63.3936C276.082 64.1545 276.77 64.7252 277.703 65.1056C278.636 65.4861 279.792 65.6763 281.169 65.6763C281.48 65.6763 281.835 65.6551 282.235 65.6129C282.635 65.5706 283.057 65.5283 283.501 65.4861V73.5389C282.835 73.6235 282.08 73.708 281.235 73.7925C280.391 73.8771 279.592 73.9194 278.836 73.9194Z"
          fill="white"
        />
        <path
          d="M306.708 60.1743C307.152 63.0911 308.374 65.3526 310.374 66.959C312.373 68.5654 314.883 69.3685 317.904 69.3685C319.859 69.3685 321.792 69.0515 323.702 68.4174C325.657 67.7411 327.412 66.8533 328.967 65.7542L331.166 69.749C327.301 72.5389 322.836 73.9339 317.771 73.9339C314.039 73.9339 310.951 73.1942 308.508 71.7146C306.064 70.2351 304.265 68.2906 303.109 65.8811C301.999 63.4715 301.443 60.8296 301.443 57.955C301.443 54.8692 302.066 52.1215 303.309 49.712C304.553 47.2602 306.331 45.358 308.641 44.0052C310.996 42.6103 313.75 41.9128 316.905 41.9128C320.014 41.9128 322.703 42.5891 324.968 43.9418C327.234 45.2522 328.967 47.0911 330.167 49.4583C331.41 51.8256 332.033 54.5098 332.033 57.5112L331.833 60.1743H306.708ZM326.501 55.6723C326.412 53.9392 325.901 52.3751 324.968 50.9801C324.08 49.5852 322.925 48.4861 321.503 47.6829C320.081 46.8798 318.548 46.4782 316.905 46.4782C314.328 46.4359 312.084 47.3025 310.174 49.0779C308.308 50.8111 307.152 53.0092 306.708 55.6723H326.501ZM354.08 73.9973C351.103 73.9973 348.393 73.2998 345.95 71.9048C343.55 70.4676 341.662 68.523 340.285 66.0713C338.908 63.6195 338.219 60.8718 338.219 57.8282C338.219 54.7846 338.885 52.0581 340.218 49.6486C341.595 47.1968 343.484 45.2734 345.883 43.8784C348.326 42.4834 351.059 41.7859 354.08 41.7859C357.012 41.7859 359.656 42.5257 362.011 44.0052C364.365 45.4425 366.209 47.387 367.542 49.8388C368.919 52.2906 369.608 54.9537 369.608 57.8282C369.608 60.6182 368.919 63.2602 367.542 65.7542C366.209 68.2483 364.365 70.2562 362.011 71.778C359.656 73.2576 357.012 73.9973 354.08 73.9973ZM354.613 69.4953C356.746 69.4953 358.656 69.0092 360.344 68.0369C362.077 67.0224 363.41 65.6274 364.343 63.852C365.32 62.0766 365.809 60.0687 365.809 57.8282C365.809 55.5878 365.32 53.601 364.343 51.8678C363.41 50.0924 362.1 48.7186 360.411 47.7463C358.723 46.774 356.79 46.2879 354.613 46.2879C352.436 46.2879 350.504 46.774 348.815 47.7463C347.127 48.7186 345.794 50.0924 344.817 51.8678C343.884 53.601 343.417 55.5878 343.417 57.8282C343.417 60.0687 343.906 62.0766 344.883 63.852C345.86 65.6274 347.193 67.0224 348.882 68.0369C350.615 69.0092 352.525 69.4953 354.613 69.4953ZM365.809 63.0911V28.0264H370.741V73.5534H365.809V63.0911ZM384.312 60.3645C384.312 63.1968 385.089 65.416 386.644 67.0224C388.199 68.5865 390.376 69.3685 393.175 69.3685C396.197 69.3685 398.596 68.4174 400.373 66.5151C402.15 64.6129 403.038 62.0554 403.038 58.8427L404.105 58.7159L405.704 63.852C405.082 66.8956 403.572 69.3474 401.172 71.2073C398.773 73.025 395.908 73.9339 392.575 73.9339C388.444 73.9339 385.178 72.7291 382.779 70.3196C380.424 67.9101 379.247 64.6341 379.247 60.4914V42.6103H384.312V60.3645ZM403.038 73.2364V64.3593V42.6103H408.103V73.2364H403.038Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_60936_187418"
            x1="94.2811"
            y1="105.811"
            x2="49.546"
            y2="73.6035"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.501827" stop-color="#E74A2D" />
            <stop offset="0.791876" stop-color="#FAB600" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_60936_187418"
            x1="42.5668"
            y1="54.5"
            x2="51.2478"
            y2="76.803"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.291491" stop-color="#4DAB2A" />
            <stop offset="0.609375" stop-color="#2195F2" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_60936_187418"
            x1="65.6636"
            y1="99.999"
            x2="67.0665"
            y2="-13.5155"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.125966" stop-color="#E74A2D" />
            <stop offset="0.553853" stop-color="#6750A4" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_60936_187418"
            x1="13.7438"
            y1="146.5"
            x2="14.1621"
            y2="21.4987"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.507168" stop-color="#FAB600" />
            <stop offset="0.719365" stop-color="#47AB2C" />
          </linearGradient>
        </defs>
      </svg>
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
            <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
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
            <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
              <li>
                <a
                  href="/src/pages/what-we-do/ticet-features.html"
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
            <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
              <li>
                <a
                  href="/src/pages/our-workplace/working-at-ticet-edu.html"
                  class="surface-hover text-hover block px-4 py-2"
                  >Working at Ticet EDU</a
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
            <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
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
            onclick="window.location.href='/src/pages/news-blogs/news-blogs.html';"
          >
            Ticet EDU Blog
          </button>
          <!-- Dropdown menu -->
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
            onclick="window.location.href='https://ticetedu.com/'"
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
