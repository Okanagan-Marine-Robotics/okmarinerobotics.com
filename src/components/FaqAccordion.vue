<template>
  <div class="faq-list">
    <div
      v-for="(faq, i) in faqs"
      :key="i"
      class="faq-item"
      :class="{ open: openIndex === i }"
    >
      <button class="faq-question" type="button" @click="toggle(i)">
        <span>{{ faq.q }}</span>
        <span class="faq-icon">{{ openIndex === i ? '×' : '+' }}</span>
      </button>
      <div class="faq-answer">
        <p>{{ faq.a }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Faq {
  q: string;
  a: string;
}

defineProps<{ faqs: Faq[] }>();

const openIndex = ref<number | null>(null);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>
