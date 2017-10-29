<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Luditales
 * @since Luditales 1.0
 */
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<title><?php wp_title('|','true','right'); ?><?php bloginfo('name'); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <?php wp_head(); ?>
</head>

<body <?php body_class('is-loading'); ?>>
<div id="page" class="hfeed site">

    <div class="loader js-loader">
      <p class="loader__text">loading . . .</p>
    </div>
    <header class="header">
      <div class="header__inner container">
        <div class="header__left"><h1 class="logo" style="text-indent:9999px;">Luditales<h1></div>
        <div class="header__right menu js-menu">
          <button class="menu__toggler js-menu-toggler">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </button>
          <nav class="menu__items">
            <ul>
              <li class="menu-item"><a href="#accueil">Accueil</a></li>
              <li class="menu-item"><a href="#projet">Notre projet</a></li>
              <li class="menu-item"><a href="#histoire">Notre histoire</a></li>
              <li class="menu-item"><a href="#philosophie">Notre philosophie</a></li>
              <li class="menu-item"><a href="#equipe">Notre équipe</a></li>
              <li class="menu-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="main" role="main">
