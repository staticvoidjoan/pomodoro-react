import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemLIst";
import { useToDo } from "../context/ToDoItemContext";

type ToDoItem = {
  id: string;
  title: string;
  isComplete: boolean;
};
export default function TabLayout() {
  const [index, setIndex] = useState(0);
  const { toDoItems } = useToDo();
  const [itemsState, setItemsState] = useState<ToDoItem[]>([]); // Update the type of itemsState
  useEffect(() => {
    if (index === 1) {
      const completedItems = toDoItems.filter((item) => item.isComplete);
      setItemsState(completedItems.reverse());
      //   console.log("completedItems", completedItems);
    } else if (index === 2) {
      const unCompletedItems = toDoItems.filter((item) => !item.isComplete);
      setItemsState(unCompletedItems.reverse());
      //   console.log("unCompletedItems", unCompletedItems);
    } else {
      setItemsState(toDoItems.reverse());
      //   console.log("toDoItems", toDoItems);
    }
  }, [index, toDoItems]);

  return (
    <Tabs
      variant={"soft-rounded"}
      onChange={(index) => setIndex(index)}
      width={"100%"}
      justifyContent={"center"}
      colorScheme="pink"
    >
      <TabList justifyContent={"center"} gap={5} color={"white"}>
        <Tab>List</Tab>
        <Tab>Completed</Tab>
        <Tab>Uncompleted</Tab>
      </TabList>
      <Box maxH={"500px"} overflow={"auto"} width={"100%"}>
        <TabPanels>
          <TabPanel>
            <ItemList items={itemsState} />
          </TabPanel>
          <TabPanel>
            <ItemList items={itemsState} />
          </TabPanel>
          <TabPanel>
            <ItemList items={itemsState} />
          </TabPanel>
        </TabPanels>
      </Box>
    </Tabs>
  );
}
