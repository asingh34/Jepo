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
    id uuid default uuid_generate_v1() primary key, 
    shownumber text, 
    airdate text,
    round text,
    category text,
    value text,
    question text, 
    answer text 
); 

CREATE TABLE users(
    userid text, 
    name text,
    email text,
    phone text,
    wins int,
    losses int 
);

CREATE TABLE gameboard(
    boardid text,
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



