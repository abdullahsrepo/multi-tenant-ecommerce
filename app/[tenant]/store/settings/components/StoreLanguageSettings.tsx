'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
] as const;

export function StoreLanguageSettings() {
  const [primaryLanguage, setPrimaryLanguage] = useState('en');
  const [enableMultiLanguage, setEnableMultiLanguage] = useState(false);
  const [additionalLanguages, setAdditionalLanguages] = useState<string[]>([]);

  const handleSave = async () => {
    // TODO: Implement save functionality
    console.log('Saving language settings:', {
      primaryLanguage,
      enableMultiLanguage,
      additionalLanguages,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="primaryLanguage">Primary Language</Label>
        <Select value={primaryLanguage} onValueChange={setPrimaryLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Select primary language" />
          </SelectTrigger>
          <SelectContent>
            {SUPPORTED_LANGUAGES.map((language) => (
              <SelectItem key={language.code} value={language.code}>
                {language.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="multiLanguage"
          checked={enableMultiLanguage}
          onCheckedChange={setEnableMultiLanguage}
        />
        <Label htmlFor="multiLanguage">Enable Multi-Language Support</Label>
      </div>

      {enableMultiLanguage && (
        <div className="space-y-2">
          <Label>Additional Languages</Label>
          {SUPPORTED_LANGUAGES.map((language) => (
            language.code !== primaryLanguage && (
              <div key={language.code} className="flex items-center space-x-2">
                <Switch
                  checked={additionalLanguages.includes(language.code)}
                  onCheckedChange={(checked) => {
                    setAdditionalLanguages(prev =>
                      checked
                        ? [...prev, language.code]
                        : prev.filter(l => l !== language.code)
                    );
                  }}
                />
                <Label>{language.name}</Label>
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