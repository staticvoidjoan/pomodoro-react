import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ToDoItem = {
  id: string;
  title: string;
  isComplete: boolean;
};

type ToDoContextType = {
  getListLength: () => number;
  addNewItem: (title: string) => void;
  removeItem: (id: string) => void;
  emptyList: () => void;
  toDoItems: ToDoItem[];
  checkItem: (id: string) => void;
};

const ToDoItemContext = createContext({} as ToDoContextType);

type ToDoItemProviderProps = {
  children: React.ReactNode;
};

export function useToDo() {
  return useContext(ToDoItemContext);
}

export default function ToDoItemProvider({ children }: ToDoItemProviderProps) {
  const [toDoItems, setToDoItems] = useLocalStorage<ToDoItem[]>(
    "todo-items",
    []
  );

  function getListLength() {
    return toDoItems.length;
  }

  function addNewItem(title: string) {
    const newToDoItem = {
      id: Math.random().toString(),
      title,
      isComplete: false,
    };
    setToDoItems((prevToDoItems: ToDoItem[]) => [
      ...prevToDoItems,
      newToDoItem,
    ]);
  }

  function removeItem(id: string) {
    setToDoItems((prevToDoItems: ToDoItem[]) =>
      prevToDoItems.filter((item) => item.id !== id)
    );
  }

  function emptyList() {
    setToDoItems([]);
  }

  function checkItem(id: string) {
    setToDoItems((prevToDoItems: ToDoItem[]) =>
      prevToDoItems.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      })
    );
  }

  return (
    <ToDoItemContext.Provider
      value={{
        getListLength,
        addNewItem,
        removeItem,
        emptyList,
        toDoItems,
        checkItem,
      }}
    >
      {children}
    </ToDoItemContext.Provider>
  );
}
