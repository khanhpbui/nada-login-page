import { SafeAreaView } from "react-native";
import { Login } from "../components";

import { COLORS } from "../constant";

const Home = () => {
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: COLORS.primary }]}>
      <Login />
    </SafeAreaView>
  );
};

export default Home;
