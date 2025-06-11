
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as we launch.",
      });
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-center mb-4">
          <Mail className="w-5 h-5 text-primary mr-2" />
          <span className="text-lg font-medium">Get Notified</span>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Notify Me
            </Button>
          </form>
        ) : (
          <div className="text-center py-4">
            <Check className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-green-500 font-medium">Thank you for subscribing!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSignup;
