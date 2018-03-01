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
            <ul id="Muse_UI_id" class="components-list" >

              <!-- 导航栏 -->
                <li draggable="true" @dragstart="dragStart" data-name="App Bar">
                    <t-mu-appbar />
                </li>

                <!-- 栅格布局 -->
                <li draggable="true" @dragstart="dragStart" data-name="Grid">
                    <t-mu-shan-ge />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Text Field">
                    <t-mu-textfield />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Flat Button">
                    <t-mu-flat-button />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Raised Button">
                    <t-mu-raised-button />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Icon Button">
                    <t-mu-icon-button />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Icon">
                    <t-mu-icon />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Floating Action Button">
                    <t-mu-float-button />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Avatar">
                    <t-mu-avatar />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Chip">
                    <t-mu-chip />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Card Header">
                    <t-mu-card-header />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Sub Header">
                    <t-mu-sub-header />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="List">
                    <t-mu-list />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="List Item">
                    <t-mu-list-item />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Table">
                    <t-mu-grid />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Date Picker">
                    <t-mu-datepicker />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Time Picker">
                    <t-mu-timepicker/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Badge">
                    <t-mu-badge/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Bottom Nav">
                    <t-mu-bottom-nav/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Tabs">
                    <t-mu-tabs/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Breadcrumb">
                    <t-mu-breadcrumb/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Checkbox">
                    <t-mu-checkbox />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Radio">
                    <t-mu-radio/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Switch">
                    <t-mu-switch/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Select Field">
                    <t-mu-select-field/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Paper">
                    <t-mu-paper/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Pagination">
                    <t-mu-pagination/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Slider">
                    <t-mu-slider/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Divider">
                    <t-mu-divider/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Linear Progress">
                    <t-mu-linear-progress />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Circular Progress">
                    <t-mu-circular-progress />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Card">
                    <t-mu-card />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Back Top">
                    <t-mu-back-top/>
                </li>
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
import Vue from 'vue'
import {museUiList,t_mu_UIs} from './list/muse-ui'


export default {
    name: 'components',
    data() {
        return {
          t_mu_UIs:t_mu_UIs
        }
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
