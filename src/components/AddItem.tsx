import React, { useEffect, useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import { useToDo } from "../context/ToDoItemContext";

export default function AddItem() {
  const { addNewItem, toDoItems } = useToDo();
  const [newItemText, setNewItemText] = useState("");

  useEffect(() => {
    console.log("ToDoItems updated", toDoItems);
  }, [toDoItems]);
  const handleAddItemClick = () => {
    if (newItemText.trim() !== "") {
      addNewItem(newItemText);
      setNewItemText(""); // Clear the input field after adding the item
    }
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewItemText(event.target.value);
  };

  return (
    <Box display={"flex"} gap={3} m={5}>
      <Input
        placeholder="Enter new item"
        value={newItemText}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddItemClick();
          }
        }}
      />
      <Button
        colorScheme="pink"
        fontSize={"0.8rem"}
        onClick={handleAddItemClick}
      >
        Add Item
      </Button>
    </Box>
  );
}
