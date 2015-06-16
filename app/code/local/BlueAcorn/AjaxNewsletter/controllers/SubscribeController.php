<?php
class BlueAcorn_AjaxNewsletter_SubscribeController extends Mage_Core_Controller_Front_Action
{
    public function subscribeAction()
    {
        $email = $_GET['email'];

        $valid_email = (Zend_Validate::is($email, 'EmailAddress'));

        if (!$valid_email)
        {
            $message = "The email '{$email}' is invalid. Please enter a valid email address.";
        }
        else
        {
            $newsletter = Mage::getModel('newsletter/subscriber');

            if ($newsletter->loadByEmail($email)->getId())
            {
                $message = "The email '{$email}' is already subscribed to our newsletter.";
            }
            else
            {
                try {
                    $newsletter->subscribe($email);
                    $message = "The email '{$email}' has been subscribed to our newsletter.";
                } catch (Exception $e){
                    $message = $e->getMessage();
                }
            }
        }

        echo $message;
    }
}