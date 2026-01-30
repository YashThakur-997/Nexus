import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Payments() {
  const bills = [
    {
      id: 1,
      title: "Monthly Maintenance",
      amount: "₹5,000",
      dueDate: "Feb 5, 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "Annual Corpus Fund",
      amount: "₹10,000",
      dueDate: "Mar 15, 2026",
      status: "Pending",
    },
    {
      id: 3,
      title: "Water & Electricity",
      amount: "₹2,500",
      dueDate: "Jan 30, 2026",
      status: "Paid",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-green-600 px-4 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          Bills & Payments
        </Text>
        <Text className="text-green-100">Manage society dues</Text>
      </View>

      {/* Outstanding Amount Card */}
      <View className="px-4 py-4">
        <View className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6">
          <Text className="text-green-500 mb-2">Total Outstanding</Text>
          <Text className="text-black text-3xl font-bold">₹17,500</Text>
          <Text className="text-red-400 text-sm mt-2">
            Due by Feb 5, 2026
          </Text>
        </View>
      </View>

      {/* Bills List */}
      <View className="px-4 py-4">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-lg font-semibold text-gray-800">
            Your Bills
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="filter-list" size={20} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        {bills.map((bill) => (
          <TouchableOpacity
            key={bill.id}
            className="bg-white rounded-lg p-4 mb-3 border border-gray-100"
          >
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold">
                  {bill.title}
                </Text>
                <Text className="text-gray-500 text-sm mt-1">
                  Due: {bill.dueDate}
                </Text>
              </View>
              <View
                className={`px-3 py-1 rounded-full ${
                  bill.status === "Paid" ? "bg-green-100" : "bg-yellow-100"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    bill.status === "Paid"
                      ? "text-green-700"
                      : "text-yellow-700"
                  }`}
                >
                  {bill.status}
                </Text>
              </View>
            </View>
            <Text className="text-gray-900 text-lg font-bold">
              {bill.amount}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pay Now Button */}
      <View className="px-4 pb-6">
        <TouchableOpacity className="bg-green-600 rounded-lg py-3 items-center flex-row justify-center">
          <MaterialIcons name="payment" size={24} color="white" />
          <Text className="text-white font-semibold ml-2">Pay Now</Text>
        </TouchableOpacity>
      </View>

      {/* Payment History */}
      <View className="px-4 pb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Payment History
        </Text>
        <View className="bg-white rounded-lg p-4 border border-gray-100">
          <View className="flex-row items-center justify-between mb-3 pb-3 border-b border-gray-200">
            <Text className="text-gray-700">Maintenance (Dec 2025)</Text>
            <Text className="text-gray-900 font-semibold">₹5,000</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-700">Water Bill (Dec 2025)</Text>
            <Text className="text-gray-900 font-semibold">₹2,500</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
