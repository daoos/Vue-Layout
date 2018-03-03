var ace = require('brace');
var languageTools = require('brace/ext/language_tools');
require(['emmet/emmet'], function (data) {
  window.emmet = data.emmet;
});

module.exports = {
  template: "<div :style=\"{height: height ? px(height) : '100%',width: width ? px(width) : '100%'}\"></div>",
  props: {
    value: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'chrome'
    },
    autoComplete:{
      type: Boolean,
      default: true
    } ,
    options: {
      type: Object,
      default: function () { return {} }
    },
    height: true,
    width: true
  },
  data: function () {
    return {
      editor: null,
      contentBackup: ""
    }
  },
  methods: {
    px: function (n) {
      if (/^\d*$/.test(n)) {
        return n + "px";
      }
      return n;
    }
  },
  watch: {
    value: function (val) {
      if (this.contentBackup !== val)
        this.editor.setValue(val, 1)
    }
  },
  mounted: function () {
    var _this = this
    var vm = this
    var lang = this.lang || 'text'
    var theme = this.theme || 'chrome'
    var autoComplete = this.autoComplete || false

    require('brace/ext/emmet')

    var editor = vm.editor = ace.edit(this.$el)
    var options = this.options;
    _this.$emit('init', editor)

    editor.$blockScrolling = Infinity
    editor.setFontSize(25);
    editor.getSession().setMode('ace/mode/' + lang)
    editor.setTheme('ace/theme/' + theme)
    editor.setValue(this.value, 1)
    editor.setOptions(options);
    // editor.setOption('enableEmmet', true)
    if (autoComplete) {
      var staticWordCompleter = {
        getCompletions: function (editor, session, pos, prefix, callback) {
          _this.$emit('setCompletions', editor, session, pos, prefix, callback)
        }
      }
      editor.completers.push(staticWordCompleter)
    }
    editor.setOptions({
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,//只能补全
        })
    editor.on('change', function () {
      var content = editor.getValue()
      vm.$emit('input', content)
      // vm.$emit('change', content)
      vm.contentBackup = content
    })
    editor.on('copy', function (str) {
      vm.$emit('copy', str);
    });
    editor.on('paste', function () {
      vm.$emit('paste');
    })
  }
}
