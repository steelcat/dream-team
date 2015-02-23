<?php
/*
 * Watermark & Download Image PHP Class 0.0.1
 *
 * Apply Watermark to Image & Download It
 *
 * Copyright 2015, Vitaly Shutov
 * https://steelcat.org
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

class Download extends PHPImageWorkshop\ImageWorkshop
{
    public static function imageResult($x,$y) {
        $originalLayer = Download::initFromPath('../files/original.png');
        $watermarkLayer = Download::initFromPath('../files/watermark.jpg');
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
            // заставляем браузер показать окно сохранения файла
            header('Content-Description: File Transfer');
            header('Content-Disposition: attachment; filename=' . basename($file));
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            // читаем файл и отправляем его пользователю
            readfile($file);
        }
    }
}