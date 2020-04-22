
CREATE TABLE klingons
(
	id int NOT NULL	AUTO_INCREMENT,
	kword varchar(255) NOT NULL,
	english varchar(255) NOT NULL,
   	mastered BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
