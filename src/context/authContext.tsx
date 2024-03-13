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
  | { type: "SIGN_OUT" };

type State = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

type AuthContextType = {
  state: State;
  authContext: {
    signIn: () => void;
    signOut: () => void;
    signUp: () => void;
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
      default:
        return prevState;
    }
  }, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string | null;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        userToken = null;
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        if (state.userToken) {
          // A user is already signed in, don't sign in again
          return;
        }

        // Perform actual sign-in logic here
        try {
          // Simulate asynchronous sign-in process (replace with actual logic)
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Set the user token after successful sign-in
          const token = "dummy-auth-token"; // Replace with actual token obtained from sign-in
          dispatch({ type: "SIGN_IN", token });
        } catch (error) {
          console.error("Sign-in failed:", error);
          // Handle sign-in failure if needed
        }
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: () => {
        // Logic for signing up
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" }); // Dummy logic for sign-up, replace with actual logic
      },
    }),
    [state.userToken]
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
