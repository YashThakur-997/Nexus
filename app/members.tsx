import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Members() {
  const members = [
    { id: 1, name: "Rajesh Kumar", unit: "A-101", status: "Active" },
    { id: 2, name: "Priya Singh", unit: "B-205", status: "Active" },
    { id: 3, name: "Amit Patel", unit: "C-308", status: "Pending" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-blue-600 px-4 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          Residents Directory
        </Text>
        <Text className="text-blue-100">Manage society members</Text>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-4">
        <View className="bg-white rounded-lg px-4 py-3 flex-row items-center border border-gray-200">
          <MaterialIcons name="search" size={20} color="#9ca3af" />
          <Text className="ml-2 text-gray-400 flex-1">Search members...</Text>
        </View>
      </View>

      {/* Members List */}
      <View className="px-4 pb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          All Members ({members.length})
        </Text>
        {members.map((member) => (
          <TouchableOpacity
            key={member.id}
            className="bg-white rounded-lg p-4 mb-3 border border-gray-100 flex-row items-center justify-between"
          >
            <View className="flex-row items-center flex-1">
              <View className="bg-blue-100 w-12 h-12 rounded-full items-center justify-center mr-3">
                <MaterialIcons name="person" size={24} color="#3b82f6" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold">{member.name}</Text>
                <Text className="text-gray-500 text-sm">{member.unit}</Text>
              </View>
            </View>
            <View
              className={`px-3 py-1 rounded-full ${
                member.status === "Active"
                  ? "bg-green-100"
                  : "bg-yellow-100"
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  member.status === "Active"
                    ? "text-green-700"
                    : "text-yellow-700"
                }`}
              >
                {member.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add Member Button */}
      <View className="px-4 pb-6">
        <TouchableOpacity className="bg-blue-600 rounded-lg py-3 items-center flex-row justify-center">
          <MaterialIcons name="add" size={24} color="white" />
          <Text className="text-white font-semibold ml-2">Add Member</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
