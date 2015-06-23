<?php

class BlueAcorn_AjaxNewsletter_Model_Observer
{
    public function __construct()
    {

    }

    public function enableDisableAjaxNewsletter(Varien_Event_Observer $observer)
    {
        $enabled = Mage::getStoreConfig('ajaxnewsoptions/ajaxsubmit/enabled');

        if ($enabled == true ) echo "Module is enabled";

        die();
    }
}