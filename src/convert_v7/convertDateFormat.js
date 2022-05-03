//Date Format migration
//exam)
/*
//데이터 로드 이벤트에서 호출합니다.
options.Events.onBeforeDataLoad: obj => {
  //날짜포맷 컬럼의 값을 ibsheet8에 맞게 변경하여 로드시킴
}
*/
IBSheetConvert.v7.convertDateFormat = obj => {
  const cdata = obj.data;
  const changeCol = {};
  //날짜 컬럼에 대한 포맷을 별도로 저장
  const cols = obj.sheet.getCols();
  for (let i = 0; i < cols.length; i++) {
    const colName = cols[i];

    if (obj.sheet.Cols[colName].Type === 'Date') {
      //DataFormat이 없으면 EditFormat 이나 포맷에서 알파벳만 추출
      const format = (obj.sheet.Cols[colName].DataFormat) ? obj.sheet.Cols[colName].DataFormat : (obj.sheet.Cols[colName].EditFormat) ? obj.sheet.Cols[colName].EditFormat : obj.sheet.Cols[colName].Format.replace(/([^A-Za-z])+/g, '');
      changeCol[colName] = {
        format: format,
        length: format.length
      };
    }
  }

  if (Object.keys(changeCol).length !== 0) {
    const changeColKeys = Object.keys(changeCol);

    //DataFormat의 길이만큼 문자열을 자름
    for (let row = 0; row < cdata.length; row++) {
      for (const colName in cdata[row]) {
        if (changeColKeys.indexOf(colName) > -1) {
          // 문자열만 처리
          if (typeof ((cdata[row])[colName]) === 'string') {
            //실제 값
            let v = (cdata[row])[colName];
            //MMdd만 값이 8자리 이상이면 중간에 4자리만 pick
            if (changeCol[colName].format === 'MMdd' && v.length !== 4) {
              if (v.length > 7) {
                v = v.substr(4, 4);
              }
            } else {
              //일반적으로 모두 포맷의 문자열 길이만큼 자름
              v = v.substr(0, changeCol[colName].length);
            }
            //수정한 값을 원래 위치에 대입
            (cdata[row])[colName] = v;
          }
        }
      }
    }
  }
};
