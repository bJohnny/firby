<?php
/**
 * Template: the default page template
 */
snippet('header'); ?>
<?php snippet('menu'); ?>

<section class="content">
    <article>
        <h1><?php echo $page->title(); ?></h1>
        <?php echo kirbytext($page->text()); ?>
    </article>
</section>


<?php snippet('footer'); ?>