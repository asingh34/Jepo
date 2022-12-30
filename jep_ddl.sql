drop table if exists users;  
drop table if exists questions; 
drop table if exists gameboards; 


 
CREATE TABLE users(
    id uuid default uuid_generate_v1(), 
    name text,
    email text,
    phone text,
    wins int,
    losses int,
    rank int, 
    primary key (id)
);

 
CREATE TABLE questions(
    id uuid default uuid_generate_v1(), 
    shownumber text, 
    airdate text,
    round text,
    category text,
    value text,
    question text, 
    answer text, 
    primary key (id)
); 

CREATE TABLE gameboards(
    id uuid default uuid_generate_v1(),
    name text,
    datecreated date,
    description text, 
    round text, 
    rating int, 
    questions text [][],
    primary key (id)    
); 




