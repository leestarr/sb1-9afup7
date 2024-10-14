'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// ... (rest of the imports and type definitions)

export default function Submissions() {
  const [submissions, setSubmissions] = useState<RSVPData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/get-rsvps?password=${values.password}`);
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      } else {
        throw new Error('Failed to fetch submissions');
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      alert("Failed to fetch submissions. Please try again."); // Using alert instead of toast
    } finally {
      setIsLoading(false);
    }
  }

  // ... (rest of the component)
}