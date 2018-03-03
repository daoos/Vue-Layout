<!-- Muse-UI 配置项数值选择器 -->
<template>
  <section>
    <div class="form" style="display:flex;">
      <mu-text-field :hintText="name" :label="name" v-model="fieldValue" @input="change"/>
      <mu-icon-button icon="search" @click="openPopover" ref="button"/>
    </div>
    <mu-popover :trigger="trigger" :open="open" @close="closePopover">
      <mu-menu ref="content" class="list-content" @change="changeMenu">
        <mu-content-block>
          <mu-text-field hintText="搜索" v-model="searchValue" @input="search" fullWidth/>
        </mu-content-block>
        <mu-menu-item v-for="(fieldSelect,index) in fieldSelectList" :key="index" :title="fieldSelect"
                      :value="fieldSelect"/>
      </mu-menu>
    </mu-popover>
    <mu-infinite-scroll v-if="scroller" :scroller="scroller" :loading="loading" @load="loadMoreFieldSelect"/>
  </section>
</template>
<script>
  import fieldSelectList from './iconList'

  export default {
    name: 'fieldPicker',
    data() {
      return {
        searchValue: '',
        fieldValue: this.value,
        open: false,
        trigger: null,
        fieldSelectList: this.selectList.slice(0, 50),
        scroller: null,
        loading: false

      }
    },
    mounted() {
      this.trigger = this.$refs.button.$el
    },
    props: {
      value: {
        default: {}
      },
      name: {
        default: ''
      },
      selectList: {
        default: []
      }
    },
    watch: {
      value: {
        deep: true,
        handler(val, oldVal) {
          this.fieldValue = this.value
        }
      }
    },
    methods: {
      search(value) {
        if (value === '')
          return this.fieldSelectList = this.selectList.slice(0, 50)
        this.fieldSelectList = this.selectList.filter(icon => {
          return icon.indexOf(value) !== -1
        })
      },
      changeMenu(value) {
        this.closePopover()
        this.fieldValue = value
        this.$emit('input', value)
        this.$emit('change', value)
      },
      change(value) {
        this.$emit('input', value)
        this.$emit('change', value)
      },
      loadMoreFieldSelect() {
        if (this.searchValue === '')
          this.fieldSelectList.push.apply(this.fieldSelectList, this.selectList.slice(this.fieldSelectList.length - 1, this.fieldSelectList.length - 1 + 50))
      },
      openPopover() {
        this.open = !this.open
        if (this.open)
          setTimeout(() => {
            this.scroller = this.$refs.content.$el
          }, 0)
      },
      closePopover() {
        this.open = false
        this.fieldSelectList = this.selectList.slice(0, 50)
      }
    }
  }
</script>
<style scoped>
  .list-content {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 300px;
  }
</style>
