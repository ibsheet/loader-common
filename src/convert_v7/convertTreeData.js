/* ibsheet7의 Tree 구조 Json 데이터를 ibsheet8 형식에 맞게 파싱해주는 메소드 */
IBSheetConvert.v7.convertTreeData = data7 => {
    let targetArr;
    let startLevel = 0;
    const toString = Object.prototype.toString;

    switch (toString.call(data7)) {
      case "[object Object]":
        if (!(data7["data"] || data7["Data"]) ||
          toString.call((data7["data"] || data7["Data"])) !== "[object Array]")
          return false;
        targetArr = (data7["data"] || data7["Data"]);
        break;
      case "[object Array]":
        targetArr = data7;
        break;
      default:
        return false;
    }

    targetArr = targetArr.reduce((accum, currentVal, curretIndex, array) => {
      const cloneObj = clone(currentVal);
      if (cloneObj["HaveChild"]) {
        cloneObj["Count"] = true;
        delete cloneObj["HaveChild"];
      }
      if (accum.length === 0) {
        startLevel = parseInt(cloneObj["Level"]);
        delete cloneObj["Level"];
        accum.push(cloneObj);
      } else if (currentVal["Level"] <= startLevel) {
        startLevel = parseInt(cloneObj["Level"]);
        delete cloneObj["Level"];
        accum.push(cloneObj);
      } else if (currentVal["Level"]) {
        let parent = accum[accum.length - 1];
        for (let i = startLevel; i < parseInt(currentVal["Level"]); i++) {
          if (i === parseInt(currentVal["Level"]) - 1) {
            if (!parent.Items) {
              parent.Items = [];
            }
            delete cloneObj["Level"];
            parent.Items.push(cloneObj);
          } else {
            parent = parent.Items[parent.Items.length - 1];
          }
        }
      }
      return accum;
    }, []);

    delete data7["Data"];
    data7["data"] = targetArr;

  return data7;
};
