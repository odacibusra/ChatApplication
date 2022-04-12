import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import Chatbox from "../components/Others/Chatbox";
import MyChats from "../components/Others/MyChats";
import SideDrawer from "../components/Others/SideDrawer";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const [user, setUser] = useState("");

 useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("userInfo")))
},[]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;