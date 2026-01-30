import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function More() {
  const menuItems = [
    {
      icon: "notifications",
      label: "Announcements",
      description: "View latest news & updates",
      color: "bg-blue-100",
      iconColor: "#3b82f6",
    },
    {
      icon: "event",
      label: "Events",
      description: "Upcoming society events",
      color: "bg-purple-100",
      iconColor: "#a855f7",
    },
    {
      icon: "description",
      label: "Documents",
      description: "Rules & regulations",
      color: "bg-orange-100",
      iconColor: "#f97316",
    },
    {
      icon: "groups",
      label: "Community",
      description: "Connect with neighbors",
      color: "bg-pink-100",
      iconColor: "#ec4899",
    },
    {
      icon: "security",
      label: "Security & Visitors",
      description: "Manage visitor passes",
      color: "bg-red-100",
      iconColor: "#ef4444",
    },
    {
      icon: "settings",
      label: "Settings",
      description: "App preferences",
      color: "bg-gray-100",
      iconColor: "#6b7280",
    },
    {
        icon:"person",
        label:"Profile Settings",
        description:"Manage your profile",
        color:"bg-teal-100",
        iconColor:"#14b8a6",
    }
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-indigo-600 px-4 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          More Options
        </Text>
        <Text className="text-indigo-100">Access additional features</Text>
      </View>

      {/* Menu Items */}
      <View className="px-4 py-4">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-white rounded-lg p-4 mb-3 border border-gray-100 flex-row items-center justify-between"
          >
            <View className={`${item.color} w-12 h-12 rounded-lg items-center justify-center mr-3`}>
              <MaterialIcons name={item.icon as any} size={24} color={item.iconColor} />
            </View>
            <View className="flex-1">
              <Text className="text-gray-900 font-semibold">{item.label}</Text>
              <Text className="text-gray-500 text-sm">{item.description}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Support Section */}
      <View className="px-4 pb-6">
        <View className="bg-white rounded-lg p-4 border border-gray-100">
          <View className="flex-row items-center mb-3">
            <MaterialIcons name="help" size={24} color="#3b82f6" />
            <Text className="text-gray-900 font-semibold ml-3">Need Help?</Text>
          </View>
          <Text className="text-gray-600 text-sm mb-3">
            Contact support for any issues or questions about the app.
          </Text>
          <TouchableOpacity className="bg-blue-600 rounded-lg py-2 items-center">
            <Text className="text-white font-semibold">Contact Support</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Version Info */}
      <View className="px-4 pb-6">
        <Text className="text-center text-gray-500 text-sm">
          Nexus v1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}
