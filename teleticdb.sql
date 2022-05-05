-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2022 at 02:10 PM
-- Server version: 10.3.34-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teleticdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `parent_id` int(10) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `is_subcategory` tinyint(1) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `name`, `is_subcategory`, `created_at`, `updated_at`) VALUES
(1, 0, 'Caller Services', 0, '2022-04-14', '2022-04-28'),
(2, 0, 'Internet Services', 0, '2022-04-13', '2022-04-28'),
(3, 1, 'Slow Call Connection ', 1, '2022-04-21', '2022-04-01'),
(4, 1, 'Wifi speed slow', 1, '2022-04-28', '2022-04-30'),
(6, 2, 'Internet is not fast', 0, '2022-04-28', '2022-04-30'),
(8, 2, 'Internet is now working', 0, '2022-04-17', '2022-04-17'),
(108, 0, 'Recharge Services', 0, '2022-04-20', '2022-04-20'),
(109, 108, 'Call Disconnection', 1, '2022-04-20', '2022-04-20'),
(110, 0, 'BroadBand', 0, '2022-04-20', '2022-04-20'),
(114, 0, 'Wifi Connection', 0, '2022-04-21', '2022-04-21'),
(115, 108, 'vodafone services', 1, '2022-04-21', '2022-04-21'),
(116, 114, 'GTPL Wifi', 1, '2022-04-21', '2022-04-21'),
(117, 3, 'Call Services are very bad', 0, '2022-04-21', '2022-04-29'),
(118, 109, 'Broad', 0, '2022-04-28', '2022-04-30'),
(119, 115, 'Vodafone network issues', 0, '2022-04-27', '2022-04-28'),
(120, 116, 'GTPL COnnection Lost', 0, '2022-04-28', '2022-04-30'),
(121, 4, 'Wifi Router has no range', 0, '2022-04-28', '2022-04-30'),
(122, 0, 'Wireless Conn', 0, '2022-04-22', '2022-04-22'),
(126, 110, 'Broadband Issues', 1, '2022-04-25', '2022-04-25'),
(127, 2, 'Internet Services Issues', 1, '2022-04-25', '2022-04-25'),
(128, 122, 'Wireless COMM Issues', 1, '2022-04-25', '2022-04-25'),
(129, 127, 'Speed is  very low', 0, '2022-04-25', '2022-04-25'),
(130, 126, 'Cable issues', 0, '2022-04-25', '2022-04-25');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) NOT NULL,
  `ticket_id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(10) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Finance', '2022-03-29', '2022-03-29'),
(2, 'Management', '2022-03-02', '2022-03-02'),
(3, 'IT', '2022-03-24', '2022-03-24'),
(4, 'HR', '2022-03-31', '2022-03-31'),
(24, 'Operations', '2022-04-06', '2022-04-06'),
(25, 'Finance&HR', '2022-04-06', '2022-04-06'),
(32, 'Maintanence', '2022-04-19', '2022-04-19');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(10) NOT NULL,
  `ticket_id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `histories`
--

INSERT INTO `histories` (`id`, `ticket_id`, `user_id`, `message`, `created_at`) VALUES
(1, 12, 13, 'Okay', '2022-03-02'),
(2, 15, 16, 'Issue pending', '2022-03-17'),
(3, 17, 18, 'Problem Solved', '2022-03-26'),
(4, 19, 20, 'Okay Done', '2022-03-25'),
(5, 142, 1, 'Hello', '2022-04-26'),
(6, 146, 1, 'Hello', '2022-04-26'),
(7, 147, 1, 'has created ticket successfully', '2022-04-26'),
(8, 148, 1, 'Dhwani Sanghvi', '2022-04-26'),
(9, 149, 1, 'Dhwani Sanghvi', '2022-04-26'),
(21, 1130, 1, 'Dhwani Sanghvihas created successfully', '2022-04-26'),
(22, 1230, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-26'),
(23, 188, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27'),
(24, 1889, 1, 'Dhwani Sanghvihas updated ticket successfully', '2022-04-27');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `created_by` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ticket_id` int(10) NOT NULL,
  `category_id` int(20) NOT NULL,
  `subcategory_id` int(20) NOT NULL,
  `title_id` int(20) NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `department_id` int(20) NOT NULL,
  `last_changed` date NOT NULL,
  `status` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `user_id`, `created_by`, `ticket_id`, `category_id`, `subcategory_id`, `title_id`, `description`, `department_id`, `last_changed`, `status`, `created_at`, `updated_at`) VALUES
(36, 1, 'Admin', 12465, 108, 115, 119, 'Call Disconnects very abruptly', 24, '2022-04-25', 'Active', '2022-04-25', '2022-04-25'),
(39, 1, 'Admin', 129, 110, 126, 130, 'Please Change the cable', 24, '2022-04-25', 'Active', '2022-04-25', '2022-04-25'),
(42, 1, 'Admin', 130, 1, 4, 121, 'Need new router', 4, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(43, 1, 'Admin', 133, 2, 127, 129, 'Need new Connection', 32, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(44, 1, 'Admin', 10, 20, 12, 333, 'Driver issues', 32, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(45, 1, 'Admin', 136, 108, 109, 118, 'calling services', 3, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(46, 1, 'Admin', 137, 108, 115, 119, 'Change', 32, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(47, 1, 'Admin', 140, 2, 127, 129, 'Need proper Connection', 32, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(48, 1, 'Admin', 141, 110, 126, 130, 'need new cable', 25, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(49, 1, 'Admin', 142, 110, 126, 130, 'Change wires', 24, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(50, 1, 'Admin', 146, 1, 3, 117, 'Improve network', 25, '2022-04-26', 'Active', '2022-04-26', '2022-04-26'),
(51, 1, 'Admin', 147, 114, 116, 120, 'Need service for settop box', 4, '2022-04-26', 'Active', '2022-04-26', '2022-04-26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `role_id` int(10) NOT NULL,
  `full_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `full_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 1, 'Dhwani Sanghvi', 'dhwani@123.com', 'ds123', '2022-04-21', '2022-04-28'),
(2, 0, 'Aesha Shah', 'aesha@123', 'aesha123', '2022-04-25', '2022-04-27'),
(3, 1, 'Drashti Manvar', 'drashti@123', 'drashti123', '2022-04-29', '2022-04-30'),
(4, 1, 'Unnati Shah', 'unnati@123', 'unnati123', '2022-04-14', '2022-04-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ticket_id` (`ticket_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
