<!-- Muse-UI图标选择器 -->
<li :id="t_mu_UI" draggable="true" @dragstart="dragStart" :data-name="t_mu_UI">
  <!--<div :id="t_mu_UI"/>-->
  <draggable_li :t_mu_ui="t_mu_UI"/>
</li>
<script>
import Vue from 'vue'
export default {
  name: 'draggable-li',
  template:'<li  draggable="true" @dragstart="dragStart" :data-name="'+this.t_mu_ui+'">'+'<'+this.t_mu_ui+'\/></li>',
  props: {
    t_mu_ui:""
  }

}
</script>
