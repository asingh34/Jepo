drop table admin; 
drop table questions; 
drop table users; 
drop table gameboard; 
drop table leaderboard;

CREATE TABLE admin(
    adminid text, 
    name text,
    email text,
    phone text
);

CREATE TABLE questions(
    quesid uuid default uuid_generate_v1() primary key, 
    shownumber text, 
    airdate text,
    round text,
    category text,
    value text,
    question text, 
    answer text 
); 

CREATE TABLE users(
    userid uuid default uuid_generate_v1() primary key, 
    name text,
    email text,
    phone text,
    wins int,
    losses int 
);

CREATE TABLE gameboard(
    gbid uuid default uuid_generate_v1() primary key,
    name text,
    datecreated date,
    description text, 
    round text, 
    rating int
); 

CREATE TABLE leaderboard(
    rank int,
    wlratio int,
    lbid uuid default uuid_generate_v1() foreign key
); 



