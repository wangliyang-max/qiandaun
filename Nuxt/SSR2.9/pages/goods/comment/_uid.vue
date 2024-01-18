<template>
  <div>
    <p>评论{{ commentId }}的详情页</p>
  </div>
</template>
<script>
  export default {
    data() {
        return {
            commentId: this.$route.params.uid,
        }
    },
  };
</script>
