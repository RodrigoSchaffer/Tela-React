import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const logs = [
  { uid: "1", desc: "Pizza (R$ 30)", when: "20/01/2020" },
  { uid: "2", desc: "Coca-Cola (R$ 10)", when: "20/01/2020" },
];

const timeFilters = ["Hoje", "Essa Semana", "Esse Mês"];
const navIcons = ["airplane", "home", "restaurant", "car", "settings"];

const Screen = () => {
  const renderTransaction = ({ item }) => (
    <View style={styles.entry}>
      <Text style={styles.entryTitle}>{item.desc}</Text>
      <Text style={styles.entryDate}>{item.when}</Text>
    </View>
  );

  const PeriodSelector = () =>
    React.createElement(
      View,
      { style: styles.periodContainer },
      timeFilters.map((label, idx) =>
        React.createElement(Text, { key: idx, style: styles.periodOption }, label)
      )
    );

  return (
    <View style={styles.wrapper}>
      <View style={styles.banner}>
        <Text style={styles.welcome}>Bem vindo, Carlos</Text>
        <Text style={styles.subtitle}>Você gastou hoje</Text>
        <Text style={styles.amount}>R$ 500</Text>
        <Text style={styles.periodTitle}>ESCOLHER PERÍODO:</Text>
        <PeriodSelector />
      </View>

      <View style={styles.navRow}>
        {Array.from({ length: navIcons.length }, (_, i) => (
          <TouchableOpacity key={i} style={styles.navItem}>
            <Ionicons name={navIcons[i]} size={24} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={logs}
        keyExtractor={(el) => el.uid}
        renderItem={renderTransaction}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7EBE8",
  },
  banner: {
    backgroundColor: "#E54B4B",
    padding: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  welcome: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  amount: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  periodTitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },
  periodContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  periodOption: {
    color: "#fff",
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  navItem: {
    backgroundColor: "#444140",
    padding: 10,
    borderRadius: 8,
  },
  listPadding: {
    paddingHorizontal: 15,
  },
  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  entryTitle: {
    fontSize: 16,
    color: "#000",
  },
  entryDate: {
    fontSize: 14,
    color: "#777",
  },
});
