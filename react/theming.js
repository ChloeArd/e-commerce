// Retourne le bon objet de thème en fonction du type de thème passé.
export const getTheme = (theme) => (theme !== "light" ? dark : light);

const dark = {
  body: {
    background: "#565656",
    textColor: "#FFFFFF",
  },
  components: {
    background: "#a9a9a9",
    textColor: "#FFFFFF",
  },
};

const light = {
  body: {
    background: "#F9F9FA",
    textColor: "#545454",
  },
  components: {
    background: "#FFFFFF",
    textColor: "#545454",
  },
};
