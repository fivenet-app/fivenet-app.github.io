<template>
    <div class="mx-2 sm:mx-20 md:mx-24">
        <UPricingCard
            title="Starter"
            description="For servers that want to enjoy a hassle-free FiveNet for their community."
            price="6,99€"
            discount=""
            cycle="per month"
            :highlight="true"
            :button="{
                label: 'Contact @Galexrt on Discord',
                to: 'https://galexrt.moe/discord',
            }"
            orientation="vertical"
            align="bottom"
            :features="[
                'Hosted and Maintained by the FiveNet developer',
                'Personalized subdomain: SERVER_NAME.fivenet.app',
                'Kept up-to-date with the latest FiveNet updates',
                'All data, besides avatars, attachments, are stored on your server!',
            ]"
        />
    </div>
</template>
