interface V7 {
  (objColumn: any, str: string): void;
  (obj: any): void;
  (data7: any[]): void;
}

interface IBSHEETCONVERT {
  v7: V7
}

interface IB_OBJ {
  [index: string]: any
}

export let IBSheetConvert: IBSHEETCONVERT;

function clone(obj: IB_OBJ | null): object {
  if (obj === null || typeof obj !== 'object') return obj as any;
  const copy = obj.constructor();

  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr]);
    }
  }
  return copy;
}
