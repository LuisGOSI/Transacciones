-- CreateTable
CREATE TABLE `staff_details_view` (
    `staff_id` INTEGER NOT NULL,
    `rfc_staff` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `paternal_surname` VARCHAR(191) NOT NULL,
    `maternal_surname` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number_street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `income_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`staff_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
