
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import axios from 'axios';
import { render } from 'react-dom';

interface VerificationData{
    email: String,
}

const OTPVerification = ({email}: VerificationData) => {

    const [otp, setOtp] = useState('');
    
    const [isVerifying, setIsVerifying] = useState(false);
  
    const { toast } = useToast();

    const handleVerify = async (e: React.FormEvent) =>{
        e.preventDefault();
        setIsVerifying(true);
        axios.post("https://web.sohalbrothers.in/verify",{
            subscriberEmailAddress: email,
            otp: otp ,
        }).then(
          (response)=>{
            console.log(response);
            if(response.data.message == "Verified"){
              setIsVerifying(false);
            }else if(response.data.message == "INCORRECT"){
              setIsVerifying(true);
            }
          },
          (error)=>{
              console.log(error)
            setOtp('');
          });
      }

      return (
        <div className="w-full max-w-md mx-auto" style={{ marginTop: "10px" }}>
        <form onSubmit={handleVerify} className="flex flex-col gap-3">
          <div className="flex-12 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="otp"
              placeholder="Verification Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
              disabled={isVerifying}
            />
          </div>
        
          
          <Button
          type="submit"
          disabled={isVerifying}
          className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-6 min-w-[120px]"
        >
          Verify
        </Button>
          </form>
        </div>

      )
}

export default OTPVerification;