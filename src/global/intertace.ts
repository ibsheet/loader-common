type ALIGN = 'Left' | 'Center' | 'Right';

interface IB_Date {
  Type?: string;
  Align?: ALIGN;
  Width?: number;
  Format?: string;
  DataFormat?: string;
  EditFormat?: string;
  Size?: number;
  EmptyValue?: string;
}

interface IB_Number {
  Type?: string;
  Align?: ALIGN;
  Format?: string;
  Width?: number;
}

interface IB_STAUS {
  I: string;
  U: string;
  D: string;
  R: string;
}

interface IB_RowType {
  [x: string]: any;
}

interface IB_OnClick {
  (row: IB_RowType, col: string , sheet: any): void;
}

interface IB_OnChange {
  (row: IB_RowType, col: string, sheet: any): void;
}

interface IB_ETC {
  Type?: string;
  Align?: ALIGN;
  CustomFormat?: string;
  Width?: number;
  Button?: string;
  Formula?: string;
  Format?: IB_STAUS;
  OnClick?: IB_OnClick;
  OnChange?: IB_OnChange;
}

interface Preset {
  YMD: IB_Date;
  YM: IB_Date;
  MD: IB_Date;
  HMS: IB_Date;
  HM: IB_Date;
  YMDHMS: IB_Date;
  YMDHM: IB_Date;
  MDY: IB_Date;
  DMY: IB_Date;
  Integer: IB_Number;
  NullInteger: IB_Number;
  Float: IB_Number;
  NullFloat: IB_Number;
  IdNo: IB_ETC;
  SaupNo: IB_ETC;
  PostNo: IB_ETC;
  CardNo: IB_ETC;
  PhoneNo: IB_ETC;
  Number: IB_ETC;
  Popup: IB_ETC;
  STATUS: IB_ETC;
  DelCheck: IB_ETC;
}

export {
  IB_Date,
  IB_Number,
  IB_STAUS,
  IB_RowType,
  IB_OnClick,
  IB_OnChange,
  IB_ETC,
  Preset
}