const button = document.querySelector("#mainBtn");
const content = document.querySelector("#btnContent");

button.addEventListener("mousemove", function stickyDiv(e) {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    content.style.transform = `translate(${x}px, ${y}px)`;
});

button.addEventListener("mouseleave", () => {
    content.style.transform = `translate(0px, 0px)`;
});

{/* <div
    id="main"
    class="w-full h-screen bg-neutral-950 text-neutral-100 font-[Satoshi]"
>
    <div
        id="navbar"
        class="w-full h-28 flex justify-center items-center"
    >
        <div class="bg-neutral-900 p-2 rounded-full flex">
            <div class="py-2 px-4 rounded-full cursor-pointer hover:text-[#4DA3FF] transition-all duration-300 ease-in-out hover:bg-neutral-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-code-asterisk"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
                    <path d="M12 11.875l3 -1.687" />
                    <path d="M12 11.875v3.375" />
                    <path d="M12 11.875l-3 -1.687" />
                    <path d="M12 11.875l3 1.688" />
                    <path d="M12 8.5v3.375" />
                    <path d="M12 11.875l-3 1.688" />
                    <path
                        d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"
                    />
                </svg>
            </div>
            <div class="py-2 px-4 rounded-full cursor-pointer hover:text-[#7C6CFF] transition-all duration-300 ease-in-out hover:bg-neutral-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-variable-plus"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.38 2.76 2 5.52 1.855 8.448m-11.855 -3.448h1c1 0 1 1 2.016 3.527c.785 1.972 .944 3.008 1.483 3.346"
                    />
                    <path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                </svg>
            </div>
            <div class="py-2 px-4 rounded-full cursor-pointer hover:text-[#3ECF8E] transition-all duration-300 ease-in-out hover:bg-neutral-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-apple"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319"
                    />
                    <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3" />
                    <path d="M12 7c0 -1.2 .867 -4 3 -4" />
                </svg>
            </div>
            <div class="py-2 px-4 rounded-full cursor-pointer hover:text-[#F4B400] transition-all duration-300 ease-in-out hover:bg-neutral-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-graph"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2"
                    />
                    <path d="M7 14l3 -3l2 2l3 -3l2 2" />
                </svg>
            </div>
            <div class="py-2 px-4 rounded-full cursor-pointer hover:text-[#D400FF] transition-all duration-300 ease-in-out hover:bg-neutral-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-chart-donut"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a.9 .9 0 0 0 -1 -.8"
                    />
                    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5" />
                </svg>
            </div>
        </div>
    </div>
</div> */}