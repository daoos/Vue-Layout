<!--右侧组件列表-->
<template>
    <section>
        <mu-content-block style="display:flex;">
            <mu-select-field :value="activeUI" @change="handleTabChange" autoWidth>
                <mu-menu-item title="Muse-UI" value="Muse-UI">
                </mu-menu-item>
                <mu-menu-item title="通用" value="Common">
                </mu-menu-item>
            </mu-select-field>
            <mu-sub-header style="white-space:nowrap;">- 组件</mu-sub-header>
        </mu-content-block>
        <div v-if="activeUI === 'Muse-UI'">
            <ul class="components-list">
                <!-- 导航栏 -->
                <li draggable="true" @dragstart="dragStart" data-name="App Bar">
                    <t-mu-appbar />
                </li>
                <!--&lt;!&ndash; 栅格布局 &ndash;&gt;-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Grid">-->
                    <!--<t_mu_shan_ge />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Text Field">-->
                    <!--<t_mu_textfield />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Flat Button">-->
                    <!--<t_mu_flat_button />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Raised Button">-->
                    <!--<t_mu_raised_button />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Icon Button">-->
                    <!--<t_mu_icon_button />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Icon">-->
                    <!--<t_mu_icon />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Floating Action Button">-->
                    <!--<t_mu_float_button />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Avatar">-->
                    <!--<t_mu_avatar />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Chip">-->
                    <!--<t_mu_chip />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Card Header">-->
                    <!--<t_mu_card_header />-->
                <!--</li>-->
                <li draggable="true" @dragstart="dragStart" data-name="Sub Header">
                    <t-mu-sub-header />
                </li>
                <!--<li draggable="true" @dragstart="dragStart" data-name="List">-->
                    <!--<t_mu_list />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="List Item">-->
                    <!--<t_mu_list_item />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Table">-->
                    <!--<t_mu_grid />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Date Picker">-->
                    <!--<t_mu_datepicker />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Time Picker">-->
                    <!--<t_mu_timepicker/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Badge">-->
                    <!--<t_mu_badge/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Bottom Nav">-->
                    <!--<t_mu_bottom_nav/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Tabs">-->
                    <!--<t_mu_tabs/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Breadcrumb">-->
                    <!--<t_mu_breadcrumb/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Checkbox">-->
                    <!--<t_mu_checkbox />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Radio">-->
                    <!--<t_mu_radio/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Switch">-->
                    <!--<t_mu_switch/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Select Field">-->
                    <!--<t_mu_select_field/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Paper">-->
                    <!--<t_mu_paper/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Pagination">-->
                    <!--<t_mu_pagination/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Slider">-->
                    <!--<t_mu_slider/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Divider">-->
                    <!--<t_mu_divider/>-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Linear Progress">-->
                    <!--<t_mu_linear_progress />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Circular Progress">-->
                    <!--<t_mu_circular_progress />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Card">-->
                    <!--<t_mu_card />-->
                <!--</li>-->
                <!--<li draggable="true" @dragstart="dragStart" data-name="Back Top">-->
                    <!--<t_mu_back_top/>-->
                <!--</li>-->
            </ul>
        </div>

        <div v-if="activeUI==='Common'">
            <ul class="components-list">
                <li draggable="true" @dragstart="dragStart" data-name="Text">
                    <mu-icon value="text_fields" style="vertical-align:middle;" /> 文本
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="A">
                    <mu-icon value="link" style="vertical-align:middle;" /> 链接
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Img">
                    <mu-icon value="image" /> 图片
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Br">
                    <mu-icon value="keyboard_return" /> 换行
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Div">
                    <mu-icon value="check_box_outline_blank" /> div
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
  /**
   * 获取对应的MuseUI组件集合
   */
import museUiList from './list/muse-ui'

export default {
    name: 'components',
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        handleTabChange(val) {
            this.activeUI = val
        },
        getComponent(e) {
            if (!e)
                return
            if (e.localName !== 'li')
                return this.getComponent(e.parentElement)
            else
                return e
        },
        removeDom(e) {
            if (e && e.parentElement)
                e.parentElement.removeChild(e)
        },
        dragStart(e) {
            let componentName = e.target.getAttribute('data-name')
            let info = {
                name: componentName,
                ui: this.activeUI
            }
            e.dataTransfer.setData('info', JSON.stringify(info))
        }
    },
    computed: {
        activeUI: {
            get() {
                return this.$store.state.activeUI
            },
            set(val) {
                this.$store.commit('setState', {
                    activeUI: val
                })
            }
        }
    },
    components: {
        ...museUiList
    }
}
</script>
<style lang="less" scoped>
.components-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.components-list * {
    cursor: move!important;
}

.components-list>li {
    min-height: 36px;
    font-size: 18px;
    -webkit-user-select: none;
    transform: scale(0.7)translateX(-15%);
    padding-bottom: 10px;
    transition: transform .2s;
    &:hover {
        transform: scale(1)translateX(5%);
    }
    i {
        vertical-align: middle;
    }
}


</style>
