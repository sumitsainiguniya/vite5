import { Color } from "../Component.interface";

export interface STableProps {
  id?: string;
  headerClass?: string;
  headerBGColor?: Color;
  rowBGColor?: Color;
  rowClass?: string;
  columns: STableColumn[];
  rows: any[];
}

export interface STableColumn {
  key?: string;
  value?: string;
  cellClass?: string;
  headerClass?: string;
}
