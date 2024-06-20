/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `createDate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updateDate` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
