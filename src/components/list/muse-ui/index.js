var t_mu_UIs=['t-mu-appbar',
  't-mu-shan-ge',
  't-mu-textfield',
  't-mu-flat-button',
  't-mu-icon-button',
  't-mu-raised-button',
  't-mu-float-button',
  't-mu-avatar',
  't-mu-icon',
  't-mu-list',
  't-mu-list-item',
  't-mu-grid',
  't-mu-datepicker',
  't-mu-timepicker',
  't-mu-badge',
  't-mu-bottom-nav',
  't-mu-tabs',
  't-mu-breadcrumb',
  't-mu-checkbox',
  't-mu-radio',
  't-mu-switch',
  't-mu-select-field',
  't-mu-pagination',
  't-mu-slider',
  't-mu-divider',
  't-mu-linear-progress',
  't-mu-circular-progress',
  't-mu-back-top',
  't-mu-chip',
  't-mu-paper',
  't-mu-card-header',
  't-mu-card',
  't-mu-sub-header'
];
// 深度克隆
function getUIFun(templateFileName) {
  let res=resolve => {
    require(["./" + templateFileName], resolve)
  }
  return res
}


var museUiList = {

}
/**
 * 循环加载对应的组件
 */
var lus=[]
for (var i = 0; i < t_mu_UIs.length; i++) {
  var templateName = t_mu_UIs[i];
  let fnn=getUIFun(templateName)
   museUiList[[templateName]]=fnn
}
export default museUiList
