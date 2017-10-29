<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Luditales
 * @since Luditales 1.0
 */

get_header();

get_template_part('partials/banner');

get_template_part('partials/project');

get_template_part('partials/story');

get_template_part('partials/philosophy');

get_template_part('partials/team');

get_template_part('partials/contact');

?>
<?php get_footer(); ?>
