import userimg from "../assets/profileimg.png";
export type UserType = {
  id: string;
  user: {
    img: string;
    name: string;
  };
  title: string;
  email: string;
  lastLogin: {
    date: string;
    time: string;
  };
};

export const users: UserType[] = [
  {
    id: "1",
    user: {
      img: userimg,
      name: "Adebowale Franca",
    },
    title: "Admin",
    email: "Adebowalefranca653@gmail.com",
    lastLogin: {
      date: "10/08/2023",
      time: "10:00am",
    },
  },
  {
    id: "2",
    user: {
      img: userimg,
      name: "Adebowale Franca",
    },
    title: "Admin",
    email: "Adebowalefranca653@gmail.com",
    lastLogin: {
      date: "10/08/2023",
      time: "10:00am",
    },
  },
  {
    id: "3",
    user: {
      img: userimg,
      name: "Adebowale Franca",
    },
    title: "Admin",
    email: "Adebowalefranca653@gmail.com",
    lastLogin: {
      date: "10/08/2023",
      time: "10:00am",
    },
  },
  {
    id: "4",
    user: {
      img: userimg,
      name: "Adebowale Franca",
    },
    title: "Admin",
    email: "Adebowalefranca653@gmail.com",
    lastLogin: {
      date: "10/08/2023",
      time: "10:00am",
    },
  },
  {
    id: "5",
    user: {
      img: userimg,
      name: "Adebowale Franca",
    },
    title: "Admin",
    email: "Adebowalefranca653@gmail.com",
    lastLogin: {
      date: "10/08/2023",
      time: "10:00am",
    },
  },
  {
    id: "6",
    user: {
      img: userimg,
      name: "Adebowale Franca",
    },
    title: "Admin",
    email: "Adebowalefranca653@gmail.com",
    lastLogin: {
      date: "10/08/2023",
      time: "10:00am",
    },
  },
];
