const app = document.querySelector("#main");

const page = document.querySelector("#renderPage");
const navLinks = document.querySelectorAll(".nav");

const views = {
  Home: `
    <div class="w-full h-full flex items-center justify-center">
            <div class="w-full h-120 flex gap-3 justify-center items-center">
              <div class="h-full flex flex-col w-fit rounded-4xl ml-6">
                <h3 class="font-extralight ml-2 mb-1 text-left mt-32 font-[Antonio] text-3xl uppercase">anurag mishra</h3>
                <h1 class="font-medium font-[Antonio] text-8xl">SOFTWARE</h1>
              </div>
              <div class="h-full w-80 bg-neutral-800 rounded-3xl overflow-hidden">
                <img src="PortfolioImageMain.png" alt="" class="object-cover">
              </div>
              <div class="h-full w-fit rounded-4xl">
                <h1 class="font-medium font-[Antonio] text-8xl uppercase mt-42">developer</h1>
                <h3 class="font-light text-lg text-right tracking-tight leading-tight mt-4 mr-1">I'm an India-based software developer and <br>UX designer</h3>
              </div>
            </div>
          </div>
  `,
  About: `
    <div class="w-full h-full flex items-center justify-center">
          <div class="w-fit h-120 flex">
            <div class="w-3xl h-full">
              <h1 class="text-4xl font-light mb-6">About Me</h1>
              <h3 class="text-lg text-neutral-300 font-light max-w-150 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur dolore vitae culpa vel, eligendi illo perspiciatis minima nisi, deserunt harum, cupiditate iusto architecto quis!</h3>
              <div class="w-fit gap-6 h-20 flex mb-6">
                <div class="w-fit pr-4  h-full flex flex-col justify-center bg-neutral-950">
                  <h1 class="text-2xl text-[#d6ffb7]">3+</h1>
                  <h3 class="text-lg text-neutral-300">Years of Experience</h3>
                </div>
                <div class="w-fit pr-4 h-full flex flex-col justify-center bg-neutral-950">
                  <h1 class="text-2xl text-[#d6ffb7]">10+</h1>
                  <h3 class="text-lg text-neutral-300">Projects Completed</h3>
                </div>
                <div class="w-fit h-full flex flex-col justify-center bg-neutral-950">
                  <h1 class="text-2xl text-[#d6ffb7]">600+</h1>
                  <h3 class="text-lg text-neutral-300">Questions Practiced</h3>
                </div>
              </div>
              <div class="w-fit flex gap-6 h-20 mb-6">
                <div class="w-fit pr-4 h-full bg-neutral-950">
                  <h1 class="text-neutral-300 text-lg">Call Now :</h1>
                  <button class="text-2xl cursor-pointer text-neutral-100 hover:text-[#d6ffb7] hover:underline hover:underline-offset-2">+919152070269</button>
                </div>
                <div class="w-fit h-full bg-neutral-950">
                  <h1 class="text-lg text-neutral-300">Email :</h1>
                  <button class="text-2xl cursor-pointer text-neutral-100 hover:text-[#d6ffb7] hover:underline hover:underline-offset-2">anuragjainathmishra@gmail.com</button>
                </div>
              </div>
              <div class="w-2xl h-12 flex gap-8 items-center">
                <a href="#" class="text-neutral-100 hover:text-[#d6ffb7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                </a>
                <a href="#" class="text-neutral-100 hover:text-[#d6ffb7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                </a>
                <a href="#" class="text-neutral-100 hover:text-[#d6ffb7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
              </div>
            </div>
            <div class="w-80 rounded-3xl overflow-hidden border-2 border-neutral-800 h-full">
              <img src="PortfolioImageMain.png" alt="">
            </div>
          </div>
        </div>
  `,
  Contact: `
        <div class="w-full h-full flex justify-center items-center">
          <div class="w-full h-140 px-40 flex gap-4">
            <div class="h-full flex flex-col justify-end w-1/2 border-2 p-6 border-neutral-800 rounded-3xl">
              <h2 class="text-4xl font-medium tracking-tighter ">Get in Touch</h2>
              <p class="text-lg tracking-tighter mt-3 mb-16 text-neutral-300 leading-tight pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi iure dolor molestiae? Accusantium perspiciatis porro dicta rerum illo pariatur veniam numquam est eos provident?</p>
              <div class="w-full items-center mb-4 bg-neutral-900 rounded-2xl justify-between p-4 flex">
                <div class="h-full flex justify-center items-center mr-2 bg-neutral-800 p-4 rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg></div>
                <div class="flex flex-col mr-36">
                  <span class="text-xl font-medium tracking-tighter">Email me :</span>
                  <span class="text-lg tracking-tighter text-neutral-300">anuragjainathmishra@gmail.com</span>
                </div>
                <div class="bg-neutral-800 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></div>
              </div>
              <div class="w-full items-center mb-4 bg-neutral-900 rounded-2xl justify-between p-4 flex">
                <div class="h-full flex justify-center items-center mr-2 bg-neutral-800 p-4 rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg></div>
                <div class="flex flex-col mr-63">
                  <span class="text-xl font-medium tracking-tighter">Call me :</span>
                  <span class="text-lg tracking-tighter text-neutral-300">+91 9152070269</span>
                </div>
                <div class="bg-neutral-800 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></div>
              </div>
              <div class="w-full items-center bg-neutral-900 rounded-2xl justify-between p-4 flex">
                <div class="h-full flex justify-center items-center mr-2 bg-neutral-800 p-4 rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg></div>
                <div class="flex flex-col mr-44">
                  <span class="text-xl font-medium tracking-tighter">Meet me :</span>
                  <span class="text-lg tracking-tighter text-neutral-300">Mumbai, Maharashtra, India</span>
                </div>
                <div class="bg-neutral-800 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></div>
              </div>
            </div>
            <div class="h-full p-6 w-1/2 flex flex-col border-2 border-neutral-800 rounded-3xl">
              <input type="text" id="name" class="h-fit mb-4 w-full bg-neutral-900 p-4 text-neutral-100 rounded-xl" placeholder="Name">
              <input type="email" id="email" class="h-fit w-full bg-neutral-900 p-4 text-neutral-100 rounded-xl mb-4" placeholder="Email">
              <textarea id="message" class="h-full w-full bg-neutral-900 p-4 text-neutral-100 rounded-xl" placeholder="Message"></textarea>
              <input type="submit" value="Send Message" class="w-full mt-4 cursor-pointer text-neutral-950 bg-[#d6ffb7] p-4 rounded-xl text-lg font-medium tracking-tighter hover:bg-[#c0f09c]">
            </div>
          </div>
        </div>
  `,
  Blogs: `
  <div class="w-full h-full flex px-16 mt-24 flex-col">
          <h1 class="text-5xl tracking-tight text-neutral-100">My Blogs</h1>
          <div class="grid grid-cols-2 grid-rows-6 gap-6 mt-12">
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
            <div class="w-full h-80 flex gap-2 rounded-4xl p-2 bg-neutral-900">
              <div class="w-1/2 bg-neutral-800 h-full rounded-3xl object-cover overflow-hidden">
                <img src="https://i.pinimg.com/736x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg" alt="">
              </div>
              <div class="w-1/2 h-full p-4 mr-3 rounded-3xl flex flex-col">
                <span class="text-xl mt-2 text-neutral-400 mb-2 tracking-tight">Blog #1</span>
                <h1 class="text-2xl text-left leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa impedit dolore repellat neque hic rerum cum! Numquam.</h1>
                <button class="px-6 py-3 text-xl rounded-2xl flex w-fit h-fit text-neutral-950  mt-5 cursor-pointer tracking-tighter font-medium gap-3 bg-[#d6ffb7]">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  `
};

function renderUI(viewName) {
  page.innerHTML = views[viewName];
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const viewName = link.dataset.view;
    renderUI(viewName);
  });
});
renderUI("Home");