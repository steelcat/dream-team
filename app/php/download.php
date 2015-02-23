<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/Download/Download.php');
$downloadimage = new Download;
$downloadimage ->fileForceDownload('../files/result.jpg');