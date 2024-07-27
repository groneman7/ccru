import type { ThemeConfig } from 'antd/lib/config-provider/context'
import colors from 'tailwindcss/colors'

const colorTextDefault = colors.slate['900']

export const defaultTheme: ThemeConfig = {
    token: {
        colorError: colors.red[600],
        colorInfo: colors.blue[600],
        colorPrimary: colors.blue[600],
        colorSplit: colors.slate[300],
        colorSuccess: colors.green[600],
        colorText: colorTextDefault,
        colorTextDisabled: colors.slate[400],
        colorWarning: colors.yellow[500],
        fontFamily: 'Lato',
        fontSize: 14,
        lineWidthFocus: 0,
        motionDurationFast: '75ms',
        motionDurationMid: '150ms',
        motionDurationSlow: '300ms',
        motionEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    components: {
        Button: {
            borderColorDisabled: colors.slate[200],
            colorBgContainerDisabled: colors.gray[100],
            colorBorder: colors.slate[100],
            defaultBorderColor: colors.slate[200],
            defaultColor: colorTextDefault,
            textHoverBg: colors.slate[100],
      },
      Breadcrumb: {
        colorBgTextHover: colors.slate[100],
        itemColor: colors.gray[400],
        lastItemColor: colorTextDefault,
        linkColor: colors.gray[400],
        linkHoverColor: colorTextDefault,
        separatorColor: colors.gray[300],
      },
      Divider: {
        margin: 0,
      },
      Menu: {
        colorSplit: 'transparent',
        colorText: colorTextDefault,
        dangerItemActiveBg: colors.red[50],
        dangerItemColor: colors.red[600],
        dangerItemHoverColor: colors.red[600],
        dangerItemSelectedBg: colors.red[50],
        dangerItemSelectedColor: colors.red[600],
        groupTitleColor: colorTextDefault,
        itemColor: colorTextDefault,
        itemDisabledColor: colors.slate[400],
        itemHoverBg: colors.slate[100],
        itemHoverColor: colorTextDefault,
        itemSelectedBg: colors.blue[100],
        itemSelectedColor: colors.blue[600],
        subMenuItemBg: colors.slate[50],
      },
      Input: {
        lineWidthFocus: 4,
      },
      Form: {
        itemMarginBottom: 0
      },
      Timeline: {
        itemPaddingBottom: 8,
      },
  },
};