<template>
  <div>
    <div class="outreach-tabs" id="outreachTabs">
      <button
        v-for="(item, idx) in items"
        :key="idx"
        class="outreach-tab-btn"
        :class="{ active: activeIndex === idx }"
        @click="activeIndex = idx"
      >
        {{ item.title }}
      </button>
    </div>

    <div id="outreachActiveContent" style="max-width: 1000px; margin: 0 auto;">
      <h1 class="outreach-display-title">{{ active.title }}</h1>

      <div class="outreach-photos-frame">
        <div class="outreach-photo-box">
          <img :src="active.img1" :alt="active.title" />
        </div>
        <div class="outreach-photo-box">
          <img :src="active.img2" :alt="active.title" />
        </div>
      </div>

      <div class="card" style="margin-top: 24px; padding: 32px; text-align: center;">
        <span class="badge" style="margin-bottom: 12px; align-self: center;">
          {{ active.subtitle }}
        </span>
        <p style="color: var(--text-body); font-size: 1.15rem; line-height: 1.8; max-width: 800px; margin: 0 auto 24px;">
          {{ active.desc }}
        </p>
        <div>
          <a href="/contact-us" class="btn btn-primary">
            Host a STEM Workshop
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface OutreachItem {
  title: string;
  subtitle: string;
  desc: string;
  img1: string;
  img2: string;
}

const props = defineProps<{ items: OutreachItem[] }>();

const activeIndex = ref(0);
const active = computed(() => props.items[activeIndex.value]);
</script>
