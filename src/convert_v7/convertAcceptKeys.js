/*
 * ibsheet7 AcceptKey 속성 대응
 * param list
 * objColumn : 시트 생성시 Cols객체의 컬럼
 * str : ibsheet7 AcceptKeys에 정의했던 스트링
 */
IBSheetConvert.v7.convertAcceptKeys = (objColumn, str) => {
  // EditMask를 통해 AcceptKeys를 유사하게 구현
  const acceptKeyArr = str.split('|');
  let mask = '';

  for (let i = 0; i < acceptKeyArr.length; i++) {
    switch (acceptKeyArr[i]) {
      case 'E':
        mask += '|\\w';
        break;
      case 'N':
        mask += '|\\d';
        break;
      case 'K':
        mask += '|\\u3131-\\u314e|\\u314f-\\u3163|\\uac00-\\ud7a3';
        break;
      default:
        if (acceptKeyArr[i].substring(0, 1) === '[' && acceptKeyArr[i].substring(acceptKeyArr[i].length - 1) === ']') {
          let otherKeys = acceptKeyArr[i].substring(1, acceptKeyArr[i].length - 1);
          for (let x = 0; x < otherKeys.length; x++) {
            if (otherKeys[x] === '.' || otherKeys[x] === '-') {
              mask += '|\\' + otherKeys[x];
            } else {
              mask += '|' + otherKeys[x];
            }
          }
        }
        break;
    }
  }
  objColumn.EditMask = '^[' + mask.substring(1) + ']*$';
};
