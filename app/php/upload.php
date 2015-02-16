<?php
/*
 * jQuery File Upload Plugin PHP Example 5.14
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

require('UploadHandler/UploadHandler.php');
$upload_handler = new UploadHandler(
    array(
    'upload_dir' => dirname($this->get_server_var('SCRIPT_FILENAME')).'/../files/',
    'upload_url' => $this->get_full_url().'/../files/'
),
    true,
    null
);
