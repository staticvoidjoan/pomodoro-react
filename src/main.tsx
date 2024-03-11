// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ToDoItemProvider from "./context/ToDoItemContext.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css"
const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    // You can define other font styles here if needed
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <ChakraProvider theme={theme}>
    <ToDoItemProvider>
      <App />
    </ToDoItemProvider>
  </ChakraProvider>
);
