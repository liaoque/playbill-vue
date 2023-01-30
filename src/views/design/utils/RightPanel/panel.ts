import {defineAsyncComponent} from "vue";

const CanvasSetting = defineAsyncComponent({
  loader: () => import( './CanvasSetting.vue'),
  delay: 200,
})

const EffectFontSettingVue = defineAsyncComponent({
  loader: () => import( './EffectFontSetting.vue'),
  delay: 200,
})

const TemplateSettingVue = defineAsyncComponent({
  loader: () => import( './TemplateSetting.vue'),
  delay: 200,
})

const ElemSettingVue = defineAsyncComponent({
  loader: () => import( './ElemSetting.vue'),
  delay: 200,
})

const ThreeFontSettingVue = defineAsyncComponent({
  loader: () => import( './ThreeFontSetting.vue'),
  delay: 200,
})

const PicSettingVue = defineAsyncComponent({
  loader: () => import( './PicSetting.vue'),
  delay: 200,
})

// const BackgroundSettingVue = defineAsyncComponent({
//   loader: () => import( './BackgroundSetting.vue'),
//   delay: 200,
// })

const RectSettingVue = defineAsyncComponent({
  loader: () => import( './RectSetting.vue'),
  delay: 200,
})

export {
  CanvasSetting,
  ElemSettingVue,
  TemplateSettingVue,
  // BackgroundSettingVue,
  ThreeFontSettingVue,
  RectSettingVue,
  PicSettingVue,
  EffectFontSettingVue
}
