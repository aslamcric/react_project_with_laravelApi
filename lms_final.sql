-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2025 at 07:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms_final`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(150) DEFAULT NULL,
  `publication` varchar(150) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `isbn` varchar(20) DEFAULT NULL,
  `shelf_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `publication`, `category_id`, `isbn`, `shelf_id`, `created_at`, `updated_at`, `photo`) VALUES
(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Scribner', 2, '9780743273565', 1, '2024-12-05 10:05:08', '2024-12-05 10:05:08', NULL),
(2, 'To Kill a Mockingbird', 'Harper Lee', 'J.B. Lippincott & Co.', 2, '9780061120084', 2, '2024-12-05 09:07:27', '2024-12-05 09:07:27', NULL),
(4, 'Pride and Prejudice', 'Jane Austen', 'T. Egerton', 1, '9780141040349', 4, '2024-12-05 09:07:27', '2024-12-05 09:07:27', NULL),
(22, 'Sonar Bangla', 'Aslam', 'KPL', 0, '12345', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'sonar-bangla.png'),
(28, 'Hi & Hello', 'Salman', 'UPL', 5, '63598', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'hi-hello.jpg'),
(30, 'Hello Cricket', 'Aslam', 'Bangla Prokash', 0, '456', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'hello-cricket.jpg'),
(32, 'Hello Football', 'Razib', 'UPL', 0, '63598', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'hello-football.jpg'),
(33, 'Hello Hokey', 'Razib', 'UPL', 0, '63598', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'hello-hokey.jpg'),
(38, 'Hello update done', 'Salman', 'UPL', 1, '12345', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'hi-hello.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `book_copies`
--

CREATE TABLE `book_copies` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `shelf_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_copies`
--

INSERT INTO `book_copies` (`id`, `book_id`, `shelf_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2024-12-05 09:07:27', '2024-12-05 09:07:27'),
(2, 2, 2, '2024-12-05 09:07:27', '2024-12-05 09:07:27'),
(3, 3, 3, '2024-12-05 09:07:27', '2024-12-05 09:07:27'),
(4, 4, 4, '2024-12-05 09:07:27', '2024-12-05 09:07:27'),
(5, 5, 5, '2024-12-05 09:07:27', '2024-12-05 09:07:27'),
(6, 1, 1, '2024-12-05 09:50:56', '2024-12-05 09:50:56');

-- --------------------------------------------------------

--
-- Table structure for table `book_return`
--

CREATE TABLE `book_return` (
  `id` int(11) NOT NULL,
  `borrow_id` int(11) NOT NULL,
  `reader_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `fine` decimal(10,2) DEFAULT 0.00,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_return`
--

INSERT INTO `book_return` (`id`, `borrow_id`, `reader_id`, `book_id`, `fine`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 0.00, '2024-12-20 10:30:00', '2024-12-23 12:08:44'),
(2, 2, 2, 2, 10.00, '2024-12-21 11:00:00', '2024-12-23 12:08:48'),
(3, 3, 3, 3, 10.00, '2024-12-22 14:15:00', '2024-12-23 12:08:51'),
(4, 4, 4, 4, 0.00, '2024-12-23 09:45:00', '2024-12-23 12:08:55'),
(5, 5, 5, 5, 30.00, '2024-12-23 12:30:00', '2024-12-23 12:08:59');

-- --------------------------------------------------------

--
-- Table structure for table `borrows`
--

CREATE TABLE `borrows` (
  `id` int(11) NOT NULL,
  `reader_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `borrow_date` date NOT NULL,
  `due_date` date NOT NULL,
  `return_date` date DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fine` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrows`
--

INSERT INTO `borrows` (`id`, `reader_id`, `staff_id`, `borrow_date`, `due_date`, `return_date`, `status`, `created_at`, `updated_at`, `fine`) VALUES
(1, 1, 1, '2024-01-10', '2024-01-20', '2024-01-18', 'Returned', '2024-12-09 09:29:34', '2024-12-09 10:43:03', 0),
(2, 2, 2, '2024-02-15', '2024-02-25', '2025-01-27', 'Returned', '2024-12-09 09:29:34', '2025-01-27 11:11:04', 0),
(3, 3, 3, '2024-03-05', '2024-03-15', '2024-03-14', 'Returned', '2024-12-09 09:29:34', '2024-12-09 10:43:03', 0),
(4, 4, 4, '2024-04-01', '2024-04-11', NULL, 'Borrowed', '2024-12-09 09:29:34', '2024-12-09 10:43:03', 0),
(5, 5, 5, '2024-05-20', '2024-05-30', '2024-05-29', 'Returned', '2024-12-09 09:29:34', '2024-12-09 10:43:03', 0),
(33, 6, 1, '2024-12-15', '2024-12-22', '0000-00-00', 'Borrowed', '2024-12-15 01:12:04', '2024-12-15 01:12:04', 0),
(35, 2, 2, '2024-12-18', '2024-12-25', '0000-00-00', 'Returned', '2024-12-18 09:12:08', '2024-12-24 14:07:09', 0),
(36, 2, 3, '2024-12-18', '2024-12-25', '0000-00-00', 'Returned', '2024-12-18 10:12:01', '2024-12-24 14:07:17', 0),
(37, 4, 3, '2024-12-18', '2024-12-25', '0000-00-00', 'Borrowed', '2024-12-18 10:12:13', '2024-12-18 10:12:13', 0),
(38, 2, 2, '2024-12-21', '2024-12-28', '2024-12-24', 'Returned', '2024-12-21 12:12:13', '2024-12-24 14:09:17', 0),
(39, 1, 2, '2024-12-29', '2025-01-05', '2024-12-29', 'Returned', '2024-12-29 11:12:34', '2024-12-29 11:59:01', 0),
(40, 5, 3, '2024-12-29', '2025-01-05', '2024-12-29', 'Returned', '2024-12-29 12:12:28', '2024-12-29 12:01:29', 0),
(41, 2, 4, '2024-12-31', '2025-01-07', '2025-01-25', 'Returned', '2024-12-31 09:12:08', '2025-01-25 12:33:51', 0),
(47, 0, 0, '2025-01-26', '2025-02-02', '0000-00-00', 'Borrowed', '2025-01-26 11:01:15', '2025-01-26 11:01:15', 0),
(48, 5, 1, '2025-01-26', '2025-02-02', '0000-00-00', 'Borrowed', '2025-01-26 11:01:15', '2025-01-26 11:01:15', 0),
(49, 5, 1, '2025-01-26', '2025-02-02', '0000-00-00', 'Borrowed', '2025-01-26 11:01:30', '2025-01-26 11:01:30', 0),
(50, 2, 1, '2025-01-26', '2025-02-02', '2025-01-27', 'Returned', '2025-01-26 11:01:56', '2025-01-27 11:11:08', 0),
(51, 2, 1, '2025-01-26', '2025-02-02', '0000-00-00', 'Borrowed', '2025-01-26 11:01:21', '2025-01-26 11:01:21', 0),
(52, 3, 2, '2025-01-26', '2025-02-02', '2025-01-27', 'Returned', '2025-01-26 11:01:48', '2025-01-27 11:11:32', 0),
(53, 2, 1, '2025-01-26', '2025-02-02', '0000-00-00', 'Borrowed', '2025-01-26 12:01:57', '2025-01-26 12:01:57', 0),
(54, 2, 1, '2025-01-26', '2025-02-02', '2025-01-28', 'Returned', '2025-01-26 12:01:39', '2025-01-28 09:26:44', 0),
(55, 3, 1, '2025-01-27', '2025-02-03', '0000-00-00', 'Borrowed', '2025-01-27 12:01:00', '2025-01-27 12:01:00', 0),
(56, 1, 1, '2025-01-27', '2025-02-03', '0000-00-00', 'Borrowed', '2025-01-27 01:01:41', '2025-01-27 01:01:41', 0),
(57, 1, 1, '2025-01-28', '2025-02-04', '2025-01-28', 'Returned', '2025-01-28 09:01:34', '2025-01-28 09:30:43', 0),
(58, 5, 1, '2025-01-28', '2025-02-04', '2025-01-28', 'Returned', '2025-01-28 09:01:42', '2025-01-28 10:48:13', 0),
(59, 1, 1, '2025-01-28', '2025-02-04', '0000-00-00', 'Borrowed', '2025-01-28 10:01:52', '2025-01-28 10:01:52', 0),
(60, 6, 1, '2025-03-16', '2025-03-23', '0000-00-00', 'Borrowed', '2025-03-16 10:03:31', '2025-03-16 10:03:31', 0),
(61, 4, 2, '2025-03-16', '2025-03-23', '0000-00-00', 'Borrowed', '2025-03-16 11:03:56', '2025-03-16 11:03:56', 0);

-- --------------------------------------------------------

--
-- Table structure for table `borrow_details`
--

CREATE TABLE `borrow_details` (
  `id` int(11) NOT NULL,
  `borrow_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrow_details`
--

INSERT INTO `borrow_details` (`id`, `borrow_id`, `book_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '2024-12-09 09:31:13', '2024-12-09 09:31:13'),
(2, 1, 2, 2, '2024-12-09 09:31:13', '2024-12-09 10:44:15'),
(3, 1, 3, 3, '2024-12-09 09:31:13', '2024-12-09 10:44:15'),
(4, 2, 4, 4, '2024-12-09 09:31:13', '2024-12-09 10:44:15'),
(5, 2, 5, 5, '2024-12-09 09:31:13', '2024-12-09 10:44:15'),
(49, 33, 5, 3, '2024-12-15 01:12:04', '2024-12-15 01:12:04'),
(51, 34, 2, 2, '2024-12-18 09:12:45', '2024-12-18 09:12:45'),
(52, 35, 2, 2, '2024-12-18 09:12:08', '2024-12-18 09:12:08'),
(53, 35, 3, 2, '2024-12-18 09:12:08', '2024-12-18 09:12:08'),
(54, 36, 3, 3, '2024-12-18 10:12:01', '2024-12-18 10:12:01'),
(55, 37, 3, 3, '2024-12-18 10:12:13', '2024-12-18 10:12:13'),
(56, 38, 3, 3, '2024-12-21 12:12:13', '2024-12-21 12:12:13'),
(57, 39, 7, 5, '2024-12-29 11:12:34', '2024-12-29 11:12:34'),
(58, 39, 5, 5, '2024-12-29 11:12:34', '2024-12-29 11:12:34'),
(59, 40, 3, 3, '2024-12-29 12:12:28', '2024-12-29 12:12:28'),
(60, 40, 4, 3, '2024-12-29 12:12:28', '2024-12-29 12:12:28'),
(61, 41, 3, 3, '2024-12-31 09:12:08', '2024-12-31 09:12:08'),
(62, 41, 4, 3, '2024-12-31 09:12:08', '2024-12-31 09:12:08'),
(63, 49, 22, 0, '2025-01-26 11:01:30', '2025-01-26 11:01:30'),
(64, 50, 1, 2, '2025-01-26 11:01:56', '2025-01-26 11:01:56'),
(65, 51, 1, 2, '2025-01-26 11:01:21', '2025-01-26 11:01:21'),
(66, 52, 2, 2, '2025-01-26 11:01:48', '2025-01-26 11:01:48'),
(67, 53, 2, 2, '2025-01-26 12:01:57', '2025-01-26 12:01:57'),
(68, 54, 2, 2, '2025-01-26 12:01:39', '2025-01-26 12:01:39'),
(69, 55, 4, 1, '2025-01-27 12:01:00', '2025-01-27 12:01:00'),
(70, 55, 28, 5, '2025-01-27 12:01:00', '2025-01-27 12:01:00'),
(71, 56, 4, 1, '2025-01-27 01:01:41', '2025-01-27 01:01:41'),
(72, 57, 28, 5, '2025-01-28 09:01:34', '2025-01-28 09:01:34'),
(73, 57, 38, 1, '2025-01-28 09:01:34', '2025-01-28 09:01:34'),
(74, 57, 1, 2, '2025-01-28 09:01:34', '2025-01-28 09:01:34'),
(75, 58, 28, 5, '2025-01-28 09:01:42', '2025-01-28 09:01:42'),
(76, 58, 38, 1, '2025-01-28 09:01:43', '2025-01-28 09:01:43'),
(77, 58, 4, 1, '2025-01-28 09:01:43', '2025-01-28 09:01:43'),
(78, 59, 1, 2, '2025-01-28 10:01:52', '2025-01-28 10:01:52'),
(79, 59, 2, 2, '2025-01-28 10:01:52', '2025-01-28 10:01:52'),
(80, 60, 1, 2, '2025-03-16 10:03:31', '2025-03-16 10:03:31'),
(81, 60, 28, 5, '2025-03-16 10:03:31', '2025-03-16 10:03:31'),
(82, 60, 38, 1, '2025-03-16 10:03:31', '2025-03-16 10:03:31'),
(83, 61, 28, 5, '2025-03-16 11:03:56', '2025-03-16 11:03:56');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Fiction', '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(2, 'Classic', '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(3, 'Science Fiction', '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(4, 'Romance', '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(5, 'Mystery', '2024-12-05 09:07:28', '2024-12-05 09:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `subject`, `message`) VALUES
(1, 'Salman', 'salman@example.com', 'Inquiry about services', 'Hello, I would like to know more about your services.'),
(2, 'Razib', 'razib@example.com', 'Feedback on the website', 'I found your website very helpful. Keep up the good work!'),
(3, 'Ali Khan', 'ali.khan@example.com', 'Partnership Proposal', 'I am interested in discussing a potential partnership opportunity.'),
(4, '', '', '', ''),
(5, 'Salman', 'mdaslamcric@gmial.com', 'Graphic', 'jhgjhgjg'),
(6, '', '', '', ''),
(7, 'Kader', 'sumamcsewp@gmail.com', 'JAVA', 'dgghdhhj'),
(8, '', '', '', ''),
(9, 'Razib', 'rasel@gmail.com', 'PHP', 'kdggkgf'),
(10, '', '', '', ''),
(11, 'Rasel', 'rasel@gmail.com', 'Grap', 'dfgghgh'),
(12, '', '', '', ''),
(13, 'Kader', 'mdaslamcric@gmial.com', 'PH', 'dfgg'),
(14, '', '', '', ''),
(15, 'Rasel', 'mdaslamcric@gmial.com', 'JAVA', 'jjhgfh'),
(16, '', '', '', ''),
(17, 'Kader', 'sumamcsewp@gmail.com', 'JAVA', 'jhgfd'),
(18, '', '', '', ''),
(19, 'Salman', 'mdaslamcric@gmial.com', 'Graphic', 'dgfgf'),
(20, '', '', '', ''),
(21, 'Razib', 'salmanidb61@gmail.com', 'JAVA', 'Ami Sob Pari');

-- --------------------------------------------------------

--
-- Table structure for table `fines`
--

CREATE TABLE `fines` (
  `id` int(11) NOT NULL,
  `reader_id` int(11) NOT NULL,
  `borrow_detail_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `paid_date` date DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fines`
--

INSERT INTO `fines` (`id`, `reader_id`, `borrow_detail_id`, `amount`, `paid_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0.00, NULL, 'No Fine', '2024-12-05 09:07:29', '2024-12-05 09:07:29'),
(2, 2, 2, 50.00, NULL, 'Unpaid', '2024-12-05 09:07:29', '2024-12-05 09:07:29'),
(3, 3, 3, 0.00, NULL, 'No Fine', '2024-12-05 09:07:29', '2024-12-05 09:07:29'),
(4, 4, 4, 20.00, '2024-11-15', 'Paid', '2024-12-05 09:07:29', '2024-12-05 09:07:29'),
(5, 5, 5, 0.00, NULL, 'No Fine', '2024-12-05 09:07:29', '2024-12-05 09:07:29');

-- --------------------------------------------------------

--
-- Table structure for table `readers`
--

CREATE TABLE `readers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `gender` varchar(15) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `membership_start` date DEFAULT NULL,
  `membership_end` date DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `readers`
--

INSERT INTO `readers` (`id`, `name`, `photo`, `email`, `phone`, `gender`, `address`, `date_of_birth`, `membership_start`, `membership_end`, `created_at`, `updated_at`) VALUES
(1, 'Razib', '1.png', 'john.doe@example.com', '01234567890', 'Male', '123 Main Street', '1990-05-15', '2024-01-01', '2025-01-01', '2024-12-17 13:44:10', '2024-12-17 13:44:10'),
(2, 'Salman', '2.jpg', 'jane.smith@example.com', '01876543210', 'Male', '456 Oak Avenue', '1985-07-20', '2024-02-01', '2025-02-01', '2024-12-14 11:50:08', '2024-12-17 09:52:35'),
(3, 'Rasel', '3.png', 'michael.brown@example.com', '01122334455', 'Male', '789 Pine Road', '1992-09-10', '2024-03-01', '2025-03-01', '2024-12-14 11:48:32', '2024-12-17 09:51:17'),
(4, 'Helal', '4.jpg', 'emily.davis@example.com', '01987762655', 'Male', '321 Elm Street', '1988-11-25', '2024-04-01', '2025-04-01', '2024-12-14 11:49:21', '2024-12-17 09:52:02'),
(5, 'Mizan', '5.png', 'chris.wilson@example.com', '01556677889', 'Male', '654 Maple Lane', '1995-02-14', '2024-05-01', '2025-05-01', '2024-12-14 11:48:54', '2024-12-17 09:51:47'),
(6, 'Md. Aslam', '2-png-png.png', 'mdaslamcric@gmail.com', '01763956777', 'Male', 'Dhaka', '1998-01-05', '2024-01-01', '2025-12-31', '2024-12-05 10:11:00', '2024-12-05 10:11:00'),
(8, 'Ashiq Rahman', 'ashiq.png', 'ashiq@gmail.com', '01987654321', 'male', 'Mirpur, Dahaka', '2002-01-28', '2024-06-19', '2025-01-23', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `updated_at`, `created_at`) VALUES
(1, 'Admin', '2024-03-02 04:59:14', '2024-03-01 22:59:14'),
(2, 'Manager', '2024-02-28 12:10:59', '2024-02-28 00:10:59'),
(4, 'Guest', '2024-03-07 10:24:21', '2024-03-06 22:24:21'),
(5, 'Manager', '2024-03-07 12:25:34', '2024-03-07 00:25:34'),
(6, 'Manager', '2024-03-07 12:25:53', '2024-03-07 00:25:53');

-- --------------------------------------------------------

--
-- Table structure for table `shelves`
--

CREATE TABLE `shelves` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `capacity` int(11) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shelves`
--

INSERT INTO `shelves` (`id`, `name`, `location`, `capacity`, `created_at`, `updated_at`) VALUES
(1, 'Shelf A', '1st Floor', 100, '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(2, 'Shelf B', '2nd Floor', 120, '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(3, 'Shelf C', '1st Floor', 90, '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(4, 'Shelf D', '3rd Floor', 110, '2024-12-05 09:07:28', '2024-12-05 09:07:28'),
(5, 'Shelf E', '2nd Floor', 80, '2024-12-05 09:07:28', '2024-12-05 09:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `name`, `role`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'Rakib', 'Librarian', 'alice.johnson@example.com', '9876543210', '2024-12-05 09:07:28', '2024-12-17 10:01:53'),
(2, 'Tamim', 'Assistant Librarian', 'bob.miller@example.com', '1234567890', '2024-12-05 09:07:28', '2024-12-17 10:02:02'),
(3, 'Shakib', 'IT Support', 'cathy.brown@example.com', '1122334455', '2024-12-05 09:07:28', '2024-12-17 10:02:08'),
(4, 'Nazmul', 'Manager', 'daniel.wilson@example.com', '9988776655', '2024-12-05 09:07:28', '2024-12-17 10:02:30'),
(5, 'Rana', 'Cataloger', 'ella.smith@example.com', '5566778899', '2024-12-05 09:14:27', '2024-12-17 10:02:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `role_id` int(10) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `photo` varchar(50) DEFAULT NULL,
  `verify_code` varchar(50) DEFAULT NULL,
  `inactive` tinyint(1) UNSIGNED DEFAULT 0,
  `mobile` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `email_verified_at` datetime DEFAULT NULL,
  `remember_token` varchar(145) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role_id`, `password`, `email`, `full_name`, `created_at`, `photo`, `verify_code`, `inactive`, `mobile`, `updated_at`, `ip`, `email_verified_at`, `remember_token`) VALUES
(127, 'admin', 1, '$2y$10$zeyUFTm0vqQ0uAUS04kl4ubY6.2Y0zQXqcFC70XvD.8Ot5s3Om5PG', 'towhid1@outlook.com', 'Mohammad Towhidul Islam', '2024-04-28 23:28:06', '127.jpg', '45354353', 0, '34324324', '2022-02-15 21:00:46', '192.168.150.29', NULL, NULL),
(192, 'naeem', 2, '$2y$10$BTQzbrLdYG9/hSfLBf7mzOLzDG1kp6E90OaMh9jEWBafyGkG6oAt6', 'naymur@gmail.com', 'Naymur Rahman', '2024-04-03 23:43:27', NULL, NULL, 0, '01800000000', NULL, '192.168.150.25', NULL, NULL),
(194, 'jakaria', 2, '$2y$10$Zyt3rgYgF9vnDBhNRN/8lO1BirJFCCNr3rhTRiI.7W1aVIuriBJiS', 'jkp.jakaria@gmail.com', 'jkp', '2024-04-14 22:53:54', NULL, NULL, 0, '01642527454', NULL, '192.168.150.47', NULL, NULL),
(196, 'Aminur', 2, '$2y$10$u1Wku9Uh61adCVAPm6ToSOp.8EgdXkiXo/DGp3oD.i/8o9I6a/Dai', 'amiur@gmail.com', 'Aminur Rahman', '2024-04-03 23:45:19', NULL, NULL, 0, '01800000000', NULL, '192.168.150.25', NULL, NULL),
(197, 'Tanim', 2, '$2y$10$NcNFqz1p2N76l4NH96f4Y.KTU8s/e.CqZB.lD7lewc4rcBvMstgaK', 'tanim@gmail.com', 'Rifat Ahammed Tanim', '2024-04-03 23:54:06', NULL, NULL, 0, '01900000000', NULL, '192.168.150.34', NULL, NULL),
(199, 'midul', 2, '$2y$10$sUhLutkkEUOUTWY2yWi.C.B55DFNOhUrbfFnrzcKM2FK7xdDF6Rby', 'midul@yahoo.com', 'Midul Islam', '2024-04-03 23:50:50', NULL, NULL, 0, '0198748343', NULL, '192.168.150.5', NULL, NULL),
(200, 'Jabed ', 2, '$2y$10$mgdw/E0HYncsz1wZaxygKerTF9VAfiPMnq4TSLsscA5CVHSih/RbS', 'olba@gmail.com', 'Javed ', '2024-04-03 23:59:27', NULL, NULL, 0, '01869546555', NULL, '192.168.150.22', NULL, NULL),
(201, 'omar', 2, '$2y$10$GnOgIBKPRsNIeM3OJExotuuBjGqzgcYGnfQeZpz4pug/GNqiLCWwS', 'omar@gmail.com', 'Omar Faruk', '2024-04-14 22:57:44', NULL, NULL, 0, '343434', NULL, '192.168.150.11', NULL, NULL),
(204, 'Anni', 2, '$2y$10$JWg5tGwzGUwnFT/PZBT4wuqIKAw3Vb6X7kWs9zC3ueLSi1RMzi87W', 'jannatulneasa464@gmail.com', 'Jannatul Neasa', '2024-04-03 23:54:32', NULL, NULL, 0, '3254436756', NULL, '192.168.150.29', NULL, NULL),
(206, 'mir3', 4, '$2y$10$wYZrszbJ9LIadOof3PRIzuHQNnjAQuTanA.JBmsreow3nJm04hCRW', 'mir@gmail.com', 'Mizanur Rahman ', '2024-05-15 01:36:41', 'mir3.png', NULL, 0, '', '0000-00-00 00:00:00', '::1', '0000-00-00 00:00:00', ''),
(209, 'abc', 1, '$2y$10$M52jied3IiUeo/ke8QU5SO0tS5IrW3T7aXVEL3a7l7/HN/4l98XKO', 'abc@gmail.com', NULL, '2024-05-15 00:29:14', 'abc-gmail-com.jpg', NULL, 0, NULL, '2024-05-15 12:08:29', '::1', '0000-00-00 00:00:00', ''),
(213, 'sium', 2, '$2y$10$Ziq..GqX0z4Lf2H4tE62VOsSDmyq8BUhESIhHu4BEfLKvrJLUszOS', 'sium@gmail.com', NULL, '2024-05-15 01:43:08', 'sium.jpeg', NULL, 0, NULL, '0000-00-00 00:00:00', '192.168.150.18', '0000-00-00 00:00:00', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_copies`
--
ALTER TABLE `book_copies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_return`
--
ALTER TABLE `book_return`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrows`
--
ALTER TABLE `borrows`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrow_details`
--
ALTER TABLE `borrow_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fines`
--
ALTER TABLE `fines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reader_id` (`reader_id`),
  ADD KEY `borrow_detail_id` (`borrow_detail_id`);

--
-- Indexes for table `readers`
--
ALTER TABLE `readers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shelves`
--
ALTER TABLE `shelves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `book_copies`
--
ALTER TABLE `book_copies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `book_return`
--
ALTER TABLE `book_return`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `borrows`
--
ALTER TABLE `borrows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `borrow_details`
--
ALTER TABLE `borrow_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `fines`
--
ALTER TABLE `fines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `readers`
--
ALTER TABLE `readers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `shelves`
--
ALTER TABLE `shelves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=214;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fines`
--
ALTER TABLE `fines`
  ADD CONSTRAINT `fines_ibfk_1` FOREIGN KEY (`reader_id`) REFERENCES `readers` (`id`),
  ADD CONSTRAINT `fines_ibfk_2` FOREIGN KEY (`borrow_detail_id`) REFERENCES `borrow_details` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
