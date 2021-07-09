<template>
    <div class="flex items-center justify-between">
        <div>
            <input class="h-10 w-96 focus:outline-none rounded-md border text-sm px-4" type="search" placeholder="search...." name="" id="">
        </div>
        <div class="flex items-center">
            <span class="text-xs text-tertiary-500 mr-4">Show entries</span>
            <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                <option selected value="10">10</option>
                <option value="10">20</option>
                <option value="10">30</option>
            </select>
        </div>
    </div>
</template>