<?php

class BlueAcorn_AjaxNewsletter_Model_Observer
{
    public function __construct()
    {

    }

    public function enableDisableAjaxNewsletter(Varien_Event_Observer $observer)
    {
        $this->_toggleModule('BlueAcorn_AjaxNewsletter');


    }

    protected function _toggleModule($moduleName)
    {
        $moduleStatus = Mage::getStoreConfig('ajaxnewsoptions/ajaxsubmit/enabled') ? 'true' : 'false';

        // Set the module itself
        Mage::getConfig()->setNode($nodePath, $moduleStatus, true);


        // Disable its output as well (which was already loaded)
        $outputPath = "advanced/modules_disable_output/$moduleName";
        if (!Mage::getStoreConfig($outputPath)) {
            Mage::app()->getStore()->setConfig($outputPath, true);
        }

    }
}