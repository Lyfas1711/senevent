
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initSupabase } from "@senevent/shared";

// Initialiser Supabase une seule fois au démarrage
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (supabaseUrl && supabaseAnonKey) {
  initSupabase(supabaseUrl, supabaseAnonKey);
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1a3a5c" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="evenement/[id]"
          options={{ title: "Détail" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
