// var base = require('base');

module.exports = app => {
  const table_name = 'account';
  const db_name = 'db1703281119';

  const db = app.mysql.get(db_name);

  function* create_table(){
      var buff = yield exist();
      // console.log('----------','buff',buff);

      if(buff)return;

      var sql = 'CREATE TABLE `' + table_name;
      sql += '`(';
      sql += '`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,';
      sql += '`name` varchar(255),';
      sql += '`pass` varchar(255),';
      sql += '`manage` varchar(4000),';
      sql += '`pn_user` varchar(10),';
      sql += '`pn_export` varchar(10),';
      sql += '`pn_machine` varchar(10),';
      sql += '`pn_root` varchar(10)';
      sql += ')ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;';

      // console.log('创建数据表',sql);


      // console.log('***********************',db_name)
      //创建数据表
      yield db.query(sql);
      const result = yield db.insert(table_name, {
        name : 'root',
        pass : 'root',
        manage : 'all',
        pn_user : 'true',
        pn_export : 'true',
        pn_machine : 'true',
        pn_root : 'true'
      });
      if(result.affectedRows === 1){
        console.log('***************','创建account数据表成功')          
      }
  }

  function* exist(){
    let sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME='"+ table_name +"' ;";
    
    const result = yield db.query(sql);
      // console.log('----------',result);
    if(result.length <= 1){//不存在该数据表
      return false;
    }else{
      return true;
    }
  }


  return class User extends app.Service {

    * get(option) {

      const result = yield db.get(table_name, option);
      // => SELECT * FROM `posts` WHERE `id` = 12 LIMIT 0, 1;

      // console.log('Service-get', result)
      return result[0];
    }

    * add(option){
      const result = yield db.insert(table_name, option); // 在 table_name 表中，插入 title 为 Hello World 的记录
      // =>
      // {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 3710,
      //   serverStatus: 2,
      //   warningCount: 2,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0
      // }
      // 判断插入成功
      const insertSuccess = result.affectedRows === 1;
      if(result.affectedRows === 1)return true
    }
    * del(option){
      const result = yield db.delete(table_name, option);

      // => DELETE FROM `posts` WHERE `author` = 'fengmk2';
    }
    //必须设置id
    * set(option){
      // 修改数据，将会根据主键 ID 查找，并更新
      const result = yield db.update(table_name, option); // 更新 posts 表中的记录
      // => UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE id = 123 ;
      // 判断更新成功
      const updateSuccess = result.affectedRows === 1;
      if(updateSuccess)return true
    }

    * init(){
        yield create_table();
    }



  }
};