import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { PrimaryButton } from './PrimaryButton';
import { useLanguage } from '../utils/translations';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log(isLogin ? 'Login' : 'Signup', { email, password, name });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {isLogin ? t('login.title.signin') : t('login.title.signup')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isLogin 
              ? t('login.description.signin')
              : t('login.description.signup')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">{t('login.name')}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t('login.name.placeholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">{t('login.email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('login.email.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t('login.password')}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t('login.password.placeholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <PrimaryButton type="submit" className="w-auto">
              {isLogin ? t('login.button.signin') : t('login.button.signup')}
            </PrimaryButton>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-[#1E88E5] hover:underline"
            >
              {isLogin 
                ? t('login.switch.signup')
                : t('login.switch.signin')}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
