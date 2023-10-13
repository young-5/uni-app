"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goOut: () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goOut && $options.goOut(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/projects/own/uni-app/uniApp/pages/user/userCenter/index.vue"]]);
wx.createPage(MiniProgramPage);
