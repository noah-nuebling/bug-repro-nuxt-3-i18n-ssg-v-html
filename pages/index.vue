<!-- 

  Notes:
  - On the wrapper for the "see it in action" button we had to set `min-h-[52px]` instead of h-[52px], for it to actually work. No idea why.


 -->

<template>
  <div ref="rootElement" class="strong:box-decoration-clone"> <!-- Shouldn't this global styling be in tailwind.css? -->


    <p>Using v-html="$t(...)":</p>
    <div v-html="$t('test-stuff')"></div>

    <hr>

    <p>Using &#123;&#123;$t(...)&#125;&#125;:</p>
    <div>{{ $t('test-stuff') }}</div>

    <hr>

    <button @click="makeEnglish()">Make English</button>
    <button @click="makeGerman()">Make German</button>

  </div>
</template>

<script setup lang="ts">

const i18n = useI18n()


function makeEnglish() {
  i18n.setLocale("en-US")
}

function makeGerman() {
  i18n.setLocale("de-DE")
}

</script>

<style lang="postcss" scoped>

</style>