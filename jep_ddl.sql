drop table if exists admins;
drop table if exists users;  
drop table if exists questions; 
drop table if exists gameboards; 
drop table if exists leaderboard;


CREATE TABLE admins(
    admn_id uuid default uuid_generate_v1(), 
    admn_name text,
    admn_email text,
    admn_phone text,
    primary key(admn_id) 
);

CREATE TABLE users(
    usr_id uuid default uuid_generate_v1(), 
    usr_name text,
    usr_email text,
    usr_phone text,
    wins int,
    losses int, 
    primary key (usr_id),
    constraint fk_admin
        foreign key(admn_id)
        references admins(admn_id)
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

CREATE TABLE leaderboard(
    rank int,
    wlratio int,
    constraint fk_users
        foreign key (user_id)
            references users (user_id)
        
); 



