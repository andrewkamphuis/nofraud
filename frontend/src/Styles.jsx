import { c7Colors } from "@commerce7/admin-ui";

const alternatePageHeader = {
  light: {
    backgroundColor: c7Colors.gray200,
  },
  dark: {
    backgroundColor: c7Colors.slate200,
  },
};

const pageHeader = {
  light: {
    backgroundColor: c7Colors.slate300,
  },
  dark: {
    backgroundColor: c7Colors.slate100,
  },
};

const apiLoading = {
  light: {
    backgroundColor: {
      default: c7Colors.gray300,
      active: c7Colors.blue400,
    },
  },
  dark: {
    backgroundColor: {
      default: c7Colors.gray700,
      active: c7Colors.blue400,
    },
  },
};

const grid = {
  light: {
    loadingBackgroundColor: c7Colors.gray200,
    checkedBackgroundColor: c7Colors.blue100,
  },
  dark: {
    loadingBackgroundColor: c7Colors.gray800,
    checkedBackgroundColor: c7Colors.slate100,
  },
};

const tr = {
  light: {
    backgroundColor: {
      hover: c7Colors.blue100,
    },
  },
  dark: {
    backgroundColor: {
      hover: c7Colors.slate100,
    },
  },
};

const seoView = {
  light: {
    titleColor: "#1e0fbe",
    urlColor: c7Colors.gray700,
    slugColor: c7Colors.slate300,
    descriptionColor: c7Colors.slate300,
  },
  dark: {
    titleColor: c7Colors.blue300,
    urlColor: c7Colors.gray500,
    slugColor: c7Colors.gray200,
    descriptionColor: c7Colors.gray200,
  },
};

const clubStatusButton = {
  light: {
    Planning: {
      backgroundColor: c7Colors.yellow300,
      borderColor: c7Colors.yellow300,
      hover: "filter: brightness(85%);",
      focusShadow: "rgba(206, 186, 114, 0.2)",
    },
    Active: {
      backgroundColor: c7Colors.black,
      borderColor: c7Colors.gray600,
      hover: "background-color: #111 !important;",
      focusShadow: "rgba(62, 71, 76, 0.2)",
    },
    Archive: {
      backgroundColor: c7Colors.gray400,
      borderColor: c7Colors.gray100,
      hover: "filter: brightness(90%);",
      focusShadow: "rgba(209, 209, 209, 0.2)",
    },
  },
  dark: {
    Planning: {
      backgroundColor: c7Colors.yellow300,
      borderColor: c7Colors.yellow300,
      hover: "filter: brightness(85%);",
      focusShadow: "rgba(206, 186, 114, 0.2)",
    },
    Active: {
      backgroundColor: c7Colors.black,
      borderColor: c7Colors.gray600,
      hover: "background-color: #111 !important;",
      focusShadow: "rgba(62, 71, 76, 0.2)",
    },
    Archive: {
      backgroundColor: c7Colors.slate100,
      borderColor: c7Colors.gray600,
      hover: "filter: brightness(85%);",
      focusShadow: "rgba(62, 71, 76, 0.2)",
    },
  },
};

const onboarding = {
  light: {
    bannerHighlight: c7Colors.green200,
    bannerIcon: c7Colors.gray500,
    progressCircleStroke: c7Colors.green200,
    progressCircleBackground: c7Colors.gray200,
    taskTextFontColor: c7Colors.gray600,
    taskTitleFontColor: c7Colors.slate300,
    taskHoverBackgroundColor: c7Colors.gray100,
    taskExternalLinkIconColor: c7Colors.slate300,
    taskSkipColor: c7Colors.gray700,
    cardSubHeadingColor: c7Colors.gray600,
    cardInactiveTextFontColor: c7Colors.slate300,
    cardIconBackgroundColor: c7Colors.gray100,
    cardIconFillColor: "rgba(0, 0, 0, 0.65)",
    sidebarLinkIconColor: c7Colors.gray600,
    linkColor: c7Colors.blue500,
  },
  dark: {
    bannerHighlight: c7Colors.green200,
    bannerIcon: "rgba(255, 255, 255, 0.65)",
    progressCircleStroke: c7Colors.green200,
    progressCircleBackground: c7Colors.gray500,
    taskTextFontColor: c7Colors.white,
    taskTitleFontColor: c7Colors.gray200,
    taskHoverBackgroundColor: c7Colors.slate200,
    taskExternalLinkIconColor: c7Colors.gray100,
    taskSkipColor: c7Colors.gray200,
    cardSubHeadingColor: c7Colors.gray500,
    cardInactiveTextFontColor: c7Colors.gray500,
    cardIconBackgroundColor: c7Colors.slate100,
    cardIconFillColor: "rgba(255, 255, 255, 0.65)",
    sidebarLinkIconColor: "rgba(255, 255, 255, 0.65)",
    linkColor: c7Colors.blue400,
  },
};

const pos = {
  light: {
    productBackgroundColor: c7Colors.white,
    productBorderColor: c7Colors.gray400,
    productBoxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    posBackgroundColor: c7Colors.gray100,
    posSidebarBackgroundColor: c7Colors.white,
    chargeBackgroundColor: c7Colors.white,
    chargeSidebarBackgroundColor: c7Colors.white,
    cartButtonBackgroundColor: c7Colors.slate100,
  },
  dark: {
    productBackgroundColor: c7Colors.slate200,
    productBorderColor: c7Colors.gray800,
    productBoxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
    posBackgroundColor: c7Colors.slate400,
    posSidebarBackgroundColor: c7Colors.slate200,
    chargeBackgroundColor: c7Colors.slate200,
    chargeSidebarBackgroundColor: c7Colors.slate400,
    cartButtonBackgroundColor: c7Colors.slate300,
  },
};

const components = {
  light: {
    alternatePageHeader: alternatePageHeader.light,
    pageHeader: pageHeader.light,
    apiLoading: apiLoading.light,
    grid: grid.light,
    tr: tr.light,
    seoView: seoView.light,
    clubStatusButton: clubStatusButton.light,
    onboarding: onboarding.light,
    pos: pos.light,
  },
  dark: {
    alternatePageHeader: alternatePageHeader.dark,
    pageHeader: pageHeader.dark,
    apiLoading: apiLoading.dark,
    grid: grid.dark,
    tr: tr.dark,
    seoView: seoView.dark,
    clubStatusButton: clubStatusButton.dark,
    onboarding: onboarding.dark,
    pos: pos.dark,
  },
};

export { components };
