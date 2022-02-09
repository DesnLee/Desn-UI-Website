<template>
  <article class = "article-container markdown-body">
    <keep-alive>
      <transition mode = "out-in" name = "doc-content">
        <Component :is = "content" :key = "currentName" v-highlight />
      </transition>
    </keep-alive>
  </article>
</template>

<script lang = "ts">
  import { shallowRef, watchEffect, computed, ComputedRef } from 'vue';
  import { useRoute } from 'vue-router';
  import router from '../router';

  export default {
    setup() {
      const route = useRoute();
      const content: any = shallowRef(null);

      const currentName: ComputedRef = computed(() => {
        return route.params.name;
      });

      watchEffect(() => {
        if (route.path.startsWith('/doc/')) {
          import(/* @vite-ignore */'../markdown/' + currentName.value + '.md')
          .then(e => {
            content.value = e.default;
          }).catch(() => {
            router.replace('/404');
          });
        }
      });

      return {
        content,
        currentName
      };
    }
  };

</script>
