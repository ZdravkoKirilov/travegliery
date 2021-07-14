export type Participant = {
  id: string;
  projectId: string;

  firstName: string;
  lastName: string;

  email: string;
  phone?: string;

  image?: string;
  label?: string;
};
