export interface UserInterface {
  name: string;
  email: string | null | undefined;
  image: string | null | undefined;
}

export interface SanityDoc {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}