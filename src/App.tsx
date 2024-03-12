import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import bgm from "./assets/bgm.mp3";
import { useState, useRef } from "react";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import Quote from "./components/Quote";
import AddItem from "./components/AddItem";

import TabLayout from "./Layout/TabLayout";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(bgm)); 

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause(); 
       
    } else{
      audio.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying); 
  };

  return (
    <Box
      minHeight={"100vh"}
      bg={
        "linear-gradient(to right top, #db6e96, #d16b97, #c76897, #bd6597, #b26397, #b56b9c, #b973a0, #bc7ba5, #cd90b2, #dda5c0, #ecbacf, #fbd0df)"
      }
    >
      <Flex
        height={"100%"}
        w={"100%"}
        as={"main"}
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        flexDir={"column"}
      >
        <HStack mt={"5rem"}>
          <Heading color={"black"} fontWeight={"bold"}>
            What's the plan for today?
          </Heading>{" "}
          <Button onClick={togglePlay} colorScheme="pink">
            {isPlaying ? <MdOutlineMusicNote /> : <MdOutlineMusicOff />}
          </Button>
        </HStack>

        <AddItem />
        <Quote />
        <Divider width={"50%"} m={5} />
        <TabLayout />
      </Flex>
      <audio ref={audioRef} loop src={bgm} />
    </Box>
  );
}

export default App;
