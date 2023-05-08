import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import { COLORS, SIZES } from "../../constant";
import logo from "../../assets/images/logo.png";
import styles from "./login.style";

const loginOptions = ["Request membership", "Log in", "Check my status"];

const Login = () => {
  const [buttonClicked, setButtonClicked] = useState("");
  const [showTermsOfServiceModal, setShowTermsOfServiceModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginHorizontal: 15 }}
        data={loginOptions}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => {
              setButtonClicked(item);
            }}
          >
            <Text
              style={[
                styles.buttonText(buttonClicked, item),
                { borderRadius: SIZES.xxLarge },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        ListHeaderComponent={
          <View style={[{ alignItems: "center" }]}>
            <Image source={logo} style={styles.logo} />
          </View>
        }
        ListFooterComponent={
          <View style={{}}>
            <Text style={styles.text}>
              By signing up for NADA you agree to our{" "}
              <TouchableOpacity
                onPress={() => setShowTermsOfServiceModal(true)}
              >
                <Text style={styles.link}>Terms of Service</Text>
              </TouchableOpacity>{" "}
              and{" "}
              <TouchableOpacity onPress={() => setShowPrivacyModal(true)}>
                <Text style={styles.link}>Privacy Policy</Text>
              </TouchableOpacity>
            </Text>
            <Modal
              animationType="slide"
              visible={showTermsOfServiceModal}
              onRequestClose={() => setShowTermsOfServiceModal(false)}
            >
              <SafeAreaView>
                <View>
                  <Text style={styles.modalTitle}>Terms of Service</Text>
                  <Text style={styles.modalText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                  <TouchableOpacity
                    onPress={() => setShowTermsOfServiceModal(false)}
                  >
                    <Text style={[styles.closeButton, { textAlign: "center" }]}>
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </Modal>
            <Modal
              animationType="slide"
              visible={showPrivacyModal}
              onRequestClose={() => setShowPrivacyModal(false)}
            >
              <SafeAreaView>
                <View>
                  <Text style={styles.modalTitle}>Privacy Policy</Text>
                  <Text style={styles.modalText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                  <TouchableOpacity onPress={() => setShowPrivacyModal(false)}>
                    <Text style={[styles.closeButton, { textAlign: "center" }]}>
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </Modal>
          </View>
        }
      />
    </View>
  );
};

export default Login;
