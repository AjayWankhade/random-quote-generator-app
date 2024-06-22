-- DropForeignKey
ALTER TABLE `quote` DROP FOREIGN KEY `Quote_userId_fkey`;

-- AlterTable
ALTER TABLE `quote` MODIFY `userId` INTEGER NULL,
    MODIFY `updateDate` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `Quote` ADD CONSTRAINT `Quote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;
