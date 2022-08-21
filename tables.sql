CREATE DATABASE auction;


CREATE table sports (
		id serial PRIMARY KEY,
		name VARCHAR (100) UNIQUE NOT NULL,
		data JSON,
		created_date TIMESTAMP,
		modified_date TIMESTAMP
);

CREATE table leagues (
		id serial PRIMARY KEY,
		name VARCHAR (100) UNIQUE NOT NULL,
		data JSON,
		created_date TIMESTAMP,
		modified_date TIMESTAMP
);

