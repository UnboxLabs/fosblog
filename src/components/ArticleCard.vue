<template>
  <a
    :href="url"
    class="flex flex-col bg-white rounded-md border border-gray-900 border-opacity-10 mb-2"
  >
    <img
      :src="frontmatter.thumbnail"
      class="flex w-full h-60 rounded-t-md object-cover"
      v-if="showThumbnail"
    />

    <div class="w-full bg-white rounded-b-md rounded-t-md">
      <div class="p-4 pb-0">
        <div class="flex mb-5">
          <img
            :src="`https://github.com/${frontmatter.github}.png?size=400`"
            class="w-9 h-9 rounded-full"
          />

          <div class="flex flex-col ml-3">
            <a
              :href="`https://github.com/${frontmatter.github}`"
              target="_blank"
              class="text-sm text-gray-900 font-roboto font-medium"
              >{{ frontmatter.author }}</a
            >
            <span class="text-xs text-gray-400 font-roboto"
              >Posted on {{ frontmatter.date }}</span
            >
          </div>
        </div>

        <h1 class="text-xl text-gray-900 font-roboto font-bold">
          {{ frontmatter.title }}
        </h1>
      </div>

      <div class="flex mt-2 pl-2">
        <a
          v-for="tag in tags"
          class="text-sm text-gray-700 font-roboto font-medium py-1 px-2 border rounded-md border-transparent hover:border-blue-600 hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >#{{ tag }}</a
        >
      </div>

      <div class="flex justify-end pb-4 pr-4">
        <span class="text-xs text-gray-600 font-roboto">{{
          frontmatter.minutesRead
        }}</span>
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { Frontmatter, ArticleMdx } from "./mdx.types";

const props = defineProps<{
  url?: string;
  frontmatter: Frontmatter;
  showThumbnail: boolean;
}>();

const tags = computed(() => props.frontmatter.tags.split(","));
</script>
