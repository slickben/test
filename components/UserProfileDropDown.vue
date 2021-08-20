<template>
    <div
        class="
            dropdown
            hidden
            bg-white
            absolute
            shadow
            mt-12
            sm:mt-16
            border-r
            rounded
            px-2
            w-full
            left-0
            z-50
        "
        >
        <div class="flex items-center py-4 border-b">
            <img
            class="rounded-full h-10 w-10 object-cover"
            src="~assets/images/peter_idowu.png"
            alt="avatar"
            />
            <div class="pl-2">
            <h4 class="text-left">Afolabi Davies</h4>
            <p class="text-xs text-left">afo.davies@outlook.com</p>
            </div>
        </div>
        <ul class="border-b">
            <li
            class="
                flex
                w-full
                justify-between
                text-gray-600
                hover:text-indigo-700
                cursor-pointer
                items-center
                py-3
            "
            >
            <div class="flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span class="text-sm ml-2">My Profile</span>
            </div>
            </li>
            <li
            class="
                flex
                w-full
                justify-between
                text-gray-600
                hover:text-indigo-700
                cursor-pointer
                items-center
                py-3
                mt-2
            "
            >
            <div class="flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-logout"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
                <span class="text-sm ml-2">Sign out</span>
            </div>
            </li>
        </ul>
        <div class="">
            <button @click="$auth.logout()"
                class="
                flex
                w-full
                justify-between
                text-gray-600
                hover:text-indigo-700
                cursor-pointer
                items-center
                focus:outline-none
                py-3
                "
            >
                <div class="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span class="text-sm ml-2">Log out</span>
                </div>
            </button>
        </div>
    </div>
</template>