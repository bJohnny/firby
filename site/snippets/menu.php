<div class="nav-container">


    <div class="top-bar-left">
        <ul class="menu">
            <li class="menu-text">
                <?php echo $site->title(); ?>
            </li>
        </ul>
    </div>

    <div class="top-bar-right">
        <ul class="dropdown menu" data-dropdown-menu>
            <?php foreach( $pages->visible() as $p ): ?>
                <li <?php echo ( $p->isOpen() ) ? 'class="active"' : '' ?>><a  href="<?php echo $p->url() ?>">
                        <?php echo html($p->title()) ?></a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>


<hr>
