<template>
  <v-timeline align="center">
    <v-timeline-item side="start" dot-color="secondary">
      <div class="text-end">
        <div>Feb 2012</div>
        <div class="text-secondary h5 font-emphasis">Founding of Case Consulting</div>
        <p class="text-tertiary">
          Case Consulting was founded by Paul Farmer to deliver high-quality technology services supporting national
          security missions. The company specialized in software development, engineering, and cloud solutions, designed
          to meet the unique needs of government clients.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item side="end" dot-color="secondary">
      <div>
        <div>Oct 2022</div>
        <div class="text-secondary h5 font-emphasis">Merger with FireTeam Solutions</div>
        <p class="text-tertiary">
          In October 2022, Case Consulting merged with Fire Team Solutions, a secure engineering and cloud-focused
          company founded by Nick Harscher and backed by AE Industrial Partners. This merger combined Case Consulting's
          technical strengths with Fire Team's expertise in the OSINT mission area, creating a more comprehensive
          service provider for defense and intelligence sectors.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item side="start" size="large">
      <template v-slot:opposite>
        <v-img src="/assets/custom/img/case/nav_logo.png" alt="CASE logo" width="150" />
      </template>
      <template v-slot:icon>
        <v-avatar image="/assets/custom/img/case/nav_logo.png"></v-avatar>
      </template>
      <div class="text-end">
        <div>Early 2023</div>
        <div class="text-secondary h5 font-emphasis">Rebranded to CASE</div>
        <p class="text-tertiary">
          Following the merger, the combined entity rebranded to CASE in early 2023, unifying all employees and
          capabilities under one identity.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item side="end" dot-color="secondary">
      <div>
        <div>Apr 2024</div>
        <div class="text-secondary h5 font-emphasis">Merger with CYK</div>
        <p class="text-tertiary">
          Founded by Brandon Lally in 2015, CyberKinetics brought additional expertise in cybersecurity, cloud
          engineering, and data analytics to CASE through a merger in April 2024. This integration aligns with CASE's
          strategy to expand its portfolio, adding unique capabilities that enhance CASE's position in key markets.
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
