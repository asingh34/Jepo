drop table admin; 
drop table questions; 
drop table users; 
drop table gameboard; 
drop table leaderboard;

CREATE TABLE admin(
    adminid uuid, 
    name text,
    email text,
    phone text
);

CREATE TABLE questions(
    id uuid, 
    shownumber text, 
    airdate text,
    round text,
    category text,
    value text,
    question text, 
    answer text 
); 

CREATE TABLE users(
    userid uuid, 
    name text,
    email text,
    phone text,
    wins int,
    losses int 
);

CREATE TABLE gameboard(
    boardid uuid,
    name text,
    datecreated date,
    description text, 
    round text, 
    rating int
); 

CREATE TABLE leaderboard(
    rank int,
    wlratio int,
    userid uuid
); 



