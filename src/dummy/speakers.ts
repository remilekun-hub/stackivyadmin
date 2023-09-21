export type Speaker = {
  id: string | number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  linkedin: string | null;
  instagram: string | null;
  note: string | null;
};
export const speakers: Speaker[] = [
  {
    id: "1",
    first_name: "Adebowale",
    last_name: "Oladimeji",
    email: "AdebowaleOladimeji67@gmail.com",
    phone: "+2347031167715",
    linkedin: "hfhf",
    instagram: "ff",
    note: "hello world",
  },
  {
    id: "2",
    first_name: "Adebowale",
    last_name: "Oladimeji",
    email: "AdebowaleOladimeji67@gmail.com",
    phone: "+2347031167715",
    linkedin: null,
    instagram: "ff",
    note: "okay people wasup",
  },

  {
    id: "3",
    first_name: "Adebowale",
    last_name: "Oladimeji",
    email: "AdebowaleOladimeji67@gmail.com",
    phone: "+2347031167715",
    linkedin: "hfhf",
    instagram: null,
    note: "okay people wasup dokey dokey dokey",
  },
];
