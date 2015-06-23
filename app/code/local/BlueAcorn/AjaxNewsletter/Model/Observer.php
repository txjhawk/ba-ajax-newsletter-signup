<?php

class BlueAcorn_AjaxNewsletter_Model_Observer
{
    pubic function __construct()
    {

    }

    public function enableDisableAjaxNewsletter(Varien_Event_Observer $observer)
    {
        $event = $observer->getEvent();

        die('observed');


    }
}