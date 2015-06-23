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
        $nodePath   = "modules/$moduleName/active";
        $outputPath = "advanced/modules_disable_output/$moduleName";
        $is_active  = Mage::helper('core/data')->isModuleEnabled($moduleName) ? 'true' : 'false';

        Mage::getConfig()->setNode($nodePath, $is_active, true);
        echo Mage::app()->getStore()->getConfig($outputPath);
    }
}