/*
  Warnings:

  - You are about to drop the column `name` on the `Author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userName` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Author` DROP COLUMN `name`,
    ADD COLUMN `userName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Author_userName_key` ON `Author`(`userName`);

-- CreateIndex
CREATE UNIQUE INDEX `Author_email_key` ON `Author`(`email`);
