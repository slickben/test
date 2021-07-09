<template>
    <div class="bg-white rounded-xl max-h-50 h-50">
        <h3 class="text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b h-1/4">document status</h3>
        <div class="h-3/4">
            <div class="min-w-full bg-primary-100 full">
                <div class="text-sm text-tertiary-800 grid grid-cols-5">
                    <div class="col-span-3 text-left py-2 px-5 text-xs font-normal"> Document type</div>
                    <div class="col-span-2 text-left py-2 px-5 text-xs font-normal"> Status </div>
                </div>
                <div class="bg-white text-xs text-tertiary-500 font-normal h-24  overflow-y-auto">
                    <div class="border-b grid grid-cols-5">
                        <div class="col-span-3 text-left py-2 px-5">Driver’s Licence</div>
                        <div class="col-span-2 text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="approved" />
                        </div>
                    </div>
                    <div class="border-b grid grid-cols-5">
                        <div class="col-span-3 text-left py-2 px-5">International Passport</div>
                        <div class="col-span-2 text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="pending" />
                        </div>
                    </div>
                    <div class="border-b grid grid-cols-5">
                        <div class="col-span-3 text-left py-2 px-5">Bank Verification Number</div>
                        <div class="col-span-2 text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="denied" />
                        </div>
                    </div>
                    <div class="border-b grid grid-cols-5">
                        <div class="col-span-3 text-left py-2 px-5">Bank Verification Number</div>
                        <div class="col-span-2 text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="denied" />
                        </div>
                    </div>
                    <div class="border-b grid grid-cols-5">
                        <div class="col-span-3 text-left py-2 px-5">Bank Verification Number</div>
                        <div class="col-span-2 text-left py-2 px-5">
                            <Status classes="w-16 text-thin" status="denied" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>