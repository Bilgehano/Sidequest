export interface Quest {
  id: number;
  title: string;
  description: string;
  status: string;
  owner_id?: number;
  editor_id?: number;
  parent_id?: number;
}