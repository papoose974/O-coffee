DROP TABLE IF EXISTS "ocoffee";

CREATE TABLE IF NOT EXISTS "ocoffee" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "intensity" TEXT,
  "origine" TEXT,
  "price" REAL NOT NULL,
  "variety" TEXT
);

set client_encoding to utf8;

INSERT INTO "ocoffee"("id","name", "intensity","origine", "price", "variety") VALUES
(1,'Ethiopian Yirgacheffe', 'Moyenne','Éthiopie','22.50','Arabica'),
(2,'Colombian Supremo', 'Moyenne à forte','Colombie','18.50','Robusta'),
(3,'Guatemala Antigua', 'Forte','Guatemala','19.50','Arabica'),
(4,'Brazil Santos', 'Légère à Moyenne','Brésil','21.50','Liberica'),
(5,'Kenya AA', 'Moyenne','Kenya','22.50','Arabica');