CREATE TABLE `colleges_table` (
	`abbrivation` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `departments_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`abbrivation` text,
	`college` text NOT NULL,
	FOREIGN KEY (`college`) REFERENCES `colleges_table`(`abbrivation`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`fname` text NOT NULL,
	`lname` text NOT NULL,
	`class_year` integer NOT NULL,
	`department_id` integer NOT NULL,
	`bio` text,
	FOREIGN KEY (`department_id`) REFERENCES `departments_table`(`id`) ON UPDATE no action ON DELETE no action
);
