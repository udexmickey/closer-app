import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
  ReactNode,
} from "react";
import * as SecureStore from "expo-secure-store";

type Action =
  | { type: "RESTORE_TOKEN"; token: string | null }
  | { type: "SIGN_IN"; token: string }
  | { type: "SIGN_OUT" }
  | { type: "SET_COMPLETED"; value: boolean }; // New action type for setting onboarding completion

type State = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
  hasCompletedOnbarding: boolean; // New state for tracking onboarding completion
};

type AuthContextType = {
  state: State;
  authContext: {
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
    signUp: () => void;
    setOnboardingCompleted: (value: boolean) => void;
  };
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const initialState: State = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    hasCompletedOnbarding: false, // Initialize onboarding completion state
  };

  const [state, dispatch] = useReducer((prevState: State, action: Action) => {
    switch (action.type) {
      case "RESTORE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "SIGN_IN":
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case "SIGN_OUT":
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
      case "SET_COMPLETED":
        return {
          ...prevState,
          hasCompletedOnbarding: action.value,
        };
      default:
        return prevState;
    }
  }, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string | null;
      let hasCompletedOnboarding: boolean;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
        hasCompletedOnboarding =
          (await SecureStore.getItemAsync("hasCompletedOnbarding")) === "true";
      } catch (e) {
        userToken = null;
        hasCompletedOnboarding = false;
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
      dispatch({ type: "SET_COMPLETED", value: hasCompletedOnboarding });
    };

    const timer = setTimeout(() => {
      bootstrapAsync();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        // Perform actual sign-in logic here
        const token = "dummy-auth-token"; // Replace with actual token obtained from sign-in
        dispatch({ type: "SIGN_IN", token });
        await SecureStore.setItemAsync("userToken", token);
        await SecureStore.setItemAsync("hasCompletedOnbarding", "true");
      },
      signOut: async () => {
        // Perform actual sign-out logic here
        dispatch({ type: "SIGN_OUT" });
        await SecureStore.deleteItemAsync("userToken");

        //Since we are still testing the authentication let me put this to clear the stored hasCompletedOnbarding value
        await SecureStore.deleteItemAsync("hasCompletedOnbarding");
      },
      signUp: async () => {
        // Logic for signing up
        const token = "dummy-auth-token"; // Dummy logic for sign-up, replace with actual logic
        dispatch({ type: "SIGN_IN", token });
        SecureStore.setItemAsync("userToken", token);
        await SecureStore.setItemAsync("hasCompletedOnbarding", "true");
      },
      setOnboardingCompleted: async (value: boolean) =>
        dispatch({ type: "SET_COMPLETED", value }),
    }),
    []
  );

  const value = { state, authContext };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AppProvider");
  }
  return context;
};
