-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 24, 2022 at 02:21 PM
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
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `name`, `is_subcategory`, `created_at`, `updated_at`) VALUES
(3, 2, 'wifi problem', 1, '2022-05-05 11:16:28.000000', '2022-05-05 11:16:34.000000'),
(7, 1, 'aesha', 1, '2022-05-06 11:16:37.000000', '2022-05-06 11:16:39.000000'),
(37, 1, 'aesha', 0, '2022-05-02 11:16:41.000000', '2022-05-02 00:00:00.000000'),
(43, 5, '123', 1, '2022-05-04 11:16:47.000000', '2022-05-04 11:16:49.000000'),
(49, 5, 'wifi', 1, '2022-05-06 11:16:52.000000', '2022-05-06 11:16:55.000000'),
(51, 50, 'jio plan', 1, '2022-05-06 11:17:01.000000', '2022-05-06 11:17:03.000000'),
(77, 38, 'FDSGFDS', 1, '2022-05-04 11:17:06.000000', '2022-05-04 11:17:08.000000'),
(78, 38, 'FDSGFDS', 1, '2022-05-06 00:00:00.000000', '1900-01-06 00:00:00.000000'),
(79, 0, 'call services', 0, '2022-05-06 11:17:14.000000', '2022-05-06 11:17:17.000000'),
(80, 0, 'network', 0, '2022-05-06 11:17:19.000000', '2022-05-06 11:17:22.000000'),
(81, 0, 'aesha', 0, '2022-05-06 11:17:24.000000', '2022-05-06 00:00:00.000000'),
(82, 79, 'wifi problem', 1, '2022-05-06 11:17:29.000000', '2022-05-06 11:17:31.000000'),
(83, 80, 'Recharge problem', 1, '2022-05-06 11:17:34.000000', '2022-05-06 11:17:36.000000'),
(84, 82, 'jio plan', 0, '2022-05-06 11:17:38.000000', '2022-05-06 11:17:41.000000'),
(85, 83, 'idea plan', 0, '2022-05-06 11:17:43.000000', '2022-05-06 11:17:45.000000');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) NOT NULL,
  `ticket_id` int(10) NOT NULL,
  `user_id` int(6) NOT NULL,
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `ticket_id`, `user_id`, `message`, `created_at`) VALUES
(1, 1, 1, 'wifi problem', '2022-04-20 00:00:00'),
(2, 2, 2, 'caller problem', '2022-04-20 00:00:00'),
(3, 5, 5, 'hello 11.42', '2022-04-22 00:00:00'),
(5, 5, 18, '123', '2022-04-29 17:42:38'),
(6, 5, 18, 'good evening', '2022-04-29 18:21:07'),
(7, 5, 12, 'hello', '2022-04-29 18:22:45'),
(8, 7, 12, 'test', '2022-04-29 18:24:08'),
(9, 5, 18, 'test', '2022-05-03 15:35:15'),
(17, 19, 18, 'test', '2022-05-04 14:13:58'),
(18, 20, 18, 'test', '2022-05-06 11:43:04');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(10) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`) VALUES
(43, 'Finance managment', '2022-05-06 11:10:51.000000', '2022-05-06 11:11:03.000000'),
(44, 'managment department', '2022-05-06 11:10:58.000000', '2022-05-06 11:11:06.000000'),
(45, 'computer', '2022-05-06 11:11:01.000000', '2022-05-06 11:11:09.000000');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(10) NOT NULL,
  `user_id` int(20) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `contact` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ticket_id` int(11) NOT NULL,
  `feedback` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `mark` int(20) NOT NULL,
  `rating` int(20) NOT NULL,
  `created_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `user_id`, `name`, `contact`, `ticket_id`, `feedback`, `mark`, `rating`, `created_at`) VALUES
(1, 1, 'Naina Shah', '1256562112', 120, 'Really liked your application thankyou for helping', 0, 80, '2022-05-20 10:34:45.000000'),
(2, 1, 'Dhwani', '9925992577', 199, 'thank you', 1, 60, '2022-05-20 10:36:33.000000'),
(3, 1, 'Disha', '8877668798', 188, 'good', 1, 80, '2022-05-20 10:37:28.000000');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(10) NOT NULL,
  `ticket_id` int(10) NOT NULL,
  `user_id` int(6) NOT NULL,
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `histories`
--

INSERT INTO `histories` (`id`, `ticket_id`, `user_id`, `message`, `created_at`) VALUES
(1, 1, 1, 'good morning', '2022-03-29 00:00:00'),
(3, 5, 5, 'good afternoon', '2022-04-22 00:00:00'),
(4, 2, 2, 'hello user', '2022-03-29 00:00:00'),
(6, 4, 4, 'hi', '2022-04-22 00:00:00'),
(7, 12345, 18, 'undefinedhas updated ticket successfully', '2022-04-28 00:00:00'),
(8, 1234567, 18, 'null has created ticket successfully', '2022-04-28 11:50:47'),
(9, 123, 18, 'null has created ticket successfully', '2022-04-28 11:54:04'),
(10, 123456, 18, 'null has created ticket successfully', '2022-04-28 12:45:28'),
(11, 12345456, 18, 'ayush has created ticket successfully', '2022-05-02 15:15:18'),
(12, 123456789, 18, 'ayush has created ticket successfully', '2022-05-02 16:01:56'),
(13, 12345678, 18, 'ayush has created ticket successfully', '2022-05-02 16:27:37'),
(14, 156243547, 18, 'ayush has created ticket successfully', '2022-05-02 16:33:01'),
(15, 156243547, 18, 'ayush has created ticket successfully', '2022-05-02 16:36:42'),
(16, 156243547, 18, 'ayush has created ticket successfully', '2022-05-02 16:36:58'),
(17, 156243547, 18, 'ayush has created ticket successfully', '2022-05-02 16:37:52'),
(18, 156243548, 18, 'ayush has created ticket successfully', '2022-05-02 16:38:10'),
(19, 156243548, 18, 'ayush has created ticket successfully', '2022-05-02 16:38:33'),
(20, 1234567, 18, 'ayush has created ticket successfully', '2022-05-02 16:38:59'),
(21, 435, 18, 'ayush has created ticket successfully', '2022-05-02 17:34:01'),
(22, 345, 18, 'ayush has created ticket successfully', '2022-05-02 17:54:02'),
(23, 12345679, 18, 'ayush has created ticket successfully', '2022-05-03 09:28:54'),
(24, 123456789, 18, 'ayush has created ticket successfully', '2022-05-03 10:14:58'),
(25, 1234567890, 18, 'ayush has created ticket successfully', '2022-05-03 10:16:22'),
(26, 1234578987, 18, 'null has created ticket successfully', '2022-05-03 16:43:28'),
(27, 123445, 18, 'ayush has created ticket successfully', '2022-05-06 11:42:34'),
(28, 123445, 18, 'ayush has created ticket successfully', '2022-05-10 15:08:07'),
(29, 20, 113, 'pooja has changed the status to reopen', '2022-05-20 10:40:01');

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` int(10) NOT NULL,
  `otp` int(4) NOT NULL,
  `token` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(6) NOT NULL,
  `otp_type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `expirein` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `otp`, `token`, `user_id`, `otp_type`, `created_at`, `expirein`) VALUES
(2, 8888, 'bfFggUyFjthQXpm6wKhZ', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(3, 1961, 'vkVcRg98JO11ycZVm2GQ', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(4, 8283, 'HIz8oDOzMSaANgT6djQ9', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(5, 7431, '8h8LlqIELptd0uROqkGz', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(6, 9470, 'tZraKuARy3YNcp4M8q7j', 113, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(7, 9520, 'M3pHuXJwe0UzlqMh6kHk', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(8, 7711, 'i6o7RzsP4yWzi1JtM1rA', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(9, 6070, 'q7GSr1ZpS35wGAw51FAt', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(10, 7865, 'cfJX45AetCYpmitDwkp2', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(11, 2626, 'Y8ZUSm2DX0yfdB1Pd2YR', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(12, 1794, 'krayrZdCQMu3t3m56OKR', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(13, 2818, 'k0GUDsgZbks5ClX8vTAj', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(14, 4603, 'igp7KjX3dmHZhfPaBmCe', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(15, 7085, '1TYWLV2I9hI9mcaOA6vw', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(16, 501, 'x8wwhUJIDOdQevq61iZR', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(17, 1061, 'OXGKr6sMdmNS5xD8V0Ha', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(18, 1596, 'zGIyYEVNtDNtLmHLIFIz', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(19, 3518, 'vCKDBSHZbHpJK0VC8N9c', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(20, 740, 'eZQyOjHu0Y6F6IlWeQNY', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(21, 7226, 'UVx4jO3T8piRjdxDIi8N', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(22, 5086, 'TtPS9TFcOaNLeuZI0bIn', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(23, 4773, 'lAKrbKhTLT8x5qXO6VDu', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(24, 9021, '8RSELbh9yGf3LyllNTdI', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(25, 6154, 'ZpDrdnGREWtpR6Yb0GXS', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(26, 4362, 'qrEIPRm4ZHaJFCvkx1lf', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(27, 6137, 'GGFHqrqBeqkjuA6nN4r7', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(28, 2266, 'VUnNRjlhIPPkxtn7dhPT', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(29, 5679, 'PZJIbxsWwss62880lbhx', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(30, 4193, 'PiIfLe0N4sQYU9JepFZP', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(31, 599, 'WaDQnXvhNJzz0eNORJn5', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(32, 220, 'TJxyHepmwasfnBWHmQZE', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(33, 9234, 'mm7SjnXZ94eRYwxNJJEU', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(34, 47, '5kaj9eqIcSIgiGvqF0zg', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(35, 4743, 'y69LVlzNW1jQovo7I2YK', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(36, 9415, '70CNN0Mc2PITEgImTQd0', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(37, 2555, 'f0cZG5AxdwSKuzVqY135', 94, 'forgot password', '2022-05-20 00:00:00.000000', '0'),
(38, 8912, 'mYL1gQIvoQqebE8eS4Sq', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(39, 4144, 'nn9uhvEAQOCcELWw3syU', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(40, 3128, 'JxGelZlzgRDLmek8p9mV', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(41, 9158, 'amx0zuJmhKYlj5CR5mRP', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(42, 9240, 'dj68YzSvJIOcESwCpGS9', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(43, 3276, 'eMc8A6Fb45jAlkVoy4wx', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(44, 7960, 'S4cBa1esXyG3m21ToRfB', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(45, 6448, 'UkQ3azAZzzPEu8HHDk9i', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(46, 7253, '94GazhVT2RHRotfGs5zX', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(47, 6016, 'lddS9mhqfHYxFaM6uqPB', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(48, 642, 'H53Lt7UAKXvcQcIYxKwC', 124, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(49, 1990, 'Jq1lnr0Djq0vD1LsIWTW', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(50, 4584, '3H1RhnwJQMQB7HmP7Kxf', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(51, 833, 'sRxXth6eufoExnsp6g6B', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(52, 4320, 'EGHMFisqxaRxowkYMUE7', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(53, 5877, 'nbNXQtU7LLcISGwzhdzC', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(54, 6608, 'sFeWBOFTAkDR16BjSyIi', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(55, 7698, 'B0TUiSqA8wWHTXRq3Mkz', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(56, 8161, 'cCypvScJHoOUQUtfOPjq', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(57, 5979, 'DoN5gUUsA1H0aKk00LwQ', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(58, 8556, 'N8veKP98FCtL1Wtwge0i', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(59, 8678, 'Bq9V18xVAoAqCivTwd62', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(60, 1186, 'UQPkvxgArAknlTiugLmK', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(61, 8508, 'ZnUvFZb1bwMUK1omXxkS', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(62, 270, 'hVaso0cW4FcACHUACYrL', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(63, 611, 'dfXodsED1Cx5FKPgirBJ', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(64, 1359, 'Adfvlgnz2fQEEusI3Cyg', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(65, 6757, 'CHPAwVbHGYSw3g7RgkUj', 94, 'forgot password', '2022-05-23 00:00:00.000000', '0'),
(66, 9999, '1FDN06W6V1qKJiL8NOpr', 127, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(67, 6537, 'AqDtaro1kHTd55MMC1QT', 127, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(68, 3090, 'gHJBMN0fCm7O1mj9HifK', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(69, 9296, 'Tz9H78vbjAnwBldXBN5J', 124, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(70, 6001, 'OI4HdSTNK1heFLa8CtNo', 124, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(71, 4893, 'yANPWyCT42mXbeC6MDB1', 124, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(72, 4408, 'zOGprm39YNI6s3OD2UgJ', 124, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(73, 7630, 'gNwKdoJBKEwGksSsCq8f', 124, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(74, 4482, 'BtrEfMW5HfhmR886of3T', 124, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(75, 8072, 'rDiWxMbo1iBCeqNQMGO0', 129, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(76, 1426, 'mGJpot7ttw2Pph9OP2B0', 129, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(77, 5268, 'ndix9aYc4FNLgDPm6614', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(78, 1120, 'nQzzAjnMZXi6b3MG06nk', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(79, 2377, 'Gy2LBBe3YsnOCsoRcBZO', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(80, 4579, 'ELRaUUYRAhRKfbKlev69', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(81, 861, 'vTAuBsqzVND07IB3iQAc', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(82, 3619, 'gVyvSCCy71k1PMlG8byM', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(83, 3827, 'ONIVgVtRyy4Q0jWO30ot', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(84, 795, 'uMbPhzWIOBf59zPKydt0', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(85, 3290, 'OVRJadItFQVWxksRkfd5', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(86, 7020, 'c90uRDBj3PMg4C0S8EnW', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(87, 6415, 'xfKg4JuPfiveR6BqwsbS', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(88, 8002, 'SWZWpMtGl0YuGer9pMvA', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(89, 2765, 'kLcpoqSTStKxftJElOJh', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(90, 4898, 'jYjYHScSTSzn1knL9s7p', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(91, 1394, 'DZxjoawnTvq3eIZpD75F', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(92, 4029, 'DeJgy1uSpCRanu7x8QRY', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(93, 4754, '9Yh6w1KEN25iiN7R1dS5', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(94, 9624, 'G5GfdrkXAKWvROaYEXOj', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(95, 4164, 'ALzIT5lLRI8vFY4aQclb', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(96, 3029, 'H7NbcU8SvJjYlzPXUFGO', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(97, 8448, 'AOONpWA8NETm6YoHpX8I', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(98, 7837, 'vzVvEa0L0mxpCaEYN4ze', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(99, 4655, 'aU43XojesmyUVruubmIz', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(100, 3610, 'jlYDuUkxwMuMxiVxjA0C', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(101, 2618, 'GKgi2L1qELMhCuL0JsXX', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(102, 8897, '1WqJCixBfShc9HcIkR2w', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(103, 24, 'ju0Ay62ZRVoxJI2Qcp2O', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(104, 1338, 'n4IayCoSgen7KpB1gsxx', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(105, 9895, 'qdPqvOpDMx0d5CXFynrK', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(106, 1868, 'c7FSIHOyZukG3iLU2khT', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(107, 6668, 'EtRYfvwte259EwAQth8B', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(108, 6312, 'p1zPE7CQId8mS7zc7Lyk', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(109, 2648, 'ZeKI11DQMPLJUiEX6RpW', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(110, 5057, 'ZI0lck9oVBzeT5hhCjyj', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(111, 1273, '4x1kY3bkmYGYlhxDyDqG', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(112, 3641, 'G2w4E4R6zHnQJuXNHFQE', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(113, 6688, 'SV5BR0nyqi010Lss9beT', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(114, 4541, 'Eg8msXvBzfS6B29DfQhc', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(115, 4565, 'jDcoDTjYEdL9CJn0iVRx', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(116, 1664, '2p3ZYsw3dDTnJQrtwp5r', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(117, 8885, 'heuhb5wLnrxSuNgLVPYb', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(118, 2735, 'SLzksJLBepHUIhh7qGXj', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(119, 3225, 'RayI3ZhsCnenY8QjmQKs', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(120, 9787, 'un6kluO880eLa51Prdjv', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(121, 7552, 'apDMWc2zUO6FlUOtm8qw', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(122, 4584, 'u4XC2XYFyozKSMC7SaDH', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(123, 964, 'waimaqMktkFVZ5lvg88s', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(124, 6752, 'yGKevWL0AQs6WtHJnkgx', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(125, 7952, 'lp1Q2kDaQn5xprwA7TVA', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(126, 6668, 'ktnYscjIAfxItuppC29v', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(127, 8750, 'OkyoBe9ynUTCTCpcUruh', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(128, 8529, 'fuUdTElPRWb54GvTQoL5', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(129, 8084, 'mE72QB9jAPzDjfrdan2S', 94, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(130, 9108, 'LqzldpSiBglayGHvicWC', 130, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(131, 268, 'oGOE6omhD9e7shMbcryu', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(132, 4737, 'zFrJNlZlIUFh2WvXWv9b', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(133, 9474, 'BcXofSRwaRY04INivquW', 132, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(134, 624, 'G4hmb2a3ru8vxWANNLBS', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(135, 7029, 'qU6heIm0NZSjrzcWHI2h', 133, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(136, 1569, 'dqcQyNGsjsd1m2MHpMH1', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(137, 2005, 'unARaLJ5A4TvObg8kmT8', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(138, 7422, '0KVk5KGGtmZlUBzpRsCj', 137, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(139, 5040, 'MFrhJbBncDKs6NAHPTjP', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(140, 7880, '0WY3kp5yvtjc48NQCbcR', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(141, 4629, 'oNHM0tqMe7wBcU6hkNaw', 131, 'otp verification', '2022-05-23 00:00:00.000000', '0'),
(142, 1175, 'g8EACsNHatGVw3OHHpBp', 136, 'otp verification', '2022-05-23 00:00:00.000000', '1653308118453'),
(143, 4635, '6bzfjbQww92N62Yxgiv8', 136, 'otp verification', '2022-05-23 00:00:00.000000', '1653308105381'),
(144, 8556, '7ZPbTzCOaFrlxQb8qqde', 136, 'otp verification', '2022-05-23 00:00:00.000000', '1653308383579'),
(145, 7568, 'aFBqZII9pKtXFIyptOTX', 131, 'otp verification', '2022-05-23 00:00:00.000000', '1653308298152'),
(146, 7135, 'flD4v7pIFZjNwnO2oD8o', 131, 'otp verification', '2022-05-23 00:00:00.000000', '1653308365958'),
(147, 5103, '2inbS4oFYOdodz1y5V19', 136, 'otp verification', '2022-05-23 00:00:00.000000', '1653308498178'),
(148, 1413, 'bpEP59HnXL3iLlCIqbrU', 136, 'otp verification', '2022-05-23 00:00:00.000000', '1653308527835'),
(149, 6377, 'j6kdJvBK1I8J8qMmWKWz', 94, 'otp verification', '2022-05-23 00:00:00.000000', '1653308579160'),
(150, 8786, 'VsptcYzZCdyazTC7ZzcK', 138, 'otp verification', '2022-05-23 00:00:00.000000', '1653309288717'),
(151, 7562, 'MKiZH8uqnGhhrfrkRC1g', 138, 'otp verification', '2022-05-23 00:00:00.000000', '1653309483118'),
(152, 3279, 'G49yZ6EOgAp3aBULwRlW', 138, 'otp verification', '2022-05-23 00:00:00.000000', '1653309517740'),
(153, 6324, 'pX3Ggq3AeJcsiGHf0DUq', 138, 'otp verification', '2022-05-23 00:00:00.000000', '1653309636855'),
(154, 4538, 'k5TvJb8DdDa29YFuLQiC', 139, 'otp verification', '2022-05-23 00:00:00.000000', '1653309752631'),
(155, 4442, 'mii0TePNpCBiichzzXWI', 139, 'otp verification', '2022-05-23 00:00:00.000000', '1653309799662'),
(156, 1222, '9AybhPMbnUWyjb70oDDL', 139, 'otp verification', '2022-05-23 00:00:00.000000', '1653310107661'),
(157, 850, 'Z8Hfgs8f3ROi0YBtTtif', 139, 'otp verification', '2022-05-23 00:00:00.000000', '1653310139121'),
(158, 8745, 'tNJOxgtKincoSoDGyQeL', 139, 'otp verification', '2022-05-24 00:00:00.000000', '1653366050224'),
(159, 7357, 'AvNaaaJXjkbcmMjFc4ua', 139, 'otp verification', '2022-05-24 00:00:00.000000', '1653366147127'),
(160, 4, 'XwyY1oobKH1gJeg463c5', 140, 'otp verification', '2022-05-24 00:00:00.000000', '1653366469342'),
(161, 8524, 'w4DwbfgYCMVdcF8JVNty', 141, 'otp verification', '2022-05-24 00:00:00.000000', '1653367602407'),
(162, 9993, 'rmjf5Cm4qhZMTd3m1z7x', 142, 'otp verification', '2022-05-24 00:00:00.000000', '1653367703826'),
(163, 1941, 'aB45W3l2o7vaQ2kJDIiz', 143, 'otp verification', '2022-05-24 00:00:00.000000', '1653367795324'),
(164, 9294, 'aW7lgMpr3yoM5yIDOm0R', 144, 'otp verification', '2022-05-24 00:00:00.000000', '1653367915923'),
(165, 1068, 'PWRAQSDv6Jyx7UhPoAN1', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653368266093'),
(166, 1519, 'b6LK3kEud3N07gkp0JeJ', 146, 'otp verification', '2022-05-24 00:00:00.000000', '1653368413074'),
(167, 2886, '2sNp8TvdW03JqhZ1ZTPb', 94, 'otp verification', '2022-05-24 00:00:00.000000', '1653368590775'),
(168, 1390, 'CXNHJDKe3bNxkBVQCxh2', 94, 'otp verification', '2022-05-24 00:00:00.000000', '1653368648155'),
(169, 3743, 'eXLK8MaGUY7d6atFQv2T', 94, 'otp verification', '2022-05-24 00:00:00.000000', '1653369430652'),
(170, 2233, 'G4FWM7DjE7EZVuTJxJvD', 94, 'otp verification', '2022-05-24 00:00:00.000000', '1653369443178'),
(171, 9668, 'yPQUVlHE3dasNQ08IWG7', 94, 'otp verification', '2022-05-24 00:00:00.000000', '1653369609422'),
(172, 2841, 'GhRcDxLNwTj5ZOATkInr', 145, 'otp verification', '2022-05-24 00:00:00.000000', '600000'),
(173, 3997, 'RxgmxVDk1Zgoyf25dY8r', 145, 'otp verification', '2022-05-24 00:00:00.000000', '600000'),
(174, 3066, 'lHFoXScqhkznOPmYhLXA', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653372017369'),
(175, 2147, 'FwkrC7OkqX5aOX4RbZEx', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653374344157'),
(176, 705, 'j8s1vE8MaLtDciJ58zap', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653374432720'),
(177, 9525, 'CUzm1mQAZ9OEHgIPRBJZ', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653374499829'),
(178, 6560, 'SlDm270KkfMC7qg1PcBF', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653374762616'),
(179, 4930, '0rSZBjmjfSCt3GmhxD0O', 145, 'otp verification', '2022-05-24 00:00:00.000000', '1653374849593'),
(180, 4860, 'gr2RmPIUG0EMw4umjCZL', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653374958294'),
(181, 3204, 'NYYsjPBbbNIprN3mn7MM', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653375748447'),
(182, 2980, 'lBSaeDp7L4veUlZetwAt', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653375752730'),
(183, 1239, 'MetDqUi5uprJyyeverLD', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653376005627'),
(184, 9287, '1IXd4Wki14f9Okb1MsWH', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653376176913'),
(185, 3758, 'TdI1gRxiEfl8YdwkhipW', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653376305803'),
(186, 4021, 'R4wpXz33zcwaifM8766a', 147, 'otp verification', '2022-05-24 00:00:00.000000', '1653376391996'),
(187, 3145, 'Gn0VspJFnMK4AUVgnxs7', 148, 'otp verification', '2022-05-24 00:00:00.000000', '1653376466001'),
(188, 5612, 'CQPLJP1nftCqQ3rZuWQK', 148, 'otp verification', '2022-05-24 00:00:00.000000', '1653378113186'),
(189, 6946, 'wsMd3v51siD5xtYbJ3dD', 148, 'otp verification', '2022-05-24 00:00:00.000000', '1653378119181'),
(190, 9151, 'X35xP976jcgiIko9BTNf', 149, 'otp verification', '2022-05-24 00:00:00.000000', '1653378216096'),
(191, 1750, 'YUPZ5D83Q5TLaLlOLFfQ', 149, 'otp verification', '2022-05-24 00:00:00.000000', '1653378226246'),
(192, 4484, 'J0lQVvWRILBmiwEzAdX7', 149, 'otp verification', '2022-05-24 00:00:00.000000', '1653378249792'),
(193, 2076, 'SiqUNsBGotD1gfevRwNU', 150, 'otp verification', '2022-05-24 00:00:00.000000', '1653378303118'),
(194, 7433, 'lm3qUAQg9szbI7Y45F9D', 150, 'otp verification', '2022-05-24 00:00:00.000000', '1653378310297'),
(195, 2622, '3JgGuZCwzBpORktgYqty', 150, 'otp verification', '2022-05-24 00:00:00.000000', '1653378441663'),
(196, 4266, 'KhNPxim0DjVC3j01OO4s', 150, 'otp verification', '2022-05-24 00:00:00.000000', '1653378523414'),
(197, 1930, 'ogwuUf4WsmfxVqRPsTAL', 150, 'otp verification', '2022-05-24 00:00:00.000000', '1653378593369'),
(198, 7016, 'Vx74omhu0B4FvcjoW2nU', 151, 'otp verification', '2022-05-24 00:00:00.000000', '1653378690706'),
(199, 4593, 'RMYjQ4JiLza3xM0clE46', 152, 'otp verification', '2022-05-24 00:00:00.000000', '1653378791786'),
(200, 9309, 'he5HucuLGcX3Jjj2bODE', 153, 'otp verification', '2022-05-24 00:00:00.000000', '1653378952870'),
(201, 2393, 'eiLeBZkE5R0LCTQP1AA1', 153, 'otp verification', '2022-05-24 00:00:00.000000', '1653379305299'),
(202, 2088, 'j59p5lgM2rKUkWEVJpAH', 153, 'otp verification', '2022-05-24 00:00:00.000000', '1653379316402'),
(203, 8158, 'lCU4pNp5C7Reu3GOMm71', 154, 'otp verification', '2022-05-24 00:00:00.000000', '1653379393325'),
(204, 2094, 'HaydCKtLSrWYOExOswrw', 154, 'otp verification', '2022-05-24 00:00:00.000000', '1653379404401'),
(205, 4802, 'V4ds2oSgyOPM0NrRaGYH', 154, 'otp verification', '2022-05-24 00:00:00.000000', '1653379416141'),
(206, 9640, 'bKbq0Yg55X1iltsxiohK', 155, 'otp verification', '2022-05-24 00:00:00.000000', '1653379490234'),
(207, 4792, 'ylc7RsRBF7gnj6GOKgRH', 156, 'otp verification', '2022-05-24 00:00:00.000000', '1653379600404'),
(208, 3060, 'AHjkDQ88RHR12LWQuC1K', 157, 'otp verification', '2022-05-24 00:00:00.000000', '1653379897253'),
(209, 9194, 'FAcCcBFPmZgX7lsBx4uO', 158, 'otp verification', '2022-05-24 00:00:00.000000', '1653380062132'),
(210, 8262, 'Z7ihevgUMaj3Q6ZVarbw', 158, 'otp verification', '2022-05-24 00:00:00.000000', '1653380279032'),
(211, 938, 'PdvnPlLxkUXBYVV5QS7y', 157, 'otp verification', '2022-05-24 00:00:00.000000', '1653380332279'),
(212, 2537, 'CiuzrddryirR8fU9BO5h', 157, 'otp verification', '2022-05-24 00:00:00.000000', '1653380347582'),
(213, 3103, 'TwxG0hpxjddduccvpG1i', 159, 'otp verification', '2022-05-24 00:00:00.000000', '1653380454733'),
(214, 1021, 'nxYZOwVonI24YBoSshLP', 160, 'otp verification', '2022-05-24 00:00:00.000000', '1653380661041'),
(215, 1022, 'Hymx4b2HNHfTExllf6Yv', 160, 'otp verification', '2022-05-24 00:00:00.000000', '1653381092667'),
(216, 1258, '3sDcXdbIFWo76gRrDISO', 160, 'otp verification', '2022-05-24 00:00:00.000000', '1653381104928'),
(217, 9201, 'k0eHos2k0k13cm9pkupU', 161, 'otp verification', '2022-05-24 00:00:00.000000', '1653381185406'),
(218, 4915, 'OXT8l7AK0mviQ6vQdWez', 162, 'otp verification', '2022-05-24 00:00:00.000000', '1653381293623'),
(219, 323, 'jrojuAhQs7zjEjvvub8B', 162, 'otp verification', '2022-05-24 00:00:00.000000', '1653381780802'),
(220, 9512, 'LDwc2I6gotIDs6DbNwUR', 162, 'otp verification', '2022-05-24 00:00:00.000000', '1653381791363'),
(221, 370, 'h1H9LU5sbevZOmoFyoD2', 162, 'otp verification', '2022-05-24 00:00:00.000000', '1653381832542'),
(222, 3245, 'OghdNiy7TuBPFvPgo0LN', 162, 'otp verification', '2022-05-24 00:00:00.000000', '1653381843431'),
(223, 1392, 'OGtFlM5IfTwKFN34krTQ', 162, 'otp verification', '2022-05-24 00:00:00.000000', '1653381854345'),
(224, 4129, 'NRM0Z30s9D8OjcbcN1qB', 163, 'otp verification', '2022-05-24 00:00:00.000000', '1653381926476'),
(225, 919, 'QUne9NIJQp29zOlhhY01', 163, 'otp verification', '2022-05-24 00:00:00.000000', '1653381988404'),
(226, 1492, 'FGIWI1OIlhjZNkhRJE0d', 163, 'otp verification', '2022-05-24 00:00:00.000000', '1653382014751'),
(227, 6803, '23rwpIpPdiZF3O9o1Bo2', 163, 'otp verification', '2022-05-24 00:00:00.000000', '1653382056252'),
(228, 3844, 'q2jp7ZWixNSj3MthErdh', 163, 'otp verification', '2022-05-24 00:00:00.000000', '1653382119316'),
(229, 5792, 'tSFpN3AaDb1DyviyhoH7', 163, 'otp verification', '2022-05-24 00:00:00.000000', '1653382185835');

-- --------------------------------------------------------

--
-- Table structure for table `s`
--

CREATE TABLE `s` (
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(10) NOT NULL,
  `user_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ticket_id` int(50) NOT NULL,
  `category_id` int(50) NOT NULL,
  `subcategory_id` int(50) NOT NULL,
  `title_id` int(50) NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `department_id` int(50) NOT NULL,
  `last_changed` datetime NOT NULL,
  `status` int(6) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `user_id`, `created_by`, `ticket_id`, `category_id`, `subcategory_id`, `title_id`, `description`, `department_id`, `last_changed`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', 'user', 1212121, 50, 51, 52, 'hello', 3, '2022-03-30 09:45:43', 0, '2022-03-30 00:00:00', '2022-03-30 00:00:00'),
(2, '2', 'admin', 2, 12, 12, 12, 'Good morning', 2, '2022-03-30 09:46:34', 0, '2022-03-30 00:00:00', '2022-03-30 00:00:00'),
(3, '7', 'user', 3, 13, 13, 13, ' problem', 13, '2022-03-30 09:47:21', 0, '2022-03-30 00:00:00', '2022-03-30 00:00:00'),
(4, '8', 'admin', 4, 50, 51, 52, 'server problem', 3, '2022-03-30 09:48:34', 1, '2022-03-30 00:00:00', '2022-03-30 00:00:00'),
(5, '5', 'user', 1213131, 50, 51, 52, 'internet problem', 13, '2022-04-21 17:39:34', 2, '2022-04-21 00:00:00', '2022-04-21 00:00:00'),
(6, '18', 'Admin', 12345, 50, 51, 52, 'wifi not working', 3, '2022-04-28 10:26:38', 0, '2022-04-28 00:00:00', '2022-04-28 00:00:00'),
(7, '18', 'Admin', 1234567, 50, 51, 52, 'not working', 1, '2022-04-28 11:50:47', 1, '2022-04-28 11:50:47', '2022-04-28 11:50:47'),
(8, '18', 'Admin', 123, 2, 3, 41, '123', 3, '2022-04-28 11:54:04', 0, '2022-04-28 11:54:04', '2022-04-28 11:54:04'),
(9, '5', 'Admin', 123456, 50, 51, 52, 'not working', 13, '2022-04-28 12:45:28', 2, '2022-04-28 12:45:28', '2022-04-28 12:45:28'),
(19, '18', 'Admin', 1234578987, 50, 51, 52, 'test', 2, '2022-05-03 16:43:28', 1, '2022-05-03 16:43:28', '2022-05-03 16:43:28'),
(20, '18', 'Admin', 123445, 79, 82, 84, 'test', 44, '2022-05-06 11:42:34', 2, '2022-05-06 11:42:34', '2022-05-06 11:42:34');

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
  `created_at` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `full_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 0, 'Aesha shah', 'aesha.shah@123.com', 'aesha', '', ''),
