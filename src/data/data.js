import { generateId } from "../utils/util";

export const channels = [
  {
    id: 1,
    type: "text",
    name: "welcome",
    group: 1,
    chats: [
      {
        id: generateId(),
        admin: true,
        user: "fauzanr",
        message: "Hi there",
      },
      {
        id: generateId(),
        admin: true,
        user: "fauzanr",
        message: "welcome",
      },
    ],
  },
  {
    id: 2,
    type: "text",
    name: "general-chat",
    group: 1,
    chats: [
      {
        id: generateId(),
        admin: true,
        user: "fauzanr",
        message: "test",
      },
      {
        id: generateId(),
        admin: true,
        user: "fauzanr",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quae fugit quidem minima, quibusdam commodi perspiciatis in fuga tenetur, architecto iusto accusamus, eligendi officiis similique quos dolore possimus tempora voluptatum!",
      },
      {
        id: generateId(),
        admin: true,
        user: "fauzanr",
        message: "Lorem ipsum dolor sit, tempora voluptatum!",
      },
    ],
  },
  {
    id: 3,
    type: "text",
    name: "other-stuff",
    group: 1,
    chats: [],
  },
  {
    id: 4,
    type: "voice",
    name: "lobby",
    group: 2,
    chats: [],
  },
  {
    id: 5,
    type: "voice",
    name: "lounge",
    group: 2,
    chats: [],
  },
  {
    id: 6,
    type: "voice",
    name: "voice-room-1",
    group: 2,
    chats: [],
  },
  {
    id: 7,
    type: "voice",
    name: "voice-room-2",
    group: 2,
    chats: [],
  },
  {
    id: 8,
    type: "voice",
    name: "voice-room-3",
    group: 2,
    chats: [],
  },
  {
    id: 9,
    type: "text",
    name: "python",
    group: 3,
    chats: [],
  },
  {
    id: 10,
    type: "text",
    name: "javascript",
    group: 3,
    chats: [],
  },
  {
    id: 11,
    type: "text",
    name: "ruby",
    group: 3,
    chats: [],
  },
  {
    id: 12,
    type: "text",
    name: "vuejs",
    group: 3,
    chats: [],
  },
  {
    id: 13,
    type: "voice",
    name: "night-owl",
    group: 3,
    chats: [],
  },
  {
    id: 14,
    type: "text",
    name: "general-chat",
    group: 4,
    chats: [],
  },
  {
    id: 15,
    type: "voice",
    name: "pubg",
    group: 4,
    chats: [],
  },
  {
    id: 16,
    type: "voice",
    name: "no-chicken-no-cleep",
    group: 4,
    chats: [],
  },
  {
    id: 17,
    type: "voice",
    name: "monopoly",
    group: 4,
    chats: [],
  },
  {
    id: 18,
    type: "voice",
    name: "room-1",
    group: 4,
    chats: [],
  },
  {
    id: 19,
    type: "voice",
    name: "room-2",
    group: 4,
    chats: [],
  },
  {
    id: 20,
    type: "voice",
    name: "room-3",
    group: 4,
    chats: [],
  },
  {
    id: 21,
    type: "text",
    name: "this-is-a-very-long-channel-name",
    group: 5,
    chats: [],
  },
  {
    id: 22,
    type: "voice",
    name: "random-room",
    group: 5,
    chats: [],
  },
];

export const groups = [
  {
    id: 1,
    name: "main channels",
  },
  {
    id: 2,
    name: "voice channels",
  },
  {
    id: 3,
    name: "coding",
  },
  // {
  //   id: 4,
  //   name: 'game rooms',
  // },
  {
    id: 5,
    name: "a very long channel group name lol",
  },
];

export const users = [
  {
    id: 1,
    name: "fauzanr",
    role: "admin",
    status: null,
    online: true,
  },
  {
    id: 2,
    name: "fauzanr",
    role: "member",
    status: null,
    online: true,
  },
  {
    id: 3,
    name: "fauzanr",
    role: "member",
    status: "sup y`all",
    online: true,
  },
  {
    id: 4,
    name: "fauzanr",
    role: "member",
    status: "playing Counter-Strike",
    online: true,
  },
  {
    id: 5,
    name: "fauzanr",
    role: "member",
    status: null,
    online: false,
  },
  {
    id: 6,
    name: "fauzanr",
    role: "member",
    status: null,
    online: false,
  },
  {
    id: 7,
    name: "fauzanr",
    role: "member",
    status: null,
    online: false,
  },
];

export const servers = [
  {
    id: 1,
    name: "My Server",
  },
];
