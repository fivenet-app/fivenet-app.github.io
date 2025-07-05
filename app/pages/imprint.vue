<script lang="ts" setup>
const title = 'Impressum / Imprint';

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
                title="Impressum / Imprint"
                description="This service/website is operated by ZerBytes UG (haftungsbeschränkt). Information pursuant to Sect. 5 German Telemedia Act (TMG)"
            />

            <UPageBody>
                <div class="prose prose-gray dark:prose-invert max-w-none">
                    <ProseH3>Diensteanbieter im Sinne des § 5 TMG / Imprint Provider in accordance with § 5 TMG</ProseH3>
                    <ProseP>
                        <address>
                            ZerBytes UG (haftungsbeschränkt)<br />
                            Kämpfelbachstr. 3<br />
                            75196 Remchingen<br />
                            Germany
                        </address>
                    </ProseP>

                    <ProseH3>Kontaktinformationen / Contact Information:</ProseH3>
                    <ProseUl>
                        <ProseLi> <ProseStrong>E-Mail:</ProseStrong> info@zerbytes.net </ProseLi>
                        <ProseLi>
                            <ProseStrong>Internet:</ProseStrong>
                            <ProseA href="https://zerbytes.net"> https://zerbytes.net </ProseA>
                        </ProseLi>
                    </ProseUl>

                    <ProseP>
                        <b>Bevollmächtigte Vertreter / Authorized Representative:</b>
                        <ProseUl>
                            <ProseLi>Alexander Trost</ProseLi>
                        </ProseUl>
                    </ProseP>

                    <ProseP>
                        <div>
                            <b>Eingetragener Sitz:</b>
                            Germany
                        </div>

                        <div>
                            <b>Registergericht:</b>
                            Amtsgericht Mannheim
                        </div>

                        <div>
                            <b>Handelsregisternummer:</b>
                            HRB 754117
                        </div>

                        <div>
                            <b>Umsatzsteuer-ID (USt-IdNr.):</b>
                            DE454833204
                        </div>

                        <div>
                            <b>Wirtschafts-ID:</b>
                            UG ist noch in Gründung
                        </div>
                    </ProseP>
                </div>
            </UPageBody>
        </UPage>
    </UContainer>
</template>
