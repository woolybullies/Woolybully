--These are the bullies and their phrases
CREATE TABLE bullies(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(100)NOT NULL,
  type VARCHAR(100)NOT NULL,
  --tie bully to category and for use with other API's like giphy
  category_id INT NOT NULL,
  strength INT NOT NULL,
  --how much money they can take - for expansion
  power DECIMAL(10,2) NULL,
  --phrases the bully will use
  phrase_a VARCHAR(100)NOT NULL,
  phrase_b VARCHAR(100)NOT NULL,
  phrase_c VARCHAR(100)NOT NULL,
  phrase_d VARCHAR(100)NOT NULL,
  phrase_e VARCHAR(100)NOT NULL,
  phrase_f VARCHAR(100)NOT NULL,
  phrase_g VARCHAR(100)NOT NULL,
  phrase_h VARCHAR(100)NOT NULL,
  PRIMARY KEY (id)
);
--log eachtime someone gets bullied to avoid duplicate bully notifications
CREATE TABLE bully_log(
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  goal_name VARCHAR(100)NOT NULL,
  bully_name VARCHAR(100)NOT NULL,
  phrase_used VARCHAR(100)NOT NULL,
  money_taken DECIMAL(10,2) NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
--goals and categories
CREATE TABLE categories(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(100)NOT NULL,
  type VARCHAR(100)NOT NULL,
  PRIMARY KEY (id)
);


--configuration of user goals
CREATE TABLE goals(
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  name VARCHAR(100)NOT NULL,
  category_id INT NOT NULL,
  daily_occurance DATETIME NOT NULL,
  importance INT(100)NOT NULL,
  -- military time
  day_start DATETIME NOT NULL,
  day_end DATETIME NOT NULL,
  -- will allow for middle of the night wakeup calls
  allow_wake BOOLEAN NOT NULL,
  --tre false for active not active
  status BOOLEAN NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  lastUpdated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE  users(
  user_id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(100)NOT NULL,
  email VARCHAR(100)NOT NULL,
  phone VARCHAR(15)NOT NULL
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  lastUpdated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);