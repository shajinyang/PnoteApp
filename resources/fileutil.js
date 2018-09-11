

/**
 * 新增
 * @param {值} value 
 */
function insertNewData(value){
    if(!window.localStorage){
        return false
    }else{
        var storage=window.localStorage
       if(storage.length>0){
         var lastKey=storage.key(storage.length-1);
         parseInt(lastKey)+1;//索引自增
         value.index=parseInt(lastKey)+1;
         let jvalue= JSON.stringify(value);
         storage.setItem(parseInt(lastKey)+1,jvalue);
       }else{
        value.index=0;
        let jvalue= JSON.stringify(value);
        storage.setItem(0,jvalue);
       }
      
       
    }
}

/**
 * 单条修改
 * @param {*键} key 
 * @param {*值} value 
 */
function updateData(key,value){
    deleteData(key)
    insertNewData(value)
}


/**
 * 获取所有数据
 */
function queryAllData(){
    if(!window.localStorage){
        return false
    }else{
        var strorage=window.localStorage
        var items=[];
        for(var i=0;i<strorage.length;i++){
            var value=strorage.getItem(strorage.key(i))
            items.push(JSON.parse(value))
        }
        return items
    }
}


/**
 * 根据键查询某一条数据
 * @param {键} key 
 */
function queryDataByKey(key){

}

/**
 * 删除
 * @param {键} key 
 */
function deleteData(key){
    var storage=window.localStorage
    storage.removeItem(key)
}
