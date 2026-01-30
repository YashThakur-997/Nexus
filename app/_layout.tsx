import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#9ca3af",
        headerShown: true,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#1f2937",
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 18,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#e5e7eb",
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          headerTitle: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
          tabBarLabel: "Members",
          headerTitle: "Members & Residents",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="complaints"
        options={{
          title: "Complaints",
          tabBarLabel: "Complaints",
          headerTitle: "Complaints & Issues",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="warning" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarLabel: "Payments",
          headerTitle: "Bills & Payments",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="payment" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarLabel: "More",
          headerTitle: "More Options",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="more-horiz" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
