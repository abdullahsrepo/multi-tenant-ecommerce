'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StoreTheme } from '@/lib/types/store';

export function StoreThemeSettings() {
  const [theme, setTheme] = useState<Partial<StoreTheme>>({
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
    fontFamily: 'Inter',
    logoPosition: 'left',
    navigation: 'top',
    layout: 'modern',
  });

  const handleSave = async () => {
    // TODO: Implement save functionality
    console.log('Saving theme:', theme);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="primaryColor">Primary Color</Label>
          <Input
            id="primaryColor"
            type="color"
            value={theme.primaryColor}
            onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="secondaryColor">Secondary Color</Label>
          <Input
            id="secondaryColor"
            type="color"
            value={theme.secondaryColor}
            onChange={(e) => setTheme({ ...theme, secondaryColor: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="layout">Layout</Label>
        <Select
          value={theme.layout}
          onValueChange={(value: StoreTheme['layout']) => setTheme({ ...theme, layout: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select layout" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="modern">Modern</SelectItem>
            <SelectItem value="classic">Classic</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="navigation">Navigation Style</Label>
        <Select
          value={theme.navigation}
          onValueChange={(value: StoreTheme['navigation']) => setTheme({ ...theme, navigation: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select navigation style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Top Navigation</SelectItem>
            <SelectItem value="side">Side Navigation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleSave} className="w-full">
        Save Changes
      </Button>
    </div>
  );
}