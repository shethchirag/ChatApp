import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import ChatItemMemo from "../shared/ChatItem";
import { CleaningServices } from "@mui/icons-material";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  console.log(newMessagesAlert);
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avatar = [], _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        console.log(onlineUsers);
        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        console.log(isOnline);
        return (
          <ChatItemMemo
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            handleDeleteChat={handleDeleteChat}
            sameSender={chatId === _id}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            key={index}
            index={index}
          />
        );
      })}
    </Stack>
  );
};

ChatList.propTypes = {
  w: PropTypes.string,
  chats: PropTypes.array,
  chatId: PropTypes.string,
  onlineUsers: PropTypes.array,
  newMessagesAlert: PropTypes.array,
  handleDeleteChat: PropTypes.func,
  ChatItemMemo: PropTypes.func,
};

export default ChatList;