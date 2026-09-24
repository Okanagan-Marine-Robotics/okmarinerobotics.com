<template>
  <div>
    <div class="gallery-grid">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="gallery-item"
        role="button"
        tabindex="0"
        aria-label="View photo"
        @click="open(photo.src)"
        @keydown.enter="open(photo.src)"
      >
        <img :src="photo.src" :alt="photo.alt" loading="lazy" />
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div
      class="lightbox-modal"
      :class="{ active: !!lightboxSrc }"
      @click="close"
    >
      <button class="lightbox-close" @click.stop="close" aria-label="Close Lightbox">&times;</button>
      <img
        :src="lightboxSrc || ''"
        alt="Enlarged view"
        class="lightbox-img"
        @click.stop
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Photo {
  src: string;
  alt: string;
}

defineProps<{ photos: Photo[] }>();

const lightboxSrc = ref<string | null>(null);

function open(src: string) {
  lightboxSrc.value = src;
}

function close() {
  lightboxSrc.value = null;
}
</script>
