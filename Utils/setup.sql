CREATE TABLE "users"(
    "iduser" TEXT PRIMARY KEY,
    "lastname" VARCHAR(255) NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "accounttype" BOOLEAN NOT NULL
);

CREATE TABLE "recettes"(
    "idrecette" TEXT PRIMARY KEY,
    "iduser" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL
);

CREATE TABLE "attendances"(
    "idattendance" TEXT PRIMARY KEY,
    "iduser" TEXT NOT NULL,
    "day" DATE NOT NULL,
    "morning" BOOLEAN NOT NULL,
    "evening" BOOLEAN NOT NULL
);

CREATE TABLE "tokens"(
    "idtoken" TEXT PRIMARY KEY,
    "iduser" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiration" DATE NOT NULL
);