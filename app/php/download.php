<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/CreateDownload/CreateDownload.php');
$downloadimage = new CreateDownload;
$downloadimage ->fileForceDownload('../files/result.jpg');