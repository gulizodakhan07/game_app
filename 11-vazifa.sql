 
-- vazifada aytilganidek 2ta modalga malumot yozildi
 CREATE TABLE game(id INTEGER PRIMARY KEY,title VARCHAR(255),descriptions VARCHAR(255));

 INSERT INTO game VALUES(1,'tetris oyini','Tetris- mashhur va qiziqarli oyin bolib,bunda siz bloklarni joylashtirib toldirib chiqishingiz kerak boladi');  
 INSERT INTO game VALUES(2,'x va 0 oyini','x va 0 oyini - bu ikki kishilik oyin bolib,3x3 korinishda katakchalar boladi va kim birinchi bolib ularni toldirsa u golib boladi');




 --order by =>osish tartibida tartiblash
 --group by => 



CREATE TABLE categories(id SMALLINT,typeS VARCHAR(255),imageS VARCHAR(255),store_id BIGINT,PRIMARY KEY(id),FOREIGN KEY (store_id) REFERENCES store(id));