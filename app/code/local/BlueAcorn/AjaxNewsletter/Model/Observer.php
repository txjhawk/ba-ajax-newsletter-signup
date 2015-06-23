<?php

class BlueAcorn_AjaxNewsletter_Model_Observer
{
    public function __construct()
    {

    }

    public function enableDisableAjaxNewsletter(Varien_Event_Observer $observer)
    {
        $moduleName = 'BlueAcorn_AjaxNewsletter';

        echo Mage::helper('core/data')->isModuleEnabled($moduleName) ? 'true' : 'false';

        die();
    }

    protected function _disableModule($moduleName)
    {
        // Disable the module itself
        $nodePath = "modules/$moduleName/active";

        if (Mage::helper('core/data')->isModuleEnabled($moduleName))
        {
            Mage::getConfig()->setNode($nodePath, 'false', true);
        }
    }
}