import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Index() {
  const stats = [
    { label: "Members", value: "48", icon: "people", color: "bg-blue-100", iconColor: "#3b82f6" },
    { label: "Open Issues", value: "3", icon: "warning", color: "bg-red-100", iconColor: "#ef4444" },
    { label: "Pending Payments", value: "12", icon: "payment", color: "bg-green-100", iconColor: "#10b981" },
    { label: "Events", value: "2", icon: "event", color: "bg-purple-100", iconColor: "#a855f7" },
  ];

  const announcements = [
    { id: 1, title: "Annual General Meeting", date: "Feb 15, 2026", priority: "High" },
    { id: 2, title: "Water Pipeline Maintenance", date: "Feb 8, 2026", priority: "Medium" },
    { id: 3, title: "Community Sports Day", date: "Feb 22, 2026", priority: "Low" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Welcome Banner */}
      <View className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-6">
        <Text className="text-black text-2xl font-bold mb-1">Welcome Back!</Text>
      </View>

      {/* Quick Stats */}
      <View className="px-4 py-4">
        <View className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <View
              key={index}
              className={`${stat.color} rounded-lg p-4 items-center justify-center`}
            >
              <MaterialIcons name={stat.icon as any} size={28} color={stat.iconColor} />
              <Text className="text-gray-900 font-bold text-2xl mt-2">
                {stat.value}
              </Text>
              <Text className="text-gray-600 text-xs mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Quick Actions */}
      <View className="px-4 py-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Quick Actions
        </Text>
        <View className="flex-row justify-between">
          <TouchableOpacity className="flex-1 bg-white rounded-lg p-3 mr-2 items-center border border-gray-100">
            <MaterialIcons name="add" size={24} color="#3b82f6" />
            <Text className="text-gray-700 text-xs mt-1 font-semibold">
              Report Issue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white rounded-lg p-3 mx-1 items-center border border-gray-100">
            <MaterialIcons name="payment" size={24} color="#10b981" />
            <Text className="text-gray-700 text-xs mt-1 font-semibold">
              Pay Bills
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white rounded-lg p-3 ml-2 items-center border border-gray-100">
            <MaterialIcons name="chat" size={24} color="#f59e0b" />
            <Text className="text-gray-700 text-xs mt-1 font-semibold">
              Message
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Latest Announcements */}
      <View className="px-4 pb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-lg font-semibold text-gray-800">
            Latest Announcements
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-600 text-sm font-semibold">View All</Text>
          </TouchableOpacity>
        </View>

        {announcements.map((announcement) => (
          <TouchableOpacity
            key={announcement.id}
            className="bg-white rounded-lg p-4 mb-3 border border-gray-100"
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold">
                  {announcement.title}
                </Text>
                <Text className="text-gray-500 text-sm mt-1">
                  {announcement.date}
                </Text>
              </View>
              <View
                className={`px-2 py-1 rounded ${
                  announcement.priority === "High"
                    ? "bg-red-100"
                    : announcement.priority === "Medium"
                    ? "bg-yellow-100"
                    : "bg-green-100"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    announcement.priority === "High"
                      ? "text-red-700"
                      : announcement.priority === "Medium"
                      ? "text-yellow-700"
                      : "text-green-700"
                  }`}
                >
                  {announcement.priority}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
