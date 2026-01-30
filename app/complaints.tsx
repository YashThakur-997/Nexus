import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Complaints() {
  const complaints = [
    {
      id: 1,
      title: "Water leakage in B-205",
      status: "Open",
      priority: "High",
      date: "Jan 28, 2026",
    },
    {
      id: 2,
      title: "Parking issue in Zone C",
      status: "In Progress",
      priority: "Medium",
      date: "Jan 25, 2026",
    },
    {
      id: 3,
      title: "Elevator maintenance needed",
      status: "Resolved",
      priority: "High",
      date: "Jan 20, 2026",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-red-100";
      case "In Progress":
        return "bg-yellow-100";
      case "Resolved":
        return "bg-green-100";
      default:
        return "bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      default:
        return "text-green-600";
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-orange-600 px-4 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          Complaints & Issues
        </Text>
        <Text className="text-orange-100">Track maintenance requests</Text>
      </View>

      {/* Stats Cards */}
      <View className="px-4 py-4 flex-row justify-between">
        <View className="bg-red-50 rounded-lg p-4 flex-1 mr-2 border border-red-200">
          <Text className="text-red-600 font-bold text-2xl">1</Text>
          <Text className="text-red-600 text-xs mt-1">Open</Text>
        </View>
        <View className="bg-yellow-50 rounded-lg p-4 flex-1 mx-1 border border-yellow-200">
          <Text className="text-yellow-600 font-bold text-2xl">1</Text>
          <Text className="text-yellow-600 text-xs mt-1">In Progress</Text>
        </View>
        <View className="bg-green-50 rounded-lg p-4 flex-1 ml-2 border border-green-200">
          <Text className="text-green-600 font-bold text-2xl">1</Text>
          <Text className="text-green-600 text-xs mt-1">Resolved</Text>
        </View>
      </View>

      {/* Complaints List */}
      <View className="px-4 pb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Recent Complaints
        </Text>
        {complaints.map((complaint) => (
          <TouchableOpacity
            key={complaint.id}
            className="bg-white rounded-lg p-4 mb-3 border border-gray-100"
          >
            <View className="flex-row items-start justify-between mb-2">
              <Text className="text-gray-900 font-semibold flex-1 pr-2">
                {complaint.title}
              </Text>
              <View
                className={`px-2 py-1 rounded ${getStatusColor(
                  complaint.status
                )}`}
              >
                <Text className="text-xs font-semibold text-gray-700">
                  {complaint.status}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className={`text-sm font-semibold ${getPriorityColor(complaint.priority)}`}>
                {complaint.priority} Priority
              </Text>
              <Text className="text-gray-400 text-xs">{complaint.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* File Complaint Button */}
      <View className="px-4 pb-6">
        <TouchableOpacity className="bg-orange-600 rounded-lg py-3 items-center flex-row justify-center">
          <MaterialIcons name="add" size={24} color="white" />
          <Text className="text-white font-semibold ml-2">File Complaint</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
