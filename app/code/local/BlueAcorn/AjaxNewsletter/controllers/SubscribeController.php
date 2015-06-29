<?php
class BlueAcorn_AjaxNewsletter_SubscribeController extends Mage_Core_Controller_Front_Action
{
    public function subscribeAction()
    {
        $customerSession    = Mage::getSingleton('customer/session');
        $submittedEmail     = $_GET['email'];

        try{
            // Check if the email is valid
            if (!Zend_Validate::is($submittedEmail, 'EmailAddress'))
            {
                Mage::throwException($this->__('Please enter a valid email address.'));
            }

            // Check if guests are allowed to subscribe to the newsletter (if the user is not logged in)
            if (Mage::getStoreConfig(Mage_Newsletter_Model_Subscriber::XML_PATH_ALLOW_GUEST_SUBSCRIBE_FLAG) != 1 &&
                !$customerSession->isLoggedIn()) {
                Mage::throwException($this->__('Sorry, but administrator denied subscription for guests. Please <a href="%s">register</a>.', Mage::helper('customer')->getRegisterUrl()));
            }

            // Check if the submitted email is already assigned to another user
            $ownerId = Mage::getModel('customer/customer')
                ->setWebsiteId(Mage::app()->getStore()->getWebsiteId())
                ->loadByEmail($submittedEmail)
                ->getId();
            if ($ownerId !== null && $ownerId != $customerSession->getId()) {
                Mage::throwException($this->__('This email address is already assigned to another user.'));
            }

            // Check if email is already in the subscriber table
            $newsletter = Mage::getModel('newsletter/subscriber');
            if ($newsletter->loadByEmail($submittedEmail)->getId())
            {
                Mage::throwException($this->__("The email '{$submittedEmail}' is already subscribed to our newsletter."));
            }

            // If there are no errors with the email, register it for the newsletter
            $status = Mage::getModel('newsletter/subscriber')->subscribe($submittedEmail);
            if ($status == Mage_Newsletter_Model_Subscriber::STATUS_NOT_ACTIVE) {
                $noticeMessage = $this->__('Confirmation request has been sent.');
            }
            else {
                $noticeMessage = $this->__('Thank you for your subscription.');
            }

            $noticeStatus = 'success';

        } catch (Exception $e){
            $noticeMessage = $e->getMessage();
            $noticeStatus = "error";
        }

        // Encode the subscription status and message as JSON and return to the AJAX request for display
        Mage::app()->getResponse()->setBody(json_encode(array('status' => $noticeStatus, 'message' => '<ul><li>' . $noticeMessage . '</li></ul>')));
        return;
    }
}