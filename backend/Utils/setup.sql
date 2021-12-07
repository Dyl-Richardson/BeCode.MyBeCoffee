CREATE TABLE "users"(
    "idUser" INTEGER,
    "lastName" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "accountType" BOOLEAN NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("idUser");
CREATE TABLE "recettes"(
    "idRecette" INTEGER,
    "idUser" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "recettes" ADD PRIMARY KEY("idRecette");
CREATE TABLE "attendances"(
    "idAttendance" INTEGER,
    "idUser" INTEGER NOT NULL,
    "day" DATE NOT NULL,
    "morning" BOOLEAN NOT NULL,
    "evening" BOOLEAN NOT NULL
);
ALTER TABLE
    "attendances" ADD PRIMARY KEY("idAttendance");
CREATE TABLE "tokens"(
    "idToken" INTEGER,
    "isUser" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expiration" DATE NOT NULL
);
ALTER TABLE
    "tokens" ADD PRIMARY KEY("idToken");
ALTER TABLE
    "attendances" ADD CONSTRAINT "attendances_iduser_foreign" FOREIGN KEY("idUser") REFERENCES "users"("idUser");
ALTER TABLE
    "tokens" ADD CONSTRAINT "tokens_isuser_foreign" FOREIGN KEY("isUser") REFERENCES "users"("idUser");
