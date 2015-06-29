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
            $status = "error";
        }
        else
        {
            $newsletter = Mage::getModel('newsletter/subscriber');

            if ($newsletter->loadByEmail($email)->getId())  // Check if email is already in the subscriber table
            {
                $message = "The email '{$email}' is already subscribed to our newsletter.";
                $status = "error";
            }
            else
            {
                try {
                    $newsletter->subscribe($email);
                    $message = "Thank you for subscribing.";
                    $status = "success";
                } catch (Exception $e){
                    $message = $e->getMessage();
                    $status = "error";
                }
            }
        }

        echo json_encode(array('status' => $status, 'message' => '<ul><li>' . $message . '</li></ul>'));
    }
}