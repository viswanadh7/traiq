import CustomInput from "@/components/CustomInput";
import SubmitButton from "@/components/ui/SubmitButton";
import ThemedView from "@/components/ui/ThemedView";
import Typo from "@/components/ui/Typo";
import { useGlobalState } from "@/hooks/use-global-state";
import { signUpSchema } from "@/schema";
import supabase from "@/supabase";
import { AuthError, TSignUp } from "@/types/user.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { AtIcon, LockKeyIcon, UserIcon } from "phosphor-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const SignUp = () => {
  const { theme } = useGlobalState();
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    reValidateMode: "onChange",
  });

  const handleSignUp = async (signUpData: TSignUp) => {
    const { error } = await supabase.auth.signUp({
      ...signUpData,
      options: { data: { name: signUpData.name } },
    });

    if (error) {
      let toastOptions: Record<string, string> = {};
      if (error.code === AuthError.USER_ALREADY_EXISTS) {
        toastOptions["text2"] = "Please try again with a different email";
      }
      Toast.show({
        type: "error",
        text1: error.message,
        text1Style: {
          fontSize: 17,
          letterSpacing: 0.5,
          color: "red",
          fontWeight: "ultralight",
        },
        ...toastOptions,
      });
      return;
    }
    router.replace("/signin");
  };
  return (
    <ThemedView>
      <View style={styles.headerContainer}>
        <Typo styles={styles.header}>Welcome to TraiQ</Typo>
        <Typo styles={styles.subHeader}>Create an account to continue</Typo>
      </View>
      <KeyboardAvoidingView>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Name"
              placeholder="Enter your name"
              icon={<UserIcon size={20} color={theme.icon} />}
              error={errors.name?.message}
              onChangeText={field.onChange}
              returnKeyType="next"
              submitBehavior="submit"
              onSubmitEditing={() => setFocus("email")}
              {...field}
            />
          )}
        />
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
              onSubmitEditing={handleSubmit(handleSignUp)}
              {...field}
            />
          )}
        />
        <SubmitButton name="Sign Up" onPress={handleSubmit(handleSignUp)} />
        <View style={styles.redirectContainer}>
          <Typo styles={styles.redirectText}>Already have an account?</Typo>
          <TouchableOpacity onPress={() => router.replace("/signin")}>
            <Typo styles={styles.redirectLink}>Sign In</Typo>
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

export default SignUp;
