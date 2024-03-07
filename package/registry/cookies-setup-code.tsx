// This file is auto-generated. Do not modify manually.

type CookiesCodeRegisteryType = 'authentication-form';

export const COOKIES_SETUP_CODE: Record<
  CookiesCodeRegisteryType,
  { registerAt: string; code: string }
> = {
  'authentication-form': {
    registerAt: 'components/cookies/authentication-form.tsx',
    code: "'use client';\nimport {\n  Card,\n  CardHeader,\n  CardHeaderDescription,\n  CardHeaderTitle,\n  CardContent,\n  CardFooter,\n} from '@/components/ui/card';\nimport { useState } from 'react';\nimport { Input } from '@/components/ui/input';\nimport { Button } from '@/components/ui/button';\n\nexport default function AuthenticationForm() {\n  const [view, setView] = useState<'login' | 'create-account'>('login');\n  return (\n    <Card className=\"authentication-form w-[420px]\">\n      <CardHeader>\n        <CardHeaderTitle>\n          {view === 'login' && 'Log In'}\n          {view === 'create-account' && 'Create new account'}\n        </CardHeaderTitle>\n        <CardHeaderDescription>\n          {view === 'login'\n            ? 'Do not have an account?'\n            : 'Already have an account?'}{' '}\n          <button\n            className=\"text-blue-500 hover:text-blue-600\"\n            onClick={() => {\n              setView(view === 'login' ? 'create-account' : 'login');\n            }}>\n            {view === 'login'\n              ? 'Create new account'\n              : 'Log into existing account'}\n          </button>\n        </CardHeaderDescription>\n      </CardHeader>\n      <CardContent className=\"grid grid-cols-1 gap-4\">\n        {view === 'login' && (\n          <>\n            <Input\n              withLabel=\"Email Address\"\n              labelDirection=\"v\"\n              placeholder=\"ironman@avengers.com\"\n              stretch\n            />\n            <Input\n              withLabel=\"Password\"\n              labelDirection=\"v\"\n              placeholder=\"**********\"\n              stretch\n            />\n          </>\n        )}\n        {view === 'create-account' && (\n          <>\n            <Input\n              withLabel=\"Create username\"\n              labelDirection=\"v\"\n              placeholder=\"@ironman\"\n              stretch\n            />\n            <Input\n              withLabel=\"Your Email Address\"\n              labelDirection=\"v\"\n              placeholder=\"ironman@avengers.com\"\n              stretch\n            />\n            <Input\n              withLabel=\"Create a Password\"\n              labelDirection=\"v\"\n              placeholder=\"**********\"\n              stretch\n            />\n          </>\n        )}\n      </CardContent>\n      <CardFooter>\n        <Button stretch withArrow={view === 'create-account'}>\n          {view === 'login' ? 'Log In' : 'Get Started'}\n        </Button>\n      </CardFooter>\n    </Card>\n  );\n}\n",
  },
};
