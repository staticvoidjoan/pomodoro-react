import { Checkbox, ListItem, Text, Button, List } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useToDo } from "../context/ToDoItemContext";

type ToDoItem = {
  id: string;
  title: string;
  isComplete: boolean;
};

type ItemListProps = {
  items: ToDoItem[];
};

const glassEffectStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};
import { LuDelete } from "react-icons/lu";
export default function ItemList({ items }: ItemListProps) {
  const { checkItem, removeItem } = useToDo();

  return (
    <List mt={10} display={"flex"} flexDir={"column"} alignItems={"center"}>
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }} // Ensure the animation container takes full width
          >
            <ListItem
              border={"2px solid white"}
              borderRadius={"30px"}
              padding={3}
              w={"300px"}
              display={"flex"}
              justifyContent={"space-between"}
              mb={3}
              style={glassEffectStyle}
            >
              <Checkbox
                isChecked={item.isComplete}
                onChange={() => checkItem(item.id)}
              >
                <Text
                  as={item.isComplete ? "s" : "span"}
                  textDecoration={item.isComplete ? "line-through" : "none"}
                >
                  {item.title}
                </Text>
              </Checkbox>
              <LuDelete
                size={25}
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => removeItem(item.id)}
              />
              {/* <Button onClick={() => removeItem(item.id)}>
              </Button> */}
            </ListItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </List>
  );
}