(6, 0, 'unnati shah', 'unnati.shah@123.com', 'unnati', '', ''),
(8, 1, 'Drashti', 'drashti.123@sh.com', 'drashti', '', ''),
(11, 0, 'mansi', 'mansi@123', 'kinjal123', '2022-03-28 14:19:59.288', '2022-03-28 14:19:59.288'),
(18, 1, 'ayush', 'ayush2123.com', 'ay123', '2022-03-29 15:14:55.575', '2022-03-29 15:14:55.575'),
(19, 1, 'ayush', 'ayush2123.com', 'ay123', '2022-03-29 15:51:23.379', '2022-03-29 15:51:23.379'),
(20, 1, 'ayush', 'ayush2123.com', 'ay123', '2022-03-30 15:50:40.367', '2022-03-30 15:50:40.367'),
(21, 1, 'ayush', 'ayush2123.com', 'ay123', '2022-03-30 15:53:27.608', '2022-03-30 15:53:27.608'),
(69, 1, 'kruti', 'kruti@gmail.com', 'kruti@123', '6/5/2022', '6/5/2022'),
(70, 1, 'keyur', 'keyur123@gmail.com', '1234', '6/5/2022', '6/5/2022'),
(74, 1, 'keyur', 'keyur123@gmail.com', '1234', '6/5/2022', '6/5/2022'),
(86, 1, 'mansi', 'mansi@gmail.com', '12345', '6/5/2022', '6/5/2022'),
(89, 1, 'mansi', 'mansi@gmail.com', '12345', '06-05-2022', '06-05-2022'),
(99, 1, 'priyal', 'priyal@gmail.com', '123', '9/5/2022', '9/5/2022'),
(100, 1, 'maitri', 'maitri@gmail.com', 'M@1', '9/5/2022', '9/5/2022'),
(102, 1, 'dipali', 'dipali@gmail.com', '123', '9/5/2022', '9/5/2022'),
(104, 1, 'komal', 'komal@gmail.com', '123', '9/5/2022', '9/5/2022'),
(105, 1, 'priya', 'priya@gmail.com', '123', '9/5/2022', '9/5/2022'),
(106, 1, 'karan', 'karan@gmail.com', '123', '9/5/2022', '9/5/2022'),
(113, 1, 'pooja', 'pooja@gmail.com', '123', '9/5/2022', '9/5/2022'),
(114, 1, 'djhk', 'kd@gmail.com', '12345', '06-05-2022', '06-05-2022'),
(116, 1, 'rajiv', 'rajiv@gmail.com', '123', '10/5/2022', '10/5/2022'),
(119, 1, 'ayush', 'jdhf@gmail.com', '123', '20/5/2022', '20/5/2022'),
(120, 1, 'rfgdfg', 'gfdhfg@gmaul.com', '123', '20/5/2022', '20/5/2022'),
(121, 1, 'DSDFD', 'DFSDGFD@gmaul.com', '123', '20/5/2022', '20/5/2022'),
(122, 1, 'ffsgfsfdg', 'sdgfd@gmauk.com', '12', '20/5/2022', '20/5/2022'),
(123, 1, 'frtgedryhgt', 'gth@gmail.com', '123', '20/5/2022', '20/5/2022'),
(127, 1, 'Dhwani', 'dhwani.sanghvi@volnasys.com', '123', '23/5/2022', '23/5/2022'),
(128, 1, 'ayushi', 'aayushi.shah@volansys.com', '123', '23/5/2022', '23/5/2022'),
(132, 1, 'devenderd', 'devendra.dabhi@volansys.com', '123', '23/5/2022', '23/5/2022'),
(134, 1, 'xyz', 'xyz@gmail.com', 'kruti@123', '23-05-2022', '23-05-2022'),
(135, 1, 'xy', 'xy@gmail.com', 'kruti@123', '23-05-2022', '23-05-2022'),
(136, 1, 'xym', 'xym@gmail.com', 'kruti@123', '23-05-2022', '23-05-2022'),
(146, 1, 'abhishek', 'abhishek.chauhan@volansys.com', '123', '24/5/2022', '24/5/2022'),
(158, 1, 'tanaz', 'tanazbanu.shekh@volansys.com', '123', '24/5/2022', '24/5/2022'),
(163, 1, 'aeshha', 'aesha.shah@volansys.com', '123', '24/5/2022', '24/5/2022');

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
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=230;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
