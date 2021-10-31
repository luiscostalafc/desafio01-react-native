import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import trashIcon from "../assets/icons/trash/trash.png";
import { EditTaskArgs } from "../pages/Home";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TaskItemProps {
  taskList: Task;
  removeTask: (id: number) => void;
  toggleTaskDone: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
}

export function TaskItem({
  taskList,
  removeTask,
  toggleTaskDone,
  editTask,
}: TaskItemProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableOpacity
          testID={`button-${taskList.id}`}
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(taskList?.id)}
        >
          <View
            testID={`marker-${taskList.id}`}
            style={taskList?.done ? styles.taskMarkerDone : styles.taskMarker}
          >
            {taskList?.done && <Icon name="check" size={12} color="#FFF" />}
          </View>

          <Text style={taskList?.done ? styles.taskTextDone : styles.taskText}>
            {taskList?.title}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        testID={`trash-${taskList.id}`}
        style={{ paddingHorizontal: 24 }}
        onPress={() => removeTask(taskList.id)}
      >
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#666",
    fontFamily: "Inter-Medium",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: "#1DB863",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: "#1DB863",
    textDecorationLine: "line-through",
    fontFamily: "Inter-Medium",
  },
});
