import CustomInput from "@/components/CustomInput";
import SubmitButton from "@/components/ui/SubmitButton";
import ThemedView from "@/components/ui/ThemedView";
import Typo from "@/components/ui/Typo";
import { useGlobalState } from "@/hooks/use-global-state";
import { signInSchema } from "@/schema";
import supabase from "@/supabase";
import { AuthError, TSignIn } from "@/types/user.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { AtIcon, LockKeyIcon } from "phosphor-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const { theme } = useGlobalState();
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
    reValidateMode: "onChange",
  });

  const handleSignIn = async (sigInData: TSignIn) => {
    const { error } = await supabase.auth.signInWithPassword(sigInData);
    if (error) {
      let toastOptions: Record<string, string> = {};
      if (error.code === AuthError.INVALID_CREDENTIALS) {
        toastOptions["text2"] = "Please check your email and password";
      }
      Toast.show({
        type: "error",
        text1: error.message,
        text1Style: {
          fontSize: 17,
          color: "red",
          fontWeight: "ultralight",
        },
        text2Style:{
          fontSize: 14
        },
        ...toastOptions,
      });
      return;
    }
    router.replace("/(tabs)");
  };

  return (
    <ThemedView>
      <View style={styles.headerContainer}>
        <Typo styles={styles.header}>Good to see you again</Typo>
        <Typo styles={styles.subHeader}>Sign in to continue to TraiQ</Typo>
      </View>
      <KeyboardAvoidingView>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Email"
              placeholder="Enter your email"
              icon={<AtIcon size={20} color={theme.icon} />}
              error={errors.email?.message}
              onChangeText={field.onChange}
              autoCapitalize="none"
              returnKeyType="next"
              submitBehavior="submit"
              onSubmitEditing={() => setFocus("password")}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Password"
              secureTextEntry
              placeholder="Enter your password"
              icon={<LockKeyIcon size={20} color={theme.icon} />}
              error={errors.password?.message}
              onChangeText={field.onChange}
              returnKeyType="done"
              onSubmitEditing={handleSubmit(handleSignIn)}
              {...field}
            />
          )}
        />
        <SubmitButton name="Sign In" onPress={handleSubmit(handleSignIn)} />
        <View style={styles.redirectContainer}>
          <Typo styles={styles.redirectText}>Don&#39;t have an account?</Typo>
          <TouchableOpacity onPress={() => router.replace("/signup")}>
            <Typo styles={styles.redirectLink}>Sign Up</Typo>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 25,
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  subHeader: {
    marginTop: 6,
    fontSize: 15,
    opacity: 0.65,
    lineHeight: 22,
  },
  redirectContainer: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  redirectText: {
    fontSize: 14,
    opacity: 0.6,
  },
  redirectLink: {
    fontSize: 14,
    fontWeight: "600",
  },
  errorText: {
    color: "#FF2C2C",
  },
});

export default SignIn;
