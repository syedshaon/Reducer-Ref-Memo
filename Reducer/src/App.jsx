import { useReducer } from "react";
import { useState } from "react";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const initialState = {
  selectedId: 0,
  message: "Hello",
  msg: { 0: "", 1: "", 2: "" },
};

function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        // msg: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        // message: action.message,
        msg: {
          ...state.msg,
          [action.contactId]: action.message,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: "",
        msg: { 0: "", 1: "", 2: "" },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function Chat({ contact, msg, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={msg[contact.id]}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          dispatch({ type: "edited_message", contactId: contact.id, message: e.target.value });
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`message sent to  ${contact.email}  is  ${message}`);
          dispatch({ type: "sent_message" });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}

function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({ type: "changed_selection", contactId: contact.id });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const msg = state.msg;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
      <Chat key={contact.id} message={message} msg={msg} contact={contact} dispatch={dispatch} />
    </div>
  );
}
