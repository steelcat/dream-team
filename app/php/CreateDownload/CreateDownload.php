<?php
/*
 * Create Result Image & Download Result Image PHP Class 0.0.1
 *
 * Apply Watermark to Image & Download It
 *
 * Copyright 2015, Vitaly Shutov
 * https://steelcat.org
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

class CreateDownload extends PHPImageWorkshop\ImageWorkshop
{
    public static function imageResult($x,$y) {
        $originalLayer = CreateDownload::initFromPath('../files/original.png');
        $watermarkLayer = CreateDownload::initFromPath('../files/watermark.jpg');
        $originalLayer->addLayer(1, $watermarkLayer, $x, $y, "LT");
        $image = $originalLayer->getResult();
        return $image;
    }
    public static function fileForceDownload($file) {
        if (file_exists($file)) {
            // сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
            // если этого не сделать файл будет читаться в память полностью!
            if (ob_get_level()) {
                ob_end_clean();
            }
            $mime = 'application/force-download';
            header('Pragma: public');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Cache-Control: private',false);
            header('Content-Type: '.$mime);
            header('Content-Disposition: attachment; filename="'.basename($file).'"');
            header('Content-Transfer-Encoding: binary');
            header('Connection: close');
            readfile($file);
            exit();
        }
    }
}