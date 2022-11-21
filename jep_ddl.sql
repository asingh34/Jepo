drop table if exists users;  
drop table if exists questions; 
drop table if exists gameboards; 


 
CREATE TABLE users(
    usr_id uuid default uuid_generate_v1(), 
    usr_name text,
    usr_email text,
    usr_phone text,
    usr_wins int,
    usr_losses int,
    usr_rank int, 
    primary key (usr_id)
);

 
CREATE TABLE questions(
    ques_id uuid default uuid_generate_v1(), 
    shownumber text, 
    airdate text,
    round text,
    category text,
    value text,
    question text, 
    answer text, 
    primary key (ques_id)
); 

CREATE TABLE gameboards(
    gboard_id uuid default uuid_generate_v1(),
    name text,
    datecreated date,
    description text, 
    round text, 
    rating int, 
    questions text [][],
    primary key (gboard_id)    
); 




