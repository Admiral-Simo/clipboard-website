import React from "react";

function App() {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      {HeroSection()}
      {/* Section 2 */}
      {Section2()}
      {/* Section 3 with image */}
      {Section3()}
      {/* Section 4 Access Clipboard Anywhere */}
      {Section4()}
      {/* Image Section */}
      {ImageSection()}
      {/* Supercharge your workflow */}
      {Workflow()}
      {/* Benefits  */}
      {Benefits()}
      {/* References Section */}
      {References()}
      {/* Avalability */}
      {Availability()}
      {/* Footer */}
      {Footer()}
    </div>
  );
}

export default App;
function Availability() {
  return <section id="availability">
    <div className="section-container">
      <h3>Clipboard for iOS and MacOS</h3>
      <p className="large-paragraph">
        Available for free on the App Store. Download for Mac or iOS, sync
        with iCloud and you're ready to start adding to your clipboard.
      </p>
      <div className="mb-32 button-container">
        <a
          href="$"
          className="px-8 py-4 duration-200 rounded-full shadow-lg bg-strongCyan hover:opacity-80"
        >
          Download for IOS
        </a>
        <a
          href="$"
          className="px-8 py-4 duration-200 rounded-full shadow-lg bg-lightBlue hover:opacity-80"
        >
          Download for Mac
        </a>
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="bg-gray-50">
    <div className="section-container">
      <div className="flex flex-col items-center justify-between md:flex-row">
        {/* Image */}
        <svg
          className="scale-50"
          width="125"
          height="125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#26BBA4"
            stroke-width="10"
            fill="none"
            fill-rule="evenodd"
          >
            <circle cx="62.5" cy="62.5" r="57.5" />
            <path
              d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
              stroke-linecap="round" />
          </g>
        </svg>
        {/* Container for Menus & Social */}
        <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
          {/* Menus */}
          <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
            {/* Menu 1 */}
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="" className="hover:text-strongCyan">
                  FAQs
                </a>
              </div>
              <div>
                <a href="" className="hover:text-strongCyan">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Menu 2 */}
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="" className="hover:text-strongCyan">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="" className="hover:text-strongCyan">
                  Press Kit
                </a>
              </div>
            </div>
            {/* Menu 1 */}
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="" className="hover:text-strongCyan">
                  Install Guide
                </a>
              </div>
            </div>
          </div>
          {/* Social */}
          <div className="flex flex-col items-center justify-end space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a href="">
              <svg
                className="transition duration-500 ficon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  fill="#4C545C"
                  fill-rule="nonzero" />
              </svg>
            </a>
            <a href="">
              <svg
                className="transition duration-500 ficon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  fill="#4C545C"
                  fill-rule="nonzero" />
              </svg>
            </a>
            <a href="">
              <svg
                className="transition duration-500 ficon"
                width="24"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                  fill="#4C545C"
                  fill-rule="nonzero" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>;
}

