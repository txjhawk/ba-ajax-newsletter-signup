<?php

class BlueAcorn_AjaxNewsletter_Model_Observer
{
    public function __construct()
    {

    }

    public function enableDisableAjaxNewsletter(Varien_Event_Observer $observer)
    {
        echo "Value is " . Mage::getStoreConfig('ajaxnewsoptions/ajaxsubmit/enabled');

        die();
    }
}