<?php

class BlueAcorn_AjaxNewsletter_Model_Observer
{
    public function __construct()
    {

    }

    public function enableDisableAjaxNewsletter(Varien_Event_Observer $observer)
    {
        $moduleName = 'BlueAcorn_AjaxNewsletter';

        $is_active = Mage::helper('core/data')->isModuleEnabled($moduleName) ? 'true' : 'false';
        Mage::getConfig()->setNode($nodePath, $is_active, true);
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