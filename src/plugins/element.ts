/**
 * 手动引入组件注册（自动导入方式解决不了全局样式覆盖问题）
 * 如果在意unplugin-vue-components插件的自动引入性能问题，可以考虑该方式。
 *
 */
import {
  ElTag,
  ElAffix,
  ElSkeleton,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElSpace,
  ElDivider,
  ElCard,
  ElDropdown,
  ElDialog,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElPagination,
  ElAlert,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElDescriptions,
  ElDescriptionsItem,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  ElTable,
  ElTableColumn,
  ElLink,
  ElColorPicker,
  ElSelect,
  ElOption,
  ElTimeline,
  ElTimelineItem,
  ElResult,
  ElSteps,
  ElStep,
  ElTree,
  ElTreeV2,
  ElPopconfirm,
  ElCheckbox,
  ElCheckboxGroup,
  ElConfigProvider,
  ElSelectV2,
  ElDatePicker,
  ElTimePicker,
  // 指令
  ElLoading,
  ElInfiniteScroll,
} from 'element-plus';

// 指令
const plugins = [ElLoading, ElInfiniteScroll];

// const components = [
//   ElTag,
//   ElAffix,
//   ElSkeleton,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElScrollbar,
//   ElSubMenu,
//   ElButton,
//   ElCol,
//   ElRow,
//   ElSpace,
//   ElDivider,
//   ElCard,
//   ElDropdown,
//   ElDialog,
//   ElMenu,
//   ElMenuItem,
//   ElDropdownItem,
//   ElDropdownMenu,
//   ElIcon,
//   ElInput,
//   ElForm,
//   ElFormItem,
//   ElPopover,
//   ElPopper,
//   ElTooltip,
//   ElDrawer,
//   ElPagination,
//   ElAlert,
//   ElRadio,
//   ElRadioButton,
//   ElRadioGroup,
//   ElDescriptions,
//   ElDescriptionsItem,
//   ElBacktop,
//   ElSwitch,
//   ElBadge,
//   ElTabs,
//   ElTabPane,
//   ElAvatar,
//   ElEmpty,
//   ElCollapse,
//   ElCollapseItem,
//   ElTree,
//   ElTreeV2,
//   ElPopconfirm,
//   ElCheckbox,
//   ElCheckboxGroup,
//   ElTable,
//   ElTableColumn,
//   ElLink,
//   ElColorPicker,
//   ElSelect,
//   ElOption,
//   ElTimeline,
//   ElTimelineItem,
//   ElResult,
//   ElSteps,
//   ElStep,
//   ElConfigProvider,
//   ElSelectV2,
//   ElDatePicker,
//   ElTimePicker,
// ];

import type { App } from 'vue';

export default function setupComponents(app: App<Element>) {
  // 注册组件
  app
    .use(ElTag)
    .use(ElAffix)
    .use(ElSkeleton)
    .use(ElBreadcrumb)
    .use(ElBreadcrumbItem)
    .use(ElScrollbar)
    .use(ElSubMenu)
    .use(ElButton)
    .use(ElCol)
    .use(ElRow)
    .use(ElSpace)
    .use(ElDivider)
    .use(ElCard)
    .use(ElDropdown)
    .use(ElDialog)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElIcon)
    .use(ElInput)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElPopover)
    .use(ElPopper)
    .use(ElTooltip)
    .use(ElDrawer)
    .use(ElPagination)
    .use(ElAlert)
    .use(ElRadio)
    .use(ElRadioButton)
    .use(ElRadioGroup)
    .use(ElDescriptions)
    .use(ElDescriptionsItem)
    .use(ElBacktop)
    .use(ElSwitch)
    .use(ElBadge)
    .use(ElTabs)
    .use(ElTabPane)
    .use(ElAvatar)
    .use(ElEmpty)
    .use(ElCollapse)
    .use(ElCollapseItem)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElLink)
    .use(ElColorPicker)
    .use(ElSelect)
    .use(ElOption)
    .use(ElTimeline)
    .use(ElTimelineItem)
    .use(ElResult)
    .use(ElSteps)
    .use(ElStep)
    .use(ElTree)
    .use(ElTreeV2)
    .use(ElPopconfirm)
    .use(ElCheckbox)
    .use(ElCheckboxGroup)
    .use(ElConfigProvider)
    .use(ElSelectV2)
    .use(ElDatePicker)
    .use(ElTimePicker);

  // components.forEach((component: Component) => {
  //   app.component(component.name, component);
  // });

  // 注册指令
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
