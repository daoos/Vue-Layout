var t_mu_UIs=['t-mu-appbar',
  // 't_mu_shan_ge',
  // 't_mu_textfield',
  // 't_mu_flat_button',
  // 't_mu_icon_button',
  // 't_mu_raised_button',
  // 't_mu_float_button',
  // 't_mu_avatar',
  // 't_mu_icon',
  // 't_mu_list',
  // 't_mu_list_item',
  // 't_mu_grid',
  // 't_mu_datepicker',
  // 't_mu_timepicker',
  // 't_mu_badge',
  // 't_mu_bottom_nav',
  // 't_mu_tabs',
  // 't_mu_breadcrumb',
  // 't_mu_checkbox',
  // 't_mu_radio',
  // 't_mu_switch',
  // 't_mu_select_field',
  // 't_mu_pagination',
  // 't_mu_slider',
  // 't_mu_divider',
  // 't_mu_linear_progress',
  // 't_mu_circular_progress',
  // 't_mu_back_top',
  // 't_mu_chip',
  // 't_mu_paper',
  // 't_mu_card_header',
  // 't_mu_card',
  't-mu-sub-header'
];
// 深度克隆
function copyObj(obj) {
  let res = {}
  for (var key in obj) {
    res[key] = obj[key]
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
  lus.push("./" + t_mu_UIs[i])
  var templateName = t_mu_UIs[i];
  var templateFileName=templateName
  var fun_name=templateName+i
  var fn=resolve => {
    require(["./" + templateFileName], resolve)
  }
  alert(typeof(fn))
  fn.displayName = fun_name;
  museUiList[[templateFileName]]=eval('String(fn)')
}
export default
  museUiList
