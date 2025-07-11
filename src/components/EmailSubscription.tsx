
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import axios from 'axios';
import OTPVerfication from './OTPVerfication';



const EmailSubscription = () => {
  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriberName, setSubscriberName] = useState('');
  const [otp, setOtp] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [showToast, setShowToast] = useState(false);
  

  const { toast } = useToast();

  const resetScreen = (statusFromOtpVerificationScreen) => {
    setVerifyOtp(statusFromOtpVerificationScreen);
    setEmail('');
    setPhone('');
    setSubscriberName('');
    
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    axios.post("https://web.sohalbrothers.in/subscribe",{
      subscriberEmailAddress: email,
      subscriberName: subscriberName,
      subscriberPhone: phone,
    })
    .then((response) => {
      if(parseResponse(response)){
        setVerifyOtp(true);
      }else{
        // show validation error messages
        
      }
      return;
    },
    (error) => {
      console.log(error);
      return;
    },
    setIsSubmitting(false)
    );
  };

  

  const parseResponse = (response) =>{
    if(response.data.data.validationMessage){
      return false;
    }
    if(response.data.data.validationMessage == null && response.data.message == "Subscription success."){
      return true;
    }
    if(response.data.message == "Pending verification"){
      setVerifyOtp(true);
      toast({
        title: "We got you already." ,
        description: "Email "+response.data.data.subscriberEmailAddress+" already exists.\n You might have received an OTP for verification.\n If you have lost the OTP then please wait for 24 hours to re-register your email.",
        variant: "destructive",
      });
    }
    if(response.data.message == "already exists."){
    
      toast({
        title: "We got you already." ,
        description: "Email "+response.data.data.subscriberEmailAddress+" already exists.\n You will be notified on the launch date.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
    {!verifyOtp && <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="phone"
            placeholder="Name"
            value={subscriberName}
            onChange={(e) => setSubscriberName(e.target.value)}
            className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
            disabled={isSubmitting}
          />
        </div>
      
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-6 min-w-[120px]"
        >
          Notify Me
        </Button>
      </form>
      <p className="text-white/60 text-sm text-center mt-3">
        Be the first to know when we launch. No spam, unsubscribe anytime.
      </p>
    </div>}
    {verifyOtp && <OTPVerfication email={email} resetScreen={resetScreen}/> }
    </>
  );
};

export default EmailSubscription;
