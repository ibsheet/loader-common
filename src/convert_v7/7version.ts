interface V7 {
  convertTreeData: (data7: any) => any;
  convertDateFormat: (obj: any) => void;
  convertAcceptKeys: (objColumn: any, str: any) => void;
  (obj: any): void;
  (data7: any[]): void;
}

interface IBSHEETCONVERT {
  v7: V7
}

export interface IB_OBJ {
  [index: string]: any
}

export let IBSheetConvert: IBSHEETCONVERT;

