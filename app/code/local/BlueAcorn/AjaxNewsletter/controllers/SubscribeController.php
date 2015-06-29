<?php
class BlueAcorn_AjaxNewsletter_SubscribeController extends Mage_Core_Controller_Front_Action
{
    public function subscribeAction()
    {
        $email = $_GET['email'];

        try{
            Mage::throwException($this->__('Please enter a valid email address.'));
        }
        catch (Mage_Core_Exception $e) {
            $message = $this->__('There was a problem with the subscription: %s', $e->getMessage()));
            $status = "error";
        }



        echo json_encode(array('status' => $status, 'message' => '<ul><li>' . $message . '</li></ul>'));
    }
}