function References() {
  return (
    <section id="refereces">
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <img src={require("./images/logo-google.png")} alt="Google" />
        <img src={require("./images/logo-ibm.png")} alt="Google" />
        <img src={require("./images/logo-microsoft.png")} alt="Google" />
        <img src={require("./images/logo-hp.png")} alt="Google" />
        <img src={require("./images/logo-vector-graphics.png")} alt="Google" />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits">
      <div className="flex flex-col items-start mt-20 space-y-4 max-w-7xl section-container md:space-y-0 md:space-x-16 md:flex-row md:justify-between">
        {/* Item */}
        <div className="flex flex-col">
          <svg
            className="m-auto mb-14"
            width="44"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#9EABB2" fill-rule="nonzero">
              <path d="M11.07 0C8.353 0 6.14 2.192 6.14 4.876l-.179 25.278 2.69.02.179-25.289c0-1.21 1.005-2.196 2.24-2.196h27.027V0H11.071z" />
              <path d="M38.097 0a5.115 5.115 0 00-5.11 5.11v28.37c0 2.052-1.668 3.72-3.72 3.72a3.725 3.725 0 01-3.72-3.72V30.21c0-.743-.601-1.345-1.344-1.345H1.345C.602 28.864 0 29.466 0 30.21v3.272a6.417 6.417 0 006.41 6.409V37.2a3.724 3.724 0 01-3.72-3.72v-1.927h20.168v1.928a6.417 6.417 0 006.41 6.409 6.417 6.417 0 006.409-6.41V12.46h6.185c.743 0 1.345-.602 1.345-1.345V5.11A5.115 5.115 0 0038.097 0zm2.42 9.77h-4.84V5.11a2.423 2.423 0 012.42-2.42 2.423 2.423 0 012.42 2.42v4.66z" />
              <path d="M6.14 37.201h22.813v2.689H6.14zM19.99 7.485h-6.947a1.345 1.345 0 100 2.69h6.947a1.345 1.345 0 100-2.69zM28.057 12.863H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69zM28.057 18.242H13.043a1.345 1.345 0 100 2.69h15.014a1.344 1.344 0 100-2.69zM28.057 23.62H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69z" />
            </g>
          </svg>
          <h5 className="mb-5">Create Blacklists</h5>
          <p className="text-sm text-darkGrayishBlue">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        {/* Item */}
        <div className="flex flex-col">
          <svg
            className="m-auto mb-14"
            width="36"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
              fill="#9EABB2"
              fill-rule="nonzero"
            />
          </svg>
          <h5>Create Blacklists</h5>
          <p className="text-sm text-darkGrayishBlue">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        {/* Item */}
        <div className="flex flex-col">
          <svg
            className="m-auto mb-14"
            width="50"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.059 14.072c-2.585-4.227-6.06-7.623-10.424-10.188C34.27 1.318 29.66.035 24.806.035c-4.854 0-9.464 1.283-13.829 3.849C6.612 6.449 3.137 9.845.554 14.072c-.37.646-.554 1.283-.554 1.91 0 .628.185 1.265.554 1.91 2.583 4.227 6.058 7.624 10.423 10.189 4.365 2.565 8.975 3.847 13.83 3.847 4.853 0 9.463-1.277 13.828-3.833 4.365-2.557 7.84-5.957 10.424-10.202.369-.646.553-1.283.553-1.91 0-.628-.184-1.265-.553-1.911zM18.867 6.5c1.652-1.652 3.631-2.478 5.939-2.478.369 0 .683.13.941.388.258.258.388.572.388.941 0 .37-.13.683-.387.941a1.28 1.28 0 01-.942.388c-1.587 0-2.944.563-4.07 1.689-1.126 1.126-1.688 2.482-1.688 4.07 0 .369-.13.683-.388.941a1.28 1.28 0 01-.941.388c-.37 0-.683-.13-.942-.388a1.282 1.282 0 01-.388-.942c0-2.306.827-4.286 2.478-5.938zm17.969 18.522c-3.701 2.242-7.71 3.364-12.03 3.364-4.319 0-8.329-1.121-12.03-3.364-3.7-2.243-6.777-5.256-9.232-9.04 2.805-4.356 6.321-7.614 10.548-9.773a12.099 12.099 0 00-1.689 6.23c0 3.414 1.214 6.334 3.64 8.762 2.428 2.427 5.349 3.64 8.763 3.64 3.415 0 6.335-1.213 8.762-3.64 2.428-2.427 3.641-5.348 3.641-8.763 0-2.233-.563-4.31-1.689-6.229 4.227 2.16 7.743 5.418 10.548 9.773-2.454 3.784-5.532 6.797-9.232 9.04z"
              fill="#9EABB2"
              fill-rule="nonzero"
            />
          </svg>
          <h5>Create Blacklists</h5>
          <p className="text-sm text-darkGrayishBlue">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow">
      <div className="section-container">
        <h3>Supercharge your workflow</h3>
        <p className="large-paragraph">
          We've got the tools to boost your productivity.
        </p>
      </div>
    </section>
  );
}

function ImageSection() {
  return (
    <section id="image-section">
      <div className="flex items-center justify-center my-20 section-container">
        <img src={require("./images/image-devices.png")} alt="devices" />
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section id="acess-clipboard">
      <div className="section-container">
        <h3>Access Clipboard Anywhere</h3>
        <p className="large-paragraph">
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section id="features">
      <div className="my-20 section-container">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={require("./images/image-computer.png")}
              alt=""
              className="top-0 md:absolute right-[50%]"
            />
          </div>
          {/* Items Container */}
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
            {/* Item 1 */}
            <div>
              <h5>Quick Search</h5>
              <p className="max-w-md text-lg text-grayishBlue">
                Easily search your snippets by content, cathegory, web address,
                application, and more.
              </p>
            </div>
            {/* Item 2 */}
            <div>
              <h5>ICloud Sync</h5>
              <p className="max-w-md text-lg text-grayishBlue">
                Easily search your snippets by content, cathegory, web address,
                application, and more.
              </p>
            </div>
            {/* Item 3 */}
            <div>
              <h5>Completely History</h5>
              <p className="text-lg text-grayishBlue">
                Easily search your snippets by content, cathegory, web address,
                application, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section id="snippets">
      <div className="mb-40 section-container">
        <h3>Keep track of your snippets</h3>
        <p className="large-paragraph">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section id="hero">
      <div className="pt-16 mb-40 section-container">
        <svg
          className="mx-auto my-16"
          width="125"
          height="125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd">
            <circle cx="62.5" cy="62.5" r="57.5" />
            <path
              d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
              stroke-linecap="round"
            />
          </g>
        </svg>

        <h3>A history of everything you copy</h3>
        <p className="large-paragraph">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        {/* Button Container */}
        <div className="button-container">
          <a
            href="$"
            className="px-8 py-4 duration-200 rounded-full shadow-lg bg-strongCyan hover:opacity-80"
          >
            Download for IOS
          </a>
          <a
            href="$"
            className="px-8 py-4 duration-200 rounded-full shadow-lg bg-lightBlue hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
