/*
  Warnings:

  - Added the required column `birth_place` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "birth_place" TEXT NOT NULL,
    CONSTRAINT "Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("id", "user_id") SELECT "id", "user_id" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_user_id_key" ON "Profile"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
