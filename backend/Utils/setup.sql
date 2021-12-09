CREATE TABLE "users"(
    "idUser" INTEGER,
    "lastName" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "accountType" BOOLEAN NOT NULL
);

CREATE TABLE "recettes"(
    "idRecette" INTEGER PRIMARY KEY,
    "idUser" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL
);

CREATE TABLE "attendances"(
    "idAttendance" INTEGER PRIMARY KEY,
    "idUser" INTEGER NOT NULL,
    "day" DATE NOT NULL,
    "morning" BOOLEAN NOT NULL,
    "evening" BOOLEAN NOT NULL
);

CREATE TABLE "tokens"(
    "idToken" INTEGER PRIMARY KEY,
    "isUser" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expiration" DATE NOT NULL
);