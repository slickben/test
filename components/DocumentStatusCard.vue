<template>
    <div class="bg-white rounded-xl">
        <h3 class="text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b">document status</h3>
        <div class="">
            <table class="min-w-full bg-primary-100">
                <thead class="text-sm text-tertiary-800">
                    <tr>
                        <th class="text-left py-2 px-5 text-xs font-normal"> Document type</th>
                        <th class="text-left py-2 px-5 text-xs font-normal"> Status </th>
                    </tr>
                </thead>
                <tbody class="bg-white text-xs text-tertiary-500 font-normal">
                    <tr class="border-b">
                        <td class="text-left py-2 px-5">Driver’s Licence</td>
                        <td class="text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="approved" />
                        </td>
                    </tr>
                    <tr class="border-b">
                        <td class="text-left py-2 px-5">International Passport</td>
                        <td class="text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="pending" />
                        </td>
                    </tr>
                    <tr >
                        <td class="text-left py-2 px-5">Bank Verification Number</td>
                        <td class="text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="denied" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>