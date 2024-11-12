export default {
  id: 30,
  title: "Lorem Ipsum",
  tags: `
<div class="flex flex-wrap gap-2">  
  <button type="button" class="blue-button rounded-button px-2 py-1 rounded-md text-sm">Social Learning</button>
  <button type="button" class="green-button rounded-button px-2 py-1 rounded-md text-sm">Collaboration</button>
  <button type="button" class="yellow-button rounded-button px-2 py-1 ounded-md text-sm">Sustainability</button>
  <button type="button" class="red-button rounded-button px-2 py-1 ounded-md text-sm">Ed-Tech</button>
</div>
  `,
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "../../../public/assets/article-assets/frame-0.jpg",
  username: "Shie Mizukami",
  avatar: "../../../public/assets/ShieMizukami.jpeg",
  date: "September 06, 2024",
  duration: "6-7 min read",

  // Detailed content section with multiple paragraphs and images
  content: `
<div class="flex flex-col gap-10 w-full">

  <img
    src="../../../public/assets/article-assets/frame-0.jpg"
    alt="ticet blog"
  />

  <p class="p-small text-medium md:text-base">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  <div class="w-full">
    <p class="mb-2">Lorem Ipsum</p>
    <p class="p-small text-medium md:text-base mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="p-small text-medium md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  
  <div>
    <img
      src="../../../public/assets/ticet.png"
      alt="ticet blog"
      class="float-right w-full sm:w-1/2 sm:ml-6 mb-6"
    />
    <p class="mb-2">Lorem Ipsum</p>
    <p class="p-small text-medium md:text-base mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="p-small text-medium md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <p class="mb-2 mt-10">Lorem Ipsum</p>
    <p class="p-small text-medium md:text-base mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="p-small text-medium md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <p class="mb-2 mt-10">Lorem Ipsum</p>
    <p class="p-small text-medium md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div class="w-full">
    <p class="mb-2">Lorem Ipsum</p>
    <p class="p-small text-medium md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <img
      src="../../../public/assets/article-assets/frame-0.jpg"
      alt="ticet blog"
      class="float-right w-full sm:w-1/2 sm:ml-6 sm:mt-6"
    />
    <p class="mb-2 sm:mt-6">Lorem Ipsum</p>
    <p class="p-small text-medium md:text-base mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="p-small text-medium md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

</div>
 
  `,
};
