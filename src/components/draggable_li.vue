<!-- Muse-UI图标选择器 -->
<template>
    <section>

    </section>
</template>
<script>
export default {
  name: 'draggable-li',
    data() {
        return {
          t_mu_ui: ''
        }
    },
  methods:{
    render: function (createElement, t_mu_ui) {
      alert(t_mu_ui)
      return createElement('<'+t_mu_ui+'/>')
    }
  }

}
</script>
