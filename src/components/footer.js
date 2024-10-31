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
          class="flex gap-4 lg:gap-8 xl:gap-12 flex-col lg:flex-row w-full max-w-8xl mx-4"
        >
          <div
            class="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row items-start gap-4 w-full pb-2 borders border-b lg:border-0"
          >
            <img src="/public/assets/logo-light.svg" alt="ticet logo" class="h-10" />
            <div>
              <p
                class="text-sm text-app-colors-heading-d dark:text-app-colors-heading-d mb-4"
              >
                Ticet Edu is a learning experience platform that revolutionizes
                education by fostering collaboration, using cutting-edge
                technology, and providing personalized experiences for users.
              </p>
              <div class="flex gap-4">
                <p
                  class="text-sm text-app-colors-heading-d dark:text-app-colors-heading-d"
                >
                  © 2024 ticet edu Ltd
                </p>
                <div class="flex flex-col gap-1 items-start ">
                  <a
                    href="/src/pages/legal-policies/legal-policies.html"
                    class="text-sm text-secondary-blue-500 dark:text-secondary-blue-500 hover:text-secondary-blue-600 dark:hover:text-secondary-blue-600"
                    >Privacy Policy</a
                  >
                  <a
                    href="/src/pages/legal-policies/legal-policies.html"
                    class="text-sm text-secondary-blue-500 dark:text-secondary-blue-500 hover:text-secondary-blue-600 dark:hover:text-secondary-blue-600"
                    >Terms of Use Policy</a
                  >
                  <a
                    href="/src/pages/legal-policies/legal-policies.html"
                    class="text-sm text-secondary-blue-500 dark:text-secondary-blue-500 hover:text-secondary-blue-600 dark:hover:text-secondary-blue-600"
                    >Data Protection Policy</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row w-full gap-4 lg:gap-8 xl:gap-12 pb-2"
          >
            <div
              class="flex flex-col gap-3 w-full pb-2 borders border-b sm:border-0"
            >
              <h6
                class="text-base text-secondary-yellow-500 dark:text-secondary-yellow-500"
              >
                ticet edu News
              </h6>
              <p
                class="text-sm text-app-colors-heading-d dark:text-app-colors-heading-d"
              >
                Join our mailing list
              </p>
              <p
                class="text-sm text-app-colors-heading-d dark:text-app-colors-heading-d"
              >
                Sign up to receive email updates on new product announcements,
                gifts, ideas, special promotions, sales, and more.
              </p>
              <div class="flex rounded-lg bg-white border-0">
                <input
                  type="text"
                  placeholder="Enter email"
                  class="bg-transparent border-0 focus:ring-0 w-full rounded px-8 line-clamp-1"
                />
                <button type="submit" class="pill-button primary-button px-8 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-4 w-full pb-2">
              <div class="flex flex-col gap-2">
                <h6
                  class="text-base text-secondary-yellow-500 dark:text-secondary-yellow-500"
                >
                  Contact ticet edu
                </h6>
                <address
                  class="text-sm not-italic text-app-colors-heading-d dark:text-app-colors-heading-d"
                >
                  Nairobi Garage Spring Valley <br />
                  3rd Floor, The Promenade <br />
                  General Mathenge Road //
                  Parklands, Nrb KE<br />
                  E: info@ticet.edu
                </address>
              </div>
              <div class="flex flex-col gap-2">
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
                      <clipPath id="clip0_53130_7109">
                        <rect width="16" height="16" rx="6" fill="white" />
                      </clipPath>
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
                      <clipPath id="clip0_53130_7111">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
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
                      <clipPath id="clip0_53130_7112">
                        <rect width="16" height="16" rx="6" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <script>
        if (
          localStorage.getItem("color-theme") === "dark" ||
          (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      </script>
      <script src="js/script.js" defer></script>
    `;
  }
}

customElements.define("my-footer", Footer);
