<template>
  <form id="contactForm" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label class="form-label" for="contactName">Full Name *</label>
      <input class="form-control" type="text" id="contactName" v-model="name" required placeholder="Jane Doe" />
    </div>
    <div class="form-group">
      <label class="form-label" for="contactEmail">Email Address *</label>
      <input class="form-control" type="email" id="contactEmail" v-model="email" required placeholder="jane@example.com" />
    </div>
    <div class="form-group">
      <label class="form-label" for="contactSubject">Inquiry Topic</label>
      <select class="form-control" id="contactSubject" v-model="subject">
        <option value="General">General Inquiry</option>
        <option value="Sponsorship">Sponsorship &amp; Partnership</option>
        <option value="Recruitment">Student Recruitment</option>
        <option value="Outreach">STEM Outreach / Workshop</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label" for="contactMessage">Message *</label>
      <textarea class="form-control" id="contactMessage" v-model="message" required placeholder="Tell us how we can collaborate..."></textarea>
    </div>
    <button type="submit" class="btn btn-primary" style="width: 100%;">
      Send Message
    </button>
    <div
      v-if="submitted"
      style="margin-top: 16px; display: block; padding: 14px; border-radius: var(--radius-sm); font-size: 0.95rem; background: #EBF5FC; border: 1.5px solid #1D5D9B; color: #012A4A;"
    >
      <strong>Thank you!</strong> Your message has been sent to okmarinerobotics@gmail.com. We will be in touch soon.
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('General');
const message = ref('');
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  name.value = '';
  email.value = '';
  subject.value = 'General';
  message.value = '';
}
</script>
