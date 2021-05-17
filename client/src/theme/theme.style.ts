export const navbar = {
  components: {
    logo: {
      width: {
        xs: "6.25rem",
        xxl: "10rem"
      },
      height: {
        xs: "100%",
        xxl: "100%"
      }
    },
    userButton: {
      iconSize: {
        xs: "1.65rem",
        xxl: "2rem"
      }
    },
    shoppingCart: {
      badge: {
        size: {
          xs: "1.35rem",
          xxl: "1.65rem"
        }
      }
    },
    universeButton: {
      iconSize: {
        xs: "1.65rem",
        xxl: "2rem"
      }
    },
    trialUserButton: {
      iconSize: {
        xs: "1.65rem",
        xxl: "2rem"
      }
    },
    title: {
      fontSize: {
        xs: ".865rem",
        xxl: "1rem"
      },
      iconSize: {
        xs: " 1.1rem",
        xxl: " 1.5rem"
      }
    },
    exitButton: {
      fontSize: {
        xs: ".8rem",
        xxl: "1rem"
      }
    }
  },
  height: {
    xs: "3rem",
    xxl: "3.75rem"
  }
};

export const sideMenu = {
  components: {
    logo: {
      width: {
        xs: "",
        xxl: ""
      }
    },
    list: {
      iconSize: {
        xs: "1rem",
        xxl: "1.35rem"
      }
    }
  },
  width: {
    default: {
      xs: navbar.height.xs,
      xxl: navbar.height.xxl
    },
    expanded: {
      xs: "11rem",
      xxl: "13.5rem"
    }
  }
};

export const bottomNav = {
  height: {
    xs: navbar.height.xs,
    xxl: navbar.height.xxl
  }
};

export const Form = {
  input: {
    text: {
      height: {
        xs: "2rem",
        xxl: "2.5rem"
      }
    }
  },
  dropdown: {
    height: {
      xs: "2rem",
      xxl: "2.5rem"
    }
  }
};

export const AXP = {
  titleRow: {
    height: {
      xs: navbar.height.xs,
      xxl: navbar.height.xxl
    }
  },
  filterRow: {
    height: {
      xs: "3.25rem",
      xxl: "3.5rem"
    },
    components: {
      searchInput: {
        height: {
          xs: Form.input.text.height.xs,
          xxl: Form.input.text.height.xxl
        }
      },
      dropdown: {
        height: {
          xs: Form.input.text.height.xs,
          xxl: Form.input.text.height.xxl
        }
      }
    }
  },
  statusRow: {
    height: {
      xs: "2.5rem",
      xxl: "3rem"
    }
  }
};
