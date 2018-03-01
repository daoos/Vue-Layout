import Vue from 'vue'
import preview from './preview'
/**
 * 给定模板，和要挂载的元素id，挂载组件
 */
var addDynamicUI = function(id, _component_template) {
    return new Promise((resolve, reject) => {
        //需要延迟才能取到document.getElementById(id)
      document.getElementById(id).a
        setTimeout(() => {
            let vm = new Vue({
                name: id.toString(),
                template: _component_template,
                el: '#'+id

            })
            resolve(vm)

        }, 200)
    })
}

export default addDynamicUI
