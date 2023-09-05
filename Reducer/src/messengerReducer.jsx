export const initialState = {
  selectedId: 0,
  message: "Hello",
  allMsgs: { one: "tay", two: "ali", three: "bo" },
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      let msg = "";
      if (action.contactId == 0) {
        msg = state.allMsgs.one;
      } else if (action.contactId == 1) {
        msg = state.allMsgs.two;
      } else if (action.contactId == 2) {
        msg = state.allMsgs.three;
      }
      return {
        ...state,
        selectedId: action.contactId,
        message: msg,
      };
    }
    case "edited_message": {
      // let editedMsg = { one: action.message };
      // let msg = "";
      if (action.contactId == 0) {
        return {
          ...state,
          allMsgs: { ...state.allMsgs, one: action.message },
          message: action.message,
        };
      } else if (action.contactId == 1) {
        return {
          ...state,
          allMsgs: { ...state.allMsgs, two: action.message },
          message: action.message,
        };
      } else if (action.contactId == 2) {
        return {
          ...state,
          allMsgs: { ...state.allMsgs, three: action.message },
          message: action.message,
        };
      } else {
        return {
          ...state,
          allMsgs: { ...state.allMsgs, one: action.message },
          message: action.message,
        };
      }
    }
    case "sent_message": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
