'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { SUPPORTED_CURRENCIES } from '@/lib/utils/currency';

export function StoreCurrencySettings() {
  const [primaryCurrency, setPrimaryCurrency] = useState('USD');
  const [enableMultiCurrency, setEnableMultiCurrency] = useState(false);
  const [additionalCurrencies, setAdditionalCurrencies] = useState<string[]>([]);

  const handleSave = async () => {
    // TODO: Implement save functionality
    console.log('Saving currency settings:', {
      primaryCurrency,
      enableMultiCurrency,
      additionalCurrencies,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="primaryCurrency">Primary Currency</Label>
        <Select value={primaryCurrency} onValueChange={setPrimaryCurrency}>
          <SelectTrigger>
            <SelectValue placeholder="Select primary currency" />
          </SelectTrigger>
          <SelectContent>
            {SUPPORTED_CURRENCIES.map((currency) => (
              <SelectItem key={currency.code} value={currency.code}>
                {currency.name} ({currency.symbol})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="multiCurrency"
          checked={enableMultiCurrency}
          onCheckedChange={setEnableMultiCurrency}
        />
        <Label htmlFor="multiCurrency">Enable Multi-Currency Support</Label>
      </div>

      {enableMultiCurrency && (
        <div className="space-y-2">
          <Label>Additional Currencies</Label>
          {SUPPORTED_CURRENCIES.map((currency) => (
            currency.code !== primaryCurrency && (
              <div key={currency.code} className="flex items-center space-x-2">
                <Switch
                  checked={additionalCurrencies.includes(currency.code)}
                  onCheckedChange={(checked) => {
                    setAdditionalCurrencies(prev =>
                      checked
                        ? [...prev, currency.code]
                        : prev.filter(c => c !== currency.code)
                    );
                  }}
                />
                <Label>{currency.name} ({currency.symbol})</Label>
              </div>
            )
          ))}
        </div>
      )}

      <Button onClick={handleSave} className="w-full">
        Save Changes
      </Button>
    </div>
  );
}