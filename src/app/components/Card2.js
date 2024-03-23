export default function () {
  return (
    <article class="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
      <div class="relative max-h-125 overflow-hidden">
        <img
          class="absolute rounded-full"
          src="https://github.com/the-shade-project.png"
          alt=""
        />
        <img
          class="relative transform duration-500 group-hover:opacity-0"
          src="https://github.com/fornfun.png"
          alt=""
        />
      </div>
      <div class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
        <a target="_blank" href="https://github.com/sh20raj">
          <svg
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgba(0,0,0,0.5)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </div>
      <ul class="mt-6 font-semibold text-gray-500">
       <a target="_blank" href="https://github.com/sh20raj"><li class="inline mr-3 pb-1 border-b-2 border-green-500">GitHub</li></a>
        {/* <li class="inline mr-3 pb-1 border-b-2 border-green-500">Dev.to</li> */}
        <a href="https://dev.to/sh20raj" target="_"><li class="inline mr-3 pb-1 border-b-2 border-green-500">Dev.to</li></a>
        <a href="/sh20raj"><li class="inline mr-3 pb-1 border-b-2 border-green-500">DevArt</li></a>
      </ul>
      <p class="mt-6  text-xl leading-relaxed text-gray-700">
        I'm a passionate developer
      </p>
      <p class="text-gray-400 mt-10 font-semibold">{(new Date()).toDateString()}</p>
    </article>
  );
}
