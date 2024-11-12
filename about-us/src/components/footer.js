class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <footer
  class="bg-app-colors-header-bg dark:bg-app-colors-header-bg-d borders border-t bg-fixed flex justify-center w-100vw py-10 2xl:py-16"
>
  <div
    class="flex gap-4 justify-center lg:gap-8 xl:gap-12 flex-col lg:flex-row w-full max-w-8xl mx-4"
  >
    <div
      class="flex flex-col items-start gap-4 w-full lg:w-1/3 pb-2 borders border-b lg:border-0"
    >
      <svg
        id="logo-light"
        class="h-10"
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
      <div>
        <p
          class="text-sm text-app-colors-heading-d dark:text-app-colors-heading-d mb-4"
        >
          Ticet Edu is a collaborative learning platform that empowers learners
          and educators by offering a seamless space for content sharing,
          personalized learning experiences, and community-driven educational
          resources.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col sm:flex-row gap-4 w-full lg:w-2/3 pb-2 borders border-b lg:border-0"
    >
      <div class="flex flex-col gap-4 w-full items-center">
        <p
          class="text-sm text-app-colors-heading-d dark:text-app-colors-heading-d"
        >
          © 2024 Ticet EDU Ltd
        </p>
        <div class="flex flex-col gap-1 items-center">
          <a
            href="../legal-policies/legal-policies.html#privacy"
            class="text-sm text-secondary-blue-500 dark:text-secondary-blue-500 hover:text-secondary-blue-600 dark:hover:text-secondary-blue-600"
            >Privacy Policy</a
          >
          <a
            href="../legal-policies/legal-policies.html#terms-of-use"
            class="text-sm text-secondary-blue-500 dark:text-secondary-blue-500 hover:text-secondary-blue-600 dark:hover:text-secondary-blue-600"
            >Terms of Use Policy</a
          >
          <a
            href="../legal-policies/legal-policies.html#data-protection"
            class="text-sm text-secondary-blue-500 dark:text-secondary-blue-500 hover:text-secondary-blue-600 dark:hover:text-secondary-blue-600"
            >Data Protection Policy</a
          >
        </div>
      </div>

      <div
        class="flex flex-col sm:flex-row w-full gap-4 lg:gap-8 xl:gap-12 pb-2"
      >
        <div class="flex flex-col items-center gap-4 w-full pb-2">
          <div class="flex flex-col gap-2 items-center">
            <h6
              class="text-base text-secondary-yellow-500 dark:text-secondary-yellow-500"
            >
              Contact Ticet EDU
            </h6>
            <address
              class="text-sm not-italic text-app-colors-heading-d dark:text-app-colors-heading-d"
            >
              E: info@ticetedu.com
            </address>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <h6
              class="text-base text-secondary-yellow-500 dark:text-secondary-yellow-500"
            >
              Follow us on
            </h6>
            <div class="flex gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0379 4.78727C14.0441 4.92807 14.0441 5.06247 14.0441 5.20327C14.0503 9.47208 10.914 14.4001 5.17846 14.4001C3.48682 14.4001 1.82606 13.8945 0.399902 12.9473C0.646856 12.9793 0.89381 12.9921 1.14076 12.9921C2.54223 12.9921 3.90664 12.5057 5.01176 11.6033C3.67821 11.5777 2.50518 10.6753 2.09771 9.35688C2.56692 9.45288 3.04848 9.43368 3.50535 9.29928C2.05449 9.00488 1.01111 7.68008 1.00494 6.13767C1.00494 6.12487 1.00494 6.11207 1.00494 6.09927C1.43711 6.34887 1.92484 6.48967 2.41875 6.50247C1.05433 5.55527 0.628335 3.66726 1.45563 2.18886C3.04231 4.21126 5.37602 5.43367 7.8826 5.56807C7.62947 4.44807 7.97521 3.27046 8.78398 2.47686C10.0373 1.25446 12.0129 1.31846 13.1983 2.61766C13.8959 2.47686 14.5689 2.20806 15.1801 1.83046C14.9455 2.57926 14.4577 3.21286 13.8095 3.61606C14.4269 3.53926 15.0319 3.36646 15.5999 3.11046C15.1801 3.76326 14.6491 4.32647 14.0379 4.78727Z"
                  fill="white"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4758 8.88534L11.8904 6.15524H9.2968V4.38437C9.2968 3.63728 9.65845 2.90864 10.8201 2.90864H12V0.584368C12 0.584368 10.9297 0.399902 9.90685 0.399902C7.76986 0.399902 6.37443 1.70777 6.37443 4.07447V6.15524H4V8.88534H6.37443V15.4855C6.85114 15.5612 7.33881 15.5999 7.83562 15.5999C8.33242 15.5999 8.82009 15.5612 9.2968 15.4855V8.88534H11.4758Z"
                  fill="white"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_53130_7109)">
                  <path
                    d="M7.9967 0C3.57384 0 0 3.58042 0 7.9967C0 11.3863 2.10613 14.2822 5.08104 15.4471C5.00864 14.8153 4.94941 13.8412 5.10736 13.1501C5.25216 12.5249 6.04195 9.17483 6.04195 9.17483C6.04195 9.17483 5.80502 8.69437 5.80502 7.99013C5.80502 6.87782 6.45002 6.04854 7.25298 6.04854C7.93747 6.04854 8.26656 6.5619 8.26656 7.174C8.26656 7.8585 7.83216 8.88523 7.60181 9.83957C7.41094 10.636 8.0033 11.2875 8.78651 11.2875C10.2081 11.2875 11.3007 9.78691 11.3007 7.62814C11.3007 5.71288 9.92514 4.3768 7.95722 4.3768C5.67997 4.3768 4.34389 6.08144 4.34389 7.84533C4.34389 8.52982 4.60715 9.26696 4.93624 9.66845C5.00206 9.74742 5.00864 9.81982 4.9889 9.8988C4.92966 10.1489 4.79144 10.6952 4.76512 10.8071C4.73221 10.9519 4.64664 10.9848 4.49526 10.9124C3.50802 10.4385 2.88934 8.97738 2.88934 7.80584C2.88934 5.28507 4.71904 2.96832 8.17442 2.96832C10.9453 2.96832 13.1041 4.94282 13.1041 7.58864C13.1041 10.3464 11.3665 12.5644 8.95763 12.5644C8.14808 12.5644 7.38461 12.1432 7.12794 11.6429C7.12794 11.6429 6.72645 13.1699 6.62773 13.545C6.45002 14.2427 5.96298 15.1115 5.63389 15.6446C6.38421 15.8749 7.174 16 8.0033 16C12.4196 16 16 12.4196 16 8.0033C15.9934 3.58042 12.413 0 7.9967 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_53130_7109">
                    <rect width="16" height="16" rx="6" fill="white" />
                  </clippath>
                </defs>
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6704 4.15278C15.4859 3.46744 14.9456 2.92708 14.2602 2.74257C13.0082 2.3999 7.99997 2.3999 7.99997 2.3999C7.99997 2.3999 2.99175 2.3999 1.7397 2.72939C1.06754 2.9139 0.514001 3.46744 0.329488 4.15278C0 5.40483 0 8.0012 0 8.0012C0 8.0012 0 10.6107 0.329488 11.8496C0.514001 12.5349 1.05436 13.0753 1.7397 13.2598C3.00493 13.6025 7.99997 13.6025 7.99997 13.6025C7.99997 13.6025 13.0082 13.6025 14.2602 13.273C14.9456 13.0885 15.4859 12.5481 15.6704 11.8628C15.9999 10.6107 15.9999 8.01438 15.9999 8.01438C15.9999 8.01438 16.0131 5.40483 15.6704 4.15278Z"
                  fill="white"
                />
                <path
                  d="M6.40527 10.3999L10.57 8.00121L6.40527 5.60254V10.3999Z"
                  fill="#6750A4"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_53130_7111)">
                  <path
                    d="M0 2.13446C0 1.61965 0.180185 1.19494 0.540541 0.860329C0.900896 0.525703 1.36937 0.358398 1.94595 0.358398C2.51223 0.358398 2.97039 0.523124 3.32046 0.852607C3.68082 1.19238 3.861 1.63509 3.861 2.18079C3.861 2.675 3.68598 3.08683 3.33591 3.41631C2.97555 3.75608 2.50193 3.92597 1.91506 3.92597H1.89961C1.33333 3.92597 0.875166 3.75608 0.525097 3.41631C0.175027 3.07655 0 2.64926 0 2.13446ZM0.200772 15.648V5.33137H3.62934V15.648H0.200772ZM5.52896 15.648H8.95753V9.88736C8.95753 9.52699 8.99872 9.24899 9.08108 9.05338C9.22522 8.70331 9.44401 8.40729 9.73745 8.16535C10.0309 7.92339 10.399 7.80241 10.8417 7.80241C11.9949 7.80241 12.5714 8.57976 12.5714 10.1345V15.648H16V9.73291C16 8.2091 15.6396 7.05338 14.9189 6.26573C14.1982 5.47809 13.2458 5.08427 12.0618 5.08427C10.7336 5.08427 9.69884 5.6557 8.95753 6.79855V6.82944H8.94209L8.95753 6.79855V5.33137H5.52896C5.54954 5.66084 5.55985 6.68529 5.55985 8.40473C5.55985 10.1242 5.54954 12.5386 5.52896 15.648Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_53130_7111">
                    <rect width="16" height="16" fill="white" />
                  </clippath>
                </defs>
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_53130_7112)">
                  <path
                    d="M0 16L1.13085 11.8935C0.431709 10.6882 0.0649474 9.3232 0.0687679 7.92776C0.0687679 3.55513 3.6447 0 8.03438 0C10.1662 0 12.1681 0.825095 13.6695 2.32319C15.1748 3.82129 16.0038 5.81369 16 7.93156C16 12.3042 12.4241 15.8593 8.03056 15.8593H8.02674C6.6934 15.8593 5.383 15.5247 4.21776 14.8935L0 16ZM4.42024 13.4601L4.66093 13.6046C5.67717 14.2053 6.8424 14.5209 8.03056 14.5247H8.03438C11.6829 14.5247 14.6552 11.5703 14.6552 7.93536C14.6552 6.17491 13.9675 4.52091 12.7182 3.27376C11.469 2.02662 9.80324 1.34221 8.03438 1.34221C4.38586 1.3384 1.41356 4.29278 1.41356 7.92776C1.41356 9.1711 1.76122 10.384 2.42598 11.4335L2.58261 11.6844L1.91404 14.1141L4.42024 13.4601Z"
                    fill="#6750A4"
                  />
                  <path
                    d="M0.278809 15.7222L1.37145 11.7564C0.695236 10.5967 0.339936 9.27735 0.339936 7.93134C0.343756 3.7108 3.79361 0.277344 8.03429 0.277344C10.0935 0.277344 12.0228 1.07582 13.4746 2.52069C14.9264 3.96556 15.7248 5.88951 15.7248 7.93514C15.7248 12.1557 12.2712 15.5891 8.03429 15.5891H8.03047C6.74299 15.5891 5.47842 15.2659 4.35521 14.6576L0.278809 15.7222Z"
                    fill="white"
                  />
                  <path
                    d="M0 16L1.13085 11.8935C0.431709 10.6882 0.0649474 9.3232 0.0687679 7.92776C0.0687679 3.55513 3.6447 0 8.03438 0C10.1662 0 12.1681 0.825095 13.6695 2.32319C15.1748 3.82129 16.0038 5.81369 16 7.93156C16 12.3042 12.4241 15.8593 8.03056 15.8593H8.02674C6.6934 15.8593 5.383 15.5247 4.21776 14.8935L0 16ZM4.42024 13.4601L4.66093 13.6046C5.67717 14.2053 6.8424 14.5209 8.03056 14.5247H8.03438C11.6829 14.5247 14.6552 11.5703 14.6552 7.93536C14.6552 6.17491 13.9675 4.52091 12.7182 3.27376C11.469 2.02662 9.80324 1.34221 8.03438 1.34221C4.38586 1.3384 1.41356 4.29278 1.41356 7.92776C1.41356 9.1711 1.76122 10.384 2.42598 11.4335L2.58261 11.6844L1.91404 14.1141L4.42024 13.4601Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.04392 4.61212C5.89492 4.28132 5.73829 4.27372 5.59693 4.26992C5.48232 4.26611 5.3486 4.26611 5.21489 4.26611C5.08117 4.26611 4.86723 4.31554 4.68384 4.51326C4.50046 4.71098 3.98853 5.19007 3.98853 6.16725C3.98853 7.14064 4.70295 8.0836 4.80228 8.21668C4.90161 8.34976 6.18146 10.4144 8.20247 11.2091C9.88346 11.8707 10.2273 11.7376 10.5902 11.7034C10.9532 11.6692 11.7669 11.2243 11.935 10.7604C12.0993 10.2965 12.0993 9.9011 12.0496 9.81745C12 9.7338 11.8663 9.68437 11.6676 9.58551C11.4689 9.48665 10.4909 9.00756 10.3075 8.93912C10.1241 8.87448 9.99043 8.84026 9.86054 9.03798C9.72682 9.2357 9.34478 9.68056 9.23017 9.81364C9.11555 9.94672 8.99712 9.96193 8.79846 9.86307C8.59979 9.76421 7.95796 9.55509 7.19769 8.87828C6.60552 8.35357 6.20438 7.70338 6.08977 7.50566C5.97515 7.30794 6.0783 7.20148 6.17764 7.10262C6.26551 7.01516 6.3763 6.87068 6.47563 6.75661C6.57496 6.64254 6.60934 6.55889 6.67429 6.42581C6.73924 6.29273 6.70868 6.17866 6.65901 6.0798C6.60935 5.98474 6.21966 5.00376 6.04392 4.61212Z"
                    fill="#6750A4"
                  />
                </g>
                <defs>
                  <clippath id="clip0_53130_7112">
                    <rect width="16" height="16" rx="6" fill="white" />
                  </clippath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


      <script src="/src/script.js" defer></script>
    `;
  }
}

customElements.define("my-footer", Footer);
