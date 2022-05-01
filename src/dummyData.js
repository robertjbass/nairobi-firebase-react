const users = {
  "bob@user.com": {
    emailVerified: true,
    premium: true,
  },
};

const books = {
  "bob@user.com": {
    toBeRead: [
      {
        id: 1,
        author: "Dan Brown",
        title: "Angels and Demons",
      },
    ],
    inProgress: [],
    completed: [],
  },

  "sam@otheruser.com": {
    toBeRead: [],
    inProgress: [],
    completed: [],
  },
};
