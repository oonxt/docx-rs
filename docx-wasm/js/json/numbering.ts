import { ParagraphPropertyJSON } from "./paragraph";

export type LevelJSON = {
  level: number;
  start: number;
  format: string;
  text: string;
  jc: string;
  pstyle: string | null;
  paragraphProperty: ParagraphPropertyJSON;
};

export type AbstractNumberingJSON = {
  id: number;
  levels: LevelJSON[];
};

export type NumberingJSON = {
  id: number;
  abstractNumId: number;
};
