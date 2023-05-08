import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    marginVertical: 150,
    // marginHorizontal:"25%"
  },
  buttonWrapper: {
    marginVertical: SIZES.xSmall,
  },
  buttonText: (buttonClicked, item) => ({
    fontSize: SIZES.medium,
    fontWeight: "bold",
    // fontFamily: ,
    color: COLORS.white,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xxLarge,
    borderRadius: SIZES.xxLarge,
    borderColor: COLORS.lightPrimary,
    backgroundColor:
      buttonClicked === item ? COLORS.lightPrimary : COLORS.primary,
    borderWidth: 3,
    textAlign: "center",
    overflow: "hidden",
  }),
  text: {
    textAlign: "center",
    color: COLORS.white,
    marginVertical: SIZES.xLarge,
    marginHorizontal: SIZES.medium,
    lineHeight: SIZES.xLarge,
  },
  link: {
    color: "grey",
  },
  closeButton: {
    fontSize: SIZES.medium,

    fontWeight: "bold",

    marginHorizontal: 130,
    paddingVertical: SIZES.small,
    borderColor: COLORS.lightPrimary,
    borderWidth: 3,
    borderRadius: 25,
  },
    modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
});

export default styles;
