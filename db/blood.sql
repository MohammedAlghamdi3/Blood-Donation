DROP DATABASE IF EXISTS blood;
CREATE DATABASE blood;


CREATE TABLE bloodusers(
  id serial primary key, 
  name varchar(255), 
  city varchar(255), 
  blood_type varchar(255), 
    phone varchar(255),
    my_date date,
  details varchar(255)
    );


CREATE TABLE gender(
    id INT, 
    gender varchar(255)
); 



INSERT INTO bloodusers 
( id, name, city, blood_type, phone, my_date, details) 
VALUES 
(1, 'MOHAMMED',  'Medina', 'O', '0500000000', '2018-06-1', 'noun'),
(2, 'MOHAMMED',  'Riyadh', 'A', '0500000000', '2018-07-21','noun'),
(3, 'MOHAMMED',  'Makkah', 'B', '0500000000', '2018-09-15','noun'),
(4, 'MOHAMMED',  'Medina', 'A', '0500000000', '2018-01-26','noun'),
(5, 'MOHAMMED',  'Dammam', 'O', '0500000000', '2018-03-5','noun'),
(6, 'MOHAMMED',  'Riyadh', 'B', '0500000000', '2018-06-23','noun'),
(7, 'MOHAMMED',  'Dammam', 'A', '0500000000', '2018-11-11','noun'),
(8, 'MOHAMMED',  'Medina', 'O', '0500000000', '2018-11-19','noun'),
(9, 'MOHAMMED',  'Riyadh', 'B', '0500000000', '2018-12-23','noun'),
(10,'MOHAMMED',  'Dammam', 'O', '0500000000', '2018-08-16','noun'),
(11,'MOHAMMED',  'Medina', 'B', '0500000000', '2018-09-3','noun'),
(12,'MOHAMMED',  'Makkah', 'AB','0500000000', '2018-03-2','noun'),
(13,'MOHAMMED',  'Riyadh', 'O', '0500000000', '2018-05-5','noun'),
(14,'MOHAMMED',  'Makkah', 'O', '0500000000', '2018-03-7','noun'),
(15,'MOHAMMED',  'Dammam', 'B', '0500000000', '2018-05-8','noun'),
(16,'MOHAMMED',  'Riyadh', 'O', '0500000000', '2018-01-2','noun'),
(17,'MOHAMMED',  'Makkah', 'A', '0500000000', '2018-02-9','noun'),
(18,'MOHAMMED',  'Riyadh', 'AB','0500000000', '2018-05-1','noun'),
(19,'MOHAMMED',  'Dammam', 'A', '0500000000', '2018-04-6','noun'),
(20,'MOHAMMED',  'Makkah', 'B', '0500000000', '2018-03-26','noun'),
(21,'MOHAMMED',  'Makkah', 'A', '0500000000', '2018-04-11','noun'),
(22,'MOHAMMED',  'Riyadh', 'O', '0500000000', '2018-02-13','noun'),
(23,'MOHAMMED',  'Makkah', 'B', '0500000000', '2018-02-21','noun'),
(24,'MOHAMMED',  'Dammam', 'A', '0500000000', '2018-01-1', 'noun'),
(25,'MOHAMMED',  'Medina', 'A','0500000000', '2018-01-5', 'noun'),
(26,'MOHAMMED',  'Medina', 'O','0500000000', '2018-01-1', 'noun'),
(27,'MOHAMMED',  'Medina', 'A','0500000000', '2018-01-7', 'noun'),
(28,'MOHAMMED',  'Medina', 'B','0500000000', '2018-01-6', 'noun'),
(29,'MOHAMMED',  'Riyadh', 'AB','0500000000', '2018-01-6', 'noun');


INSERT INTO gender 
(id,gender) 
VALUES 
(1,'Male'),
(2,'Female'),
(3,'Male'),
(4,'Female'),
(5,'Male'),
(6,'Male'),
(7,'Female'),
(8,'Female'),
(9,'Male'),
(10,'Female'),
(11,'Male'),
(12,'Male'),
(13,'Female'),
(14,'Female'),
(15,'Male'),
(16,'Male'),
(17,'Female'),
(18,'Male'),
(19,'Female'),
(20,'Male'),
(21,'Male'),
(23,'Female'),
(24,'Female'),
(25,'Female'),
(26,'Female'),
(27,'Female'),
(28,'Male'),
(29,'Female');



