/*
  Warnings:

  - You are about to drop the column `rfidKey` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_rfidKey_key` ON `User`;

-- AlterTable
ALTER TABLE `Order` MODIFY `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    MODIFY `updatedBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM';

-- AlterTable
ALTER TABLE `OrderItem` ADD COLUMN `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM';

-- AlterTable
ALTER TABLE `User` DROP COLUMN `rfidKey`;
