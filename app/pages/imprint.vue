<script lang="ts" setup>
const title = 'Imprint';

definePageMeta({
    layout: 'landing',
});

useSeoMeta({
    title,
});
</script>

<template>
    <UContainer>
        <UPage>
            <UPageHeader
                title="Imprint of ZerBytes UG (haftungsbeschränkt)"
                description="This service/website is operator by ZerBytes UG (haftungsbeschränkt). Information pursuant to Sect. 5 German Telemedia Act (TMG)"
            />

            <UPageBody>
                <div class="prose prose-gray dark:prose-invert max-w-none">
                    <ProseH3>ZerBytes UG (haftungsbeschränkt)</ProseH3>
                    <ProseP>
                        Kämpfelbachstr. 3<br />
                        75196 Remchingen<br />
                        Germany
                    </ProseP>

                    <ProseH2>Contact / Kontakt</ProseH2>
                    <ProseUl>
                        <ProseLi> <ProseStrong>E-Mail:</ProseStrong> info@zerbytes.net </ProseLi>
                        <ProseLi>
                            <ProseStrong>Internet:</ProseStrong>
                            <ProseA href="https://zerbytes.net"> https://zerbytes.net </ProseA>
                        </ProseLi>
                    </ProseUl>

                    <ProseH3>Vertretungsberechtigter Geschäftsführer</ProseH3>
                    <ProseP>Alexander Trost</ProseP>

                    <ProseH3>Registernummer</ProseH3>
                    <ProseP>UG ist noch in Gründung</ProseP>

                    <ProseH3>Registergericht</ProseH3>
                    <ProseP>UG ist noch in Gründung</ProseP>

                    <ProseH3>Umsatzsteueridentifikationsnummer gemäß § 27a Umsatzsteuergesetz</ProseH3>
                    <ProseP>UG ist noch in Gründung</ProseP>

                    <ProseH3>Wirtschafts-ID</ProseH3>
                    <ProseP>UG ist noch in Gründung</ProseP>
                </div>
            </UPageBody>
        </UPage>
    </UContainer>
</template>
