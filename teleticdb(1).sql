-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 05, 2022 at 12:07 PM
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
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `name`, `is_subcategory`, `created_at`, `updated_at`) VALUES
(1, 0, 'Caller Services', 0, '2022-04-14 00:00:00', '2022-04-28 00:00:00'),
(2, 0, 'Internet Services', 0, '2022-04-13 00:00:00', '2022-04-28 00:00:00'),
(3, 1, 'Slow Call Connection ', 1, '2022-04-21 00:00:00', '2022-04-01 00:00:00'),
(4, 1, 'Wifi speed slow', 1, '2022-04-28 00:00:00', '2022-04-30 00:00:00'),
(6, 2, 'Internet is not fast', 0, '2022-04-28 00:00:00', '2022-04-30 00:00:00'),
(8, 2, 'Internet is now working', 0, '2022-04-17 00:00:00', '2022-04-17 00:00:00'),
(108, 0, 'Recharge Services', 0, '2022-04-20 00:00:00', '2022-04-20 00:00:00'),
(109, 108, 'Call Disconnection', 1, '2022-04-20 00:00:00', '2022-04-20 00:00:00'),
(110, 0, 'BroadBand', 0, '2022-04-20 00:00:00', '2022-04-20 00:00:00'),
(114, 0, 'Wifi Connection', 0, '2022-04-21 00:00:00', '2022-04-21 00:00:00'),
(115, 108, 'vodafone services', 1, '2022-04-21 00:00:00', '2022-04-21 00:00:00'),
(116, 114, 'GTPL Wifi', 1, '2022-04-21 00:00:00', '2022-04-21 00:00:00'),
(117, 3, 'Call Services are very bad', 0, '2022-04-21 00:00:00', '2022-04-29 00:00:00'),
(118, 109, 'Broad', 0, '2022-04-28 00:00:00', '2022-04-30 00:00:00'),
(119, 115, 'Vodafone network issues', 0, '2022-04-27 00:00:00', '2022-04-28 00:00:00'),
(120, 116, 'GTPL COnnection Lost', 0, '2022-04-28 00:00:00', '2022-04-30 00:00:00'),
(121, 4, 'Wifi Router has no range', 0, '2022-04-28 00:00:00', '2022-04-30 00:00:00'),
(122, 0, 'Wireless Conn', 0, '2022-04-22 00:00:00', '2022-04-22 00:00:00'),
(126, 110, 'Broadband Issues', 1, '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(127, 2, 'Internet Services Issues', 1, '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(128, 122, 'Wireless COMM Issues', 1, '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(129, 127, 'Speed is  very low', 0, '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(130, 126, 'Cable issues', 0, '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(135, 126, 'Connection Not proper', 0, '2022-04-29 16:11:56', '2022-04-29 16:11:56');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) NOT NULL,
  `ticket_id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `ticket_id`, `user_id`, `message`, `created_at`) VALUES
(1, 36, 2, 'Helo', '2022-04-29 16:55:12.000000'),
(2, 39, 1, 'Hi ALl', '2022-04-20 16:55:45.000000');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(10) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Finance', '2022-03-29 00:00:00', '2022-03-29 00:00:00'),
(2, 'Management', '2022-03-02 00:00:00', '2022-03-02 00:00:00'),
(3, 'IT', '2022-03-24 00:00:00', '2022-03-24 00:00:00'),
(4, 'HR', '2022-03-31 00:00:00', '2022-03-31 00:00:00'),
(24, 'Operations', '2022-04-06 00:00:00', '2022-04-06 00:00:00'),
(25, 'Finance&HR', '2022-04-06 00:00:00', '2022-04-06 00:00:00'),
(32, 'Maintanence', '2022-04-19 00:00:00', '2022-04-19 00:00:00');

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
(1, 12, 13, 'Okay', '2022-03-02 00:00:00'),
(2, 15, 16, 'Issue pending', '2022-03-17 00:00:00'),
(3, 17, 18, 'Problem Solved', '2022-03-26 00:00:00'),
(4, 19, 20, 'Okay Done', '2022-03-25 00:00:00'),
(5, 142, 1, 'Hello', '2022-04-26 00:00:00'),
(6, 146, 1, 'Hello', '2022-04-26 00:00:00'),
(7, 147, 1, 'has created ticket successfully', '2022-04-26 00:00:00'),
(8, 148, 1, 'Dhwani Sanghvi', '2022-04-26 00:00:00'),
(9, 149, 1, 'Dhwani Sanghvi', '2022-04-26 00:00:00'),
(21, 1130, 1, 'Dhwani Sanghvihas created successfully', '2022-04-26 00:00:00'),
(22, 1230, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-26 00:00:00'),
(23, 188, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(24, 1889, 1, 'Dhwani Sanghvihas updated ticket successfully', '2022-04-27 00:00:00'),
(25, 1902, 1, 'undefinedhas updated ticket successfully', '2022-04-27 00:00:00'),
(26, 8908, 2, 'undefinedhas updated ticket successfully', '2022-04-27 00:00:00'),
(27, 909, 2, 'Aesha Shah has created ticket successfully', '2022-04-27 00:00:00'),
(28, 12478, 2, 'Aesha Shah has created ticket successfully', '2022-04-27 00:00:00'),
(29, 124699, 1, 'undefinedhas updated ticket successfully', '2022-04-27 00:00:00'),
(30, 1246890, 1, 'undefinedhas updated ticket successfully', '2022-04-27 00:00:00'),
(31, 124645, 1, 'Dhwani Sanghvihas updated ticket successfully', '2022-04-27 00:00:00'),
(32, 1246489, 2, 'Aesha Shahhas updated ticket successfully', '2022-04-27 00:00:00'),
(33, 1246678, 2, 'Aesha Shahhas updated ticket successfully', '2022-04-27 00:00:00'),
(34, 4567, 2, 'undefinedhas updated ticket successfully', '2022-04-27 00:00:00'),
(35, 456789, 2, 'Aesha Shah has created ticket successfully', '2022-04-27 00:00:00'),
(36, 71, 2, 'Aesha Shah has created ticket successfully', '2022-04-27 00:00:00'),
(37, 1223, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(38, 1223, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(39, 1223, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(40, 12333, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(41, 123, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(42, 123, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(43, 123, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(44, 123432443, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-27 00:00:00'),
(45, 123, 1, 'undefinedhas updated ticket successfully', '2022-04-28 00:00:00'),
(46, 123343546, 1, 'undefinedhas updated ticket successfully', '2022-04-28 00:00:00'),
(47, 777, 1, 'undefinedhas updated ticket successfully', '2022-04-28 12:21:36'),
(48, 136, 1, 'Dhwani Sanghvihas updated ticket successfully', '2022-04-28 12:23:38'),
(49, 133, 1, 'Dhwani Sanghvihas updated ticket successfully', '2022-04-28 12:24:09'),
(50, 122356, 1, 'undefinedhas updated ticket successfully', '2022-04-28 14:03:20'),
(51, 666, 1, 'undefinedhas updated ticket successfully', '2022-04-28 14:14:04'),
(52, 71, 1, 'undefinedhas updated ticket successfully', '2022-04-28 15:45:55'),
(53, 4567999, 1, 'undefinedhas updated ticket successfully', '2022-04-28 15:48:29'),
(54, 45679008, 1, 'undefinedhas updated ticket successfully', '2022-04-28 15:49:47'),
(55, 4545, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-28 15:54:49'),
(56, 45454545, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-28 15:56:00'),
(57, 11111111, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-28 15:57:49'),
(58, 111111999, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-28 15:58:49'),
(59, 42, 1, 'Dhwani Sanghvihas updated ticket successfully', '2022-04-28 16:58:40'),
(60, 42, 2, 'Aesha Shahhas updated ticket successfully', '2022-04-28 16:59:53'),
(61, 90909, 2, 'undefinedhas updated ticket successfully', '2022-04-28 17:01:42'),
(62, 39, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-29 10:05:19'),
(63, 39, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-29 14:27:43'),
(64, 989800, 1, 'Dhwani Sanghvi has created ticket successfully', '2022-04-29 18:27:04'),
(65, 39, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:40:24'),
(66, 80, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:46:27'),
(67, 456789, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:46:58'),
(68, 82, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:47:53'),
(69, 82, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:48:29'),
(70, 82, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:49:03'),
(71, 82, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:49:36'),
(72, 39, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:55:58'),
(73, 77, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:56:41'),
(74, 68, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 16:57:23'),
(75, 121212, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 17:41:17'),
(76, 121212, 3, 'Drashti Manvar has created ticket successfully', '2022-05-02 17:41:46');

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` int(20) NOT NULL,
  `otp` int(40) NOT NULL,
  `token` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(20) NOT NULL,
  `otp_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `otp`, `token`, `user_id`, `otp_type`, `created_at`) VALUES
(1, 193, '4jkgRWavETVHp9dHmEfG', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(2, 100, 'an2RsaLpLWmsmsVRws8M', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(3, 5905, 'MK0YmG9IxnAauBhGeiir', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(4, 7889, 'r7x9PPqrdBz8tGDCjJ2Q', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(5, 3895, 'kJ4J0vk0cNpahm1uDCUE', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(6, 1426, '7zn7xrFiRKgGu3npaaFX', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(7, 8833, 'jVUVmMyxfcCPNIk0yITe', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(8, 2614, 'z2E3f7HbGNfysQwUCTg5', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(9, 2938, 'gxQobvXlPEy4NhKBNdhl', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(10, 6580, 'pztO1y9geHGOQqF9gkSG', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(11, 7052, 'mUfFQUmsgYz81jg33pJL', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(12, 4921, 'PFsvnDwt11ZhWy5cEoYy', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(13, 8024, 'MXn20sr1B4eMP3ZwnK1j', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(14, 54, 'h7OIKNiqRdspUPgOzpmR', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(15, 986, '31Kg9SWW8Lqg2VjU5L12', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(16, 6007, 'sAgxCyLXALuzChrKSc32', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(17, 37, 'ZHvUqUobRVRgrdgPxWNW', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(18, 6205, '2X5QThgWhgFPvlYgOigs', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(19, 3922, 'SU1hKp8uEXgn668nVkI8', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(20, 2989, 'DoZbDtvzTXOAKtZvVYoc', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(21, 3713, 'T9p50jQYZIL7lm6b1bZs', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(22, 908, 'd8y2A5p3PFmAefy86nYD', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(23, 9937, 'asDUiyfbGUMDZcY3qHsI', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(24, 2299, 'ZnGnqWeTdwJUHvLO99Xc', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(25, 1836, 'LCo2rmFqM2lIbmN7X1og', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(26, 3631, 'yqyWMNufWGdEUPzylS43', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(27, 4294, 'ZRqECagjCSftPRQ3s2oJ', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(28, 4042, 'JWGnwhd2bbBeDAvPmdSP', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(29, 1799, 'WePqv1leOcYIzz0Q0e52', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(30, 171, 'KV3pJ1LOiIVKIOW4dmpx', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(31, 1214, '7mFBjfTp1paELnY24sRg', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(32, 499, 'zjALCYZ0dQpZQadoDcUX', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(33, 1755, '8rDFpnQrTVx88unhJw62', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(34, 5252, 'ybSIob66V2w1lQtpomzm', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(35, 3790, 'lR7CAaIPIpoIR2JJUpZ0', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(36, 3956, 'bEVYr2gpPHbnUmTCIcu2', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(37, 7011, 'QAao4V9GQHQy8jz2yPFJ', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(38, 8361, 'SJ1k7gybqCCgBSuUNQQj', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(39, 8967, '6OiwchId5FDw1pFX0lWG', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(40, 8334, 'GCZjq9yVmtdRN3pHKHFc', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(41, 4908, 'WjiAAVDRRfkcVtBTgXC0', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(42, 635, 'YkW7V8zW0I2TgUMPyO7Q', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(43, 5036, 'PX0gfY5bcfH8yHIuaYyt', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(44, 3336, 'iWsdn7PiXjDGYhgkzwS6', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(45, 1712, 'puPsqS2GSiyh07GI40b2', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(46, 6273, '7FtKcPxIdRM8zgkvz4aI', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(47, 6430, '86TA5EG7m3IMpXcovxcc', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(48, 9124, 'T4FTGCcTM82k2CfbVgE0', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(49, 418, 'U2fAIDyQ9a2yF4JLgqnt', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(50, 7244, 'YoheFi2bGC8xe7WT1MNL', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(51, 3817, 'mtP9guv2CCqfysHbSuVq', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(52, 2801, '5TcPeW3hgbMKrQl1CSQT', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(53, 450, 'dNvuLfqjDyU0G60xrZaG', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(54, 1431, 'KJcStwSF8VzQEEiqBuT0', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(55, 8891, 'pXXoC7u9pqvGdlgXbFdA', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(56, 2781, 'tU0CYkM6RqiecPN4Oila', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(57, 3477, 'iZZLPfnauPJJxI2KY9Kk', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(58, 1600, 'ZnvZHuFwtALLsfP0OBoW', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(59, 2794, 'vWZHfdaEFOfhZ3Nfjp2i', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(60, 5263, 'xLTAdgpJZ6I7Lm8lRxg7', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(61, 3969, 'xlcdUIskKPFiz5EXC4gD', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(62, 5346, '7EGnx0kiazcHlE9tFAJE', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(63, 8438, 'LwAcvhVMBsBfMcR9GDXU', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(64, 230, 'RE1POuOS5fyeRb4PjitF', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(65, 8286, 'mSOD3xZpqPUakhIryvvn', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(66, 1465, 'wKlMoXm2M6H7xSluKtN4', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(67, 3757, 'anJF2LYrlCtl96KwEkf6', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(68, 122, 'CnKD2Y1STKMkAgBPvXpj', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(69, 3768, 'SA4yM0pC7qhkhw2ixmac', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(70, 6167, 'yxcXBvquoqVvE6zT9mXF', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(71, 9531, 'cXWrYu0w4Vi7UZgkN3Xb', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(72, 7822, '6741fSNnR6rW0HAUQQ9k', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(73, 775, 'NldYZan9oWbMweuYwYpW', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(74, 1998, 'wc2bII5sPtjEWKtTYMB8', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(75, 7799, 'LCbtijGwThRccASxA64A', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(76, 1480, 'jLdnvlmK5R7d38Oy3yli', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(77, 1999, 'hFA9i1nh4PdyIeEbvdZS', 1, 'forgot password', '2011-03-13 02:53:50.000000'),
(78, 6092, 'Ue0Hq8s4Ewhv9Wdom10L', 2, 'forgot password', '2011-03-13 02:53:50.000000'),
(79, 6058, 'CcWw5IGiMaI8yOCwebx4', 1, 'forgot password', '2011-03-13 02:53:50.000000');

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
  `last_changed` datetime NOT NULL,
  `status` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `user_id`, `created_by`, `ticket_id`, `category_id`, `subcategory_id`, `title_id`, `description`, `department_id`, `last_changed`, `status`, `created_at`, `updated_at`) VALUES
(36, 2, 'Admin', 1246678, 2, 127, 129, 'Call Disconnects abruptly', 25, '2022-04-25 00:00:00', '0', '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(39, 1, 'Admin', 129, 2, 127, 129, 'Please check the cable connection', 24, '2022-04-25 00:00:00', '0', '2022-04-25 00:00:00', '2022-04-25 00:00:00'),
(43, 1, 'Admin', 133, 2, 127, 129, 'Need new Connection', 32, '2022-04-26 00:00:00', '0', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(44, 1, 'Admin', 10, 20, 12, 333, 'Driver issues', 32, '2022-04-26 00:00:00', '2', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(45, 1, 'Admin', 136, 108, 109, 118, 'calling services', 3, '2022-04-26 00:00:00', '1', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(47, 1, 'Admin', 140, 2, 127, 129, 'Need proper Connection', 32, '2022-04-26 00:00:00', '0', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(48, 1, 'Admin', 141, 110, 126, 130, 'need new cable', 25, '2022-04-26 00:00:00', '2', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(49, 1, 'Admin', 142, 110, 126, 130, 'Change wires', 24, '2022-04-26 00:00:00', '1', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(50, 1, 'Admin', 146, 1, 3, 117, 'Improve network', 25, '2022-04-26 00:00:00', '0', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(51, 1, 'Admin', 147, 114, 116, 120, 'Need service for settop box', 4, '2022-04-26 00:00:00', '1', '2022-04-26 00:00:00', '2022-04-26 00:00:00'),
(68, 1, 'Admin', 1902, 108, 109, 118, 'Caller Disconnect', 25, '2022-04-27 00:00:00', '0', '2022-04-27 00:00:00', '2022-04-27 00:00:00'),
(70, 2, 'Admin', 909, 108, 115, 119, 'Vodafone', 24, '2022-04-27 00:00:00', '2', '2022-04-27 00:00:00', '2022-04-27 00:00:00'),
(71, 1, 'Admin', 45679008, 108, 115, 119, 'GTPL Conneciton', 32, '2022-04-27 00:00:00', '0', '2022-04-27 00:00:00', '2022-04-27 00:00:00'),
(73, 1, 'Admin', 777, 2, 127, 129, 'description', 25, '2022-04-28 12:21:36', '0', '2022-04-28 12:21:36', '2022-04-28 12:21:36'),
(77, 1, 'Admin', 45454545, 110, 126, 130, 'Broadband Connection ', 25, '2022-04-28 15:54:49', '1', '2022-04-28 15:54:49', '2022-04-28 15:54:49'),
(79, 2, 'Admin', 90909, 108, 115, 119, 'not working pl. check', 32, '2022-04-28 17:01:42', '2', '2022-04-28 17:01:42', '2022-04-28 17:01:42'),
(80, 2, 'Admin', 4664, 2, 127, 129, 'Work ', 32, '2022-04-28 17:18:40', '1', '2022-04-28 17:18:40', '2022-04-28 17:18:40'),
(81, 1, 'Admin', 989800, 110, 126, 135, 'Please check Connection', 32, '2022-04-29 18:27:04', '0', '2022-04-29 18:27:04', '2022-04-29 18:27:04'),
(82, 3, 'Admin', 456789, 2, 127, 135, 'Desc', 25, '2022-05-02 16:46:58', 'Active', '2022-05-02 16:46:58', '2022-05-02 16:46:58'),
(83, 3, 'Admin', 121212, 114, 116, 120, 'Descrip', 4, '2022-05-02 17:41:16', '0', '2022-05-02 17:41:16', '2022-05-02 17:41:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `role_id` int(10) NOT NULL,
  `full_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `resetToken` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `full_name`, `email`, `password`, `resetToken`, `created_at`, `updated_at`) VALUES
(1, 1, 'Dhwani Sanghvi', 'dhwani.sanghvi@volansys.com', '$2b$10$zkEvO42kITdV7Nr1kQhEGOTyMLV8WYvPzgeYVJwylynE2BHIVol7W', '5843', '2022-04-21 00:00:00', '2022-04-28 00:00:00'),
(2, 0, 'Aesha Shah', 'aesha.shah@volansys.com', 'aesha123', '0', '2022-04-25 00:00:00', '2022-04-27 00:00:00'),
(3, 1, 'Drashti Manvar', 'drashti@123', 'drashti123', '0', '2022-04-29 00:00:00', '2022-04-30 00:00:00'),
(4, 1, 'Unnati Shah', 'unnati@123', 'unnati123', '0', '2022-04-14 00:00:00', '2022-04-22 00:00:00');

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
-- Indexes for table `otps`
--
ALTER TABLE `otps`
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
