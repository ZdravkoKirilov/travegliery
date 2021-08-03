export type Email = {
  id: string;
  projectId: string;

  createdAt: number;
  sendAt: number;

  shareId: string;
  recipients: string[];
};
